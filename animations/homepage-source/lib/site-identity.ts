import type { Metadata } from 'next'
import { SITE_LINKS } from './site-links'

export const SITE_URL = 'https://www.utopia-studio.co'
export const SITE_NAME = 'The Utopia Studio'
export const SITE_DESCRIPTION =
  'The Utopia Studio is a Doha-based AI venture studio for domain experts worldwide. Co-build with product, engineering and GTM teams, plus fundraising support.'

// Editorial dates, not build dates. Update only when the page's content changes.
// Unknown modification dates are deliberately omitted from the sitemap.
export const CONTENT_UPDATED: Record<string, string> = {
  '/': '2026-11-11',
  '/faq': '2026-11-11',
  '/team': '2026-11-08',
  '/contact': '2026-11-08',
  '/how-we-build': '2026-11-10',
  '/industries': '2026-11-10',
  '/ai-native-stack': '2026-11-08',
  '/pricing': '2026-11-10',
  '/guides/choosing-ai-venture-studio': '2026-11-11',
  '/portfolio': '2026-11-10',
  '/case-studies/evos': '2026-11-10',
  '/case-studies/azraq': '2026-11-10',
  '/case-studies/mentix': '2026-11-10',
  '/case-studies/renacore': '2026-11-10',
  '/case-studies/rimau': '2026-11-10',
}

export const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  logo: `${SITE_URL}/logo/the-utopia-studio-wordmark.avif`,
  address: { '@type': 'PostalAddress', addressLocality: 'Doha', addressCountry: 'QA' },
  sameAs: [SITE_LINKS.linkedin, SITE_LINKS.instagram, SITE_LINKS.youtubeProfile, SITE_LINKS.github],
}

export const WEBSITE = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: { '@id': ORGANIZATION['@id'] },
}

export function pageMetadata(
  title: string,
  description: string,
  path: string,
  markdown?: string,
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
      types: {
        'application/rss+xml': '/feed.xml',
        ...(markdown ? { 'text/markdown': markdown } : {}),
      },
    },
    openGraph: { title, description, url: path, siteName: SITE_NAME, type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  }
}
