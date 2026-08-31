import React from 'react';
import { TESTIMONIALS } from '../data/clinicData';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#00A896]" />
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B5B] tracking-tight">
            Loved by Thousands of Patients in Rawalpindi
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Read genuine feedback from patients who entrusted their smile and oral health to Dr. Tariq Mehmood.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 flex flex-col justify-between hover:border-[#00A896] hover:shadow-lg transition-all"
            >
              <div>
                {/* Rating stars & Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-[#0F2B5B] flex items-center gap-1">
                      <span>{review.patientName}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00A896]" />
                    </h4>
                    <p className="text-[11px] text-slate-600">{review.area}</p>
                  </div>
                  <span className="text-[10px] bg-[#00A896]/10 text-[#00A896] font-bold px-2 py-0.5 rounded">
                    {review.treatment.split('&')[0]}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
