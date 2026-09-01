import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['home', 'services', 'doctor', 'gallery', 'before-after', 'location', 'faqs'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About Doctor', href: '#doctor', id: 'doctor' },
    { label: 'Before & After', href: '#before-after', id: 'before-after' },
    { label: 'Location & Timings', href: '#location', id: 'location' },
    { label: 'FAQs', href: '#faqs', id: 'faqs' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* Top Bar for Clinic Details - Centered & Compact (Location removed per user request) */}
      <div className={`bg-[#0F2B5B] text-white text-xs py-1.5 px-4 border-b border-white/10 transition-all duration-300 ${
        isScrolled ? 'hidden md:block md:py-1 opacity-90' : 'block'
      }`}>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-1.5 text-center">
          <div className="flex items-center justify-center gap-1.5 text-slate-200">
            <Clock className="w-3.5 h-3.5 text-[#00A896] shrink-0" />
            <span className="font-semibold text-emerald-300">Mon – Sat: 6:00 PM – 9:30 PM</span>
            <span className="text-slate-400 text-[11px]">(Sun Closed)</span>
          </div>

          <a 
            href={`tel:${CLINIC_INFO.phone}`}
            className="flex items-center justify-center gap-1.5 text-slate-200 hover:text-white font-medium transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#00A896] shrink-0" />
            <span>{CLINIC_INFO.phoneDisplay}</span>
          </a>

          <a 
            href={CLINIC_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:bg-[#00A896] transition-all flex items-center justify-center gap-1 text-[11px] font-semibold bg-white/10 px-2.5 py-0.5 rounded-md"
          >
            <span>View Map</span>
            <ChevronRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-200/80' 
          : 'bg-white shadow-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="focus:outline-none"
            id="nav-logo-link"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  id={`nav-item-${link.id}`}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-[#00A896] bg-[#00A896]/10'
                      : 'text-[#0F2B5B] hover:text-[#00A896] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking()}
              id="header-book-appointment-btn"
              className="inline-flex items-center gap-2 bg-[#00A896] hover:bg-[#008f80] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenBooking()}
              className="sm:hidden bg-[#00A896] text-white p-2 rounded-lg text-xs font-semibold flex items-center gap-1"
            >
              <Calendar className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              id="mobile-nav-toggle-btn"
              className="p-2.5 rounded-lg text-[#0F2B5B] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`block px-4 py-2.5 rounded-lg text-base font-semibold ${
                  activeSection === link.id
                    ? 'text-[#00A896] bg-[#00A896]/10'
                    : 'text-[#0F2B5B] hover:bg-slate-50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-3">
            <div className="bg-slate-50 p-3 rounded-xl text-xs space-y-1 text-slate-600">
              <p className="font-semibold text-[#0F2B5B] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#00A896]" />
                Mon – Sat: 6:00 PM – 9:30 PM
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#00A896]" />
                Sir Syed Chowk, Tipu Road, Rawalpindi
              </p>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              id="mobile-drawer-book-btn"
              className="w-full flex items-center justify-center gap-2 bg-[#00A896] hover:bg-[#008f80] text-white py-3 rounded-xl font-bold shadow-md text-sm cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
