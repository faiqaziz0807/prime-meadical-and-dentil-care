export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
  iconName: string;
  benefits: string[];
  duration: string;
  anesthesia: string;
  recovery: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  duration: string;
  sessions: string;
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  area: string;
  rating: number;
  treatment: string;
  comment: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'treatments' | 'appointments';
}

export interface AppointmentFormState {
  fullName: string;
  phoneNumber: string;
  email?: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
