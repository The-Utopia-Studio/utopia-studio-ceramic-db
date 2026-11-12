'use client'

import { SITE_MOTION } from '@/lib/site-motion'
import Image from 'next/image'
import { useRef, useState, type ReactNode } from 'react'
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import styles from './studio-film.module.css'

export function StudioFilm({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [filmActive, setFilmActive] = useState(false)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const progress = useSpring(scrollYProgress, { ...SITE_MOTION.filmSpring, restDelta: 0.001 })
  const photoY = useTransform(progress, [0, 0.48], ['0vh', '-38vh'])
  const filmOpacity = useTransform(progress, [0.08, 0.42], [0, 1])
  const photoOpacity = useTransform(progress, [0, 0.08, 0.38, 0.48], [1, 1, 0.15, 0])
  const filmScale = useTransform(progress, [0.12, 0.88], [0.72, 1])
  useMotionValueEvent(progress, 'change', value => setFilmActive(value >= 0.48))

  return <section ref={ref} className={styles.sequence} aria-label="Meet the fellows and studio film">
    <div className={styles.stage}>
      <motion.div className={styles.photos} inert={!reduced && filmActive} style={reduced ? undefined : { opacity: photoOpacity, y: photoY }}>
        {children}
      </motion.div>
      <motion.div className={styles.film} inert={!reduced && !filmActive}
        style={reduced ? undefined : { opacity: filmOpacity }}>
        <motion.div className={styles.screen} style={reduced ? undefined : { scale: filmScale }}>
        <Image src="https://i.ytimg.com/vi/V5tLTzqd-Tg/hqdefault.jpg" alt="" fill unoptimized sizes="100vw" className={styles.poster} />
        <iframe
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen loading="eager" referrerPolicy="strict-origin-when-cross-origin"
          src={`https://www.youtube-nocookie.com/embed/V5tLTzqd-Tg?autoplay=${reduced ? 0 : 1}&controls=1&loop=1&mute=1&playlist=V5tLTzqd-Tg&playsinline=1&rel=0`}
          title="The Utopia Studio film"
        />
        </motion.div>
      </motion.div>
    </div>
  </section>
}
