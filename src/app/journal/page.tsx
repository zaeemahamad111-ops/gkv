'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, X, Clock, Calendar } from 'lucide-react';
import { GKV_JOURNAL, Article } from '@/data/gkvData';

export default function JournalPage() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <div className="bg-[#0D120F] text-[#F5F2EC] min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex items-center gap-2 text-xs font-mono text-[#B69B67] uppercase tracking-[0.3em] mb-4">
          <Sparkles className="w-4 h-4" />
          <span>GKV Design Studio Journal</span>
        </div>
        <h1 className="font-serif-editorial text-5xl md:text-7xl font-light text-[#F5F2EC] leading-tight">
          Perspectives on Outdoor <br />
          <span className="italic text-[#C9C3B8]">Architecture & Materiality</span>
        </h1>
      </section>

      {/* Editorial Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {GKV_JOURNAL.map((article) => (
          <article
            key={article.id}
            onClick={() => setSelectedArticle(article)}
            className="group cursor-pointer bg-[#161C18] border border-[#F5F2EC]/10 rounded-2xl overflow-hidden hover:border-[#B69B67]/60 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between text-[10px] font-mono text-[#B69B67]">
                  <span>{article.category}</span>
                  <span>{article.readTime}</span>
                </div>

                <h3 className="font-serif-editorial text-2xl text-[#F5F2EC] group-hover:text-[#B69B67] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs font-light text-[#C9C3B8]/80 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between text-xs font-mono text-[#B69B67]">
              <span>Read Essay</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </article>
        ))}
      </section>

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-[#0D120F]/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#161C18] border border-[#B69B67]/30 rounded-2xl p-8 md:p-12 z-10 text-[#F5F2EC]"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-[#F5F2EC]/10 text-[#C9C3B8] hover:text-[#F5F2EC]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                <span className="text-xs font-mono text-[#B69B67] uppercase tracking-widest block">
                  {selectedArticle.category} • {selectedArticle.date}
                </span>

                <h2 className="font-serif-editorial text-3xl md:text-5xl text-[#F5F2EC]">
                  {selectedArticle.title}
                </h2>

                <div className="relative aspect-[21/9] rounded-xl overflow-hidden border border-[#F5F2EC]/10">
                  <Image src={selectedArticle.image} alt={selectedArticle.title} fill className="object-cover" />
                </div>

                <div className="space-y-4 pt-4 text-sm font-light text-[#C9C3B8] leading-relaxed">
                  {selectedArticle.content.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
