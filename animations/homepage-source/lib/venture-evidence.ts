import { HOME_FELLOWS } from './home-fellows'

// Short versions of the contribution-led case studies, for discovery surfaces.
// Sources and attribution: lib/case-study-details.ts and each linked case study.
// Distinguish venture outcomes from Studio support, and planned work from results.
const cases = [
  {
    venture: 'EVOS',
    question: 'How did Utopia help EVOS build industrial AI?',
    summary: 'Utopia worked inside the EVOS team, providing technical expertise and cloud infrastructure.',
    body: 'Alongside Urav Shah’s industrial expertise, the collaboration supported the release of reusable AI skills. EVOS went on to announce a $9M pre-seed round. The case study links the Studio’s account of the work and independent funding coverage.',
    card: 'Studio engineering and cloud support. EVOS raised a $9M pre-seed.',
  },
  {
    venture: 'Azraq',
    question: 'How did Utopia support Azraq’s infrastructure venture?',
    summary: 'Utopia co-developed data-centre risk intelligence with Azraq and connected its team with leaders in Qatar.',
    body: 'The Studio hosted Alexandra Coleman and Azraq’s technical team while working on the product together. The visit connected them with digital infrastructure and investment leaders. In the Studio film, Alexandra describes the value of Utopia’s network and credibility.',
    card: 'Co-developed risk intelligence and connections in Qatar.',
  },
  {
    venture: 'Mentix',
    question: 'How did Utopia help turn Mentix into a working platform?',
    summary: 'Utopia defined requirements with Dr Amyn Haji and built his surgical mentoring platform using Software Factory.',
    body: 'Founding engineer James Cannan carried the build end to end, and the Studio joined customer meetings. 8090 reports a usable prototype in three weeks and a full platform in three months, including live procedure broadcasting used for a hospital masterclass.',
    card: 'Co-built surgical mentoring. 8090 reports a three-month build.',
  },
  {
    venture: 'Renacore',
    question: 'How is Utopia helping Renacore build for energy operators?',
    summary: 'Utopia co-builds with Renacore across growth, technology, product and operations in Doha.',
    body: 'Conversations in Qatar’s energy sector helped focus the venture on infrastructure intelligence for LNG and power assets. The Studio’s published account describes that shift in product direction as the team prepared its first regional pilots.',
    card: 'Co-building energy intelligence, with pilots in preparation.',
  },
  {
    venture: 'Rimau',
    question: 'What is Utopia’s role in building Rimau?',
    summary: 'Rimau identifies Utopia as its company-building partner, working alongside the founders on estate compliance.',
    body: 'The Studio’s venture-building role complements estate operating experience and sustainability expertise from Rimau’s other partners. Rimau’s published partnership model describes how these roles come together around MSPO readiness and everyday estate compliance work.',
    card: 'Company-building support for estate compliance and MSPO readiness.',
  },
] as const

export const VENTURE_EVIDENCE = cases.map(item => {
  const fellow = HOME_FELLOWS.find(person => person.venture === item.venture)
  if (!fellow) throw new Error(`Missing public Fellow profile: ${item.venture}`)
  return { ...item, slug: item.venture.toLowerCase(), founder: fellow.displayName ?? fellow.name, href: `/case-studies/${item.venture.toLowerCase()}` }
})

export const VENTURE_FAQS = VENTURE_EVIDENCE.map(item => ({ q: item.question, summary: item.summary, body: item.body }))
