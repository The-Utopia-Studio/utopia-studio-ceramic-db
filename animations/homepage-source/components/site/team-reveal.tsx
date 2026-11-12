'use client'

import { useEffect, useRef, type ReactNode } from 'react'

export function TeamReveal({ children, className }: { children: ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const rail = ref.current
    if (!rail || !('IntersectionObserver' in window)) return
    rail.dataset.revealReady = ''
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const element = entry.target as HTMLElement
        if (entry.isIntersecting) element.dataset.visible = ''
        else delete element.dataset.visible
      })
    }, { threshold: 0.15 })
    Array.from(rail.children).forEach(card => observer.observe(card))
    return () => {
      observer.disconnect()
      delete rail.dataset.revealReady
    }
  }, [])

  return <div ref={ref} className={className} role="region" aria-label="Studio leadership" tabIndex={0}>{children}</div>
}
