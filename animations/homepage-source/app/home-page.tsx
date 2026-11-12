'use client'

import { SITE_MOTION } from '@/lib/site-motion'
import { revealUp } from '@/lib/site-motion'

import Image from 'next/image'
import { useRef, useState, useSyncExternalStore } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { PROOFS } from '@/lib/fellows'
import { STUDIO_TOOL_STACK } from '@/lib/tool-stack'
import { HOME_FELLOWS } from '@/lib/home-fellows'
import { VENTURE_EVIDENCE } from '@/lib/venture-evidence'
import typography from '@/components/site/home-typography.module.css'
import openingStyles from '@/components/site/home-opening.module.css'
import fellowStyles from '@/components/site/home-fellows.module.css'
import { VentureCover } from '@/components/site/venture-cover'
import { FellowsScroll, FELLOW_EXPANSION_QUERY } from '@/components/site/fellows-scroll'
import { HomeStudio } from '@/components/site/home-studio'
import { StudioFilm } from '@/components/site/studio-film'
import { LogoGrid, type LogoGridGroup } from '@/components/site/logo-grid'
import { HeroAstrolabe } from '@/components/site/hero-astrolabe'
import { HomeMotion } from '@/components/site/home-motion'
import { HomeClosing } from '@/components/site/home-closing'
import { SITE_DESCRIPTION } from '@/lib/site-identity'

const ease: [number, number, number, number] = SITE_MOTION.ease

const stagger = (delay = 0, staggerChildren = 0.08) => ({
  hidden: {},
  visible: { transition: { delayChildren: delay, staggerChildren } },
})
const HOME_ACCENT = 'var(--color-text-home-accent)'
const PARTNER_LOGO_GROUPS: LogoGridGroup[] = [
  {
    label: 'Utopia Platform',
    logos: [
      { alt: 'UTOPIA', src: '/logo/utopia-capital.png', href: 'https://www.utopia-capital.co/', external: true },
      { alt: 'Atypical Ventures', src: '/images/Aytpical logo.png', href: 'https://a-typicalventures.com/', external: true },
      { alt: 'The Radical Fund', src: '/images/radical-fund-logo-transparent.png', href: 'https://www.theradicalfund.com/', external: true },
    ],
  },
  {
    label: 'Ecosystem Partners',
    logos: [
      { alt: 'Qatar Development Bank', format: 'stacked', src: '/images/qdb-logo-updated.png', href: 'https://www.qdb.qa/', external: true },
    ],
  },
  {
    label: 'Tool stack',
    logos: STUDIO_TOOL_STACK.map(tool => ({ alt: tool.name, src: tool.logo, format: tool.format })),
  },
]

function subscribeFellowViewport(onChange: () => void) {
  const media = window.matchMedia(FELLOW_EXPANSION_QUERY)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}
const getFellowViewport = () => window.matchMedia(FELLOW_EXPANSION_QUERY).matches
const getServerFellowViewport = () => false

