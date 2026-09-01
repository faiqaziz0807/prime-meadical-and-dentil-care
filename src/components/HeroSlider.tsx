import React, { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES, CLINIC_INFO } from '../data/clinicData';
import { 
  Calendar, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Star, 
  Clock, 
  Award,
  ArrowRight
} from 'lucide-react';

interface HeroSliderProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenBooking,
  onExploreServices,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 5 seconds exact autoplay interval
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPaused, currentSlide]);

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[640px] lg:min-h-[720px] xl:min-h-[780px] flex items-center pt-28 pb-16 overflow-hidden bg-[#0F2B5B]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Image Carousel with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                isActive ? 'opacity-100 scale-100 z-1' : 'opacity-0 scale-102 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.headline}
                className="w-full h-full object-cover object-center blur-[3px] sm:blur-[4px] scale-105 opacity-65 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}

        {/* Dimmed Navy & Teal Gradient Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-[#0F2B5B]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B]/95 via-[#0F2B5B]/80 to-[#0F2B5B]/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B5B]/90 via-transparent to-[#0F2B5B]/50"></div>
        
        {/* Subtle decorative glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00A896]/20 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-8 text-white space-y-6">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00A896] text-xs sm:text-sm font-semibold tracking-wider shadow-sm max-w-full overflow-hidden">
              <span className="w-2 h-2 rounded-full bg-[#00A896] animate-ping shrink-0"></span>
              <span className="text-teal-300 font-bold uppercase tracking-wider text-[11px] sm:text-xs whitespace-nowrap">Premium Healthcare</span>
              <span className="text-white/40 shrink-0">•</span>
              <span className="text-white font-medium whitespace-nowrap truncate">Dr. Tariq Mehmood</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
              Your Journey to a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A896] via-teal-300 to-cyan-200">
                Perfect Smile
              </span>{' '}
              & Optimal Health
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
              Expert Dental & Medical Care led by{' '}
              <span className="text-white font-semibold underline decoration-[#00A896] underline-offset-4">
                Dr. Tariq Mehmood
              </span>{' '}
              in the heart of Rawalpindi. Offering advanced, painless dentistry, dental implants, smile makeovers, and hygienic treatment protocols.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                id="hero-primary-book-appointment-btn"
                className="group inline-flex items-center justify-center gap-3 bg-[#00A896] hover:bg-[#008f80] text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-[#00A896]/20 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span>Book Appointment</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreServices}
                id="hero-secondary-explore-services-btn"
                className="inline-flex items-center justify-center gap-2.5 bg-white text-[#0F2B5B] hover:bg-slate-100 px-8 py-3.5 rounded-lg font-bold text-sm shadow-xl transition-all duration-200 cursor-pointer"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Reassurance Features */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/15">
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                <div className="p-1.5 rounded-lg bg-[#00A896]/20 text-[#00A896] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span>Class-B Sterilization</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm">
                <div className="p-1.5 rounded-lg bg-[#00A896]/20 text-[#00A896] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span>Painless Anesthesia</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-xs sm:text-sm col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-lg bg-[#00A896]/20 text-[#00A896] shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <span>Evening 6:00 – 9:30 PM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Mini Interactive Card / Clinic Badge */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl text-white space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shadow-md">
                    <img 
                      src={CLINIC_INFO.logo} 
                      alt="Logo" 
                      className="w-full h-full object-cover rounded-full" 
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-white leading-tight">Dr. Tariq Mehmood</h2>
                    <p className="text-xs text-teal-300 font-medium">BDS, RDS, Senior Dental Surgeon</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 bg-amber-400/20 text-amber-300 px-2.5 py-1 rounded-full text-xs font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-slate-200">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Location:</span>
                  <span className="font-semibold text-right">Sir Syed Chowk, Tipu Rd, Rawalpindi</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Clinic Hours:</span>
                  <span className="font-semibold text-emerald-300">Mon - Sat: 6:00 PM - 9:30 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Emergency & Booking:</span>
                  <span className="font-semibold text-white">{CLINIC_INFO.phoneDisplay}</span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full bg-white hover:bg-slate-100 text-[#0F2B5B] py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#00A896]" />
                <span>Reserve Appointment Slot</span>
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slider Controls & Progress Indicator */}
        <div className="mt-8 flex items-center justify-between">
          {/* Navigation Dots with 5-second progress indicator */}
          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => {
              const isActive = idx === currentSlide;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 relative overflow-hidden cursor-pointer ${
                    isActive 
                      ? 'w-10 bg-white/20' 
                      : 'w-2.5 bg-white/30 hover:bg-white/60'
                  }`}
                >
                  {isActive && (
                    <div 
                      key={`progress-${currentSlide}`}
                      className="absolute inset-0 bg-[#00A896] rounded-full animate-[progress_5000ms_linear_forwards]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Next / Previous Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={goToPrev}
              aria-label="Previous Slide"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              aria-label="Next Slide"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
