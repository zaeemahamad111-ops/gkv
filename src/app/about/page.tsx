'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, Award, ShieldCheck, Users, Calendar, ArrowRight } from 'lucide-react';
import { GKV_COMPANY_INFO, GKV_CLIENT_TYPES } from '@/data/gkvData';
import { useConsultation } from '@/components/ClientLayoutWrapper';

export default function AboutPage() {
  const { openConsultation } = useConsultation();

  return (
    <div className="bg-[#0D120F] text-[#F5F2EC] min-h-screen pt-32 pb-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex items-center gap-2 text-xs font-mono text-[#B69B67] uppercase tracking-[0.3em] mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Our Journey & Identity</span>
        </div>
        <h1 className="font-serif-editorial text-5xl md:text-7xl font-light text-[#F5F2EC] leading-tight">
          Where Botanical Artistry Meets <br />
          <span className="italic text-[#C9C3B8]">Civil & Agricultural Science</span>
        </h1>
      </section>

      {/* Main Narrative Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono text-[#B69B67] uppercase tracking-widest block">
              Company Origin & Evolution
            </span>
            <p className="text-sm font-light leading-relaxed text-[#C9C3B8] text-justify">
              {GKV_COMPANY_INFO.originStory}
            </p>
            <p className="text-sm font-light leading-relaxed text-[#C9C3B8] text-justify">
              With a commitment to sustainable practices and innovative design, we offer a comprehensive range of services tailored to meet complex agricultural and spatial needs. Our skilled team of agricultural graduates, irrigation engineers, civil engineers, and master artisans work meticulously to ensure that every project reflects your unique style while enhancing ecological vitality.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#B69B67]/30 shadow-2xl">
              <Image
                src="/assets/projects/page_7_16_X7.jpg"
                alt="Green Kole Ventures Onsite Survey"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#161C18] border-t border-b border-[#F5F2EC]/10 mb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-[#0D120F] border border-[#F5F2EC]/10 space-y-4">
              <span className="text-xs font-mono text-[#B69B67] uppercase tracking-widest block">Our Mission</span>
              <h3 className="font-serif-editorial text-3xl text-[#F5F2EC]">Innovation & Excellence</h3>
              <p className="text-xs font-light text-[#C9C3B8] leading-relaxed">
                {GKV_COMPANY_INFO.mission}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#0D120F] border border-[#B69B67]/30 space-y-4">
              <span className="text-xs font-mono text-[#B69B67] uppercase tracking-widest block">Our Vision</span>
              <h3 className="font-serif-editorial text-3xl text-[#F5F2EC]">Ecological Leadership</h3>
              <p className="text-xs font-light text-[#C9C3B8] leading-relaxed">
                {GKV_COMPANY_INFO.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Breakdown */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 space-y-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-[#B69B67] uppercase tracking-[0.3em]">Interdisciplinary Team</span>
          <h2 className="font-serif-editorial text-4xl text-[#F5F2EC] mt-2">The Experts Behind GKV</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl bg-[#161C18] border border-[#F5F2EC]/10 text-center space-y-2">
            <h4 className="font-serif-editorial text-xl text-[#F5F2EC]">Agricultural Graduates</h4>
            <p className="text-xs text-[#C9C3B8]/70 font-light">Plant pathology, soil microbiology, and native species selection.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#161C18] border border-[#F5F2EC]/10 text-center space-y-2">
            <h4 className="font-serif-editorial text-xl text-[#F5F2EC]">Irrigation Engineers</h4>
            <p className="text-xs text-[#C9C3B8]/70 font-light">Precision drip hydraulic models, IoT moisture sensors, & weather automation.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#161C18] border border-[#F5F2EC]/10 text-center space-y-2">
            <h4 className="font-serif-editorial text-xl text-[#F5F2EC]">Civil Engineers</h4>
            <p className="text-xs text-[#C9C3B8]/70 font-light">Retaining wall structural loads, drainage channels, & stone paving stability.</p>
          </div>
          <div className="p-6 rounded-xl bg-[#161C18] border border-[#F5F2EC]/10 text-center space-y-2">
            <h4 className="font-serif-editorial text-xl text-[#F5F2EC]">Master Stonemasons</h4>
            <p className="text-xs text-[#C9C3B8]/70 font-light">Hand-chiseled Kerala granite, Kota limestone, & rockwork artistry.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 text-center pt-8">
        <button
          onClick={openConsultation}
          className="px-10 py-5 rounded-full bg-[#B69B67] text-[#0D120F] text-xs font-semibold uppercase tracking-widest hover:bg-[#F5F2EC] transition-all"
        >
          Book Consultation With Our Leadership
        </button>
      </section>
    </div>
  );
}
