'use client'

import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { SITE_MOTION } from '@/lib/site-motion'

/** Shared, repeatable card entrance; delay is bounded to a visible row. */
export function Reveal({ children, index = 0 }: { children: ReactNode; index?: number }) {
  const reduced = useReducedMotion()
  return <motion.div className="site-reveal"
    initial={reduced ? false : { opacity: 0, y: SITE_MOTION.distance }}
    whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.08 }}
    transition={{ duration: reduced ? 0 : SITE_MOTION.duration, ease: SITE_MOTION.ease, delay: reduced ? 0 : (index % 4) * SITE_MOTION.stagger }}>
    {children}
  </motion.div>
}
