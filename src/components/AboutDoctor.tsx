import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Award, 
  CheckCircle, 
  ShieldCheck, 
  Stethoscope, 
  Sparkles, 
  GraduationCap, 
  Clock, 
  Calendar,
  PhoneCall,
  CheckCircle2
} from 'lucide-react';

interface AboutDoctorProps {
  onOpenBooking: () => void;
}

export const AboutDoctor: React.FC<AboutDoctorProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'hygiene' | 'technology'>('overview');

  const qualifications = [
    'BDS (Bachelor of Dental Surgery)',
    'RDS (Registered Dental Surgeon)',
    'Advanced Certification in Aesthetic & Restorative Dentistry',
    'Specialist Training in Rotary Endodontics & Dental Implantology',
    'Member of Pakistan Medical & Dental Council (PMDC)',
  ];

  return (
    <section id="doctor" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2B5B]/5 text-[#0F2B5B] text-xs font-bold uppercase tracking-wider">
            <Stethoscope className="w-3.5 h-3.5 text-[#00A896]" />
            <span>About the Clinic & Meet the Lead Doctor</span>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B5B] tracking-tight">
            Compassionate, Precision-Driven Dental Care
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Dedicated to providing world-class oral health and restorative treatments in a hygienic, tranquil atmosphere in Rawalpindi.
          </p>
        </div>

        {/* 2-Column Split: Image Left, Text Right (Matching Wireframe Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Column A: Doctor's Professional Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background framing */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#0F2B5B] to-[#00A896] rounded-3xl opacity-15 transform rotate-1 blur-sm"></div>
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src={CLINIC_INFO.doctorPhoto}
                  alt="Dr. Tariq Mehmood - Lead Dental Surgeon"
                  className="w-full h-auto object-cover object-center aspect-[4/5]"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Experience Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#00A896]/10 text-[#00A896] flex items-center justify-center font-bold">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#0F2B5B]">Dr. Tariq Mehmood</h4>
                      <p className="text-[11px] text-slate-600">Senior Consultant Dental Surgeon</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold bg-[#00A896] text-white px-2.5 py-1 rounded-full shadow-md shadow-[#00A896]/20">
                    15+ Yrs Exp
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column B: Doctor Bio & Clinic Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#00A896] uppercase tracking-wider mb-1">
                <span>Lead Specialist & Senior Consultant</span>
              </div>
              <h3 className="text-3xl font-extrabold text-[#0F2B5B]">
                Dr. Tariq Mehmood
              </h3>
              <p className="text-sm font-semibold text-slate-600 mt-1">
                Expertise in high-precision dental surgery and holistic patient care with over 15 years of clinical excellence.
              </p>
              
              <div className="flex items-center gap-2 mt-3 text-xs font-semibold overflow-x-auto no-scrollbar py-1">
                <span className="bg-[#0F2B5B]/10 text-[#0F2B5B] px-3 py-1 rounded-full border border-[#0F2B5B]/15 whitespace-nowrap shrink-0">BDS, RDS</span>
                <span className="bg-[#00A896]/10 text-[#00A896] px-3 py-1 rounded-full border border-[#00A896]/20 whitespace-nowrap shrink-0">Implantologist</span>
                <span className="bg-[#00A896]/10 text-[#00A896] px-3 py-1 rounded-full border border-[#00A896]/20 whitespace-nowrap shrink-0">Cosmetic Specialist</span>
                <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200 whitespace-nowrap shrink-0">PMDC Registered</span>
              </div>
            </div>

            {/* Interactive Tabs - Single Line Layout */}
            <div className="flex border-b border-slate-200 gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveTab('overview')}
                className={`pb-2.5 text-xs sm:text-sm font-bold transition-all border-b-2 whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'overview'
                    ? 'border-[#00A896] text-[#00A896]'
                    : 'border-transparent text-slate-600 hover:text-[#0F2B5B]'
                }`}
              >
                Doctor Profile & Vision
              </button>
              <button
                onClick={() => setActiveTab('hygiene')}
                className={`pb-2.5 text-xs sm:text-sm font-bold transition-all border-b-2 whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'hygiene'
                    ? 'border-[#00A896] text-[#00A896]'
                    : 'border-transparent text-slate-600 hover:text-[#0F2B5B]'
                }`}
              >
                Sterilization Protocols
              </button>
              <button
                onClick={() => setActiveTab('technology')}
                className={`pb-2.5 text-xs sm:text-sm font-bold transition-all border-b-2 whitespace-nowrap shrink-0 cursor-pointer ${
                  activeTab === 'technology'
                    ? 'border-[#00A896] text-[#00A896]'
                    : 'border-transparent text-slate-600 hover:text-[#0F2B5B]'
                }`}
              >
                Modern Technology
              </button>
            </div>

            {/* Tab Contents */}
            {activeTab === 'overview' && (
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed animate-in fade-in duration-200">
                <p>
                  At <strong className="text-[#0F2B5B]">Prime Medical and Dental Care</strong>, Dr. Tariq Mehmood brings over 15 years of dedicated clinical expertise in restorative, aesthetic, and surgical dentistry to patients in Rawalpindi and the Twin Cities.
                </p>
                <p>
                  His clinical philosophy is anchored in <span className="text-[#0F2B5B] font-semibold">patient-first empathy, gentle pain-free techniques</span>, and meticulous craftsmanship. Whether performing routine teeth scaling, intricate root canal therapies, or complete smile design restorations, Dr. Tariq ensures every patient receives customized, unhurried care.
                </p>

                {/* Qualifications List */}
                <div className="pt-2">
                  <h4 className="text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-[#00A896]" />
                    <span>Credentials & Qualifications</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {qualifications.map((qual, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00A896] shrink-0" />
                        <span className="text-slate-700">{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'hygiene' && (
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed animate-in fade-in duration-200">
                <p>
                  Patient safety is our uncompromised priority. We adhere to international CDC & WHO dental infection control guidelines.
                </p>
                <div className="space-y-2.5 bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2B5B] block">Class-B Triple-Vacuum Autoclave:</strong>
                      Instruments are sterilized under high pressure and temperature with sterile pouch packaging opened directly in front of you.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2B5B] block">100% Single-Use Disposables:</strong>
                      Syringes, suction tips, gloves, and patient drapes are disposed of immediately after each procedure.
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#00A896] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0F2B5B] block">Surface Chemical Disinfection:</strong>
                      Operatory chairs and surfaces undergo medical-grade disinfectant wipedown between every single patient visit.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'technology' && (
              <div className="space-y-4 text-sm text-slate-700 leading-relaxed animate-in fade-in duration-200">
                <p>
                  Modern technology ensures higher diagnostic accuracy, shorter chair-side times, and long-lasting clinical results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-[#0F2B5B] mb-1">Rotary Endodontics</h5>
                    <p className="text-slate-600">Computer-guided motor files that clean root canals gently in single-sitting treatments.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-[#0F2B5B] mb-1">Digital Intraoral Radiography</h5>
                    <p className="text-slate-600">Ultra-low radiation digital X-rays offering instant high-resolution tooth visualization.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-[#0F2B5B] mb-1">Ultrasonic Piezo Scaling</h5>
                    <p className="text-slate-600">Vibrational plaque removal preserving the delicate tooth enamel and gum tissues.</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <h5 className="font-bold text-[#0F2B5B] mb-1">Laser Teeth Whitening</h5>
                    <p className="text-slate-600">Advanced light activation accelerating whitening gels for safe, brilliant results.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Doctor Card Footer & Timings */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                id="about-doctor-book-appointment-btn"
                className="bg-[#00A896] hover:bg-[#008f80] text-white px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all cursor-pointer flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation with Dr. Tariq</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="bg-slate-100 hover:bg-slate-200 text-[#0F2B5B] px-5 py-3 rounded-full font-bold text-sm transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#00A896]" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
