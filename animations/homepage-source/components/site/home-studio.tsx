import Image from 'next/image'
import Link from 'next/link'
import typography from './home-typography.module.css'
import styles from './home-studio.module.css'
import { TEAM } from '@/lib/team'
import { TeamReveal } from './team-reveal'
import { StudioProductCards } from './studio-product-cards'

const team = [
  { name: 'Alina Truhina', role: 'Founding & Managing Partner', image: '/team/alina-tuhina-cutout.png', description: 'Venture building and investment.' },
  { name: 'Roo Rogers', role: 'Founding & Managing Partner', image: '/team/roo-rogers-cutout.png', description: 'Company building and strategy.' },
  { name: 'Ollie Graham-Yooll', role: 'Studio Director · Product', image: '/team/ollie-graham-yooll-cutout.png', description: 'Product direction and studio operations.' },
  { name: 'Karan Pinto', role: 'Studio Director · Tech (CTGO)', image: '/team/karan-pinto-cutout.png', description: 'AI engineering and growth.' },
]

const support = [
  { name: 'Product', description: 'Validation, prototyping, and product design.' },
  { name: 'Technology', description: 'AI engineering and infrastructure.' },
  { name: 'Capital', description: 'Investment and fundraising support.' },
  { name: 'Growth', description: 'Brand, customers, and go-to-market.' },
]

export function HomeStudio() {
  return (
    <>
      <section className={styles.section} aria-labelledby="home-support-title">
        <div className={`${styles.wrap} ${styles.supportLayout}`}>
          <header data-home-reveal className={styles.supportHeader}>
            <p className={styles.eyebrow}>/What we bring</p>
            <h2 className={typography.title} id="home-support-title">Your expertise. The support to build a company.</h2>
          </header>
          <div className={styles.supportGrid}>
            {support.map((item, index) => (
              <Link href="/how-we-build#co-building" key={item.name} data-home-reveal className={styles.supportCard} aria-label={`Explore ${item.name.toLowerCase()} support`}>
                <span className={styles.supportNumber} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                <h3 className={styles.supportTitle}>{item.name}</h3>
                <p className={styles.supportDescription}>{item.description}</p>
                <span className={styles.supportArrow} aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className={styles.section} aria-labelledby="home-team-title">
        <div className={styles.wrap}>
          <header data-home-reveal className={`${styles.header} ${styles.teamHeader}`}>
            <p className={styles.eyebrow}>/Built Together</p>
            <h2 className={typography.title} id="home-team-title">Built in Doha. Co-building globally.</h2>
            <p className={styles.intro}>A team of builders working alongside you—from first insight to first customers.</p>
          </header>
          <TeamReveal className={styles.teamGrid}>
            {team.map((member) => {
              const activity = TEAM.find(person => person.name === member.name)
              return (
              <article key={member.name} className={styles.profileCard}>
                <div className={`${styles.portrait} ${activity?.activityImage ? styles.activityPortrait : ''}`}>
                  <Image src={activity?.activityImage || member.image} alt={activity?.activityAlt || member.name} fill unoptimized={!activity?.activityImage} sizes="(min-width: 900px) 25vw, 288px" />
                </div>
                <header className={styles.profileHeading}>
                  <h3 className={styles.name}>{member.name}</h3>
                  <p className={styles.role}>{member.role}</p>
                </header>
                <div className={styles.profileFooter}>
                  <p className={styles.description}>{member.description}</p>
                  <Link className={styles.profileLink} href={`/team#${member.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} aria-label={`View ${member.name}'s profile`}>View profile</Link>
                </div>
              </article>
              )
            })}
          </TeamReveal>
          <div className={styles.network}>
            <header data-home-reveal className={`${styles.header} ${styles.teamHeader}`}>
              <p className={styles.eyebrow}>/The wider team</p>
              <h3 className={styles.networkTitle}>The people behind what you build.</h3>
              <p className={styles.intro}>Across engineering, design, operations, investment, and growth.</p>
            </header>
            <Link href="/team" data-home-reveal className={styles.teamPreview} aria-label="Meet the full studio team">
            <div className={styles.expertRail}>
              {TEAM.filter(member => !team.some(lead => lead.name === member.name)).slice(0, 8).map(member => (
                <article className={styles.expertCard} key={member.name}>
                  <div className={styles.expertCardHeader}>
                    <div className={`${styles.expertPhoto} ${member.activityImage ? styles.expertActivityPhoto : ''}`}>
                      {(member.activityImage || member.image) ? <Image src={member.activityImage || member.image!} alt={member.activityAlt || member.name} fill unoptimized={!member.activityImage} sizes={member.activityImage ? "(max-width: 800px) 90vw, 25vw" : "96px"} /> : <span className={styles.initials} aria-hidden="true">{member.name.split(' ').map(part => part[0]).slice(0, 2).join('')}</span>}
                    </div>
                  </div>
                  <h4 className={styles.name}>{member.name}</h4>
                  {member.role && <p className={styles.role}>{member.role}</p>}
                </article>
              ))}
            </div>
            <span className={styles.previewFade} aria-hidden="true" />
            <span data-home-reveal className={styles.previewCta}>Meet the whole team</span>
            </Link>
          </div>
        </div>
      </section>
      <section id="studio-products" className={styles.section} aria-labelledby="home-products-title">
        <div className={styles.wrap}>
          <header data-home-reveal className={styles.header}>
            <p className={styles.eyebrow}>/Studio Products</p>
            <h2 className={typography.title} id="home-products-title">Built by the studio. Shared with every fellow.</h2>
            <p className={styles.intro}>The workspace, infrastructure, and tools behind the companies we build together.</p>
          </header>
          <StudioProductCards reveal />
        </div>
      </section>
    </>
  )
}
