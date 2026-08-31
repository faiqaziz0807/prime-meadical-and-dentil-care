import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { ClinicalGallery } from './components/ClinicalGallery';
import { AboutDoctor } from './components/AboutDoctor';
import { BeforeAfterGallery } from './components/BeforeAfterGallery';
import { LocationAndBooking } from './components/LocationAndBooking';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('general-dentistry');

  const handleOpenBooking = (serviceId?: string) => {
    if (serviceId) {
      setPreselectedService(serviceId);
    }
    setIsBookingModalOpen(true);
  };

  const handleExploreServices = () => {
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F2B5B] flex flex-col selection:bg-[#00A896]/20 selection:text-[#0F2B5B]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 2. Hero Section (Full-Width Auto-Slider) */}
        <HeroSlider 
          onOpenBooking={() => handleOpenBooking()} 
          onExploreServices={handleExploreServices}
        />

        {/* Trust Metrics & Clinical Assurances */}
        <TrustStats />

        {/* 3. Comprehensive Dental & Medical Services */}
        <ServicesSection 
          onBookService={(serviceId) => handleOpenBooking(serviceId)} 
        />

        {/* Clinical Operatory & Technology Gallery Showcase (matching reference design) */}
        <ClinicalGallery />

        {/* 4. About Clinic & Lead Doctor (Dr. Tariq Mehmood) */}
        <AboutDoctor onOpenBooking={() => handleOpenBooking()} />

        {/* 5. Before & After Treatment Gallery (Interactive Showcase) */}
        <BeforeAfterGallery onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Location, Timings & Interactive Appointment Booking Form */}
        <LocationAndBooking preselectedService={preselectedService} />

        {/* Patient Testimonials & Google Ratings */}
        <TestimonialsSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* 7. Comprehensive Full-Width Navy Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Global Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        initialServiceId={preselectedService}
      />

      {/* Floating Fast Action Buttons */}
      <FloatingActions onOpenBooking={() => handleOpenBooking()} />
    </div>
  );
}
