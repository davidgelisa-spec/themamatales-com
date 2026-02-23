export const siteConfig = {
  name: 'The Mama Tales',
  tagline: 'Conscious, Regulated & Authentic Parenting',
  strapline: 'Breathwork | Nervous System Regulation | Conscious Parenting',
  description:
    'Rebirthing breathwork and nervous system regulation in Dorset with Natalie Doyle. Supporting parents to heal, regulate and connect — from conception through parenthood and beyond.',
  url: 'https://themamatales-com.pages.dev',
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
    title: 'Rebirthing Breathwork',
    description:
      'Powerful, connected breathing sessions to release stored tension, regulate your nervous system and reconnect with your body. A somatic practice that goes beyond relaxation — helping you process, heal and find presence.',
    icon: '🍃',
    accentColor: 'var(--color-sage)',
    iconBg: 'var(--color-sage-pale)',
  },
  {
    title: 'Nervous System Reset',
    description:
      'Learn to widen your window of tolerance and build genuine resilience. Practical tools rooted in neuroscience to help you co-regulate with your children and respond rather than react.',
    icon: '✦',
    accentColor: 'var(--color-terracotta)',
    iconBg: 'rgba(196, 132, 108, 0.15)',
  },
  {
    title: 'Walk & Talks',
    description:
      'Gentle walks through beautiful Dorset countryside combined with open conversation, breathwork and connection. A chance to be held in community, in nature.',
    icon: '🌿',
    accentColor: 'var(--color-gold)',
    iconBg: 'rgba(201, 169, 110, 0.15)',
  },
  {
    title: 'Workshops & Retreats',
    description:
      'Immersive experiences combining breathwork, somatic practices and conscious parenting. Step away from the everyday and sink into deep restoration and connection.',
    icon: '☽',
    accentColor: 'var(--color-clay)',
    iconBg: 'rgba(181, 147, 122, 0.15)',
  },
  {
    title: 'Birth Preparation',
    description:
      'Hypnobirthing and birth preparation using breathwork, relaxation and visualisation techniques. Feel calm, confident and empowered as you prepare for birth.',
    icon: '🌊',
    accentColor: 'var(--color-sage-light)',
    iconBg: 'var(--color-sage-pale)',
  },
  {
    title: 'Courses',
    description:
      'Structured programmes weaving breathwork, nervous system regulation and early years neuroscience to support your entire journey into conscious parenthood.',
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
      "The breathwork sessions with Natalie have been truly life-changing. I finally feel like I have the tools to regulate myself — not just as a parent, but as a person. I'm calmer, more present and so much more connected with my children.",
    name: 'Placeholder — Client Name',
    detail: 'Rebirthing Breathwork',
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
