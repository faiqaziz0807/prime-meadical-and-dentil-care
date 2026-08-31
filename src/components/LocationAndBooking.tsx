import React, { useState, useEffect } from 'react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import { AppointmentFormState } from '../types';
import { 
  MapPin, 
  Clock, 
  Calendar, 
  Phone, 
  Mail, 
  User, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  MessageSquare,
  Building2,
  CalendarCheck,
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';

interface LocationAndBookingProps {
  preselectedService?: string;
}

export const LocationAndBooking: React.FC<LocationAndBookingProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<AppointmentFormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    service: preselectedService || 'general-dentistry',
    preferredDate: '',
    preferredTime: '06:00 PM',
    notes: '',
  });

  const [isOpenNow, setIsOpenNow] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submittedAppointment, setSubmittedAppointment] = useState<AppointmentFormState | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  // Check if clinic is open (Mon-Sat 6:00 PM - 9:30 PM Pakistan Time UTC+5)
  useEffect(() => {
    const checkClinicOpen = () => {
      const now = new Date();
      // Pakistan is UTC+5
      const pkTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Karachi" }));
      const day = pkTime.getDay(); // 0 is Sunday, 1-6 is Mon-Sat
      const hours = pkTime.getHours();
      const minutes = pkTime.getMinutes();
      const totalMinutes = hours * 60 + minutes;

      // 6:00 PM is 18:00 (1080 mins), 9:30 PM is 21:30 (1290 mins)
      if (day >= 1 && day <= 6 && totalMinutes >= 1080 && totalMinutes <= 1290) {
        setIsOpenNow(true);
      } else {
        setIsOpenNow(false);
      }
    };

    checkClinicOpen();
    const interval = setInterval(checkClinicOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client-side submission & validation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedAppointment({ ...formData });
    }, 600);
  };

  const handleCopyDetails = () => {
    if (!submittedAppointment) return;
    const text = `Prime Medical & Dental Care Appointment:
Patient: ${submittedAppointment.fullName}
Phone: ${submittedAppointment.phoneNumber}
Service: ${SERVICES_DATA.find(s => s.id === submittedAppointment.service)?.title || submittedAppointment.service}
Date: ${submittedAppointment.preferredDate || 'Earliest Available'}
Time: ${submittedAppointment.preferredTime}
Location: Sir Syed Chowk, Tipu Road, Rawalpindi (Dr. Tariq Mehmood)`;
    
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const timeSlots = [
    '06:00 PM',
    '06:30 PM',
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
    '09:00 PM',
  ];

  return (
    <section id="location" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F2B5B]/5 text-[#0F2B5B] text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5 text-[#00A896]" />
            <span>Visit Us & Schedule a Visit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2B5B] tracking-tight">
            Location, Timings & Appointment Booking
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Consult Dr. Tariq Mehmood at Sir Syed Chowk, Tipu Road, Rawalpindi. Easy online reservation with zero waiting hassle.
          </p>
        </div>

        {/* 2-Column Split Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Info Card & Location Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F2B5B] text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00A896]/15 rounded-full blur-2xl pointer-events-none"></div>

              {/* Status Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#00A896]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">Clinic Details</h3>
                    <p className="text-xs text-slate-300">Dr. Tariq Mehmood</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/10 border border-white/20">
                  <span className={`w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
                  <span className={isOpenNow ? 'text-emerald-300' : 'text-amber-200'}>
                    {isOpenNow ? 'Open Right Now' : 'Opens at 6:00 PM'}
                  </span>
                </div>
              </div>

              {/* Detail Items */}
              <div className="space-y-5 pt-6 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-white/10 text-[#00A896] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs font-bold uppercase tracking-wider">
                      Clinic Address
                    </strong>
                    <p className="text-slate-200 font-medium mt-0.5">
                      {CLINIC_INFO.address}
                    </p>
                    <p className="text-xs text-teal-300 mt-0.5">
                      {CLINIC_INFO.landmark}
                    </p>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-white/10 text-[#00A896] shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full">
                    <strong className="block text-white text-xs font-bold uppercase tracking-wider">
                      Consultation Timings
                    </strong>
                    <p className="text-slate-200 font-semibold mt-0.5">
                      Monday to Saturday: <span className="text-emerald-300">6:00 PM – 9:30 PM</span>
                    </p>
                    <p className="text-xs text-slate-300">
                      Sunday: <span className="text-rose-300 font-medium">Closed</span> (Emergency on appointment)
                    </p>
                  </div>
                </div>

                {/* Lead Doctor */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-white/10 text-[#00A896] shrink-0 mt-0.5">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs font-bold uppercase tracking-wider">
                      Lead Dental Specialist
                    </strong>
                    <p className="text-slate-200 font-semibold mt-0.5">
                      {CLINIC_INFO.leadDoctor}
                    </p>
                    <p className="text-xs text-slate-300">
                      {CLINIC_INFO.doctorTitle}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Maps Action */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="open-google-maps-btn"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#00A896] hover:bg-[#008f80] text-white py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1" />
                </a>

                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl font-bold text-xs transition-all"
                >
                  <Phone className="w-4 h-4 text-[#00A896]" />
                  <span>{CLINIC_INFO.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Visual Location Preview Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 overflow-hidden">
              <div className="flex items-center justify-between text-xs font-bold text-[#0F2B5B] mb-2 px-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#00A896]" />
                  <span>Location Map Preview (Tipu Road)</span>
                </span>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00A896] hover:underline"
                >
                  Get Directions →
                </a>
              </div>
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-slate-200 border border-slate-200 relative">
                {/* Fallback interactive map view */}
                <iframe
                  title="Prime Medical and Dental Care Google Map"
                  src="https://maps.google.com/maps?q=Sir+Syed+Chowk,+Tipu+Road,+Rawalpindi&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Appointment Request Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="text-2xl font-extrabold text-[#0F2B5B]">
                    Book an Appointment
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Select your preferred treatment, date & evening time slot.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-[#00A896] font-bold bg-[#00A896]/10 px-3 py-1 rounded-full">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant Verification</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4" id="appointment-booking-form">
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="e.g., Muhammad Tariq"
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 text-sm transition-all outline-hidden text-[#0F2B5B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        name="phoneNumber"
                        required
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="0300 1234567"
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 text-sm transition-all outline-hidden text-[#0F2B5B]"
                      />
                    </div>
                  </div>
                </div>

                {/* Selected Service */}
                <div>
                  <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1.5">
                    Selected Dental / Medical Service <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 text-sm transition-all outline-hidden text-[#0F2B5B] bg-white"
                  >
                    {SERVICES_DATA.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.title} ({srv.tag})
                      </option>
                    ))}
                    <option value="general-consultation">General Consultation & Dental Checkup</option>
                    <option value="emergency">Emergency Dental Care</option>
                  </select>
                </div>

                {/* Preferred Date & Preferred Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1.5">
                      Preferred Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 text-sm transition-all outline-hidden text-[#0F2B5B]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1.5">
                      Preferred Evening Slot <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                        <Clock className="w-4 h-4" />
                      </div>
                      <select
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-slate-200 focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 text-sm transition-all outline-hidden text-[#0F2B5B] bg-white"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot} (Clinic Hours)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div>
                  <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1.5">
                    Describe Dental Concern / Message (Optional)
                  </label>
                  <textarea
                    name="notes"
                    rows={3}
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Describe any pain, previous treatments, or specific questions..."
                    className="w-full px-3.5 py-3 rounded-xl border border-slate-200 focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 text-sm transition-all outline-hidden text-[#0F2B5B] resize-none"
                  ></textarea>
                </div>

                {/* Submit CTA Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    id="confirm-appointment-request-btn"
                    className="w-full bg-[#00A896] hover:bg-[#008f80] text-white py-4 rounded-xl font-extrabold text-base shadow-lg hover:shadow-[#00A896]/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Processing Request...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Confirm Appointment Request</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-600 text-center mt-2.5">
                    ⚡ No advance payment required. Clinic staff will verify your slot via phone or WhatsApp.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Confirmation Success Modal */}
      {submittedAppointment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F2B5B]/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 text-center relative">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A896] flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl font-extrabold text-[#0F2B5B]">
              Appointment Request Received!
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Thank you, <strong className="text-[#0F2B5B]">{submittedAppointment.fullName}</strong>. Dr. Tariq Mehmood’s team at Prime Medical and Dental Care has recorded your consultation request.
            </p>

            {/* Summary Ticket */}
            <div className="mt-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left text-xs space-y-2 text-slate-700">
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-600 font-medium">Service:</span>
                <span className="font-bold text-[#0F2B5B]">
                  {SERVICES_DATA.find(s => s.id === submittedAppointment.service)?.title || submittedAppointment.service}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-600 font-medium">Preferred Slot:</span>
                <span className="font-bold text-[#00A896]">
                  {submittedAppointment.preferredDate || 'Earliest Date'} at {submittedAppointment.preferredTime}
                </span>
              </div>
              <div className="flex justify-between border-b border-slate-200/80 pb-2">
                <span className="text-slate-600 font-medium">Contact Phone:</span>
                <span className="font-bold text-[#0F2B5B]">{submittedAppointment.phoneNumber}</span>
              </div>
              <div className="flex justify-between pt-1">
                <span className="text-slate-600 font-medium">Location:</span>
                <span className="font-semibold text-right text-slate-800">
                  Sir Syed Chowk, Tipu Road, Rawalpindi
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 space-y-3">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(
                  `Hello Prime Medical and Dental Care, I have booked an appointment for ${submittedAppointment.fullName} on ${submittedAppointment.preferredDate} at ${submittedAppointment.preferredTime} for ${submittedAppointment.service}. Please confirm my slot.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#00A896] hover:bg-[#008f80] text-white py-3 rounded-xl font-bold text-sm shadow-md transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send WhatsApp Instant Confirmation</span>
              </a>

              <div className="flex gap-2">
                <button
                  onClick={handleCopyDetails}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied Details!' : 'Copy Summary'}</span>
                </button>

                <button
                  onClick={() => setSubmittedAppointment(null)}
                  className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-800 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
                >
                  Close & Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
