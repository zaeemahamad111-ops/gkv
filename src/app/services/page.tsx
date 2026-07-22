'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Layers, ShieldCheck } from 'lucide-react';
import { GKV_SERVICES } from '@/data/gkvData';
import { useConsultation } from '@/components/ClientLayoutWrapper';

export default function ServicesPage() {
  const { openConsultation } = useConsultation();

  return (
    <div className="bg-[#0D120F] text-[#F5F2EC] min-h-screen pt-32 pb-24">
      {/* Services Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="flex items-center gap-2 text-xs font-mono text-[#B69B67] uppercase tracking-[0.3em] mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Architectural & Horticultural Capabilities</span>
        </div>
        <h1 className="font-serif-editorial text-5xl md:text-7xl font-light text-[#F5F2EC] leading-tight">
          Comprehensive Services & <br />
          <span className="italic text-[#C9C3B8]">Outdoor Engineering</span>
        </h1>
        <p className="text-xs md:text-sm font-light text-[#C9C3B8]/80 max-w-2xl mt-4 leading-relaxed">
          From master site planning to hand-chiseled stone masonry, microclimate drip irrigation, and high-yield bio-polyhouses, Green Kole Ventures delivers complete end-to-end execution.
        </p>
      </section>

      {/* Full-Width Alternating Service Sections */}
      <section className="space-y-24">
        {GKV_SERVICES.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              className="py-20 border-t border-[#F5F2EC]/10 bg-[#161C18]"
            >
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
                  {/* Image Column (Alternates position) */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#B69B67]/30 shadow-2xl group">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="flex items-center gap-3 text-xs font-mono text-[#B69B67]">
                      <span>0{index + 1}</span>
                      <span>•</span>
                      <span>{service.category}</span>
                    </div>

                    <h2 className="font-serif-editorial text-3xl md:text-4xl text-[#F5F2EC]">
                      {service.title}
                    </h2>
                    <p className="text-xs font-mono text-[#C9C3B8]/60 italic">{service.tagline}</p>

                    <p className="text-xs font-light text-[#C9C3B8] leading-relaxed">
                      {service.fullDesc}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 pt-2">
                      <h4 className="text-[11px] font-mono text-[#B69B67] uppercase tracking-widest">Capabilities</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-[#F5F2EC]">
                            <Check className="w-3.5 h-3.5 text-[#B69B67]" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Materials & Deliverables */}
                    <div className="border-t border-[#F5F2EC]/10 pt-4 flex flex-col sm:flex-row justify-between gap-4 text-xs">
                      <div>
                        <span className="text-[10px] font-mono text-[#C9C3B8]/60 uppercase tracking-widest block">Deliverables</span>
                        <span className="text-[#F5F2EC] text-[11px]">{service.deliverables.join(', ')}</span>
                      </div>
                      <div>
                        <button
                          onClick={openConsultation}
                          className="px-6 py-2.5 rounded-full border border-[#B69B67]/40 text-[#F5F2EC] text-[11px] font-mono uppercase tracking-widest hover:bg-[#B69B67] hover:text-[#0D120F] transition-all"
                        >
                          Request Service Brief
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
