'use client'

const HERO_SPRING = { stiffness: 100, damping: 30 }
import { useId } from 'react'
import { motion, useReducedMotion, useSpring, useTransform, type MotionValue } from 'framer-motion'


/** Astrolabe artwork adapted from the supplied AstrolabeBigBang component. */
export function UtopiaStudioAstrolabe({ progress }: { progress: MotionValue<number> }) {
  const reduced = useReducedMotion()
  const smoothProgress = useSpring(progress, HERO_SPRING)
  const opacity = useTransform(smoothProgress, [0, 0.08, 0.38], [1, 1, 0])
  const scale = useTransform(smoothProgress, [0, 0.38], [1, 0.65])
  const y = useTransform(smoothProgress, [0, 0.38], ['0rem', '-1.5rem'])
  const rotate = useTransform(smoothProgress, [0, 0.38], [0, 35])
  const plateId = useId()
  const accent = 'var(--color-text-home-accent)'
  return <motion.svg style={reduced ? undefined : { opacity, scale, y, rotate }} viewBox="0 -150 1000 1150" className="uds-studio-astrolabe-mark" aria-hidden="true" focusable="false">
          <defs>
            <clipPath id={plateId}>
              <circle cx="500" cy="500" r="420" />
            </clipPath>
          </defs>
          <g fill="none" stroke="currentColor" strokeOpacity={0.9}>
            <circle cx="500" cy="-100" r="42" strokeWidth={7} />
            <circle cx="500" cy="-34" r="16" strokeWidth={7} />
            <path d="M432 26 C458 20 466 4 478 -12 L522 -12 C534 4 542 20 568 26" strokeWidth={7} />
            <circle cx="500" cy="500" r="478" strokeWidth={8} />
            <circle cx="500" cy="500" r="436" strokeWidth={5} />
            <circle className="uds-studio-astrolabe-dial" cx="500" cy="500" r="457" strokeWidth={26} strokeDasharray="5 75.8" />
          </g>
          <g fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={4} clipPath={`url(#${plateId})`}>
            <circle cx="500" cy="500" r="275.9" />
            <path d="M500 80 L500 920 M80 500 L920 500" />
            <circle cx="500" cy="405.2" r="645" strokeOpacity={0.6} strokeWidth={5} />
            <circle cx="500" cy="664.4" r="336.7" />
            <circle cx="500" cy="755.5" r="197.3" />
            <circle cx="500" cy="795.7" r="106.6" />
          </g>
          <g className="uds-studio-astrolabe-rete">
            <g fill="none" stroke={accent} strokeWidth={8} strokeLinecap="round">
              <circle cx="500" cy="619.5" r="300.5" />
              <path d="M880 590 A410 410 0 0 1 120 590" />
              <path d="M120 500 L880 500" />
              <path d="M500 319 C472 270 520 224 500 175" />
              <path d="M397 338 Q373 305 366 250" />
              <path d="M786 540 Q814 542 830 514" />
              <path d="M330 862 Q342 832 368 826" />
            </g>
            <g fill={accent}>
              <circle cx="500" cy="175" r="18" />
              <circle cx="366" cy="250" r="18" />
              <circle cx="830" cy="514" r="18" />
              <circle cx="368" cy="826" r="18" />
            </g>
          </g>
          <g className="uds-studio-astrolabe-alidade">
          <path
            d="M474 72 L500 40 L526 72 L526 928 L500 960 L474 928 Z"
            fill="var(--color-bg-default)"
            stroke="currentColor"
            strokeOpacity={0.9}
            strokeWidth={6}
          />
          </g>
          <circle className="uds-studio-astrolabe-pulse" cx="500" cy="500" r="65" fill="none" stroke={accent} strokeWidth={5} />
          <circle cx="500" cy="500" r="40" fill="var(--color-bg-default)" stroke="currentColor" strokeWidth={6} />
          <circle cx="500" cy="500" r="16" fill={accent} className="uds-studio-astrolabe-core" />
  </motion.svg>
}

/** Decorative product diagrams, intentionally independent of product UI screenshots. */
export function UtopiaStudioProductIllustration({ name }: { name: string }) {
  return <svg viewBox="0 0 240 180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === 'Utopia OS' && <>
      <rect x="24" y="26" width="192" height="132" rx="12" />
      <path d="M24 54h192M78 54v104M38 40h2m10 0h2m10 0h2M38 76h24m-24 18h18m-18 18h24" opacity=".4" />
      <rect x="94" y="72" width="46" height="32" rx="6" /><rect x="154" y="72" width="46" height="62" rx="6" />
      <path d="m104 121 7 7 15-17M164 88h20m-20 14h12" />
    </>}
    {name === 'Atliq' && <>
      <path d="m120 20 46 25-46 25-46-25 46-25Zm-46 25v50l46 25 46-25V45M120 70v50" />
      <path d="m72 91-40 22 44 25 44-25m-88 0v30l44 25 44-25m-44-5v30M168 91l40 22-44 25-44-25m88 0v30l-44 25-44-25m44-5v30" opacity=".45" />
    </>}
    {name === 'Ceramic' && <>
      <rect x="30" y="24" width="76" height="76" rx="18" /><circle cx="165" cy="62" r="38" />
      <rect x="30" y="118" width="76" height="38" rx="19" /><path d="M128 156v-38h76v38h-76Zm19-38v38m19-38v38m19-38v38" opacity=".45" />
      <path d="m53 78 15-33 15 33m-24-11h18" />
    </>}
    {name === 'Cloud' && <>
      {[32, 76, 120].map(y => <g key={y}><rect x="52" y={y} width="136" height="30" rx="8" /><circle cx="70" cy={y + 15} r="3" fill="currentColor" /><path d={`M88 ${y+15}h38m28 0h16`} opacity=".5" /></g>)}
      <path d="M32 47H20v88h12m176-88h12v88h-12M120 18v14m0 118v14" opacity=".45" />
    </>}
    {name === 'Skills' && <>
      <path d="M62 46h50v88h66M112 90h66" opacity=".5" />
      <rect x="24" y="28" width="38" height="38" rx="10" /><rect x="178" y="70" width="38" height="38" rx="10" /><rect x="178" y="116" width="38" height="38" rx="10" />
      <circle cx="112" cy="46" r="8" fill="currentColor" /><path d="m36 46 5 5 10-12m137 50 6 6 12-13m-14 52h10m-5-5v10" />
      <path d="m104 84 8 6-8 6m62-12 7 6-7 6m0 38 7 6-7 6" />
    </>}
  </svg>
}
