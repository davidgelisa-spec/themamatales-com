export const siteConfig = {
  name: 'Rebirthing Breathwork Mastery',
  tagline: 'Awaken, Reclaim & Embody Authentic Living',
  strapline: 'Breathwork | Nervous System Regulation | Self-Mastery',
  description:
    'Guiding women to self-master their life through rebirthing breathwork and nervous system regulation. One-to-one sessions, group breathwork, retreats and practitioner training in Dorset and online with Natalie Doyle.',
  url: 'https://www.rebirthingbreathworkmastery.co.uk',
  email: 'themamatales@gmail.com',
  phone: '07595 348559',
  location: 'Dorset, England',
  social: {
    instagram: 'https://www.instagram.com/the_mamatales/',
    facebook: '#',
  },
} as const;

export const navigation = [
  { label: 'About', href: '/about/' },
  { label: 'Services', href: '/services/' },
  { label: 'Retreat', href: '/retreat/' },
  { label: 'Journal', href: '/journal/' },
  { label: 'Contact', href: '/contact/' },
] as const;

export interface Service {
  title: string;
  description: string;
  icon: string;
  accentColor: string;
  iconBg: string;
}

export const services: Service[] = [
  {
    title: 'One-to-One Breathwork',
    description:
      'Deeply personal rebirthing breathwork sessions tailored to your journey. Release stored tension, regulate your nervous system and reconnect with your body in a safe, held space.',
    icon: '🍃',
    accentColor: 'var(--color-sage)',
    iconBg: 'var(--color-sage-pale)',
  },
  {
    title: 'Group Breathwork',
    description:
      'The power of collective breath. Join other women in guided rebirthing sessions that create profound shifts through shared energy, vulnerability and connection.',
    icon: '✦',
    accentColor: 'var(--color-terracotta)',
    iconBg: 'rgba(196, 132, 108, 0.15)',
  },
  {
    title: '3-Day Nervous System Reset',
    description:
      'An immersive experience designed to regulate your nervous system from the ground up. Three days of breathwork, somatic practices and deep restoration.',
    icon: '☽',
    accentColor: 'var(--color-gold)',
    iconBg: 'rgba(201, 169, 110, 0.15)',
  },
  {
    title: 'Retreats',
    description:
      'Step away from the everyday and into deep transformation. Multi-day retreats in beautiful Dorset combining rebirthing breathwork, nervous system work and embodied practice.',
    icon: '🌿',
    accentColor: 'var(--color-clay)',
    iconBg: 'rgba(181, 147, 122, 0.15)',
  },
  {
    title: 'Practitioner Training',
    description:
      'A two-year certified rebirthing breathwork mastery programme. Train to guide others through this transformative practice with depth, integrity and confidence.',
    icon: '🌊',
    accentColor: 'var(--color-sage-light)',
    iconBg: 'var(--color-sage-pale)',
  },
  {
    title: 'Breathwork Diary',
    description:
      'A guided digital journal to support your breathwork practice. Track your sessions, notice patterns and deepen your self-awareness between sessions.',
    icon: '🤍',
    accentColor: 'var(--color-blush)',
    iconBg: 'rgba(232, 207, 192, 0.3)',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
  isPlaceholder?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The breathwork sessions with Natalie have been truly life-changing. I finally feel like I have the tools to regulate myself. I'm calmer, more present and so much more connected with who I really am.",
    name: 'Placeholder — Client Name',
    detail: 'One-to-One Breathwork',
    isPlaceholder: true,
  },
  {
    quote:
      "The group sessions were my turning point. Breathing together with other women, feeling held in that space — something shifted in me that I can't quite put into words. I left feeling lighter and more alive.",
    name: 'Placeholder — Client Name',
    detail: 'Group Breathwork',
    isPlaceholder: true,
  },
];

export const qualifications = [
  'Rebirthing Breathwork Practitioner',
  'Certified Life Coach',
  'Nervous System Regulation Specialist',
  'Early Years Neuroscience Counsellor',
] as const;
