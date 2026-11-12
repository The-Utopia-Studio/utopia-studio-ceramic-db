import Image from 'next/image'
import Link from 'next/link'
import type { CSSProperties } from 'react'
import { Reveal } from './reveal'
import styles from './logo-grid.module.css'

export interface LogoGridItem {
  alt: string
  src: string
  href?: string
  external?: boolean
  keepLight?: boolean
  format?: 'wordmark' | 'symbol' | 'stacked'
}

export interface LogoGridGroup {
  label: string
  logos: LogoGridItem[]
}

interface LogoGridProps {
  groups: LogoGridGroup[]
  columns?: number
  padEmpty?: boolean
  tone?: 'dark' | 'light'
  compact?: boolean
  variant?: 'flat' | 'cards'
}

export function LogoGrid({ groups, columns = 4, padEmpty = true, tone = 'dark', compact = false, variant = 'flat' }: LogoGridProps) {
  const cards = variant === 'cards'
  return (
    <div className={`logo-grid-shell logo-grid-${tone}${compact ? ' logo-grid-compact' : ''}${cards ? ` ${styles.cards}` : ''}`} style={cards ? undefined : { '--logo-grid-columns': columns } as CSSProperties}>
      {groups.map((group) => {
        const emptySlots = padEmpty ? (columns - (group.logos.length % columns)) % columns : 0
        return (
          <section key={group.label} className="logo-grid-group" data-logo-count={group.logos.length} aria-label={cards ? group.label : undefined}>
            {!cards && <p className="logo-grid-label">{group.label}</p>}
            <div className="logo-grid">
              {group.logos.map((logo, index) => cards ? (
                <Reveal key={logo.alt} index={index}><LogoCell logo={logo} showLabel={false} /></Reveal>
              ) : <LogoCell key={logo.alt} logo={logo} />)}
              {Array.from({ length: cards ? 0 : emptySlots }).map((_, index) => (
                <div key={`${group.label}-empty-${index}`} className="logo-grid-empty" aria-hidden="true" />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}

function LogoCell({ logo, showLabel = true }: { logo: LogoGridItem; showLabel?: boolean }) {
  const inner = (
    <>
      <span className="logo-grid-stage" data-format={logo.format || 'wordmark'}>
        <Image src={logo.src} alt={`${logo.alt} logo`} fill sizes="180px" data-keep-light={logo.keepLight ? 'true' : undefined} />
      </span>
      {showLabel && <span>{logo.alt}</span>}
    </>
  )

  if (!logo.href) {
    return <div className="logo-grid-item">{inner}</div>
  }

  if (logo.external) {
    return (
      <a href={logo.href} target="_blank" rel="noreferrer" aria-label={logo.alt} className="logo-grid-item">
        {inner}
      </a>
    )
  }

  return (
    <Link href={logo.href} aria-label={logo.alt} className="logo-grid-item">
      {inner}
    </Link>
  )
}