export default function Home({ children }: { children: React.ReactNode }) {
  const [selectedFellow, setExpandedFellow] = useState<string | null>(() => String(HOME_FELLOWS.length))
  const canExpandFellows = useSyncExternalStore(subscribeFellowViewport, getFellowViewport, getServerFellowViewport)
  const expandedFellow = canExpandFellows ? selectedFellow : null
  const heroRef = useRef<HTMLElement>(null)
  const fellowPointerStart = useRef<{ x: number; y: number } | null>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  // Keep the outgoing hero visible while the fellows enter the same space.
  const heroOpacity = useTransform(heroProgress, [0, 0.35, 1], [1, 1, 0])
  const heroTransform = useTransform(heroProgress, progress =>
    `translateY(calc(var(--home-hero-crossing-distance) * ${Math.min(progress / 0.65, 1)}))`
  )
  const heroVisibility = useTransform(heroProgress, (progress) =>
    progress >= 1 ? 'hidden' : 'visible'
  )
  const ctaOpacity = useTransform(heroProgress, [0, 0.15, 0.4], [1, 1, 0])
  const ctaVisibility = useTransform(heroProgress, progress =>
    progress >= 0.4 ? 'hidden' : 'visible'
  )

  return (
    <div className="home-page">
      <HomeMotion />
      {/* ── Hero ── */}
      <section
        ref={heroRef}
        className={openingStyles.hero}
        style={{
          minHeight: 'calc(100svh - clamp(var(--layout-home-min-height), 6vw, var(--layout-home-min-height-2)) - min(var(--fellow-portrait-width), 72vw) * 0.65 - var(--space-4))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: 'calc(var(--space-16) + var(--space-24)) var(--gutter) var(--space-16)',
          position: 'relative',
        }}
      >
        <motion.div
          className={openingStyles.content}
          style={{
            opacity: reduceMotion ? 1 : heroOpacity,
            transform: reduceMotion ? undefined : heroTransform,
            visibility: reduceMotion ? 'visible' : heroVisibility,
          }}
        >
        <motion.div
          animate="visible"
          initial={reduceMotion ? false : "hidden"}
          variants={stagger(0.2, 0.14)}
          style={{
            maxWidth: 'var(--max-content)',
            margin: '0 auto',
            width: '100%',
            textAlign: 'center',
          }}
        >
          <HeroAstrolabe progress={heroProgress} />
          <motion.h1
            variants={stagger(0, 0.12)}
            className="hero-title"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 'var(--fw-light)',
              fontSize: 'var(--type-h1)',
              lineHeight: 'var(--lh-snug)',
              letterSpacing: 'var(--tracking-display)',
              textTransform: 'none',
              color: 'var(--color-text-primary)',
              marginBottom: 'var(--space-10)',
            }}
          >
            {['We co‑build', 'AI companies', 'with the experts', 'who know.'].map((line, i) => (
              <motion.span
                key={line}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: SITE_MOTION.duration, ease } },
                }}
                style={{
                  display: 'inline',
                  color: 'var(--color-text-primary)',
                }}
              >
                {line}{i === 1 ? <br /> : i < 3 ? ' ' : ''}
              </motion.span>
            ))}
          </motion.h1>

          <p className={openingStyles.summary}>{SITE_DESCRIPTION}</p>

          <motion.div
            variants={revealUp}
            className="hero-ctas"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-6)',
              opacity: reduceMotion ? 1 : ctaOpacity,
              visibility: reduceMotion ? 'visible' : ctaVisibility,
            }}
          >
            <a
              href="/apply"
              className="hero-cta-primary"
              data-analytics-cta
              data-cta-label="Apply as Fellow"
              data-cta-location="hero"
              data-cta-destination="/apply"
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--color-interactive-primary)',
                color: 'var(--color-interactive-primary-text)',
                padding: 'var(--space-3) var(--space-8)',
                borderRadius: 'var(--button-radius)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 'var(--fw-medium)',
                fontSize: 'var(--type-eyebrow)',
                letterSpacing: 'var(--tracking-eyebrow)',
                textTransform: 'uppercase',
                textDecoration: 'none',
                textAlign: 'center',
              }}
            >
              Apply as Fellow
            </a>

          </motion.div>
        </motion.div>
        </motion.div>

      </section>

      {/* ── Fellows section ── */}
      <StudioFilm>
      <FellowsScroll onSelect={setExpandedFellow}>
        <div className={fellowStyles.rail} role="region" aria-label="Featured fellows" tabIndex={0}>
          {[...HOME_FELLOWS, ...HOME_FELLOWS, ...HOME_FELLOWS].map((fellow, index) => (
            <article
              key={`${fellow.name}-${index}`}
              className={fellowStyles.card}
              data-expanded={expandedFellow === String(index) || undefined}
              onFocus={(event) => {
                if (canExpandFellows && event.target.matches(':focus-visible') && fellow.headline) setExpandedFellow(String(index))
              }}

            >
              {fellow.ventureHref && <a
                className={fellowStyles.cardLink}
                href={fellow.ventureHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${fellow.displayName ?? fellow.name} — visit ${fellow.venture} (opens in a new tab)`}
                draggable={false}
                onPointerDown={event => { fellowPointerStart.current = { x: event.clientX, y: event.clientY } }}
                onPointerCancel={() => { fellowPointerStart.current = null }}
                onClick={event => {
                  const start = fellowPointerStart.current
                  if (event.detail > 0 && start && Math.hypot(event.clientX - start.x, event.clientY - start.y) > 8) event.preventDefault()
                  fellowPointerStart.current = null
                }}
              />}
              <div className={fellowStyles.visual}>
                <div className={fellowStyles.coverFrame}>
                  {!fellow.ventureHref && canExpandFellows && fellow.headline && <button
                    type="button"
                    className={fellowStyles.expandToggle}
                    aria-label={`About ${fellow.displayName ?? fellow.name}`}
                    aria-expanded={expandedFellow === String(index)}
                    aria-controls={`fellow-story-${index}`}
                    onClick={(event) => {
                      const mouseClick = event.detail > 0 && window.matchMedia('(hover: hover) and (pointer: fine)').matches
                      setExpandedFellow(current => mouseClick || current !== String(index) ? String(index) : null)
                    }}
                  />}
                  {fellow.photo ? (
                    <Image className={fellowStyles.fellowPortrait} src={fellow.photo} alt={fellow.displayName ?? fellow.name} fill unoptimized sizes="288px" style={{ objectPosition: fellow.photoPosition }} />
                  ) : (
                    <>
                      <VentureCover venture={fellow.venture} />
                      {fellow.logo ? (
                        <span className={fellowStyles.portraitFallback} data-light={fellow.logoKeepLight || undefined}>
                          <Image src={fellow.logo} alt="" fill unoptimized sizes="96px" />
                        </span>
                      ) : <span className={fellowStyles.initials} aria-hidden="true">{fellow.name.split(' ').map(part => part[0]).slice(0, 2).join('')}</span>}
                    </>
                  )}
                  <div className={fellowStyles.personIdentity}>
                    <h3 className={fellowStyles.personName}>{fellow.displayName ?? fellow.name}</h3>
                  </div>
                </div>
                <div className={fellowStyles.cardBody}>
                  <div className={fellowStyles.ventureIdentity}>
                    {fellow.logo && <span className={fellowStyles.ventureLogo} data-light={fellow.logoKeepLight || undefined}><Image src={fellow.logo} alt="" fill unoptimized sizes="32px" /></span>}
                    <p className={fellowStyles.ventureName}>{fellow.venture}</p>
                  </div>
                  {fellow.headline && <p className={fellowStyles.summary}>{fellow.headline}</p>}
                </div>
              </div>
              {fellow.headline && <div id={`fellow-story-${index}`} className={fellowStyles.story} inert={expandedFellow !== String(index)}>
                <div className={fellowStyles.storyInner}>
                  <h4 className={fellowStyles.storyTitle}>{fellow.headline}</h4>
                  {fellow.background && <p className={fellowStyles.description}>{fellow.background}</p>}
                </div>
              </div>}
            </article>
          ))}
        </div>
      </FellowsScroll>

      </StudioFilm>

      <HomeStudio />

      {/* ── Partners ── */}
      <motion.section
        initial={reduceMotion ? false : "hidden"}
        variants={stagger(0, 0.1)}
        viewport={{ once: false, amount: 0.1 }}
        whileInView="visible"
        style={{
          backgroundColor: 'var(--color-bg-default)',
          padding: 'var(--space-16) var(--gutter)',
        }}
      >
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto' }}>

          {/* Header */}
          <motion.div variants={revealUp} style={{ marginBottom: 'var(--space-10)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-medium)', fontSize: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--color-text-home-accent)', marginBottom: 'var(--space-4)' }}>
              /Our Partners
            </p>
            <h2 className={typography.title} style={{ maxWidth: 'var(--measure-home-max-width)', marginBottom: 'var(--space-6)' }}>
              The coalition behind every venture.
            </h2>
            <p style={{ fontSize: 'var(--type-body-lg)', color: 'var(--color-text-secondary)', maxWidth: 'var(--measure-home-max-width-2)', lineHeight: "var(--lh-body)" }}>
              Fellows build with the studio and a wider network across capital and ecosystem access. The tooling below is our stack, not our partner list.
            </p>
          </motion.div>

          {/* Partner groups */}
          <motion.div variants={revealUp}>
            <LogoGrid groups={PARTNER_LOGO_GROUPS} padEmpty={false} compact />
          </motion.div>

        </div>
      </motion.section>

      {/* ── Fellow proof quotes ── */}
      <motion.section
        initial={reduceMotion ? false : "hidden"}
        variants={stagger(0, 0.1)}
        viewport={{ once: false, amount: 0.15 }}
        whileInView="visible"
        style={{
          backgroundColor: 'var(--color-bg-default)',
          padding: 'var(--space-32) var(--gutter)',
        }}
      >
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto' }}>
          <motion.div variants={revealUp} style={{ marginBottom: 'var(--space-12)' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-medium)', fontSize: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: HOME_ACCENT, marginBottom: 'var(--space-4)' }}>
              /Fellow Proof
            </p>
            <h2 className={typography.title}>
              What founders feel inside the studio.
            </h2>
            <p style={{ fontSize: 'var(--type-body-lg)', color: 'var(--color-text-secondary)', maxWidth: 'var(--measure-home-max-width-2)', lineHeight: "var(--lh-body)", marginTop: 'var(--space-6)' }}>
              Don&apos;t take our word for it. Hear from our fellows.
            </p>
          </motion.div>
          <div className="proof-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', backgroundColor: 'var(--color-border-muted)', borderRadius: 'var(--profile-card-radius)', overflow: 'hidden' }}>
            {PROOFS.map((entry, i) => {
              const fellow = HOME_FELLOWS.find(person => person.name === entry.name)
              const caseStudy = VENTURE_EVIDENCE.find(item => item.venture === fellow?.venture)
              const proof = { ...entry, href: caseStudy?.href ?? entry.href, name: fellow?.displayName || entry.name, image: fellow?.photo || entry.image, position: fellow?.photoPosition || entry.position }
              return (
              <motion.a
                key={proof.name}
                href={proof.href}
                target={proof.href.startsWith('http') ? '_blank' : undefined}
                rel={proof.href.startsWith('http') ? 'noreferrer' : undefined}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                viewport={{ once: false, amount: 0.1 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * SITE_MOTION.stagger, duration: reduceMotion ? 0 : SITE_MOTION.duration, ease }}
                style={{ textDecoration: 'none', backgroundColor: 'var(--color-bg-subtle)', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: "var(--layout-home-min-height-3)" }}
              >
                <div>
                  <span style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: "var(--type-h4)", marginBottom: 'var(--space-4)' }}>↗</span>
                  <p style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-light)', fontSize: 'var(--type-body)', color: 'var(--color-text-secondary)', lineHeight: "var(--lh-body)" }}>
                    &ldquo;{proof.quote}&rdquo;
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-6)' }}>
                  <div style={{ width: 'var(--space-12)', height: 'var(--space-12)', borderRadius: 'var(--space-2)', overflow: 'hidden', flexShrink: 0, position: 'relative' }}>
                    <Image src={proof.image} alt={proof.name} fill style={{ objectFit: 'cover', objectPosition: proof.position }} sizes="48px" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-medium)', fontSize: 'var(--type-body-sm)', color: 'var(--color-text-primary)' }}>{proof.name}</strong>
                    <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--fw-light)', fontSize: 'var(--type-eyebrow)', letterSpacing: 'var(--tracking-eyebrow)', color: 'var(--color-text-muted)', textTransform: 'uppercase' }}>{caseStudy ? `${caseStudy.venture} · Case study` : proof.source}</span>
                  </div>
                </div>
              </motion.a>
              )
            })}
          </div>
        </div>
      </motion.section>

      <style>{`
        .home-page {
          overflow-x: clip;
        }
        @media (max-width: 1024px) {
          .logo-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
        @media (max-width: 640px) {
          .newsletter-grid { grid-template-columns: 1fr !important; }
          .hero-ctas { flex-direction: column; align-items: center !important; gap: var(--space-3) !important; }
          .hero-cta-primary { display: block !important; padding: var(--space-4) var(--space-6) !important; }
          .hero-cta-secondary { display: block !important; padding: var(--space-4) var(--space-6) !important; border: var(--border-width-thin) solid var(--color-border-muted); }
          .studio-desc-grid { grid-template-columns: 1fr !important; gap: var(--space-8) !important; }
          .studio-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .proof-grid { grid-template-columns: 1fr !important; }
          .signals-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: auto !important;
            align-items: stretch !important;
          }
          .signals-video-panel {
            aspect-ratio: 9 / 16 !important;
            min-height: min(var(--layout-home-min-height-4), calc(100vw * 16 / 9)) !important;
            position: relative !important;
            z-index: 1 !important;
          }
          .signals-video-panel video {
            position: absolute !important;
            z-index: 1 !important;
          }
          .signals-copy-panel {
            padding: var(--space-8) !important;
            position: relative !important;
            z-index: 2 !important;
          }
          .lp-logo-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
        }
        @media (min-width: 641px) and (max-width: 1024px) {
          .newsletter-grid { grid-template-columns: 1fr !important; }
          .studio-desc-grid { grid-template-columns: 1fr !important; gap: var(--space-10) !important; }
          .studio-cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .proof-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .signals-grid {
            grid-template-columns: 1fr !important;
            grid-auto-rows: auto !important;
            align-items: stretch !important;
            justify-items: stretch !important;
          }
          .signals-video-panel {
            aspect-ratio: 9 / 16 !important;
            justify-self: center !important;
            min-height: 0 !important;
            position: relative !important;
            width: min(var(--layout-home-width), 100%) !important;
            z-index: 1 !important;
          }
          .signals-video-panel video {
            position: absolute !important;
            z-index: 1 !important;
          }
          .signals-copy-panel {
            padding: var(--space-10) !important;
            position: relative !important;
            width: 100% !important;
            z-index: 2 !important;
          }
        }
      `}</style>

      <HomeClosing>{children}</HomeClosing>
    </div>
  )
}
