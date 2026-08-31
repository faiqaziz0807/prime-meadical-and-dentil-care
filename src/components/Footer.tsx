import React from 'react';
import { Logo } from './Logo';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  ShieldCheck, 
  Heart,
  Calendar
} from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services & Treatments', href: '#services' },
    { label: 'About Dr. Tariq Mehmood', href: '#doctor' },
    { label: 'Patient Transformations', href: '#before-after' },
    { label: 'Location & Evening Timings', href: '#location' },
    { label: 'Clinic FAQs', href: '#faqs' },
  ];

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0F2B5B] text-slate-300 font-sans border-t border-white/10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00A896]/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Clinic Vision (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="footer" size="md" />
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm pt-2">
              Prime Medical and Dental Care is Rawalpindi’s premier clinic for advanced aesthetic dentistry, root canal therapy, dental implants, and compassionate medical care under the clinical leadership of <strong className="text-white">Dr. Tariq Mehmood</strong>.
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={onOpenBooking}
                className="bg-[#00A896] hover:bg-[#008f80] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </button>

              <a
                href={CLINIC_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-[#00A896]" />
                <span>Google Maps</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="hover:text-[#00A896] transition-colors flex items-center gap-1 text-slate-300 hover:translate-x-1 duration-150"
                  >
                    <ChevronRight className="w-3 h-3 text-[#00A896]" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Treatments (2.5 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Dental Treatments
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick('#services');
                    }}
                    className="hover:text-[#00A896] transition-colors flex items-center justify-between text-slate-300"
                  >
                    <span>{srv.title}</span>
                    <span className="text-[10px] text-teal-400/80">{srv.tag}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Timings (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider border-b border-white/10 pb-2">
              Contact & Timings
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">{CLINIC_INFO.address}</p>
                  <p className="text-slate-400 text-[11px]">{CLINIC_INFO.landmark}</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                <div>
                  <p className="text-emerald-300 font-semibold">{CLINIC_INFO.timings}</p>
                  <p className="text-slate-400 text-[11px]">Sunday: Closed</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${CLINIC_INFO.phone}`} className="text-white font-medium hover:text-[#00A896]">
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                  <p className="text-slate-400 text-[11px]">Dr. Tariq Mehmood (Senior Consultant)</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-white/10 hover:bg-white/20 text-white py-2 rounded-lg text-xs font-semibold transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#00A896]" />
                  <span>Direct Google Maps Location</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Guarantee */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Prime Medical and Dental Care. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00A896]" />
              <span>Certified Infection Control</span>
            </span>
            <span>•</span>
            <span>Rawalpindi, Pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
