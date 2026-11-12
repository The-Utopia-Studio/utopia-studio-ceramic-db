import { HOME_FELLOW_PROFILES } from './home-fellow-profiles'
import { FELLOWS, PARAG_PHOTO, type Fellow } from './fellows'

export type HomeFellow = Pick<Fellow, 'name' | 'venture'> & Partial<Omit<Fellow, 'name' | 'venture'>> & { displayName?: string; headline?: string; background?: string }

// Public titles used by the Studio and the founder's own company.
// Keep the underlying name unchanged for profile matching.
const DISPLAY_NAMES: Record<string, string> = {
  'Amyn Haji': 'Dr Amyn Haji',
  'Satheesh Kumar Veluswamy': 'Dr Satheesh Kumar Veluswamy',
}

// One primary Fellow per venture, using the supplied Fellows Master Tracker.
// Keep the five agreed featured founders first, then retain the tracker order.
// Descriptions use existing Studio copy and the supplied Fellow profiles.
// Websites are only included where a destination is known.
const ventureDetails = (venture: string): Partial<Fellow> => {
  const fellow = FELLOWS.find(person => person.venture === venture)
  if (!fellow) return {}
  const { ventureDescription, bio, ventureHref, logo, logoKeepLight, logoScale } = fellow
  return { ventureDescription, bio, ventureHref, logo, logoKeepLight, logoScale }
}

const portrait = (slug: string) => `/portfolio/fellows/${slug}-portrait.webp`
const person = (name: string, venture: string, details: Partial<Fellow> = {}): HomeFellow => ({
  ...ventureDetails(venture),
  photoPosition: '50% 28%',
  ...details,
  name,
  venture,
})
const featured = (venture: string): HomeFellow => {
  const fellow = FELLOWS.find(person => person.venture === venture)
  if (!fellow) throw new Error(`Missing featured fellow: ${venture}`)
  return fellow
}

export const HOME_FELLOWS: HomeFellow[] = [
  featured('EVOS'),
  featured('Azraq'),
  featured('Mentix'),
  featured('Renacore'),
  person('Staniz Stanislaus', 'Rimau', {
    photo: portrait('staniz-stanislaus'),
    photoPosition: '50% 35%',
    // Source: Studio's Rimau fellow profile, 31 August 2026.
    ventureDescription: 'MSPO certification readiness for Malaysian palm oil estates.',
    bio: 'Helping estate operators prepare for certification and manage compliance workflows.',
  }),
  person('Phares Kariuki', 'Red Onion Systems', { photo: portrait('phares-kariuki') }),
  person('Ruby Smith', 'Serve', { photo: portrait('ruby-smith') }),
  person('Elias El-Hisnawi', 'Adiba', { photo: '/portfolio/Adiba.jpeg' }),
  person('Mikah Dang', 'HullQ', { photo: portrait('mikah') }),
  person('Mohammed Ibrahim Abdelrazek Ali', 'Interstellar', { photo: portrait('mohammed-interstellar') }),
  person('Vijay Krishna Somaraju', 'Vyapti Resonance', { photo: portrait('vijay') }),
  person('Parag Kotak', 'PDAS', {
    photo: PARAG_PHOTO,
    // Source: Studio's PDAS Fellow profile, 31 August 2026.
    ventureDescription: 'AI-powered screening for green energy project finance readiness.',
    bio: 'Parag brings energy engineering experience to assessing project readiness, identifying risks, and helping developers prepare for financing.',
  }),
  person('Dariya Smailova', 'Marketers team', {
    photo: portrait('dariya'),
    // Source: Studio's Marketers Team Fellow profile, 31 August 2026.
    ventureDescription: 'Marketing needs assessment and specialist matching for GCC businesses.',
    bio: 'Dariya brings marketing experience at Google and Essence Mediacom to helping companies define the work they need, find vetted specialists, and track results.',
  }),
  person('Jamal Bin Kamaludin', 'Dextrum', { photo: portrait('jamal') }),
  person('Satheesh Kumar Veluswamy', 'Barrier Intelligence', { photo: portrait('dr-satheesh') }),
].map(fellow => ({ ...fellow, displayName: DISPLAY_NAMES[fellow.name] ?? fellow.name, ...HOME_FELLOW_PROFILES[fellow.name] }))
