'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Sparkles, Send } from 'lucide-react';
import { GKV_COMPANY_INFO } from '@/data/gkvData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    serviceType: 'Landscape Architecture & Softscape',
    propertyType: 'Private Residence',
    areaSize: '1,000 - 5,000 sq.ft',
    timeline: 'Immediate (Within 1 Month)',
    name: '',
    phone: '',
    email: '',
    location: '',
    notes: '',
  });

  const serviceOptions = [
    'Landscape Architecture & Softscape',
    'Architectural Hardscape & Stone Paving',
    'Smart Microclimate Irrigation',
    'Farm Estate Planning & Development',
    'Polyhouse & Greenhouse Construction',
    'Year-Round Horticultural Stewardship',
  ];

  const propertyOptions = [
    'Private Residence / Villa',
    'Agricultural Acreage / Farm Estate',
    'Luxury Hotel / Resort',
    'Commercial Office / Rooftop',
  ];

  const areaOptions = [
    'Under 2,000 sq.ft',
    '2,000 - 10,000 sq.ft',
    '1/4 Acre to 1 Acre',
    'Multi-Acre Farm Estate (2+ Acres)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={resetAndClose}
          className="absolute inset-0 bg-[#0D120F]/90 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-[#161C18] border border-[#B69B67]/30 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-10 z-10 text-[#F5F2EC]"
        >
          {/* Close Button */}
          <button
            onClick={resetAndClose}
            className="absolute top-6 right-6 p-2 rounded-full border border-[#F5F2EC]/10 text-[#C9C3B8] hover:text-[#F5F2EC] hover:border-[#B69B67] transition-all"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-[#B69B67] text-xs font-mono tracking-widest uppercase mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Green Kole Ventures • Private Consultation</span>
                </div>
                <h3 className="font-serif-editorial text-3xl md:text-4xl text-[#F5F2EC]">
                  Begin Your Outdoor Project
                </h3>
                <p className="text-xs text-[#C9C3B8]/80 mt-1 font-light">
                  Tell us about your spatial vision. Step {step} of 2.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 ? (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-2">
                        1. Primary Discipline
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {serviceOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setFormData({ ...formData, serviceType: option })}
                            className={`p-3 rounded-lg border text-left text-xs transition-all ${
                              formData.serviceType === option
                                ? 'border-[#B69B67] bg-[#222922] text-[#F5F2EC] font-medium'
                                : 'border-[#F5F2EC]/10 bg-[#0D120F]/50 text-[#C9C3B8] hover:border-[#B69B67]/40'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Property Type */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-2">
                        2. Property Environment
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {propertyOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setFormData({ ...formData, propertyType: option })}
                            className={`p-3 rounded-lg border text-left text-xs transition-all ${
                              formData.propertyType === option
                                ? 'border-[#B69B67] bg-[#222922] text-[#F5F2EC] font-medium'
                                : 'border-[#F5F2EC]/10 bg-[#0D120F]/50 text-[#C9C3B8] hover:border-[#B69B67]/40'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Area Size */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-2">
                        3. Estimated Landscape Scale
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {areaOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setFormData({ ...formData, areaSize: option })}
                            className={`p-3 rounded-lg border text-left text-xs transition-all ${
                              formData.areaSize === option
                                ? 'border-[#B69B67] bg-[#222922] text-[#F5F2EC] font-medium'
                                : 'border-[#F5F2EC]/10 bg-[#0D120F]/50 text-[#C9C3B8] hover:border-[#B69B67]/40'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="px-6 py-3 rounded-full bg-[#B69B67] text-[#0D120F] text-xs font-semibold uppercase tracking-widest hover:bg-[#F5F2EC] transition-colors flex items-center gap-2"
                      >
                        <span>Next: Contact Info</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g., Alexander Varma"
                          className="w-full p-3 rounded-lg bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full p-3 rounded-lg bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="alexander@example.com"
                          className="w-full p-3 rounded-lg bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-1">
                          Project Location (City / District)
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g., Wayanad, Kerala"
                          className="w-full p-3 rounded-lg bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[#B69B67] font-mono mb-1">
                        Specific Notes or Vision Brief
                      </label>
                      <textarea
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Tell us about key features like natural stone paving, infinity lawns, bio-ponds, or polyhouse requirements..."
                        className="w-full p-3 rounded-lg bg-[#0D120F] border border-[#F5F2EC]/10 text-xs text-[#F5F2EC] focus:border-[#B69B67] focus:outline-none"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-[#C9C3B8] hover:text-[#F5F2EC] underline"
                      >
                        ← Back to Preferences
                      </button>

                      <button
                        type="submit"
                        className="px-6 py-3 rounded-full bg-[#B69B67] text-[#0D120F] text-xs font-semibold uppercase tracking-widest hover:bg-[#F5F2EC] transition-colors flex items-center gap-2"
                      >
                        <span>Submit Booking Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-10 space-y-6"
            >
              <div className="w-16 h-16 rounded-full bg-[#B69B67]/20 border border-[#B69B67] flex items-center justify-center mx-auto text-[#B69B67]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif-editorial text-3xl text-[#F5F2EC]">
                Consultation Request Received
              </h3>
              <p className="text-xs text-[#C9C3B8]/80 max-w-md mx-auto font-light leading-relaxed">
                Thank you, <span className="text-[#F5F2EC] font-medium">{formData.name}</span>. A senior landscape architect from Green Kole Ventures will contact you via WhatsApp/Phone ({formData.phone}) within 24 hours.
              </p>
              <div className="pt-4">
                <button
                  onClick={resetAndClose}
                  className="px-8 py-3 rounded-full bg-[#222922] border border-[#B69B67]/40 text-[#F5F2EC] text-xs uppercase tracking-widest hover:border-[#B69B67]"
                >
                  Return to Website
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
