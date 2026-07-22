'use client';

import React, { useState, createContext, useContext } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConsultationModal from '@/components/ConsultationModal';

interface ConsultationContextType {
  openConsultation: () => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType>({
  openConsultation: () => {},
  closeConsultation: () => {},
});

export const useConsultation = () => useContext(ConsultationContext);

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openConsultation = () => setIsConsultationOpen(true);
  const closeConsultation = () => setIsConsultationOpen(false);

  return (
    <ConsultationContext.Provider value={{ openConsultation, closeConsultation }}>
      <Navbar onOpenConsultation={openConsultation} />
      <main className="min-h-screen pt-0">{children}</main>
      <Footer onOpenConsultation={openConsultation} />
      <ConsultationModal isOpen={isConsultationOpen} onClose={closeConsultation} />
    </ConsultationContext.Provider>
  );
}
