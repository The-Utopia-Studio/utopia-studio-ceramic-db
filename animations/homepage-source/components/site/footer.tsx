import Link from 'next/link'
import Image from 'next/image'
import { SocialIcon, socialPlatform } from '@/components/ui/social-icon'
import { SITE_LINKS } from '@/lib/site-links'
import styles from './footer.module.css'

const GROUPS = [
  { heading: 'Studio', links: [
    { label: 'Team', href: SITE_LINKS.team },
    { label: 'Fellows', href: SITE_LINKS.fellows },
    { label: 'Portfolio', href: SITE_LINKS.portfolio },
    { label: 'News and resources', href: SITE_LINKS.resources },
  ] },
  { heading: 'Build with us', links: [
    { label: 'How we build', href: '/how-we-build' },
    { label: 'Apply as a fellow', href: SITE_LINKS.applySteps },
    { label: 'FAQ', href: SITE_LINKS.faq },
    { label: 'Fellowship costs & equity', href: '/pricing' },
    { label: 'Choosing a venture studio', href: '/guides/choosing-ai-venture-studio' },
    { label: 'Open roles', href: SITE_LINKS.studioJobs },
    { label: 'Apply as a Mentor', href: SITE_LINKS.mentorApply },
  ] },
  { heading: 'Products', links: [
    { label: 'Utopia OS', href: SITE_LINKS.utopiaOs },
    { label: 'Atliq', href: SITE_LINKS.atliq },
    { label: 'Ceramic', href: SITE_LINKS.ceramic },
    { label: 'Utopia Cloud', href: SITE_LINKS.utopiaCloud },
    { label: 'Utopia Skills', href: SITE_LINKS.utopiaSkills },
  ] },
  { heading: 'Contact', links: [
    { label: 'Contact us', href: SITE_LINKS.contact },
    { label: 'Partner with us', href: SITE_LINKS.partnerWithUs },
  ] },
]

export function Footer() {
  return <footer className={styles.footer}>
    <div className={styles.inner}>
      <nav className={styles.grid} aria-label="Footer navigation">
        {GROUPS.map(group => <div key={group.heading}>
          <h2>{group.heading}</h2>
          <ul>{group.links.map(link => <li key={link.label}>
            {link.href.startsWith('http') || link.href.startsWith('mailto:') ?
              <a href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                {...(link.href === SITE_LINKS.mentorApply ? {
                  'aria-label': 'Apply as a Mentor (opens in a new tab)',
                  'data-analytics-cta': true,
                  'data-cta-label': link.label,
                  'data-cta-location': 'footer',
                  'data-cta-destination': link.href,
                } : {})}
              >{link.label}{link.href.startsWith('http') && <span aria-hidden="true"> ↗</span>}</a> :
              <Link href={link.href} data-analytics-cta data-cta-label={link.label} data-cta-location="footer" data-cta-destination={link.href}>{link.label}</Link>}
          </li>)}</ul>
        </div>)}
      </nav>
      <div className={styles.brandRow}>
        <Link href="/" aria-label="The Utopia Studio home"><Image src="/logo/the-utopia-studio-wordmark.avif" alt="The Utopia Studio" width={192} height={124} className={styles.logo} /></Link>
        <nav aria-label="Studio channels" className={styles.socials}>
          {[
            { label: 'YouTube', href: SITE_LINKS.youtube },
            { label: 'LinkedIn', href: SITE_LINKS.linkedin },
            { label: 'Instagram', href: SITE_LINKS.instagram },
            { label: 'GitHub', href: SITE_LINKS.skillsGithub },
          ].map(channel => <a key={channel.label} href={channel.href} target="_blank" rel="noreferrer" aria-label={`The Utopia Studio on ${channel.label} (opens in a new tab)`}>
            {socialPlatform(channel.label) && <SocialIcon platform={socialPlatform(channel.label)!} />}<span>{channel.label}</span><span aria-hidden="true">↗</span>
          </a>)}
        </nav>
      </div>
      <div className={styles.legal}>
        <p>© {new Date().getFullYear()} The Utopia Studio. All rights reserved.</p>
        <nav aria-label="Legal and feeds"><Link href={SITE_LINKS.privacy}>Privacy</Link><Link href={SITE_LINKS.terms}>Terms</Link><a href="/feed.xml">News RSS</a></nav>
      </div>
    </div>
  </footer>
}
