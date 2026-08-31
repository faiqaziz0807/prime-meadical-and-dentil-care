import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/clinicData';
import { ServiceItem } from '../types';
import { 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Activity, 
  Zap, 
  HeartPulse, 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Calendar,
  Clock,
  Shield,
  HelpCircle
} from 'lucide-react';

interface ServicesSectionProps {
  onBookService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onBookService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Helper to render icon by name
  const renderIcon = (name: string, className = "w-7 h-7") => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Smile':
        return <Smile className={className} />;
      case 'ShieldCheck':
        return <ShieldCheck className={className} />;
      case 'Activity':
        return <Activity className={className} />;
      case 'Zap':
        return <Zap className={className} />;
      case 'HeartPulse':
      default:
        return <HeartPulse className={className} />;
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Medical & Dental Care</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B5B] tracking-tight">
            Our Specialized Clinical Treatments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Delivering personalized, high-precision dental and healthcare solutions using advanced technology and gentle techniques under the supervision of Dr. Tariq Mehmood.
          </p>
        </div>

        {/* Services Grid (3 Columns Desktop, 1 Column Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative overflow-hidden"
              >
                {/* Top decorative gradient accent on hover */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F2B5B] to-[#00A896] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-[#00A896]/10 text-[#00A896] group-hover:bg-[#00A896] group-hover:text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                      {renderIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 group-hover:bg-[#00A896]/10 group-hover:text-[#00A896] transition-colors">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-xl font-bold text-[#0F2B5B] group-hover:text-[#00A896] transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 mb-6 text-xs text-slate-700">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Learn More & Book */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-[#0F2B5B] hover:text-[#00A896] flex items-center gap-1 transition-colors cursor-pointer"
                    id={`learn-more-${service.id}`}
                  >
                    <span>Treatment Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <button
                    onClick={() => onBookService(service.id)}
                    className="text-xs font-bold bg-[#0F2B5B] hover:bg-[#00A896] text-white px-3.5 py-2 rounded-xl transition-all cursor-pointer shadow-xs"
                    id={`book-service-${service.id}`}
                  >
                    Book Treatment
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#0F2B5B] to-[#163a75] rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">Need assistance choosing the right dental treatment?</h4>
            <p className="text-sm text-slate-200">
              Schedule a preliminary consultation with Dr. Tariq Mehmood for an accurate diagnostic assessment.
            </p>
          </div>
          <button
            onClick={() => onBookService('general-dentistry')}
            className="shrink-0 bg-[#00A896] hover:bg-[#008f80] text-white font-bold px-6 py-3 rounded-full text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Consult Dr. Tariq Mehmood</span>
          </button>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F2B5B]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-[#0F2B5B] hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#00A896]/10 text-[#00A896] flex items-center justify-center shrink-0">
                {renderIcon(selectedService.iconName, 'w-8 h-8')}
              </div>
              <div>
                <span className="text-xs font-bold text-[#00A896] uppercase tracking-wider">
                  {selectedService.tag}
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F2B5B]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
              <div>
                <h4 className="font-bold text-[#0F2B5B] text-base mb-2">About this Treatment</h4>
                <p className="text-slate-600">{selectedService.fullDesc}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#0F2B5B] text-base mb-3">Key Treatment Advantages</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 bg-[#0F2B5B]/5 p-4 rounded-xl text-center border border-[#0F2B5B]/10">
                <div>
                  <span className="block text-[11px] text-slate-600 uppercase font-bold">Estimated Time</span>
                  <span className="text-xs font-bold text-[#0F2B5B]">{selectedService.duration}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-600 uppercase font-bold">Anesthesia</span>
                  <span className="text-xs font-bold text-[#0F2B5B]">{selectedService.anesthesia}</span>
                </div>
                <div>
                  <span className="block text-[11px] text-slate-600 uppercase font-bold">Recovery</span>
                  <span className="text-xs font-bold text-[#00A896]">{selectedService.recovery}</span>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl text-slate-600 hover:bg-slate-100 font-bold text-xs cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const id = selectedService.id;
                    setSelectedService(null);
                    onBookService(id);
                  }}
                  className="bg-[#00A896] hover:bg-[#008f80] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book for {selectedService.title}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
