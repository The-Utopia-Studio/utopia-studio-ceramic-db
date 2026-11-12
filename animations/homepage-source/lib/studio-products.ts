import { SITE_LINKS, PRODUCT_DESTINATIONS } from './site-links'

/** Shared introductions and destinations for the Studio's five products. */
export const STUDIO_PRODUCTS = [
  { name: 'Utopia OS', category: 'Workspace', href: SITE_LINKS.utopiaOs, description: 'The shared Co-Build plan and private workspace for every Fellow. Keep priorities, decisions, and next steps together.' },
  { name: 'Atliq', category: 'Product development', href: SITE_LINKS.atliq, description: 'A production foundation to turn product plans into working software.' },
  { name: 'Ceramic', category: 'Design system', href: SITE_LINKS.ceramic, description: 'Consistent interfaces and reusable components for your product.' },
  { name: 'Cloud', category: 'AI infrastructure', href: SITE_LINKS.utopiaCloud, description: 'Private AI infrastructure to build and run your product.' },
  { name: 'Skills', category: 'Tools & workflows', href: SITE_LINKS.utopiaSkills, description: 'Reusable skills, agents, and prompts for everyday building.' },
] as const

export type StudioProductName = (typeof STUDIO_PRODUCTS)[number]['name']

export const PRODUCT_OVERVIEWS = {
  atliq: {
    name: 'Atliq',
    category: 'Product development',
    title: 'From a product plan to working software.',
    description: 'Atliq is the Studio’s production foundation for AI-native companies. Start with a proven system, shape it around your product, and move from the first decision to launch.',
    audience: 'For fellows, product teams, engineers, and agents building a new product.',
    sectionTitle: 'Start with the product. Build on a shared foundation.',
    capabilities: [
      { title: 'Define the work', body: 'Align the problem, users, product thesis, and evidence before choosing what to build.' },
      { title: 'Build on production blocks', body: 'Bring identity, data, billing, AI, and delivery together around the needs of your product.' },
      { title: 'Ship and improve', body: 'Keep review, deployment, measurement, and handover connected as the product develops.' },
    ],
    actionTitle: 'Take a closer look at Atliq.',
    actionBody: 'Explore the framework and production tools, then choose how to start building.',
    actionLabel: 'Visit Atliq',
    externalHref: PRODUCT_DESTINATIONS.atliq,
  },
  ceramic: {
    name: 'Ceramic',
    category: 'Design system',
    title: 'A shared language for your product.',
    description: 'Ceramic turns a brand into interfaces that work together. Shared tokens, accessible components, and reusable templates give product teams and coding agents the same foundation.',
    audience: 'For designers, developers, and agents building consistent digital products.',
    sectionTitle: 'Keep the brand consistent as the product grows.',
    capabilities: [
      { title: 'Tokens and brand themes', body: 'Connect color, typography, spacing, and component decisions through one shared design language.' },
      { title: 'Components and templates', body: 'Build with documented, accessible components and production-ready templates instead of starting each interface again.' },
      { title: 'Multilingual by design', body: 'Support English, Korean, and Arabic, including right-to-left layouts, from the same system.' },
    ],
    actionTitle: 'Explore the system behind the interfaces.',
    actionBody: 'Browse Ceramic’s documentation, components, themes, and templates on the product site.',
    actionLabel: 'Explore Ceramic',
    externalHref: PRODUCT_DESTINATIONS.ceramic,
  },
} as const
