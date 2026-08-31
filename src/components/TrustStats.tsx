import React from 'react';
import { TRUST_METRICS } from '../data/clinicData';
import { Award, Users, ShieldCheck, Star, Sparkles, Stethoscope, Clock, CheckCircle2 } from 'lucide-react';

export const TrustStats: React.FC = () => {
  const icons = [Award, Users, ShieldCheck, Star];

  const assurances = [
    {
      icon: ShieldCheck,
      title: 'Class-B Autoclave Hygiene',
      desc: 'Hospital-grade triple-vacuum sterilization for 100% infection-free safety.'
    },
    {
      icon: Sparkles,
      title: 'Painless Gentle Procedures',
      desc: 'Modern anesthesia delivery and rotary techniques minimizing patient discomfort.'
    },
    {
      icon: Stethoscope,
      title: 'Advanced Digital Diagnostics',
      desc: 'High-definition digital imaging and intraoral diagnostics for accurate plans.'
    },
    {
      icon: Clock,
      title: 'Convenient Evening Timings',
      desc: 'Mon – Sat: 6:00 PM to 9:30 PM. Perfect for after-work and school visits.'
    }
  ];

  return (
    <div className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Metric Cards Banner */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
          {TRUST_METRICS.map((metric, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-4 md:pt-0' : ''}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-[#00A896]/10 text-[#00A896] flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2B5B] tracking-tight">
                  {metric.value}
                </span>
                <span className="text-sm font-bold text-slate-800 mt-1">
                  {metric.label}
                </span>
                <p className="text-xs text-slate-600 mt-0.5 max-w-[200px]">
                  {metric.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* 4 Assurances Strip */}
        <div className="mt-8 pt-8 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {assurances.map((item, idx) => {
            const AssureIcon = item.icon;
            return (
              <div 
                key={idx} 
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-[#00A896]/5 transition-colors border border-slate-100/80"
              >
                <div className="p-2 rounded-lg bg-white shadow-xs text-[#00A896] shrink-0">
                  <AssureIcon className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-[#0F2B5B]">{item.title}</h3>
                  <p className="text-[11px] text-slate-600 leading-snug mt-0.5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
