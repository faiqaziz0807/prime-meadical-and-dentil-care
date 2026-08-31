import React, { useState, useEffect } from 'react';
import { SERVICES_DATA, CLINIC_INFO } from '../data/clinicData';
import { AppointmentFormState } from '../types';
import { 
  X, 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Send, 
  CheckCircle2, 
  Sparkles,
  MessageSquare
} from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
}) => {
  const [formData, setFormData] = useState<AppointmentFormState>({
    fullName: '',
    phoneNumber: '',
    email: '',
    service: initialServiceId || 'general-dentistry',
    preferredDate: '',
    preferredTime: '06:00 PM',
    notes: '',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, service: initialServiceId }));
    }
  }, [initialServiceId]);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F2B5B]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-[#0F2B5B] hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSuccess ? (
          <div>
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00A896]/10 text-[#00A896] text-xs font-bold uppercase tracking-wider mb-2">
                <Calendar className="w-3.5 h-3.5" />
                <span>Prime Clinic Appointment</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#0F2B5B]">
                Book Dental Appointment
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Mon – Sat: 6:00 PM – 9:30 PM at Sir Syed Chowk, Tipu Road, Rawalpindi
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1">
                  Phone / WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="0300 1234567"
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1">
                  Treatment / Service
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 outline-hidden bg-white"
                >
                  {SERVICES_DATA.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title}
                    </option>
                  ))}
                  <option value="general-consultation">General Consultation & Scaling</option>
                  <option value="emergency">Emergency Toothache Relief</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0F2B5B] uppercase tracking-wider mb-1">
                    Time Slot <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 rounded-xl border border-slate-200 text-xs focus:border-[#00A896] focus:ring-2 focus:ring-[#00A896]/20 outline-hidden bg-white"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-2 bg-[#00A896] hover:bg-[#008f80] text-white py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm Consultation Request</span>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#00A896] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0F2B5B]">
              Appointment Booked!
            </h3>
            <p className="text-xs text-slate-600">
              We look forward to welcoming you at Sir Syed Chowk, Tipu Road, Rawalpindi.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl text-left text-xs space-y-1.5 text-slate-700">
              <p><strong>Name:</strong> {formData.fullName}</p>
              <p><strong>Service:</strong> {SERVICES_DATA.find(s => s.id === formData.service)?.title || formData.service}</p>
              <p><strong>Slot:</strong> {formData.preferredDate} ({formData.preferredTime})</p>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=${encodeURIComponent(
                  `Hi Dr. Tariq Mehmood, I have booked an appointment for ${formData.fullName} for ${formData.service} on ${formData.preferredDate} at ${formData.preferredTime}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#00A896] text-white py-3 rounded-xl font-bold text-xs shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send WhatsApp Reminder</span>
              </a>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="text-xs text-slate-500 font-bold py-2 hover:text-[#0F2B5B] cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
