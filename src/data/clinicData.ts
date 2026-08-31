import logoImg from '../assets/images/clinic_logo_seal_1788208342163.jpg';
import doctorImg from '../assets/images/dr_tariq_mehmood_1788208366467.jpg';
import heroImg1 from '../assets/images/hero_dental_treatment_1788208353640.jpg';
import heroImg2 from '../assets/images/hero_clinic_interior_1788208385762.jpg';
import heroImg3 from '../assets/images/hero_happy_smile_1788208399595.jpg';

import whiteningBeforeImg from '../assets/images/whitening_before_1788209139349.jpg';
import whiteningAfterImg from '../assets/images/whitening_after_1788209153725.jpg';
import bracesBeforeImg from '../assets/images/braces_before_1788209166137.jpg';
import bracesAfterImg from '../assets/images/braces_after_1788209181449.jpg';
import veneerBeforeImg from '../assets/images/veneer_before_1788209195887.jpg';
import veneerAfterImg from '../assets/images/veneer_after_1788209209795.jpg';

import { ServiceItem, BeforeAfterItem, TestimonialItem, FAQItem } from '../types';

export const CLINIC_INFO = {
  name: 'Prime Medical and Dental Care',
  tagline: 'Excellence in Dental & Medical Healthcare',
  leadDoctor: 'Dr. Tariq Mehmood',
  doctorTitle: 'BDS, RDS, Senior Consultant Dental Surgeon',
  doctorExperience: '15+ Years Clinical Experience',
  doctorReg: 'PMDC / PMC Registered Practitioner',
  address: 'Sir Syed Chowk, Tipu Road, Rawalpindi, Pakistan',
  landmark: 'Near Sir Syed Chowk Intersection, Tipu Road',
  timings: 'Monday to Saturday: 6:00 PM – 9:30 PM',
  timingsSchedule: [
    { day: 'Monday', hours: '6:00 PM – 9:30 PM', isOpen: true },
    { day: 'Tuesday', hours: '6:00 PM – 9:30 PM', isOpen: true },
    { day: 'Wednesday', hours: '6:00 PM – 9:30 PM', isOpen: true },
    { day: 'Thursday', hours: '6:00 PM – 9:30 PM', isOpen: true },
    { day: 'Friday', hours: '6:00 PM – 9:30 PM', isOpen: true },
    { day: 'Saturday', hours: '6:00 PM – 9:30 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed (Emergency by Appointment)', isOpen: false },
  ],
  phone: '+92 300 1234567',
  phoneDisplay: '+92 (300) 123-4567',
  whatsapp: '+923001234567',
  email: 'info@primedentalcare.pk',
  googleMapsUrl: 'https://maps.app.goo.gl/h2Bu6XyHkGDvgHeb9?g_st=aw',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.518774786638!2d73.0640!3d33.5930!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzM0LjgiTiA3M8KwMDMnNTAuNCJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s',
  logo: logoImg,
  doctorPhoto: doctorImg,
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: heroImg1,
    badge: 'Premier Dental Care in Rawalpindi',
    headline: 'Your Journey to a Perfect Smile & Optimal Health Starts Here',
    subheadline: 'Expert Dental & Medical Care led by Dr. Tariq Mehmood at Sir Syed Chowk, Tipu Road, Rawalpindi.',
    highlight: 'Advanced Pain-Free Dentistry with State-of-the-Art Technology'
  },
  {
    id: 2,
    image: heroImg2,
    badge: 'Modern Clinical Infrastructure',
    headline: 'World-Class Sterilization & Precision Dental Equipment',
    subheadline: 'Equipped with digital intraoral scanners, rotary endodontics, and hospital-grade Class-B autoclave sterilization.',
    highlight: 'Strict Hygiene Protocol & 100% Sterile Environment'
  },
  {
    id: 3,
    image: heroImg3,
    badge: 'Cosmetic & Aesthetic Dentistry',
    headline: 'Transform Your Smile with Flawless Veneers & Whitening',
    subheadline: 'Customized smile makeovers designed to boost your confidence and restore youthful dental vitality.',
    highlight: '10,000+ Satisfied Patients across Rawalpindi & Islamabad'
  }
];

