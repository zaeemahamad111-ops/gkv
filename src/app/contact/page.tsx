'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, Check } from 'lucide-react';
import { GKV_COMPANY_INFO } from '@/data/gkvData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    scope: 'Landscape Architecture',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#0D120F] text-[#F5F2EC] min-h-screen pt-32 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="flex items-center gap-2 text-xs font-mono text-[#B69B67] uppercase tracking-[0.3em] mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Studio Inquiries</span>
        </div>
        <h1 className="font-serif-editorial text-5xl md:text-7xl font-light text-[#F5F2EC] leading-tight">
          Connect With Our <br />
          <span className="italic text-[#C9C3B8]">Landscape Architects</span>
        </h1>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#161C18] border border-[#B69B67]/30 rounded-2xl p-8 md:p-12 shadow-2xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Vikram Nair"
                    className="w-full p-4 rounded-xl bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 83300 80387"
                    className="w-full p-4 rounded-xl bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="vikram@example.com"
                    className="w-full p-4 rounded-xl bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-2">
                    Project Location
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g., Wayanad / Kochi / Trivandrum"
                    className="w-full p-4 rounded-xl bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-2">
                  Primary Scope
                </label>
                <select
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full p-4 rounded-xl bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                >
                  <option value="Landscape Architecture">Landscape Architecture & Softscape</option>
                  <option value="Architectural Hardscape">Architectural Hardscape & Stone Paving</option>
                  <option value="Smart Irrigation">Smart Microclimate Irrigation</option>
                  <option value="Farm Estate Planning">Farm Estate Planning & Development</option>
                  <option value="Polyhouse Construction">Polyhouse & Greenhouse Construction</option>
                  <option value="Horticultural Maintenance">Year-Round Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-2">
                  Message Brief
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your property size, architectural vision, or key deadlines..."
                  className="w-full p-4 rounded-xl bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#B69B67] text-[#0D120F] text-xs font-semibold uppercase tracking-widest hover:bg-[#F5F2EC] transition-all flex items-center justify-center gap-2"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-16 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#B69B67]/20 border border-[#B69B67] flex items-center justify-center mx-auto text-[#B69B67]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif-editorial text-3xl text-[#F5F2EC]">
                Inquiry Successfully Dispatched
              </h3>
              <p className="text-xs text-[#C9C3B8]/80 max-w-md mx-auto font-light leading-relaxed">
                Thank you for contacting Green Kole Ventures. Our landscape architects will contact you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 rounded-full bg-[#0D120F] border border-[#B69B67]/40 text-[#F5F2EC] text-xs uppercase"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

        {/* Right Column: Studio Info & Dark Map View */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-[#161C18] border border-[#F5F2EC]/10 rounded-2xl p-8 space-y-6">
            <h3 className="font-serif-editorial text-2xl text-[#F5F2EC]">Studio Headquarters</h3>

            <div className="space-y-4 text-xs font-light text-[#C9C3B8]">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B69B67] mt-0.5" />
                <div>
                  <span className="block font-mono text-[#F5F2EC]">Phone & WhatsApp</span>
                  <a href={`tel:${GKV_COMPANY_INFO.phone}`} className="hover:text-[#B69B67]">{GKV_COMPANY_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B69B67] mt-0.5" />
                <div>
                  <span className="block font-mono text-[#F5F2EC]">Email Inquiries</span>
                  <a href={`mailto:${GKV_COMPANY_INFO.email}`} className="hover:text-[#B69B67]">{GKV_COMPANY_INFO.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B69B67] mt-0.5" />
                <div>
                  <span className="block font-mono text-[#F5F2EC]">Location</span>
                  <span>{GKV_COMPANY_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B69B67] mt-0.5" />
                <div>
                  <span className="block font-mono text-[#F5F2EC]">Operating Hours</span>
                  <span>{GKV_COMPANY_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Architectural Map Graphic */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#B69B67]/30 bg-[#161C18] flex items-center justify-center p-6 text-center">
            <div className="absolute inset-0 bg-grain pointer-events-none opacity-40" />
            <div className="space-y-2 relative z-10">
              <MapPin className="w-8 h-8 text-[#B69B67] mx-auto animate-bounce" />
              <h4 className="font-serif-editorial text-xl text-[#F5F2EC]">Kerala, India</h4>
              <p className="text-[10px] font-mono text-[#C9C3B8]/60">Projects across Wayanad • Kochi • Thrissur • Trivandrum</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
