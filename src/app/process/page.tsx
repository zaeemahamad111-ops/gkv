'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { GKV_PROCESS_STEPS } from '@/data/gkvData';
import { useConsultation } from '@/components/ClientLayoutWrapper';

export default function ProcessPage() {
  const { openConsultation } = useConsultation();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-[#0D120F] text-[#F5F2EC] min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex items-center gap-2 text-xs font-mono text-[#B69B67] uppercase tracking-[0.3em] mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Execution Protocol</span>
        </div>
        <h1 className="font-serif-editorial text-5xl md:text-7xl font-light text-[#F5F2EC] leading-tight">
          From Raw Land to <br />
          <span className="italic text-[#C9C3B8]">Curated Sanctuary</span>
        </h1>
        <p className="text-xs md:text-sm font-light text-[#C9C3B8]/80 max-w-2xl mt-4 leading-relaxed">
          Our systematic 6-phase engineering & design process guarantees that every outdoor project is delivered on schedule, within structural standards, and with zero ecological disruption.
        </p>
      </section>

      {/* Interactive Step Timeline Navigation */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {GKV_PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left transition-all ${
                activeStep === idx
                  ? 'border-[#B69B67] bg-[#161C18] text-[#F5F2EC]'
                  : 'border-[#F5F2EC]/10 bg-[#0D120F] text-[#C9C3B8]/60 hover:border-[#B69B67]/30'
              }`}
            >
              <span className="text-xs font-mono text-[#B69B67] block">{step.number}</span>
              <span className="text-xs font-serif-editorial mt-1 block truncate">{step.title}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Active Step Showcase */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#161C18] border border-[#B69B67]/30 rounded-2xl p-8 md:p-12">
          {/* Image */}
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-xl overflow-hidden border border-[#F5F2EC]/10">
            <Image
              src={GKV_PROCESS_STEPS[activeStep].image}
              alt={GKV_PROCESS_STEPS[activeStep].title}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-[#B69B67]">
              <span>PHASE {GKV_PROCESS_STEPS[activeStep].number} OF 06</span>
            </div>

            <h2 className="font-serif-editorial text-4xl text-[#F5F2EC]">
              {GKV_PROCESS_STEPS[activeStep].title}
            </h2>
            <p className="text-xs font-mono text-[#C9C3B8]/70 italic">
              {GKV_PROCESS_STEPS[activeStep].subtitle}
            </p>

            <p className="text-xs font-light text-[#C9C3B8] leading-relaxed">
              {GKV_PROCESS_STEPS[activeStep].description}
            </p>

            <div className="pt-4 flex items-center gap-4">
              {activeStep > 0 && (
                <button
                  onClick={() => setActiveStep(activeStep - 1)}
                  className="px-6 py-2.5 rounded-full border border-[#F5F2EC]/20 text-xs font-mono uppercase"
                >
                  ← Previous
                </button>
              )}
              {activeStep < GKV_PROCESS_STEPS.length - 1 && (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className="px-6 py-2.5 rounded-full bg-[#B69B67] text-[#0D120F] text-xs font-semibold uppercase tracking-widest"
                >
                  Next Phase →
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
