export type TeamDiscipline = 'leadership' | 'studio' | 'product' | 'gtm' | 'investment' | 'admin'

export type TeamMember = {
  name: string
  role?: string
  discipline?: TeamDiscipline
  cutout?: string
  image?: string
  linkedin?: string
  showWithoutPortrait?: boolean
  activityImage?: string
  activityAlt?: string
}

export const TEAM: TeamMember[] = [
  { name: 'Alina Truhina', discipline: 'leadership', role: 'Founding & Managing Partner', image: '/team/alina-tuhina.jpg', cutout: '/team/cutouts/refined/alina-tuhina.png', linkedin: 'https://www.linkedin.com/in/alinatruhina' },
  { name: 'Roo Rogers', discipline: 'leadership', role: 'Founding & Managing Partner', image: '/team/roo-rogers.jpg', cutout: '/team/cutouts/refined/roo-rogers.png', linkedin: 'https://www.linkedin.com/in/roorogers' },
  { name: 'Konstantin Behr', discipline: 'leadership', role: 'Chief Strategy Officer', image: '/team/konstantin-behr.jpg', cutout: '/team/cutouts/refined/konstantin-behr.png', linkedin: 'https://www.linkedin.com/in/konstantin-behr-63815b94' },
  { name: 'Shamona Maharaj', discipline: 'leadership', role: 'Chief Financial Officer', image: '/team/shamona-maharaj.jpg', cutout: '/team/cutouts/refined/shamona-maharaj.png', linkedin: 'https://www.linkedin.com/in/shamona-maharaj-280aa334/' },
  { name: 'Ollie Graham-Yooll', discipline: 'product', role: 'Studio Director · Product', image: '/team/ollie-graham-yooll.jpg', cutout: '/team/cutouts/refined/ollie-graham-yooll.png', linkedin: 'https://www.linkedin.com/in/ollie-graham-yooll' },
  { name: 'Karan Pinto', discipline: 'product', role: 'Studio Director · Tech (CTGO)', image: '/team/karan-pinto.jpg', cutout: '/team/cutouts/refined/karan-pinto.png', linkedin: 'https://www.linkedin.com/in/karanpinto' },
  { name: 'Koleen Ocampo', discipline: 'admin', role: 'Head of Operations & Compliance', image: '/team/koleen-ocampo-studio.jpg', cutout: '/team/cutouts/refined/koleen-ocampo-studio.png', linkedin: 'https://www.linkedin.com/in/koleen-ocampo' },
  { name: 'Beppe Coleiro', discipline: 'gtm', role: 'Head of Marketing & Communications', image: '/team/beppe-coleiro.jpg', cutout: '/team/cutouts/refined/beppe-coleiro.png', linkedin: 'https://www.linkedin.com/in/beppecoleiro' },
  { name: 'JJ Erpaiboon', discipline: 'investment', role: 'Head of Portfolio Value Creation', image: '/team/jj-erpaiboon-studio.jpg', cutout: '/team/cutouts/refined/jj-erpaiboon-studio.png', linkedin: 'https://www.linkedin.com/in/nichae' },
  { name: 'James Cannan', discipline: 'product', role: 'Founding Engineer, Rapid Prototyping', image: '/team/james-cannan-studio.jpg', cutout: '/team/cutouts/refined/james-cannan-studio.png', linkedin: 'https://www.linkedin.com/in/jamescannan' },
  { name: 'Abdelrahman Mattar', discipline: 'product', role: 'Founding Engineer, Rapid Prototyping', image: '/team/abdelrehman-mattar-2026.jpg', cutout: '/team/cutouts/refined/abdelrehman-mattar-2026.png', linkedin: 'https://www.linkedin.com/in/abdelrahman-mattar' },
  { name: 'Aiden Yongwoo Kim', discipline: 'product', role: 'Lead Designer', image: '/team/aiden-yongwoo-kim-2026-10.jpg', cutout: '/team/cutouts/refined/aiden-yongwoo-kim-2026-10.png', linkedin: 'https://www.linkedin.com/in/aiden-yongwoo-kim' },
  { name: 'Haniyah Umair', discipline: 'product', role: 'Agentic Operator', image: '/team/haniyah-umair.jpg', cutout: '/team/cutouts/refined/haniyah-umair.png', linkedin: 'https://www.linkedin.com/in/haniyah-umair-ab5990237' },
  { name: 'Haya Rizwi', discipline: 'gtm', role: 'Audiovisual Content Creator', image: '/team/haya-rizwi-2026-10.jpg', cutout: '/team/cutouts/refined/haya-rizwi-2026-10.png', linkedin: 'https://www.linkedin.com/in/hayarizwidigitalmarketing' },
  { name: 'Sarah Yeo', discipline: 'gtm', role: 'Marketing & Social Media Lead', image: '/team/sarah-yeo.jpg', cutout: '/team/cutouts/refined/sarah-yeo.png', linkedin: 'https://www.linkedin.com/in/sarah-yeo-b29407413' },
  { name: 'Hefzi Malhis', discipline: 'gtm', role: 'Head of Growth & Partnerships', image: '/team/hefzi-malhis.jpg', cutout: '/team/cutouts/refined/hefzi-malhis.png', linkedin: 'https://www.linkedin.com/in/hefzi-malhis-39b8a5aa' },
  { name: 'Ahmad Nazzal', discipline: 'investment', role: 'Investment Principal', image: '/team/ahmad-nazzal-studio.jpg', cutout: '/team/cutouts/refined/ahmad-nazzal-studio.png', linkedin: 'https://www.linkedin.com/in/ahnazzal' },
  { name: 'Alex San', discipline: 'investment', role: 'Investment Associate', image: '/team/alex-san-studio.jpg', cutout: '/team/cutouts/refined/alex-san-studio.png', linkedin: 'https://www.linkedin.com/in/alex-san' },
  // Authoritative roster: Team List (Employees,Interns,Consultants).xlsx, 28 September 2026.
  // Unknown roles, portraits and profile URLs stay unset until verified.
  { name: 'Neha Riyas', discipline: 'studio', role: 'Chief of Staff', image: '/team/neha-riyas-2026-10.jpg', cutout: '/team/cutouts/refined/neha-riyas-2026-10.png', linkedin: 'https://www.linkedin.com/in/neha-riyas' },
  { name: 'Jude Al Bajali', discipline: 'investment', role: 'Investment Analyst', image: '/team/jude-al-bajali.jpg', cutout: '/team/cutouts/refined/jude-al-bajali.png', linkedin: 'https://www.linkedin.com/in/judebajali' },
  { name: 'Jenine Duro', discipline: 'admin', role: 'Finance & Admin Lead', image: '/team/jenine-duro.jpg', cutout: '/team/cutouts/refined/jenine-duro.png', linkedin: 'https://www.linkedin.com/in/jenine-rei-duro-1710762b1/' },
  { name: 'Jaelene Iyman', discipline: 'gtm', role: 'Brand & Communications Associate', image: '/team/jaelene-iyman.jpg', cutout: '/team/cutouts/refined/jaelene-iyman.png', linkedin: 'https://www.linkedin.com/in/jaelene-iyman-6b9822211' },
  { name: 'Sumer Bhandari', discipline: 'studio', role: 'Agentic Operator', linkedin: 'https://www.linkedin.com/in/sumer-bhandari-1443bb197/', showWithoutPortrait: true },
  { name: 'Olayinka David', discipline: 'gtm', role: 'GTM Engineer & Narrative Builder', image: '/team/olayinka-david-2026-11.jpg', cutout: '/team/cutouts/refined/olayinka-david-2026-11.png', linkedin: 'https://www.linkedin.com/in/olayinka-adeyefa' },
  { name: 'Haajar Archer', discipline: 'product', role: 'Agentic Operator', image: '/team/haajar-archer-2026-10.jpg', cutout: '/team/cutouts/refined/haajar-archer-2026-10.png', linkedin: 'https://www.linkedin.com/in/haajar-archer-7900a0242/' },
]


export const TEAM_GROUPS = [{ id: 'leadership', label: 'Leadership' }, { id: 'studio', label: 'Studio team' }, { id: 'product', label: 'Product' }, { id: 'gtm', label: 'GTM' }, { id: 'investment', label: 'Investment' }, { id: 'admin', label: 'Operations & Finance' }, { id: 'wider', label: 'The wider team' }] as const
