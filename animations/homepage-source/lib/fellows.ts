import { STUDIO_TOOL_STACK } from './tool-stack'

// Original supplied by the Studio: Drive file 1Sndir8YoeS2pj62XmhRc23IA2VK6oyc8.
export const PARAG_PHOTO = '/portfolio/fellows/parag-kotak-dsc08467.jpg'

export interface Fellow {
  name: string
  venture: string
  ventureHref?: string
  ventureStatus: 'LIVE' | 'STEALTH'
  ventureDescription: string
  bio: string
  photo?: string
  photoPosition?: string
  logo?: string
  logoKeepLight?: boolean
  logoScale?: number
  linkedin?: string
}

export const FELLOWS: Fellow[] = [
  {
    name: 'Alexandra Coleman',
    venture: 'Azraq',
    ventureHref: 'https://azraq.ai/',
    ventureStatus: 'LIVE',
    bio: 'Quantifying risk across water and energy assets in arid regions.',
    ventureDescription: 'Real-time risk intelligence for data centre development.',
    photo: '/portfolio/fellows/alexandra-coleman-portrait.webp',
    photoPosition: '50% 28%',
    logo: '/portfolio/azraq-logo.svg',
    logoScale: 0.78,
  },
  {
    name: 'Jamal Kamaludin',
    venture: 'Dextrum',
    ventureHref: 'https://www.dextrum.ai/',
    ventureStatus: 'LIVE',
    bio: 'Auditing LNG carbon data across counterparties.',
    ventureDescription: 'Neutral continuous verification intelligence for shared operational records.',
    photo: '/portfolio/fellows/jamal-bin-kamaludin.png',
    photoPosition: '50% 32%',
    logo: '/portfolio/dextrum-logo.svg',
  },
  {
    name: 'Urav Shah',
    venture: 'EVOS',
    ventureHref: 'https://getevos.ai',
    ventureStatus: 'LIVE',
    bio: 'Building AI infrastructure for energy and industrial operators.',
    ventureDescription: 'Custom tailoring the most experienced AI-workforce.',
    photo: '/portfolio/EVOS.jpeg',
    photoPosition: '50% 34%',
    logo: '/portfolio/evos-logo.png',
    logoKeepLight: true,
  },
  {
    name: 'Elias El Hisnawi',
    venture: 'Adiba',
    ventureHref: 'https://www.adiba.qa',
    ventureStatus: 'LIVE',
    bio: 'Helping clinicians navigate complex patient data faster.',
    ventureDescription: 'Verified clinical information at the bedside for cardiologists.',
    photo: '/portfolio/Adiba.jpeg',
    photoPosition: '50% 36%',
    logo: '/portfolio/adiba-logo.svg',
  },
  {
    name: 'Amyn Haji',
    venture: 'Mentix',
    ventureHref: 'https://www.mentix.world/',
    ventureStatus: 'LIVE',
    bio: 'Connecting early surgical trainees with senior specialists.',
    ventureDescription: 'Surgical mentoring and capability development platform.',
    photo: '/portfolio/fellows/amyn-haji-portrait.webp',
    photoPosition: '50% 28%',
    logo: '/portfolio/mentix-logo.svg',
  },
  {
    name: 'Satheesh Kumar Veluswamy',
    venture: 'Barrier Intelligence',
    ventureHref: 'https://barrierintelligence.ai/',
    ventureStatus: 'LIVE',
    bio: 'Detecting operational risk inside oil and gas plants.',
    ventureDescription: 'Fire and gas coverage, verified by physics.',
    photo: '/portfolio/Barrier Intelligence.png',
    photoPosition: '50% 36%',
    logo: '/portfolio/barrier-symbol.svg',
    logoScale: 0.72,
  },
  {
    name: 'Vijay Krishna Somaraju',
    venture: 'Vyapti Resonance',
    ventureHref: 'https://vyaptiresonance.com/',
    ventureStatus: 'LIVE',
    bio: 'Verifying quantum vulnerabilities in critical digital systems.',
    ventureDescription: 'Post-quantum readiness protocol for cryptographic exposure and migration.',
    photo: '/portfolio/fellows/vijay-krishna-somaraju.png',
    photoPosition: '50% 32%',
    logo: '/portfolio/vyapti-logo.png',
    logoScale: 0.95,
  },
  {
    name: 'Ruby Smith',
    venture: 'Serve',
    logo: '/portfolio/serve-logo.png',
    logoKeepLight: true,
    ventureStatus: 'STEALTH',
    bio: 'Improving how healthcare providers manage patient relationships.',
    ventureDescription: 'Patient relationship CRM for healthcare providers.',
    photo: '/portfolio/fellows/ruby-smith.jpg',
    photoPosition: '50% 24%',
  },
  {
    name: 'Mikah Dang',
    venture: 'HullQ',
    ventureStatus: 'STEALTH',
    bio: 'Predicting hull fouling from existing vessel operations data.',
    ventureDescription: 'Detect hull biofouling degradation to optimise maritime maintenance.',
    photo: '/portfolio/fellows/mikah-dang.jpg',
    photoPosition: '50% 22%',
  },
  {
    name: 'Justice Nefe & Phares Kariuki',
    venture: 'Red Onion Systems',
    ventureStatus: 'STEALTH',
    bio: 'Protecting GCC and sovereign network infrastructure.',
    ventureDescription: 'DNS security for sovereign network infrastructure.',
    photo: '/portfolio/fellows/justice-nefe.jpg',
    photoPosition: '50% 28%',
    linkedin: 'https://www.linkedin.com/in/just4ease',
    logo: '/portfolio/red-onion-logo.png',
    logoScale: 0.85,
  },
  {
    name: 'Ganesh Shahane',
    venture: 'Morpheus',
    ventureStatus: 'STEALTH',
    bio: 'Building AI-native infrastructure for sleep and cognition.',
    ventureDescription: 'AI-native infrastructure for sleep and performance.',
    photo: '/portfolio/fellows/ganesh-shahane.jpg',
    photoPosition: '50% 28%',
  },
  {
    name: 'Abdallah Abu-Taleb',
    venture: 'Renacore',
    ventureHref: 'https://www.renacore.com/',
    ventureStatus: 'LIVE',
    bio: 'Bringing physics-aware intelligence to critical energy systems.',
    ventureDescription: 'Physics-informed AI for energy infrastructure optimisation.',
    photo: '/portfolio/fellows/abdallah-abu-taleb-portrait.webp',
    photoPosition: '50% 22%',
    logo: '/portfolio/renacore-symbol.svg',
    logoScale: 0.7,
  },
  {
    name: 'Mohammed Ibrahim & Ezzat Ali',
    venture: 'Interstellar',
    ventureStatus: 'STEALTH',
    bio: 'Validating an AI-native venture through the Studio diagnostic.',
    ventureDescription: 'Venture concept currently in online diagnostic validation.',
    photo: '/portfolio/fellows/mohammed-ibrahim.jpg',
    photoPosition: '50% 28%',
    // Official brand symbol: https://interstellar-egypt.com/favicon.svg
    logo: '/portfolio/interstellar-symbol.svg',
    logoScale: 0.9,
  },
  {
    name: 'Parag Kotak',
    venture: 'Stealth Venture',
    ventureStatus: 'STEALTH',
    bio: 'Building from deep energy-transition and industrial decarbonisation experience.',
    ventureDescription: 'AI-native energy transition venture in development.',
    photo: PARAG_PHOTO,
    photoPosition: '50% 28%',
  },
]

