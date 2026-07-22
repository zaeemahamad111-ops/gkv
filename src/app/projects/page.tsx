'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Filter, MapPin, Layers, Sparkles } from 'lucide-react';
import { GKV_PROJECTS, Project } from '@/data/gkvData';
import { useConsultation } from '@/components/ClientLayoutWrapper';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';

export default function ProjectsPage() {
  const { openConsultation } = useConsultation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Residences', 'Farm Estates', 'Hospitality'];

  const filteredProjects = selectedCategory === 'All'
    ? GKV_PROJECTS
    : GKV_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#0D120F] text-[#F5F2EC] min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-[#B69B67] uppercase tracking-[0.3em] mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Architectural Portfolio</span>
        </div>
        <h1 className="font-serif-editorial text-5xl md:text-7xl font-light text-[#F5F2EC] leading-tight">
          Selected Projects & <br />
          <span className="italic text-[#C9C3B8]">Outdoor Case Studies</span>
        </h1>
        <p className="text-xs md:text-sm font-light text-[#C9C3B8]/80 max-w-2xl mt-4 leading-relaxed">
          Explore our curated portfolio of luxury estate landscapes, natural stone hardscaping, high-tech farm developments, and bio-climatic polyhouses.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mt-10 border-b border-[#F5F2EC]/10 pb-6">
          <span className="text-xs font-mono text-[#C9C3B8]/60 uppercase tracking-widest mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-[#B69B67]" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-widest transition-all ${
                selectedCategory === cat
                  ? 'bg-[#B69B67] text-[#0D120F] font-semibold'
                  : 'bg-[#161C18] border border-[#F5F2EC]/10 text-[#C9C3B8] hover:border-[#B69B67]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Editorial Projects List */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {filteredProjects.map((project, idx) => (
          <article
            key={project.id}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#161C18] border border-[#F5F2EC]/10 rounded-2xl p-8 md:p-12"
          >
            {/* Hero Image / Media Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#B69B67]/20">
                <Image
                  src={project.heroImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Before / After Mini Interactive Preview if available */}
              {project.beforeImage && (
                <div className="pt-2">
                  <span className="text-[10px] font-mono text-[#B69B67] uppercase tracking-widest block mb-2">
                    Interactive Site Transformation
                  </span>
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                  />
                </div>
              )}
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-mono text-[#B69B67] mb-2">
                  <span>0{idx + 1}</span>
                  <span>•</span>
                  <span>{project.category}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="font-serif-editorial text-3xl md:text-4xl text-[#F5F2EC]">
                  {project.title}
                </h2>
                <p className="text-xs text-[#C9C3B8]/60 font-mono mt-1">{project.subtitle}</p>

                <p className="text-xs font-light text-[#C9C3B8] leading-relaxed mt-6">
                  {project.description}
                </p>
              </div>

              {/* Specs & Materials */}
              <div className="border-t border-b border-[#F5F2EC]/10 py-6 space-y-3">
                <div className="flex items-center gap-2 text-xs">
                  <MapPin className="w-3.5 h-3.5 text-[#B69B67]" />
                  <span className="text-[#C9C3B8]/60 font-mono">Location:</span>
                  <span className="text-[#F5F2EC]">{project.location}</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <Layers className="w-3.5 h-3.5 text-[#B69B67]" />
                  <span className="text-[#C9C3B8]/60 font-mono">Scale:</span>
                  <span className="text-[#F5F2EC]">{project.area}</span>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] font-mono text-[#B69B67] uppercase tracking-widest block mb-2">
                    Materials Palette:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {project.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-[#0D120F] text-[10px] text-[#C9C3B8] border border-[#F5F2EC]/10"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <Link
                  href={`/projects/${project.id}`}
                  className="w-full py-4 rounded-xl bg-[#B69B67] text-[#0D120F] text-xs font-semibold uppercase tracking-widest text-center block hover:bg-[#F5F2EC] transition-all"
                  data-cursor="VIEW"
                >
                  View Full Case Study
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
