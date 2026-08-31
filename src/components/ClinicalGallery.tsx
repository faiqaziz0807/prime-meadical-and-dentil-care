import React from 'react';
import { GALLERY_ITEMS } from '../data/clinicData';
import { Sparkles, Camera, Eye } from 'lucide-react';

export const ClinicalGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-white border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider mb-2">
              <Camera className="w-3.5 h-3.5" />
              <span>Modern Clinical Facility</span>
            </div>
            <h2 className="text-3xl font-extrabold text-[#0F2B5B] tracking-tight">
              Clinical Excellence in Action
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Inside Prime Medical and Dental Care: spotless sterilized environment, high-tech diagnostic monitors, and patient-centered care.
            </p>
          </div>
          <div className="text-xs text-slate-600 bg-slate-50 border border-slate-200 px-4 py-2 rounded-xl self-start md:self-auto">
            <span className="font-bold text-[#0F2B5B]">Hygiene Standard:</span> 100% Autoclaved & Single-Use Consumables
          </div>
        </div>

        {/* 4 Photo Grid Showcase matching the reference wireframe layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div 
              key={index}
              className="group relative bg-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Gradient Overlay & Content */}
              <div className="p-4 bg-white">
                <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#00A896]/10 text-[#00A896] mb-1.5">
                  {item.tag}
                </div>
                <h3 className="text-sm font-bold text-[#0F2B5B] group-hover:text-[#00A896] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
