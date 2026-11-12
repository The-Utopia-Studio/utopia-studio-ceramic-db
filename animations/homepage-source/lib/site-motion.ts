import { RUNTIME_TOKENS } from './generated-style-tokens'

/** Numeric Framer values generated from the canonical CSS tokens. */
export const SITE_MOTION = {
  duration: RUNTIME_TOKENS.revealSeconds,
  stagger: RUNTIME_TOKENS.staggerSeconds,
  distance: RUNTIME_TOKENS.revealDistance,
  fast: RUNTIME_TOKENS.fastSeconds,
  feedback: RUNTIME_TOKENS.feedbackSeconds,
  slow: RUNTIME_TOKENS.slowSeconds,
  margin: RUNTIME_TOKENS.viewportMargin,
  marginNear: RUNTIME_TOKENS.viewportMarginNear,
  marginTight: RUNTIME_TOKENS.viewportMarginTight,
  heroSpring: { stiffness: RUNTIME_TOKENS.heroSpringStiffness, damping: RUNTIME_TOKENS.heroSpringDamping },
  filmSpring: { stiffness: RUNTIME_TOKENS.filmSpringStiffness, damping: RUNTIME_TOKENS.filmSpringDamping },
  ease: [...RUNTIME_TOKENS.ease] as [number, number, number, number],
}
export const revealUp = {
  hidden: { opacity: 0, y: SITE_MOTION.distance },
  visible: { opacity: 1, y: 0, transition: { duration: SITE_MOTION.duration, ease: SITE_MOTION.ease } },
}
