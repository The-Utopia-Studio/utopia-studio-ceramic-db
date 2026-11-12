'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, type ReactNode } from 'react'
import { PODCAST_EPISODES } from '@/lib/podcasts'
import typography from './home-typography.module.css'
import styles from './home-closing.module.css'

export function HomeClosing({ children }: { children?: ReactNode }) {
  const [playing, setPlaying] = useState<string | null>(null)
  return <>
    <section className={styles.section} aria-labelledby="home-podcast-title">
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>/Podcast</p>
        <div data-home-reveal className={styles.heading}>
          <h2 id="home-podcast-title" className={typography.title}>Intersections</h2>
          <Link href="/resources#hub-podcast">All episodes</Link>
        </div>
        <div className={styles.grid}>
          {PODCAST_EPISODES.slice(0, 3).map((episode, index) => <article data-home-reveal className={styles.card} key={episode.id}>
            <div className={styles.media}>
              {playing === episode.id ? <iframe src={`https://www.youtube-nocookie.com/embed/${episode.id}?autoplay=1&rel=0`} title={episode.title} allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowFullScreen /> : <button className={styles.play} onClick={() => setPlaying(episode.id)} aria-label={`Play ${episode.title}`}>
                <Image src={`https://i.ytimg.com/vi/${episode.id}/hqdefault.jpg`} alt="" fill unoptimized sizes={`(max-width: 700px) 100vw, ${index === 0 ? '67vw' : '33vw'}`} />
                <span aria-hidden="true">▶</span>
              </button>}
            </div>
          </article>)}
        </div>
      </div>
    </section>
    {children}
    <section className={`${styles.section} ${styles.cta}`} aria-labelledby="home-final-title">
      <div data-home-reveal className={styles.ctaInner}>
      <h2 className={typography.title} id="home-final-title">Bring the problem.<br />Let’s build the company.</h2>
      <div className={styles.actions}>
        <Link href="/apply" className={styles.primary}>Apply as a Fellow</Link>
        <Link href="/contact" className={styles.secondary}>Talk to us</Link>
      </div>
      </div>
    </section>

  </>
}
