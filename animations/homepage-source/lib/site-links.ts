export const SITE_LINKS = {
  fellows: '/fellows',
  coBuilding: '/how-we-build#co-building',
  faq: '/faq',
  portfolio: '/portfolio',
  industries: '/industries',
  pods: '/portfolio#industries',
  applySteps: '/apply',
  mentorApply: 'https://jobs.ashbyhq.com/the-studio/ccb09b81-d9b9-4bfb-a62b-a8fdfbfc1c69',
  corporates: '/corporates',
  resources: '/resources',
  technicalDeepDives: '/technical-deep-dives',
  news: '/news',
  contact: '/contact',
  partnerWithUs: '/contact?topic=Partner%20with%20us',
  privacy: '/privacy',
  terms: '/terms',
  team: '/team',
  utopiaOs: 'https://os.utopia-studio.co',
  aiNativeStack: '/ai-native-stack',
  utopiaCloud: '/utopia-cloud',
  quantumAiSandbox: '/quantum-ai-sandbox',
  utopiaSkills: '/utopia-skills',
  partnerTools: '/partner-tools',
  newPartnerships: '/new-partnerships',
  studioJobs: 'https://jobs.ashbyhq.com/the-studio?utm_source=PADeq0Gx0W',
  linkedin: 'https://www.linkedin.com/company/the-utopia-studio/',
  instagram: 'https://www.instagram.com/theutopiastudio/',
  youtube: 'https://www.youtube.com/@buildwiththestudio/videos',
  youtubeProfile: 'https://www.youtube.com/@buildwiththestudio',
  github: 'https://github.com/The-Utopia-Studio',
  podcast: '/resources#hub-podcast',
  ceramic: '/ceramic',
  atliq: '/atliq',
  skillsGithub: 'https://github.com/The-Utopia-Studio/skills',
} as const

// Product service destinations. Utopia OS links directly to the service;
// the other products retain their Studio overview pages.
export const PRODUCT_DESTINATIONS = {
  utopiaOs: SITE_LINKS.utopiaOs,
  atliq: 'https://atliq.utopia-studio.co/',
  ceramic: 'https://design.utopia-studio.co',
  skills: SITE_LINKS.skillsGithub,
} as const

export const MAILTO = {
  team: 'mailto:contact@utopia-studio.co',
  founders: 'mailto:contact@utopia-studio.co',
  partners: 'mailto:contact@utopia-studio.co',
  marketing: 'mailto:contact@utopia-studio.co',
  press: mailto('contact@utopia-studio.co', 'Press inquiry · The Utopia Studio'),
  contact: mailto('contact@utopia-studio.co', 'Contact · The Utopia Studio'),
  partnerWithUs: mailto('contact@utopia-studio.co', 'Partner with us · The Studio'),
  operationsPilot: mailto('contact@utopia-studio.co', 'Operations pilot · The Studio'),
  procurementPilot: mailto('contact@utopia-studio.co', 'Procurement pilot · The Studio'),
  strategyPilot: mailto('contact@utopia-studio.co', 'Strategy pilot · The Studio'),
} as const

export function mailto(address: string, subject?: string, body?: string) {
  const params = new URLSearchParams()

  if (subject) params.set('subject', subject)
  if (body) params.set('body', body)

  const query = params.toString()
  return query ? `mailto:${address}?${query}` : `mailto:${address}`
}
