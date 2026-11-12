import { SITE_MOTION } from '@/lib/site-motion'
import { useId } from 'react'
import { motion, useReducedMotion, useSpring, useTransform, type MotionValue } from 'framer-motion'
import styles from './hero-astrolabe.module.css'

/** Astrolabe artwork adapted from the supplied AstrolabeBigBang component. */
export function HeroAstrolabe({ progress }: { progress: MotionValue<number> }) {
  const reduced = useReducedMotion()
  const smoothProgress = useSpring(progress, SITE_MOTION.heroSpring)
  const opacity = useTransform(smoothProgress, [0, 0.08, 0.38], [1, 1, 0])
  const scale = useTransform(smoothProgress, [0, 0.38], [1, 0.65])
  const y = useTransform(smoothProgress, [0, 0.38], ['0rem', '-1.5rem'])
  const rotate = useTransform(smoothProgress, [0, 0.38], [0, 35])
  const plateId = useId()
  const accent = 'var(--color-text-home-accent)'
  return <motion.svg style={reduced ? undefined : { opacity, scale, y, rotate }} viewBox="0 -150 1000 1150" className={styles.mark} aria-hidden="true" focusable="false">
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
            <circle className={styles.dial} cx="500" cy="500" r="457" strokeWidth={26} strokeDasharray="5 75.8" />
          </g>
          <g fill="none" stroke="currentColor" strokeOpacity={0.35} strokeWidth={4} clipPath={`url(#${plateId})`}>
            <circle cx="500" cy="500" r="275.9" />
            <path d="M500 80 L500 920 M80 500 L920 500" />
            <circle cx="500" cy="405.2" r="645" strokeOpacity={0.6} strokeWidth={5} />
            <circle cx="500" cy="664.4" r="336.7" />
            <circle cx="500" cy="755.5" r="197.3" />
            <circle cx="500" cy="795.7" r="106.6" />
          </g>
          <g className={styles.rete}>
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
          <g className={styles.alidade}>
          <path
            d="M474 72 L500 40 L526 72 L526 928 L500 960 L474 928 Z"
            fill="var(--color-bg-default)"
            stroke="currentColor"
            strokeOpacity={0.9}
            strokeWidth={6}
          />
          </g>
          <circle className={styles.pulse} cx="500" cy="500" r="65" fill="none" stroke={accent} strokeWidth={5} />
          <circle cx="500" cy="500" r="40" fill="var(--color-bg-default)" stroke="currentColor" strokeWidth={6} />
          <circle cx="500" cy="500" r="16" fill={accent} className={styles.core} />
  </motion.svg>
}
