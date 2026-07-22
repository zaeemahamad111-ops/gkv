'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { GKV_COMPANY_INFO } from '@/data/gkvData';

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0D120F] border-t border-[#F5F2EC]/10 text-[#F5F2EC] overflow-hidden pt-20 pb-12">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Top Section: Large Statement & Back to Top */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#F5F2EC]/10 pb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-[#B69B67] font-mono block mb-4">
              Green Kole Ventures
            </span>
            <h2 className="font-serif-editorial text-4xl md:text-6xl font-light leading-tight text-[#F5F2EC]">
              Designing outdoor experiences <br />
              <span className="italic text-[#C9C3B8]/90">that endure.</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 rounded-full bg-[#B69B67] text-[#0D120F] text-xs uppercase tracking-widest font-semibold hover:bg-[#F5F2EC] transition-colors duration-300"
            >
              Book Consultation
            </button>
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full border border-[#F5F2EC]/20 flex items-center justify-center text-[#F5F2EC] hover:border-[#B69B67] hover:text-[#B69B67] transition-all duration-300"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Middle Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 py-16 border-b border-[#F5F2EC]/10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/assets/brand/logo.png"
                alt="Green Kole Ventures Logo"
                fill
                className="object-contain object-left filter brightness-110"
              />
            </div>
            <p className="text-xs leading-relaxed text-[#C9C3B8]/80 max-w-xs font-light">
              Incorporated April 12, 2022. Crafting luxury gardens, hardscape architecture, bio-climatic polyhouses, and automated irrigation across South India.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#B69B67] font-mono">Navigation</h3>
            <ul className="space-y-2 text-xs text-[#C9C3B8] font-light">
              <li><Link href="/projects" className="hover:text-[#B69B67] transition-colors">Projects Catalog</Link></li>
              <li><Link href="/services" className="hover:text-[#B69B67] transition-colors">Architectural Services</Link></li>
              <li><Link href="/process" className="hover:text-[#B69B67] transition-colors">Our Design Process</Link></li>
              <li><Link href="/about" className="hover:text-[#B69B67] transition-colors">About & History</Link></li>
              <li><Link href="/journal" className="hover:text-[#B69B67] transition-colors">Design Journal</Link></li>
              <li><Link href="/contact" className="hover:text-[#B69B67] transition-colors">Studio Contact</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest text-[#B69B67] font-mono">Disciplines</h3>
            <ul className="space-y-2 text-xs text-[#C9C3B8] font-light">
              <li>Landscape Architecture</li>
              <li>Hand-Chiseled Hardscape</li>
              <li>Smart Weather Irrigation</li>
              <li>Farm Estate Planning</li>
              <li>Polyhouse & Greenhouse</li>
              <li>Horticultural Stewardship</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#B69B67] font-mono">Direct Inquiries</h3>
            <div className="space-y-2 text-xs text-[#C9C3B8] font-light">
              <p className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-[#B69B67]" />
                <a href={`tel:${GKV_COMPANY_INFO.phone}`} className="hover:text-[#F5F2EC]">{GKV_COMPANY_INFO.phone}</a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#B69B67]" />
                <a href={`mailto:${GKV_COMPANY_INFO.email}`} className="hover:text-[#F5F2EC]">{GKV_COMPANY_INFO.email}</a>
              </p>
              <p className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#B69B67]" />
                <span>{GKV_COMPANY_INFO.location}</span>
              </p>
              <p className="flex items-center gap-2.5 text-[11px] text-[#C9C3B8]/60 pt-1">
                <Clock className="w-3.5 h-3.5 text-[#B69B67]" />
                <span>{GKV_COMPANY_INFO.hours}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#C9C3B8]/50 gap-4">
          <p>© {new Date().getFullYear()} Green Kole Ventures Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6 tracking-wider uppercase font-mono text-[10px]">
            <span>Architectural Digest Standards</span>
            <span>•</span>
            <span>Aman Aesthetics</span>
            <span>•</span>
            <span>Kerala, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
