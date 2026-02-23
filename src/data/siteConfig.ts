export const siteConfig = {
  name: 'The Mama Tales',
  tagline: 'Conscious, Regulated & Authentic Parenting',
  strapline: 'Parent Healing | Empowered Children | Thriving Generations',
  description:
    'Breathwork and hypnobirthing in Dorset with Natalie Doyle. Empowering your journey from pregnancy through birth and beyond.',
  url: 'https://themamatales-com.pages.dev',
  email: 'themamatales@gmail.com',
  phone: '07595 348559',
  location: 'Dorset, England',
  social: {
    instagram: '#',
    facebook: '#',
  },
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Kind Words', href: '#testimonials' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
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
    title: 'Hypnobirthing',
    description:
      'Comprehensive courses to prepare you for a calm, confident and empowered birth. Learn breathing, relaxation and visualisation techniques that work with your body.',
    icon: '🌊',
    accentColor: 'var(--color-sage)',
    iconBg: 'var(--color-sage-pale)',
  },
  {
    title: 'Breathwork',
    description:
      'Reconnect with your body through powerful breathwork sessions. Release tension, restore balance and access a deep state of relaxation and presence.',
    icon: '🍃',
    accentColor: 'var(--color-terracotta)',
    iconBg: 'rgba(196, 132, 108, 0.15)',
  },
  {
    title: 'Walk & Talks',
    description:
      'Local walks in beautiful Dorset countryside combined with open conversation, connection and gentle movement. A chance to be held in community.',
    icon: '🌿',
    accentColor: 'var(--color-gold)',
    iconBg: 'rgba(201, 169, 110, 0.15)',
  },
  {
    title: 'Workshops',
    description:
      'Immersive workshops covering birth preparation, early years neuroscience and conscious parenting. Deep dives into the topics that matter most.',
    icon: '✧',
    accentColor: 'var(--color-clay)',
    iconBg: 'rgba(181, 147, 122, 0.15)',
  },
  {
    title: 'Retreats',
    description:
      'Step away from the everyday and sink into deep relaxation, connection and restoration. Breathwork, yoga, meditation and nourishing community.',
    icon: '☽',
    accentColor: 'var(--color-sage-light)',
    iconBg: 'var(--color-sage-pale)',
  },
  {
    title: 'Courses',
    description:
      'Structured multi-session programmes blending hypnobirthing, breathwork and early years neuroscience to support your entire journey into parenthood.',
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
      "Natalie's hypnobirthing course completely transformed my approach to birth. I went from terrified to truly excited. The breathing techniques carried me through every stage and I felt calm, empowered and in control throughout.",
    name: 'Placeholder — Client Name',
    detail: 'Hypnobirthing Course',
    isPlaceholder: true,
  },
  {
    quote:
      "The walk and talks were my lifeline during pregnancy. Meeting other mums-to-be in such a beautiful setting, with Natalie holding the space so gently — I left every session feeling lighter and more connected.",
    name: 'Placeholder — Client Name',
    detail: 'Walk & Talk',
    isPlaceholder: true,
  },
];

export const qualifications = [
  'Level 3 Hypnobirthing Instructor',
  'Early Years Neuroscience Counsellor',
  'Certified Life Coach',
  'Breastfeeding Peer Supporter',
  'Rebirthing Breathwork Practitioner',
] as const;