export const TRUST_METRICS = [
  { value: '15+', label: 'Years Experience', desc: 'Expertise led by Dr. Tariq Mehmood' },
  { value: '10,000+', label: 'Patients Treated', desc: 'Delivering healthy smiles every day' },
  { value: '100%', label: 'Sterilized Instruments', desc: 'Hospital-grade Class B Autoclave' },
  { value: '4.9 ★', label: 'Patient Satisfaction', desc: 'Top rated dental clinic in Rawalpindi' }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cosmetic-dentistry',
    title: 'Cosmetic Dentistry',
    shortDesc: 'Teeth Whitening, Porcelain Veneers, Composite Bonding & Complete Smile Makeovers.',
    fullDesc: 'Cosmetic dentistry at Prime Medical and Dental Care combines artistry with science. We offer in-office laser teeth whitening that brightens smiles up to 8 shades in a single session, custom-crafted ultra-thin porcelain veneers, and composite edge bonding to fix chips, gaps, and stains for a naturally radiant smile.',
    tag: 'Aesthetic Smile',
    iconName: 'Sparkles',
    benefits: [
      'In-office laser whitening in 45 minutes',
      'Ultra-thin natural porcelain veneers',
      'Gap closure & chip repair without enamel damage',
      'Long-lasting stain-resistant results'
    ],
    duration: '45 - 90 mins',
    anesthesia: 'None / Local Anesthesia',
    recovery: 'Immediate'
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics & Aligners',
    shortDesc: 'Metal Braces, Ceramic Aesthetic Braces & Clear Invisible Teeth Aligners.',
    fullDesc: 'Straighten crooked, crowded teeth and correct bite misalignments. Dr. Tariq Mehmood provides comprehensive orthodontic consultations, customized high-grade ceramic/metal braces, and virtually invisible clear aligner treatments suitable for both teenagers and adults.',
    tag: 'Teeth Alignment',
    iconName: 'Smile',
    benefits: [
      'Custom 3D digital treatment planning',
      'Discreet ceramic & invisible aligner options',
      'Correction of overbite, underbite & crowding',
      'Improved facial symmetry and chew functionality'
    ],
    duration: '12 - 24 months plan',
    anesthesia: 'None required',
    recovery: 'Zero downtime'
  },
  {
    id: 'general-dentistry',
    title: 'General Dentistry',
    shortDesc: 'Ultrasonic Scaling, Polishing, Tooth-Colored Fillings & Painless Extractions.',
    fullDesc: 'Comprehensive preventive and restorative oral care. Our ultrasonic scaling gently removes stubborn calculus, tartar, and coffee/tea stains without scraping tooth enamel. We use high-strength nano-hybrid composite fillings that blend invisibly with your natural tooth shade.',
    tag: 'Routine & Hygiene',
    iconName: 'ShieldCheck',
    benefits: [
      'Ultrasonic gentle plaque & tartar removal',
      'Enamel-safe diamond paste polishing',
      'Mercury-free, tooth-colored composite fillings',
      'Gentle tooth removal with painless local numbing'
    ],
    duration: '30 - 60 mins',
    anesthesia: 'Painless Local (if needed)',
    recovery: 'Immediate'
  },
  {
    id: 'root-canal',
    title: 'Root Canal Treatment (RCT)',
    shortDesc: 'Advanced Rotary Endodontics for Pain Relief & Saving Natural Teeth.',
    fullDesc: 'Save infected or deeply decayed teeth from extraction. Using computerized rotary endodontic motors and digital apex locators, Dr. Tariq Mehmood performs gentle, precise, and often single-sitting root canals with minimal discomfort, capped with strong zirconium or porcelain crowns.',
    tag: 'Tooth Saving',
    iconName: 'Activity',
    benefits: [
      'Immediate relief from severe toothache',
      'Rotary endodontics for 98% precision',
      'Saves natural tooth structure for life',
      'Single-sitting options available for busy schedules'
    ],
    duration: '45 - 60 mins per visit',
    anesthesia: 'Deep Local Anesthesia',
    recovery: '1 - 2 days minor tenderness'
  },
  {
    id: 'oral-surgery-implants',
    title: 'Oral Surgery & Implants',
    shortDesc: 'Permanent Titanium Dental Implants, Bone Grafting & Wisdom Tooth Surgery.',
    fullDesc: 'Replace missing teeth with permanent dental implants that look, feel, and function exactly like natural teeth. Dr. Tariq Mehmood uses top-tier medical-grade titanium implants with high osseointegration rates, alongside atraumatic surgical wisdom tooth removals.',
    tag: 'Permanent Replacement',
    iconName: 'Zap',
    benefits: [
      'Lifetime solution for single or multiple missing teeth',
      'Preserves jawbone density and facial structure',
      'Natural biting force and effortless chewing',
      'Minimally invasive surgical protocols'
    ],
    duration: '60 - 90 mins',
    anesthesia: 'Local Anesthesia / Sedation',
    recovery: '3 - 5 days'
  },
  {
    id: 'preventive-care',
    title: 'Preventive & Medical Care',
    shortDesc: 'Comprehensive Oral Examinations, Digital X-Rays, Fluoride Therapy & Gum Care.',
    fullDesc: 'Prevention is the cornerstone of dental health. We provide thorough diagnostic checkups, low-radiation digital radiography, periodontal gum disease screenings, and general medical advice tailored to ensure lifelong wellness for the whole family.',
    tag: 'Family Health',
    iconName: 'HeartPulse',
    benefits: [
      'Early detection of hidden cavities & gum disease',
      'Low-radiation digital radiography',
      'Enamel-strengthening fluoride applications',
      'Customized oral hygiene home-care guidance'
    ],
    duration: '20 - 40 mins',
    anesthesia: 'None',
    recovery: 'Immediate'
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterItem[] = [
  {
    id: 'whitening-case',
    title: 'Professional Laser Teeth Whitening',
    category: 'Cosmetic Dentistry',
    description: 'Patient presented with heavy tea/coffee discoloration and enamel staining. Achieved 7 shades brighter smile in a single 45-minute clinic session.',
    beforeImage: whiteningBeforeImg,
    afterImage: whiteningAfterImg,
    beforeLabel: 'Before: Stained & Discolored',
    afterLabel: 'After: Radiant Bright White Smile',
    duration: '45 Minutes Single Visit',
    sessions: '1 Session'
  },
  {
    id: 'braces-alignment-case',
    title: 'Orthodontic Alignment & Bite Correction',
    category: 'Orthodontics',
    description: 'Patient presented with severe upper and lower crowding and misaligned bite. Corrected with precision ceramic braces resulting in perfect smile arc.',
    beforeImage: bracesBeforeImg,
    afterImage: bracesAfterImg,
    beforeLabel: 'Before: Crowded & Misaligned',
    afterLabel: 'After: Perfectly Straight & Balanced',
    duration: '14 Months',
    sessions: 'Regular Monthly Reviews'
  },
  {
    id: 'cosmetic-restoration-case',
    title: 'Porcelain Veneers & Smile Restoration',
    category: 'Restorative Care',
    description: 'Patient had chipped, uneven front teeth and worn enamel. Restored with custom handcrafted porcelain veneers providing natural luminescence.',
    beforeImage: veneerBeforeImg,
    afterImage: veneerAfterImg,
    beforeLabel: 'Before: Chipped & Worn Edges',
    afterLabel: 'After: Flawless Porcelain Veneers',
    duration: '2 Appointments',
    sessions: 'Preparation + Final Bonding'
  }
];

export const GALLERY_ITEMS = [
  {
    title: 'State-of-the-Art Dental Operatory',
    desc: 'Ergonomic dental unit with digital imaging monitors for real-time patient demonstration.',
    image: heroImg2,
    tag: 'Operatory'
  },
  {
    title: 'Gentle Clinical Procedures',
    desc: 'Dr. Tariq Mehmood performing microscopic examination with utmost precision and care.',
    image: heroImg1,
    tag: 'Precision Care'
  },
  {
    title: 'Post-Treatment Confident Smiles',
    desc: 'Celebrating radiant results with happy patients who love showing off their new smile.',
    image: heroImg3,
    tag: 'Patient Smile'
  },
  {
    title: 'Senior Consultant Consultation',
    desc: 'Dedicated one-on-one treatment planning and patient education in a relaxed atmosphere.',
    image: doctorImg,
    tag: 'Consultation'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    patientName: 'Muhammad Salman',
    area: 'Satellite Town, Rawalpindi',
    rating: 5,
    treatment: 'Root Canal & Zirconia Crown',
    comment: 'Dr. Tariq Mehmood is an exceptional dental surgeon. I was terrified of getting a root canal, but he made the entire procedure completely painless. The clinic at Tipu Road is spotless and very professional.',
    date: 'February 2026'
  },
  {
    id: '2',
    patientName: 'Ayesha Farooq',
    area: 'Chaklala Scheme 3, Rawalpindi',
    rating: 5,
    treatment: 'Teeth Whitening & Scaling',
    comment: 'Got my teeth whitening and scaling done before my wedding. The results exceeded my expectations! My teeth are noticeably brighter and there was zero sensitivity. Highly recommend Prime Dental Care.',
    date: 'January 2026'
  },
  {
    id: '3',
    patientName: 'Usman Ghani',
    area: 'Westridge, Rawalpindi',
    rating: 5,
    treatment: 'Dental Implants',
    comment: 'After losing a molar, Dr. Tariq guided me through the implant process with complete clarity. Healing was smooth and now I can chew comfortably again. Truly prime medical standard!',
    date: 'December 2025'
  },
  {
    id: '4',
    patientName: 'Dr. Sana Tahir',
    area: 'Bahria Town, Rawalpindi',
    rating: 5,
    treatment: 'Orthodontic Consultation & Braces',
    comment: 'As a fellow medical practitioner, I appreciate Dr. Tariq’s strict adherence to sterilization standards and autoclave protocols. Excellent care and humble demeanor.',
    date: 'November 2025'
  }
];

export const FAQS: FAQItem[] = [
  {
    category: 'appointments',
    question: 'What are the clinic timings and how do I book an appointment?',
    answer: 'Prime Medical and Dental Care is open Monday to Saturday from 6:00 PM to 9:30 PM (Sunday closed). You can book an appointment directly through our website form, call us, or message us on WhatsApp. Prior appointment is recommended to ensure zero wait time.'
  },
  {
    category: 'treatments',
    question: 'Is root canal treatment (RCT) painful?',
    answer: 'No. With modern local anesthesia techniques and digital rotary instruments used by Dr. Tariq Mehmood, root canal therapy is completely painless and feels very similar to having a standard filling placed. Most patients feel instant relief from their previous toothache.'
  },
  {
    category: 'treatments',
    question: 'Will teeth scaling weaken or thin my tooth enamel?',
    answer: 'No, this is a common myth. Ultrasonic scaling only vibrates away hardened tartar (calculus) and bacterial plaque without scratching or thinning natural enamel. In fact, regular scaling every 6 months prevents gum recession and loose teeth.'
  },
  {
    category: 'general',
    question: 'Where is Prime Medical and Dental Care located in Rawalpindi?',
    answer: 'We are conveniently located at Sir Syed Chowk on Tipu Road, Rawalpindi. Ample parking space is available, and you can click the "Open in Google Maps" button on our website for direct turn-by-turn navigation.'
  },
  {
    category: 'treatments',
    question: 'How long do laser teeth whitening results last?',
    answer: 'In-office whitening results typically last between 1 to 3 years depending on dietary habits (coffee, tea, smoking) and oral hygiene. We also provide maintenance advice and protective fluoride treatment post-procedure.'
  },
  {
    category: 'general',
    question: 'What sterilization protocols do you follow at the clinic?',
    answer: 'We follow stringent hospital-grade infection control protocols. All instruments undergo multi-stage ultrasonic cleaning and sterilization in Class-B medical autoclaves. Disposable consumables are strictly used for each individual patient.'
  }
];