export const TEAM = [
  {
    name: 'Roo Rogers',
    role: 'Founding & General Partner',
    image: '/team/roo-rogers-cutout.png',
  },
  {
    name: 'Alina Tuhina',
    role: 'Founding & Managing Partner',
    image: '/team/alina-tuhina-cutout.png',
  },
  {
    name: 'Ollie Graham-Yooll',
    role: 'Chief Product & Operations Officer',
    image: '/team/ollie-graham-yooll-cutout.png',
  },
  {
    name: 'Karan Pinto',
    role: 'Chief Technology & Growth Officer',
    image: '/team/karan-pinto-cutout.png',
  },
]

export const PROOFS = [
  {
    href: 'https://www.youtube.com/watch?v=V5tLTzqd-Tg&t=43s',
    image: '/portfolio/EVOS.jpeg',
    name: 'Urav Shah',
    position: 'center 24%',
    quote:
      'Utopia works deeply as part of the team. You get their expertise and optimised cloud infrastructure from day one.',
    source: 'Studio film · 0:43',
  },
  {
    href: 'https://www.youtube.com/watch?v=V5tLTzqd-Tg&t=69s',
    image: '/portfolio/Azraq.jpeg',
    name: 'Alexandra Coleman',
    position: 'center 20%',
    quote:
      'Starting a company takes support, network, and credibility. Utopia Capital Management brings that credibility.',
    source: 'Studio film · 1:09',
  },
  {
    href: 'https://www.youtube.com/watch?v=V5tLTzqd-Tg&t=26s',
    image: '/portfolio/Mentix.jpeg',
    name: 'Amyn Haji',
    position: 'center 30%',
    quote:
      'Things moved fast. Within months I was in Qatar, building with the studio for a global market.',
    source: 'Studio film · 0:26',
  },
  {
    href: '/fellows',
    image: '/portfolio/fellows/vijay-krishna-somaraju.png',
    name: 'Vijay Krishna Somaraju',
    position: 'center 32%',
    quote:
      'Day 5 in Doha showed what makes Utopia special: bold founders, sharp sparring partners, and hands-on co-build sprints.',
    source: 'LinkedIn',
  },
]

export const PARTNER_LOGOS = [
  { alt: 'Qatar Development Bank', href: 'https://www.qdb.qa/', src: '/images/qdb-logo-updated.png' },
  { alt: 'Atypical Ventures', href: 'https://a-typicalventures.com/', src: '/images/Aytpical logo.png' },
  { alt: 'The Radical Fund', href: 'https://www.theradicalfund.com/', src: '/images/radical-fund-logo-transparent.png' },
  ...STUDIO_TOOL_STACK.map(tool => ({ alt: tool.name, src: tool.logo })),
]

export const APPLY_HREF =
  'https://jobs.ashbyhq.com/the-studio/b9f16a47-3c2a-4d2d-a917-c283b4a03b84?utm_source=Vxd7gqoBeR'
