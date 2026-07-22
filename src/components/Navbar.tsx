'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '/projects' },
    { label: 'Services', href: '/services' },
    { label: 'Process', href: '/process' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2 glass-nav backdrop-blur-md shadow-2xl'
            : 'py-3 bg-gradient-to-b from-[#0D120F]/90 via-[#0D120F]/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Left: Menu Drawer Toggle or Quick Links */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] uppercase text-[#F5F2EC]/90 hover:text-[#B69B67] transition-colors py-1"
            >
              <Menu className="w-4 h-4 text-[#B69B67]" />
              <span className="hidden sm:inline">MENU</span>
            </button>

            {/* Subtle Desktop Inline Nav Links */}
            <nav className="hidden lg:flex items-center gap-6 pl-4 border-l border-[#F5F2EC]/15">
              {navLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] font-mono tracking-widest uppercase transition-colors ${
                    pathname === link.href ? 'text-[#B69B67]' : 'text-[#C9C3B8]/80 hover:text-[#F5F2EC]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Center: Primland-style Centered Brand Logo */}
          <Link href="/" className="flex flex-col items-center group py-1">
            <div className="relative h-12 w-48 sm:h-16 sm:w-64 transition-transform duration-300 group-hover:scale-[1.1]">
              <Image
                src="/assets/brand/logo.png"
                alt="Green Kole Ventures Logo"
                fill
                className="object-contain scale-[2.5] filter brightness-120 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                priority
              />
            </div>
          </Link>

          {/* Right: Inquire / Consultation Action */}
          <div className="flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6 pr-4 border-r border-[#F5F2EC]/15">
              {navLinks.slice(3).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[11px] font-mono tracking-widest uppercase transition-colors ${
                    pathname === link.href ? 'text-[#B69B67]' : 'text-[#C9C3B8]/80 hover:text-[#F5F2EC]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <button
              onClick={onOpenConsultation}
              className="text-xs font-mono tracking-[0.25em] uppercase text-[#F5F2EC] hover:text-[#B69B67] transition-colors py-1 flex items-center gap-1.5"
            >
              <span>INQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#B69B67]" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile & Desktop Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#0D120F]/98 backdrop-blur-2xl flex flex-col justify-between p-8 md:p-16"
          >
            {/* Top Bar inside Drawer */}
            <div className="flex items-center justify-between border-b border-[#F5F2EC]/10 pb-6">
              <div className="relative h-24 w-64 sm:h-32 sm:w-80">
                <Image
                  src="/assets/brand/logo.png"
                  alt="Green Kole Ventures Logo"
                  fill
                  className="object-contain object-left scale-125 filter brightness-110"
                />
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 p-2 rounded-full border border-[#F5F2EC]/20 text-[#F5F2EC] hover:border-[#B69B67] hover:text-[#B69B67] transition-all"
              >
                <span className="text-xs font-mono uppercase tracking-widest px-2">CLOSE</span>
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Links List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-auto py-12 max-w-5xl mx-auto w-full">
              <div className="space-y-6">
                <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B69B67]">
                  Navigation Index
                </span>
                <div className="flex flex-col gap-4">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-serif-editorial text-4xl md:text-5xl text-[#F5F2EC] hover:text-[#B69B67] transition-colors flex items-center justify-between group"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-6 h-6 text-[#B69B67] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Studio Direct Info in Drawer */}
              <div className="space-y-6 md:border-l md:border-[#F5F2EC]/10 md:pl-12 flex flex-col justify-center">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B69B67] block mb-2">
                    Studio Inquiries
                  </span>
                  <p className="font-serif-editorial text-2xl text-[#F5F2EC]">+91 83300 80387</p>
                  <p className="text-sm font-light text-[#C9C3B8] mt-1">greenkoleventures@gmail.com</p>
                </div>

                <div className="pt-4">
                  <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#B69B67] block mb-2">
                    Headquarters
                  </span>
                  <p className="text-xs text-[#C9C3B8]/90 font-light leading-relaxed">
                    Kerala, India • Managing luxury estates, hardscape architecture, and automated farm developments across South India.
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="w-full py-4 bg-[#B69B67] text-[#0D120F] text-xs font-mono font-semibold uppercase tracking-widest hover:bg-[#F5F2EC] transition-colors"
                  >
                    Book Private Consultation
                  </button>
                </div>
              </div>
            </div>

            {/* Footer inside Drawer */}
            <div className="border-t border-[#F5F2EC]/10 pt-6 flex justify-between items-center text-[10px] font-mono text-[#C9C3B8]/60 uppercase tracking-widest">
              <span>© {new Date().getFullYear()} Green Kole Ventures</span>
              <span>Kerala • South India</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
