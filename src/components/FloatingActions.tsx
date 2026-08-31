import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, ArrowUp, Calendar, Phone } from 'lucide-react';

interface FloatingActionsProps {
  onOpenBooking: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenBooking }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* WhatsApp Quick Chat */}
      <a
        href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(
          'Hello Prime Medical and Dental Care! I would like to inquire about dental treatment and appointment with Dr. Tariq Mehmood.'
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        
        {/* Tooltip */}
        <span className="absolute right-15 bg-[#0F2B5B] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          WhatsApp Dr. Tariq's Clinic
        </span>
      </a>

      {/* Floating Fast Book Appointment */}
      <button
        onClick={onOpenBooking}
        aria-label="Book Appointment"
        className="pointer-events-auto group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#00A896] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <Calendar className="w-6 h-6" />
        
        {/* Tooltip */}
        <span className="absolute right-15 bg-[#0F2B5B] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Quick Book Slot
        </span>
      </button>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto flex items-center justify-center w-10 h-10 rounded-full bg-white/90 text-[#0F2B5B] border border-slate-200 shadow-md hover:bg-[#00A896] hover:text-white transition-all duration-200 cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
