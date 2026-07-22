'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, MapPin, Layers, Calendar, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { GKV_PROJECTS } from '@/data/gkvData';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { useConsultation } from '@/components/ClientLayoutWrapper';

export default function ProjectDetailPage() {
  const { openConsultation } = useConsultation();
  const params = useParams();
  const projectId = params?.id as string;

  const projectIndex = GKV_PROJECTS.findIndex((p) => p.id === projectId);
  if (projectIndex === -1) {
    return (
      <div className="min-h-screen bg-[#0D120F] flex flex-col items-center justify-center text-[#F5F2EC]">
        <h1 className="font-serif-editorial text-4xl mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-xs font-mono text-[#B69B67] underline">
          Back to Projects Catalog
        </Link>
      </div>
    );
  }

  const project = GKV_PROJECTS[projectIndex];
  const nextProject = GKV_PROJECTS[(projectIndex + 1) % GKV_PROJECTS.length];

  return (
    <div className="bg-[#0D120F] text-[#F5F2EC] min-h-screen pt-28 pb-24">
      {/* Back Button Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono text-[#B69B67] hover:text-[#F5F2EC] uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-[#B69B67] uppercase tracking-widest mb-3">
          <Sparkles className="w-4 h-4" />
          <span>{project.category} • Case Study</span>
        </div>
        <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-[#F5F2EC]">
          {project.title}
        </h1>
        <p className="text-xs md:text-sm font-mono text-[#C9C3B8]/70 mt-2">{project.subtitle}</p>
      </section>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="relative aspect-[21/9] rounded-2xl overflow-hidden border border-[#B69B67]/30 shadow-2xl">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      {/* Project Meta Bar */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-xl bg-[#161C18] border border-[#F5F2EC]/10">
          <div>
            <span className="text-[10px] font-mono text-[#C9C3B8]/60 uppercase tracking-widest block">Location</span>
            <span className="text-xs font-medium text-[#F5F2EC] mt-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#B69B67]" />
              {project.location}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#C9C3B8]/60 uppercase tracking-widest block">Scale</span>
            <span className="text-xs font-medium text-[#F5F2EC] mt-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#B69B67]" />
              {project.area}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#C9C3B8]/60 uppercase tracking-widest block">Completed</span>
            <span className="text-xs font-medium text-[#F5F2EC] mt-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#B69B67]" />
              {project.year}
            </span>
          </div>
          <div>
            <span className="text-[10px] font-mono text-[#C9C3B8]/60 uppercase tracking-widest block">Primary Services</span>
            <span className="text-xs font-medium text-[#B69B67] mt-1 block">
              {project.services.join(', ')}
            </span>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Challenge */}
          <div className="p-8 rounded-2xl bg-[#161C18] border border-[#F5F2EC]/10 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B69B67] block">
              01 • Architectural & Site Challenge
            </span>
            <h3 className="font-serif-editorial text-2xl text-[#F5F2EC]">The Site Conditions</h3>
            <p className="text-xs font-light text-[#C9C3B8] leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="p-8 rounded-2xl bg-[#161C18] border border-[#B69B67]/30 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#B69B67] block">
              02 • GKV Engineering Solution
            </span>
            <h3 className="font-serif-editorial text-2xl text-[#F5F2EC]">The Designed Outcome</h3>
            <p className="text-xs font-light text-[#C9C3B8] leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Before / After Transformation */}
      {project.beforeImage && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono text-[#B69B67] uppercase tracking-[0.3em]">
              Interactive Site Transformation
            </span>
            <h2 className="font-serif-editorial text-3xl md:text-4xl text-[#F5F2EC] mt-2">
              Before & After Comparison
            </h2>
            <p className="text-xs text-[#C9C3B8]/70 mt-2">Drag the handle to view the site evolution.</p>
          </div>

          <BeforeAfterSlider
            beforeImage={project.beforeImage}
            afterImage={project.afterImage}
          />
        </section>
      )}

      {/* Image Gallery */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24 space-y-8">
        <h2 className="font-serif-editorial text-3xl text-[#F5F2EC]">
          Architecture Photo Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery.map((img, idx) => (
            <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#F5F2EC]/10">
              <Image
                src={img}
                alt={`${project.title} gallery photo ${idx + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Next Project Link */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 border-t border-[#F5F2EC]/10 pt-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-2xl bg-[#161C18] border border-[#B69B67]/30">
          <div>
            <span className="text-[10px] font-mono text-[#B69B67] uppercase tracking-widest block">Next Case Study</span>
            <h3 className="font-serif-editorial text-3xl text-[#F5F2EC] mt-1">{nextProject.title}</h3>
            <p className="text-xs text-[#C9C3B8]/60 font-mono">{nextProject.subtitle}</p>
          </div>

          <Link
            href={`/projects/${nextProject.id}`}
            className="px-8 py-4 rounded-full bg-[#B69B67] text-[#0D120F] text-xs font-semibold uppercase tracking-widest hover:bg-[#F5F2EC] transition-all flex items-center gap-2"
          >
            <span>Explore Next Project</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
