'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop screens
    if (window.innerWidth < 768) return;
    document.body.classList.add('custom-cursor-active');

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check hover targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const hoverable = target.closest('[data-cursor]');
      if (hoverable) {
        const text = hoverable.getAttribute('data-cursor') || '';
        setCursorText(text);
        setIsHovered(true);
      } else if (target.closest('a, button, input, select, textarea, [role="button"]')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Primary Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovered ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#F5F2EC]" />
      </motion.div>

      {/* Outer Ring / Cursor Bubble */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center rounded-full border border-[#B69B67]/40 bg-[#161C18]/60 backdrop-blur-xs text-[#F5F2EC] text-[10px] font-medium uppercase tracking-widest"
        animate={{
          x: mousePosition.x - (isHovered ? (cursorText ? 40 : 20) : 16),
          y: mousePosition.y - (isHovered ? (cursorText ? 40 : 20) : 16),
          width: isHovered ? (cursorText ? 80 : 40) : 32,
          height: isHovered ? (cursorText ? 80 : 40) : 32,
          opacity: 1,
          borderColor: isHovered ? 'rgba(182, 155, 103, 0.8)' : 'rgba(182, 155, 103, 0.3)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.2 }}
      >
        {cursorText && (
          <span className="px-1 text-center font-sans tracking-widest text-[#B69B67]">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
}
