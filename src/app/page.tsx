'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Sparkles, Volume2, VolumeX, Leaf, ChevronRight, Compass } from 'lucide-react';
import { GKV_COMPANY_INFO, GKV_PROJECTS, GKV_SERVICES, GKV_PROCESS_STEPS, GKV_CLIENT_TYPES } from '@/data/gkvData';
import { useConsultation } from '@/components/ClientLayoutWrapper';

export default function HomePage() {
  const section2Ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress: section2Scroll } = useScroll({
    target: section2Ref,
    offset: ["start end", "center center"]
  });
  
  // Track the entire section visibility for the line animation
  const { scrollYProgress: fullSectionScroll } = useScroll({
    target: section2Ref,
    offset: ["start end", "end start"]
  });

  const lineProgress = useTransform(fullSectionScroll, [0, 1], [0, 1]);
  const imageWidth = useTransform(section2Scroll, [0, 1], ["70%", "100%"]);
  
  const curveDepth = useTransform(section2Scroll, [0, 1], [15, 0]); // 15% to 0%
  const clipPathPolygon = useTransform(curveDepth, (depth) => {
    // Dynamic corner radii that shrink to 0 as the image flattens
    const rX = (depth / 15) * 2; // Max 2% corner radius in X
    const rY = (depth / 15) * 4; // Max 4% corner radius in Y
    
    const points = [];
    
    // Parabola coefficient
    // To avoid division by zero if rX=50, we ensure rX is small.
    const denom = Math.pow(50 - rX, 2) || 1;
    const a = depth / denom;
    
    // Top-left corner (180 to 270 degrees)
    const cxTL = rX;
    const cyTL = depth + rY;
    for (let angle = 180; angle <= 270; angle += 15) {
      const rad = (angle * Math.PI) / 180;
      points.push(`${(cxTL + rX * Math.cos(rad)).toFixed(2)}% ${(cyTL + rY * Math.sin(rad)).toFixed(2)}%`);
    }
    
    // Top edge (parabola)
    for (let x = rX; x <= 100 - rX; x += 1) {
      const y = a * Math.pow(x - 50, 2);
      points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
    }
    
    // Top-right corner (270 to 360 degrees)
    const cxTR = 100 - rX;
    const cyTR = depth + rY;
    for (let angle = 270; angle <= 360; angle += 15) {
      const rad = (angle * Math.PI) / 180;
      points.push(`${(cxTR + rX * Math.cos(rad)).toFixed(2)}% ${(cyTR + rY * Math.sin(rad)).toFixed(2)}%`);
    }
    
    // Bottom-right corner (0 to 90 degrees)
    const cxBR = 100 - rX;
    const cyBR = 100 - depth - rY;
    for (let angle = 0; angle <= 90; angle += 15) {
      const rad = (angle * Math.PI) / 180;
      points.push(`${(cxBR + rX * Math.cos(rad)).toFixed(2)}% ${(cyBR + rY * Math.sin(rad)).toFixed(2)}%`);
    }
    
    // Bottom edge (parabola, right to left)
    for (let x = 100 - rX; x >= rX; x -= 1) {
      const y = 100 - (a * Math.pow(x - 50, 2));
      points.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
    }
    
    // Bottom-left corner (90 to 180 degrees)
    const cxBL = rX;
    const cyBL = 100 - depth - rY;
    for (let angle = 90; angle <= 180; angle += 15) {
      const rad = (angle * Math.PI) / 180;
      points.push(`${(cxBL + rX * Math.cos(rad)).toFixed(2)}% ${(cyBL + rY * Math.sin(rad)).toFixed(2)}%`);
    }
    
    return `polygon(${points.join(', ')})`;
  });

  const { openConsultation } = useConsultation();
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeServiceHover, setActiveServiceHover] = useState<string | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  // Web Audio API nature sound synthesis (gentle forest breeze)
  const toggleNatureAudio = () => {
    if (isPlayingAudio) {
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.setTargetAtTime(0, audioCtxRef.current.currentTime, 0.5);
      }
      setIsPlayingAudio(false);
    } else {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        if (!audioCtxRef.current) {
          const ctx = new AudioContextClass();
          audioCtxRef.current = ctx;

          const bufferSize = ctx.sampleRate * 2;
          const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
          const output = noiseBuffer.getChannelData(0);
          let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
          for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            b0 = 0.99886 * b0 + white * 0.0555179;
            b1 = 0.99332 * b1 + white * 0.0750759;
            b2 = 0.96900 * b2 + white * 0.1538520;
            b3 = 0.86650 * b3 + white * 0.3104856;
            b4 = 0.55000 * b4 + white * 0.5329522;
            b5 = -0.7616 * b5 - white * 0.0168980;
            output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
            output[i] *= 0.03;
            b6 = white * 0.115926;
          }

          const whiteNoise = ctx.createBufferSource();
          whiteNoise.buffer = noiseBuffer;
          whiteNoise.loop = true;

          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.value = 350;

          const gain = ctx.createGain();
          gain.gain.setValueAtTime(0.01, ctx.currentTime);
          gain.gain.setTargetAtTime(0.12, ctx.currentTime, 1);

          whiteNoise.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          whiteNoise.start();
          gainNodeRef.current = gain;
        } else if (gainNodeRef.current && audioCtxRef.current) {
          if (audioCtxRef.current.state === 'suspended') {
            audioCtxRef.current.resume();
          }
          gainNodeRef.current.gain.setTargetAtTime(0.12, audioCtxRef.current.currentTime, 0.5);
        }
        setIsPlayingAudio(true);
      } catch (err) {
        console.log('Audio blocked:', err);
      }
    }
  };

  const featuredProject = GKV_PROJECTS[0];
  const masonryProjects = GKV_PROJECTS;

  return (
    <div className="relative bg-[#0D120F] text-[#F5F2EC] overflow-x-hidden">
      {/* SECTION 1 — PRIMLAND RESIDENCES STYLE ATMOSPHERIC AERIAL HERO (100vh) */}
      <section className="relative w-full h-screen min-h-[800px] flex flex-col justify-center items-center overflow-hidden">
        {/* Background Cinematic Aerial Landscape Video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/assets/brand/hero-section.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
          />
        </div>

        {/* Floating Clouds & Atmospheric Mist Layers */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {/* Top Left Floating Mist */}
          <motion.div
            className="absolute -top-10 -left-10 w-[650px] h-[500px] rounded-full bg-radial from-[#F5F2EC]/20 via-[#F5F2EC]/8 to-transparent blur-3xl"
            animate={{ x: [0, 60, 0], y: [0, 40, 0], opacity: [0.5, 0.85, 0.5] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Bottom Right Floating Mist */}
          <motion.div
            className="absolute -bottom-20 -right-20 w-[750px] h-[550px] rounded-full bg-radial from-[#F5F2EC]/25 via-[#F5F2EC]/10 to-transparent blur-3xl"
            animate={{ x: [0, -70, 0], y: [0, -45, 0], opacity: [0.6, 0.9, 0.6] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Soft Dark Vignette Overlays for Maximum Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D120F]/65 via-[#0D120F]/25 to-[#0D120F]/90" />
          <div className="absolute inset-0 bg-grain pointer-events-none opacity-25" />
        </div>

        {/* Hero Center Editorial Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center flex flex-col items-center pt-16">


          {/* Primland Oversized Serif Display Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal leading-[1.08] tracking-[0.14em] text-[#F5F2EC] max-w-5xl uppercase drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          >
            DESIGNING <br />
            OUTDOOR EXPERIENCES <br />
            <span className="font-serif-editorial lowercase italic tracking-normal text-[#C9C3B8] font-light">
              that last.
            </span>
          </motion.h1>



          {/* Primary Rectangular Off-White Badge Button (Primland style) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <Link
              href="/projects"
              className="px-9 py-4 bg-[#F5F2EC] text-[#0D120F] text-xs font-mono font-semibold uppercase tracking-[0.25em] hover:bg-[#B69B67] hover:text-[#0D120F] transition-all duration-500 shadow-2xl border border-[#F5F2EC] flex items-center gap-3 group"
            >
              <span>EXPLORE PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>


          </motion.div>
        </div>


      </section>

      {/* SECTION 2 — FEATURED PROJECT (Cinematic Breakout Layout) */}
      <section ref={section2Ref} className="relative pt-32 pb-48 bg-[#0D120F]">

        {/* Dynamic SVG Background Line */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
          <svg width="100%" height="100%" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" />
                <stop offset="50%" stopColor="#F5F2EC" />
                <stop offset="100%" stopColor="#D4AF37" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            <motion.path 
              d="M -100 200 C 400 -200, 900 1000, 1600 300"
              fill="transparent"
              stroke="url(#line-gradient)"
              strokeWidth="4"
              filter="url(#glow)"
              style={{ pathLength: lineProgress }}
            />
          </svg>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          {/* Typographic Intro */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative z-10">
            <div className="max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#B69B67] mb-6 block">
                Featured Case Study
              </span>
              <h2 className="font-serif-editorial text-5xl md:text-7xl font-light text-[#F5F2EC] leading-[1.1]">
                {featuredProject.title}
              </h2>
            </div>
            <Link
              href={`/projects/${featuredProject.id}`}
              className="mt-8 md:mt-0 group flex items-center gap-4 text-[#F5F2EC] hover:text-[#B69B67] transition-colors"
            >
              <span className="text-xs font-mono uppercase tracking-widest">Explore Project</span>
              <div className="w-10 h-10 rounded-full border border-[#F5F2EC]/20 group-hover:border-[#B69B67] flex items-center justify-center transition-colors">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </div>

          {/* Asymmetrical Image Layout */}
          <div className="relative w-full h-[60vh] md:h-[80vh] flex justify-end group cursor-pointer">
            <Link href={`/projects/${featuredProject.id}`} className="absolute inset-0 z-30" aria-label="View Featured Project" />
            
            {/* Background floating typography */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 z-0 hidden lg:block opacity-[0.03] pointer-events-none">
               <span className="font-serif-display text-[15rem] leading-none whitespace-nowrap overflow-hidden">
                 {featuredProject.category}
               </span>
            </div>
            
            <motion.div 
              className="relative h-full overflow-hidden"
              style={{ 
                width: imageWidth,
                clipPath: clipPathPolygon
              }}
              whileHover="hover"
            >
              <motion.div
                className="absolute inset-0 z-0"
                variants={{
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <Image
                  src={featuredProject.heroImage}
                  alt={featuredProject.title}
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
              
              {/* Overlay Content floating inside image */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 w-full md:w-2/3 bg-gradient-to-t from-[#0D120F]/90 to-transparent pointer-events-none">
                <div className="flex flex-col gap-4">
                  <p className="text-sm md:text-base font-light text-[#C9C3B8] leading-relaxed max-w-xl">
                    {featuredProject.description}
                  </p>
                  <div className="flex gap-8 mt-4 pt-4 border-t border-[#F5F2EC]/20">
                    <div>
                      <span className="block text-[10px] font-mono text-[#B69B67] uppercase tracking-widest mb-1">Location</span>
                      <span className="text-xs text-[#F5F2EC]">{featuredProject.location}</span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono text-[#B69B67] uppercase tracking-widest mb-1">Scale</span>
                      <span className="text-xs text-[#F5F2EC]">{featuredProject.area}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ABOUT (Editorial Typographic) */}
      <section className="relative py-32 bg-[#161C18] overflow-hidden">
        {/* Massive background text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.02] z-0">
          <h2 className="font-serif-editorial text-[20vw] leading-none whitespace-nowrap text-[#F5F2EC]">
            NATURE <span className="italic">&</span> DESIGN
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 w-full relative z-10 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#B69B67] mb-8 block">
            Brand Heritage
          </span>
          <h3 className="font-serif-editorial text-4xl sm:text-5xl md:text-6xl font-light leading-[1.1] text-[#F5F2EC]">
            We design spaces where <br className="hidden md:block" />
            <span className="italic text-[#C9C3B8]">architecture meets nature.</span>
          </h3>
          <p className="text-sm md:text-base font-light leading-relaxed text-[#C9C3B8] mt-8 mx-auto max-w-2xl">
            {GKV_COMPANY_INFO.originStory}
          </p>
        </div>
      </section>

      {/* SECTION 4 — SERVICES (Interactive List) */}
      <section className="relative py-40 bg-[#0D120F] min-h-screen flex items-center">
        {/* Floating background image tied to hover state */}
        <div className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-200">
          <AnimatePresence mode="wait">
            {activeServiceHover && (
              <motion.div
                key={activeServiceHover}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute inset-0"
              >
                <Image
                  src={GKV_SERVICES.find((s) => s.id === activeServiceHover)?.image || GKV_SERVICES[0].image}
                  alt="Service Preview"
                  fill
                  className="object-cover object-center filter grayscale contrast-125 opacity-30"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#B69B67] mb-4 block">
              Core Disciplines
            </span>
            <div className="flex flex-col md:flex-row justify-between items-end gap-6">
              <h2 className="font-serif-editorial text-5xl md:text-6xl font-light text-[#F5F2EC]">
                Crafting Outdoor Environments
              </h2>
              <Link
                href="/services"
                className="text-[10px] font-mono uppercase tracking-widest text-[#F5F2EC] hover:text-[#B69B67] flex items-center gap-2 transition-colors border-b border-[#F5F2EC]/20 pb-1"
              >
                <span>View All Services</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col border-t border-[#F5F2EC]/10">
            {GKV_SERVICES.map((service, index) => (
              <Link
                href={`/services#${service.id}`}
                key={service.id}
                onMouseEnter={() => setActiveServiceHover(service.id)}
                onMouseLeave={() => setActiveServiceHover(null)}
                className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 md:py-12 border-b border-[#F5F2EC]/10 hover:border-[#B69B67]/40 transition-colors"
              >
                {/* Left Side: Number and Title */}
                <div className="flex items-start md:items-center gap-8 md:gap-16 w-full md:w-1/2">
                  <span className="text-xs font-mono text-[#B69B67]/60 group-hover:text-[#B69B67] transition-colors pt-2 md:pt-0">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="font-serif-editorial text-4xl md:text-5xl text-[#C9C3B8] group-hover:text-[#F5F2EC] group-hover:translate-x-4 transition-all duration-500 ease-out">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                {/* Right Side: Description and Arrow */}
                <div className="mt-6 md:mt-0 flex items-center justify-between w-full md:w-1/3 gap-8">
                  <p className="text-xs font-light text-[#C9C3B8]/60 group-hover:text-[#C9C3B8] max-w-sm transition-colors duration-500 hidden md:block">
                    {service.shortDesc}
                  </p>
                  <div className="w-10 h-10 rounded-full border border-transparent group-hover:border-[#B69B67]/40 flex items-center justify-center text-[#F5F2EC]/50 group-hover:text-[#B69B67] transition-all duration-500 shrink-0">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — PROCESS (Flowing Line Layout) */}
      <section className="relative py-32 bg-[#161C18] border-t border-[#F5F2EC]/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#B69B67] mb-6 block">
              Methodology
            </span>
            <h2 className="font-serif-editorial text-5xl md:text-6xl font-light text-[#F5F2EC]">
              How We Build Your Sanctuary
            </h2>
          </div>

          {/* Flowing Process without boxes */}
          <div className="relative">
            {/* The connector line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#F5F2EC]/10 to-transparent -translate-y-1/2" />
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {GKV_PROCESS_STEPS.slice(0, 4).map((step, idx) => (
                <div key={step.number} className="relative group text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#0D120F] border border-[#B69B67]/30 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-[#B69B67] transition-all duration-500">
                    <span className="font-serif-editorial text-2xl font-light text-[#B69B67]">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif-editorial text-2xl text-[#F5F2EC] mb-4">{step.title}</h3>
                  <p className="text-xs text-[#C9C3B8]/70 leading-relaxed font-light max-w-[240px]">
                    {step.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-24 text-center">
             <Link
                href="/process"
                className="text-[10px] font-mono uppercase tracking-widest text-[#F5F2EC] hover:text-[#B69B67] transition-colors border-b border-[#F5F2EC]/20 pb-1"
              >
                <span>Explore 6-Phase Process</span>
              </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PROJECTS PREVIEW (Editorial Gallery) */}
      <section className="relative py-32 bg-[#0D120F]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#B69B67] mb-6 block">
                Selected Works
              </span>
              <h2 className="font-serif-editorial text-5xl md:text-7xl font-light text-[#F5F2EC]">
                Architectural Compositions
              </h2>
            </div>
            <Link
              href="/projects"
              className="mt-8 md:mt-0 text-[10px] font-mono uppercase tracking-widest text-[#F5F2EC] hover:text-[#B69B67] transition-colors border-b border-[#F5F2EC]/20 pb-1"
            >
              <span>View Full Portfolio</span>
            </Link>
          </div>

          {/* Broken Grid / Editorial Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 lg:gap-x-16 items-start">
            {masonryProjects.slice(0, 3).map((proj, idx) => {
              // Create varied layouts based on index
              const isLarge = idx === 0;
              const isTall = idx === 1;
              const colSpan = isLarge ? 'md:col-span-12' : isTall ? 'md:col-span-5' : 'md:col-span-7 md:mt-32';
              const aspectRatio = isLarge ? 'aspect-[21/9]' : isTall ? 'aspect-[3/4]' : 'aspect-[16/10]';
              
              return (
                <div key={proj.id} className={`${colSpan} group relative`}>
                  <Link href={`/projects/${proj.id}`} className="block relative overflow-hidden">
                    <div className={`relative w-full ${aspectRatio} overflow-hidden bg-[#161C18]`}>
                      <Image
                        src={proj.heroImage}
                        alt={proj.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                      />
                    </div>
                    {/* Floating Typography */}
                    <div className={`absolute ${isLarge ? 'bottom-8 left-8 md:bottom-12 md:left-12' : '-bottom-6 left-6'} z-20`}>
                       <div className="bg-[#0D120F]/90 backdrop-blur-md p-6 border border-[#F5F2EC]/10 inline-block shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                         <span className="text-[10px] font-mono text-[#B69B67] uppercase tracking-[0.2em] mb-2 block">
                           {proj.category}
                         </span>
                         <h3 className="font-serif-editorial text-2xl md:text-3xl text-[#F5F2EC]">
                           {proj.title}
                         </h3>
                       </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 7 — CLIENTS (Typographic Marquee / Strip) */}
      <section className="relative py-16 bg-[#161C18] border-y border-[#F5F2EC]/5 overflow-hidden">
        <div className="w-full flex justify-center">
           <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-24 opacity-60">
             {GKV_CLIENT_TYPES.map((client, idx) => (
               <span key={idx} className="font-serif-display text-sm md:text-lg text-[#C9C3B8] uppercase tracking-[0.2em]">
                 {client.name}
               </span>
             ))}
           </div>
        </div>
      </section>

      {/* SECTION 8 — CTA (Moody Atmospheric) */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center bg-[#0D120F] overflow-hidden text-center">
        {/* Cinematic Gradient Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(182,155,103,0.1)_0%,transparent_70%)] opacity-70 mix-blend-screen pointer-events-none" />
          <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.5em] text-[#B69B67] mb-8">
            Start Your Transformation
          </span>

          <h2 className="font-serif-editorial text-6xl md:text-8xl font-light text-[#F5F2EC] leading-[1.05] mb-8 drop-shadow-2xl">
            Let's Build <br />
            <span className="italic text-[#C9C3B8]">Something Beautiful.</span>
          </h2>

          <p className="text-xs md:text-sm font-light text-[#C9C3B8]/70 max-w-lg mx-auto leading-relaxed mb-12">
            Whether you are designing a private villa garden, a multi-acre farm estate, or a commercial landscape across Kerala, our architects are ready to assist.
          </p>

          <button
            onClick={openConsultation}
            className="group relative px-12 py-5 bg-transparent overflow-hidden"
          >
            <div className="absolute inset-0 border border-[#B69B67]/50 group-hover:border-[#B69B67] transition-colors duration-500" />
            <div className="absolute inset-0 bg-[#B69B67] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10 text-[11px] font-mono font-semibold uppercase tracking-[0.3em] text-[#F5F2EC] group-hover:text-[#0D120F] transition-colors duration-500 flex items-center gap-4">
              Book Consultation
              <ArrowUpRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
