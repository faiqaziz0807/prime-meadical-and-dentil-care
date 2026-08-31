import React, { useState, useRef, useCallback } from 'react';
import { BEFORE_AFTER_CASES } from '../data/clinicData';
import { 
  Sparkles, 
  ArrowLeftRight, 
  CheckCircle2, 
  Clock, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Award,
  Maximize2
} from 'lucide-react';

interface BeforeAfterGalleryProps {
  onOpenBooking: () => void;
}

export const BeforeAfterGallery: React.FC<BeforeAfterGalleryProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderContainerRef = useRef<HTMLDivElement | null>(null);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex] || BEFORE_AFTER_CASES[0];

  const updatePosition = useCallback((clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const position = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, position)));
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updatePosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    updatePosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const nextCase = () => {
    setActiveCaseIndex((prev) => (prev + 1) % BEFORE_AFTER_CASES.length);
    setSliderPosition(50);
  };

  const prevCase = () => {
    setActiveCaseIndex((prev) => (prev - 1 + BEFORE_AFTER_CASES.length) % BEFORE_AFTER_CASES.length);
    setSliderPosition(50);
  };

  return (
    <section id="before-after" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Clinical Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B5B] tracking-tight">
            Interactive Before & After Patient Transformations
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Slide left and right to see authentic clinical smile transformations performed by <span className="font-semibold text-[#0F2B5B]">Dr. Tariq Mehmood</span> at Prime Medical and Dental Care.
          </p>
        </div>

        {/* Case Study Selection Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8">
          {BEFORE_AFTER_CASES.map((item, idx) => {
            const isSelected = idx === activeCaseIndex;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#0F2B5B] text-white shadow-lg shadow-[#0F2B5B]/20 scale-102 ring-2 ring-[#00A896]'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-xs'
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#00A896]' : 'bg-slate-400'}`}></span>
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Slider Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left Col: Interactive Draggable Before/After Comparison Image Stage */}
            <div className="lg:col-span-7">
              <div className="space-y-4">
                
                {/* Image Container with Clip-Path Slider */}
                <div 
                  ref={sliderContainerRef}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  onClick={(e) => updatePosition(e.clientX)}
                  className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] bg-slate-900 select-none cursor-ew-resize border border-slate-200 group"
                  role="slider"
                  aria-valuenow={Math.round(sliderPosition)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label="Before and after transformation slider"
                >
                  {/* Layer 1: AFTER Image (Underneath) */}
                  <img
                    src={currentCase.afterImage}
                    alt={`${currentCase.title} - After`}
                    className="absolute inset-0 w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    draggable={false}
                  />
                  
                  {/* AFTER Badge */}
                  <div className="absolute top-4 right-4 bg-[#00A896] text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md z-10 flex items-center gap-1.5 backdrop-blur-xs">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>AFTER TREATMENT</span>
                  </div>

                  {/* Layer 2: BEFORE Image (Clipped with polygon) */}
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
                    }}
                  >
                    <img
                      src={currentCase.beforeImage}
                      alt={`${currentCase.title} - Before`}
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      draggable={false}
                    />
                    
                    {/* BEFORE Badge */}
                    <div className="absolute top-4 left-4 bg-[#0F2B5B]/90 text-white text-xs font-extrabold px-3.5 py-1.5 rounded-full shadow-md z-10 flex items-center gap-1.5 backdrop-blur-xs">
                      <span>BEFORE TREATMENT</span>
                    </div>
                  </div>

                  {/* Layer 3: Draggable Vertical Divider Bar & Thumb */}
                  <div
                    className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] z-20 pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    {/* Centered Circular Handle */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white text-[#0F2B5B] shadow-2xl border-3 border-[#00A896] flex items-center justify-center pointer-events-auto transition-transform group-hover:scale-110">
                      <ArrowLeftRight className="w-5 h-5 text-[#00A896]" />
                    </div>
                  </div>

                  {/* Hover / Instruction hint */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full pointer-events-none flex items-center gap-1.5 opacity-90">
                    <ArrowLeftRight className="w-3 h-3 text-[#00A896]" />
                    <span>Drag or click left & right</span>
                  </div>
                </div>

                {/* Slider Presets & Navigation Buttons */}
                <div className="flex items-center justify-between gap-2 pt-1">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => setSliderPosition(0)}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                        sliderPosition <= 5 
                          ? 'bg-[#00A896] text-white border-[#00A896]' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      100% After
                    </button>
                    <button
                      onClick={() => setSliderPosition(50)}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                        sliderPosition > 40 && sliderPosition < 60 
                          ? 'bg-[#0F2B5B] text-white border-[#0F2B5B]' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      50 / 50 Split
                    </button>
                    <button
                      onClick={() => setSliderPosition(100)}
                      className={`text-[11px] font-bold px-2.5 py-1 rounded-lg border transition-colors cursor-pointer ${
                        sliderPosition >= 95 
                          ? 'bg-red-600 text-white border-red-600' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      100% Before
                    </button>
                  </div>

                  {/* Next / Prev case controls */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevCase}
                      aria-label="Previous case"
                      className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-bold text-slate-600 px-1">
                      {activeCaseIndex + 1} / {BEFORE_AFTER_CASES.length}
                    </span>
                    <button
                      onClick={nextCase}
                      aria-label="Next case"
                      className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Col: Treatment Details & Case Summary */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{currentCase.category}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2B5B]">
                  {currentCase.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {currentCase.description}
                </p>
              </div>

              {/* Transformation Comparison Bullet Points */}
              <div className="space-y-2.5">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0F2B5B] mt-1 shrink-0"></span>
                  <div>
                    <p className="text-[11px] font-bold text-[#0F2B5B] uppercase tracking-wider">Initial Condition</p>
                    <p className="text-xs text-slate-700 font-medium">{currentCase.beforeLabel}</p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-[#00A896]/5 border border-[#00A896]/20 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#00A896] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[11px] font-bold text-[#00A896] uppercase tracking-wider">Achieved Outcome</p>
                    <p className="text-xs text-slate-800 font-semibold">{currentCase.afterLabel}</p>
                  </div>
                </div>
              </div>

              {/* Treatment Specifications */}
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-0.5">
                  <span className="text-slate-500 flex items-center gap-1 text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-[#00A896]" />
                    <span>Duration</span>
                  </span>
                  <p className="font-bold text-[#0F2B5B]">{currentCase.duration}</p>
                </div>

                <div className="space-y-0.5">
                  <span className="text-slate-500 flex items-center gap-1 text-[11px]">
                    <Calendar className="w-3.5 h-3.5 text-[#00A896]" />
                    <span>Appointments</span>
                  </span>
                  <p className="font-bold text-[#0F2B5B]">{currentCase.sessions}</p>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full bg-[#00A896] hover:bg-[#008f80] text-white py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg shadow-[#00A896]/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Consultation for This Treatment</span>
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2">
                  Clinical procedures performed by Dr. Tariq Mehmood (BDS, RDS).
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* 3 Quick Preview Cards at Bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
          {BEFORE_AFTER_CASES.map((item, idx) => {
            const isSelected = idx === activeCaseIndex;
            return (
              <div
                key={item.id}
                onClick={() => {
                  setActiveCaseIndex(idx);
                  setSliderPosition(50);
                  const el = document.getElementById('before-after');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-white border-[#00A896] shadow-md ring-2 ring-[#00A896]/20'
                    : 'bg-white/80 hover:bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#00A896] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    {item.duration}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#0F2B5B] mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#00A896] font-bold">
                  <span>View Comparison Slider</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
