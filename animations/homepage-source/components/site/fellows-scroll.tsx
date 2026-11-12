'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import styles from './home-fellows.module.css'
import { RUNTIME_TOKENS } from '@/lib/generated-style-tokens'

export const FELLOW_EXPANSION_QUERY = '(min-width: 900px)'

export function FellowsScroll({ children, onSelect }: { children: ReactNode; onSelect: (index: string | null) => void }) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const rail = sectionRef.current?.querySelector<HTMLElement>(`.${styles.rail}`)
    if (!rail) return
    const expansionMedia = window.matchMedia(FELLOW_EXPANSION_QUERY)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let hoverTimer: ReturnType<typeof setTimeout> | undefined
    let hoverCandidate: Element | null = null
    let hoverSettlesAt = 0
    const cancelHover = () => {
      clearTimeout(hoverTimer)
      hoverTimer = undefined
      hoverCandidate = null
    }
    let visible = false
    let hovered = false
    let touching = false
    let resumeAt = 0
    let pageScrollUntil = 0
    let pointer: { x: number; y: number } | null = null
    let previous = 0
    let speed = 0
    let distance = 0
    let frame = 0
    let position = rail.scrollLeft
    let selected = rail.querySelector<HTMLElement>('[data-expanded]')
    let initialized = false
    let elapsed = 0
    let rebasing = false
    let rebaseFrame = 0
    let restoreFrame = 0
    const measure = () => {
      const first = rail.children[0] as HTMLElement | undefined
      const repeat = rail.children[rail.children.length / 3] as HTMLElement | undefined
      if (first && repeat) distance = repeat.offsetLeft - first.offsetLeft
      if (!initialized && distance > 0) {
        // Start in the middle copy so even the first card has room to center.
        position = distance
        rail.scrollLeft = position
        initialized = true
      }
    }
    const selection = new MutationObserver(() => {
      selected = rail.querySelector<HTMLElement>('[data-expanded]')
      elapsed = 0
    })
    selection.observe(rail, { subtree: true, attributes: true, attributeFilter: ['data-expanded'] })
    const resize = new ResizeObserver(measure)
    resize.observe(rail)
    Array.from(rail.children).forEach(card => resize.observe(card))
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting })
    observer.observe(rail)
    const enter = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') {
        hovered = true
        pointer = { x: event.clientX, y: event.clientY }
      }
    }
    const leave = () => { cancelHover(); hovered = false; resumeAt = performance.now() + 1000 }
    const down = () => { cancelHover(); touching = true }
    const up = () => { touching = false; resumeAt = performance.now() + 3500 }
    const pageScroll = () => { cancelHover(); pageScrollUntil = performance.now() + 400 }
    const wheel = () => { resumeAt = performance.now() + 3500; pageScroll() }
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      const nextPointer = { x: event.clientX, y: event.clientY }
      // Layout/scroll can move cards under a stationary cursor. Only real
      // pointer travel should select another card and trigger centering.
      if (pointer && Math.hypot(nextPointer.x - pointer.x, nextPointer.y - pointer.y) < 3) return
      pointer = nextPointer
      if (!expansionMedia.matches || touching || performance.now() < pageScrollUntil) return
      const card = event.target instanceof Element ? event.target.closest('article') : null
      if (!card || card.parentElement !== rail || !card.querySelector('[id^="fellow-story-"]') || card === selected) {
        cancelHover()
        return
      }
      if (card === hoverCandidate) return
      cancelHover()
      hoverCandidate = card
      // A deliberate pause selects the card. Let the previous expansion settle
      // before another hover can interrupt it.
      const delay = Math.max(RUNTIME_TOKENS.fellowHoverIntentMs, hoverSettlesAt - performance.now())
      hoverTimer = setTimeout(() => {
        cancelHover()
        if (!hovered || touching || !visible || !expansionMedia.matches || performance.now() < pageScrollUntil) return
        if (!pointer || document.elementFromPoint(pointer.x, pointer.y)?.closest('article') !== card) return
        onSelect(String(Array.from(rail.children).indexOf(card)))
        hoverSettlesAt = performance.now() + (reducedMotion.matches ? 0 : RUNTIME_TOKENS.fellowExpandMs)
      }, delay)
    }
    window.addEventListener('scroll', pageScroll, { passive: true })
    rail.addEventListener('pointermove', move)
    rail.addEventListener('pointerenter', enter)
    rail.addEventListener('pointerleave', leave)
    rail.addEventListener('pointerdown', down)
    window.addEventListener('pointerup', up)
    window.addEventListener('pointercancel', up)
    rail.addEventListener('wheel', wheel, { passive: true })
    const tick = (now: number) => {
      const delta = Math.min((now - (previous || now)) / 1000, .05)
      previous = now
      const stopped = now < pageScrollUntil || reducedMotion.matches || !visible || document.hidden || hovered || touching || now < resumeAt || (rail.contains(document.activeElement) && !!document.activeElement?.matches(':focus-visible'))
      if (expansionMedia.matches && !stopped && !rebasing) {
        elapsed += delta
        const count = rail.children.length / 3
        const index = selected ? Array.from(rail.children).indexOf(selected) : count
        if (!selected) {
          onSelect(String(count))
          elapsed = 0
        } else if (index >= count * 2 && elapsed > 2) {
          // Rebase an identical copy only after expansion has settled.
          // Suppress width transitions for this invisible loop reset.
          rebasing = true
          const oldLeft = selected.getBoundingClientRect().left
          const equivalent = rail.children[index - count] as HTMLElement
          rail.dataset.rebasing = 'true'
          onSelect(String(index - count))
          rebaseFrame = requestAnimationFrame(() => {
            rail.scrollLeft += equivalent.getBoundingClientRect().left - oldLeft
            position = rail.scrollLeft
            restoreFrame = requestAnimationFrame(() => {
              delete rail.dataset.rebasing
              rebasing = false
            })
          })
        } else if (elapsed >= 6) {
          onSelect(String(index + 1))
          elapsed = 0
        }
      }
      if (expansionMedia.matches && selected && visible && !document.hidden && !touching && now >= pageScrollUntil && now >= resumeAt && !rebasing) {
        speed = 0
        const card = selected.getBoundingClientRect()
        const bounds = rail.getBoundingClientRect()
        const target = Math.max(0, Math.min(rail.scrollWidth - rail.clientWidth, rail.scrollLeft + card.left + card.width / 2 - bounds.left - rail.clientWidth / 2))
        // Follow the expanding card's center without a sudden scroll snap.
        position = reducedMotion.matches ? target : rail.scrollLeft + (target - rail.scrollLeft) * (1 - Math.exp(-delta * RUNTIME_TOKENS.fellowCenterResponse))
        rail.scrollLeft = position
      } else if (stopped || (expansionMedia.matches && selected)) {
        speed = 0
        position = rail.scrollLeft
      } else if (distance > 0) {
        // Ease back into a slow drift after reading or manually swiping.
        speed += (16 - speed) * (1 - Math.exp(-delta * 2))
        position += speed * delta
        if (position >= distance * 2) position -= distance
        rail.scrollLeft = position
      }
      frame = requestAnimationFrame(tick)
    }
    measure()
    frame = requestAnimationFrame(tick)
    return () => {
      cancelHover()
      cancelAnimationFrame(frame)
      cancelAnimationFrame(rebaseFrame)
      cancelAnimationFrame(restoreFrame)
      delete rail.dataset.rebasing
      resize.disconnect()
      selection.disconnect()
      observer.disconnect()
      window.removeEventListener('scroll', pageScroll)
      rail.removeEventListener('pointermove', move)
      rail.removeEventListener('pointerenter', enter)
      rail.removeEventListener('pointerleave', leave)
      rail.removeEventListener('pointerdown', down)
      window.removeEventListener('pointerup', up)
      window.removeEventListener('pointercancel', up)
      rail.removeEventListener('wheel', wheel)
    }
  }, [onSelect])

  return (
    <section ref={sectionRef} data-home-reveal className={styles.scrollSection}>
      <div className={styles.stage}>
        {children}
      </div>
    </section>
  )
}
