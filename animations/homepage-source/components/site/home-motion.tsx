'use client'

import { useEffect } from 'react'

/** Progressive enhancement: content stays visible without JS or with reduced motion. */
export function HomeMotion() {
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    let observer: IntersectionObserver | undefined
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-home-reveal]'))
    const reset = () => {
      observer?.disconnect()
      elements.forEach(element => { delete element.dataset.revealReady; delete element.dataset.revealed })
    }
    const setup = () => {
      reset()
      if (media.matches || !('IntersectionObserver' in window)) return
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const element = entry.target as HTMLElement
          if (entry.isIntersecting) element.dataset.revealed = ''
          else delete element.dataset.revealed
        })
      }, { threshold: 0.08 })
      elements.forEach(element => {
        element.dataset.revealReady = ''
        observer?.observe(element)
      })
    }
    setup()
    media.addEventListener('change', setup)
    return () => { reset(); media.removeEventListener('change', setup) }
  }, [])
  return null
}
