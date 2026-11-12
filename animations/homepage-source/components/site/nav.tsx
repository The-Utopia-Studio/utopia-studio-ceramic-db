'use client'

import './navigation.css'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { NavMenu } from './nav-menu'
import { NavMobile } from './nav-mobile'

export function Nav() {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const [hiddenOnPath, setHiddenOnPath] = useState<string | null>(null)
  const hidden = hiddenOnPath === pathname

  useEffect(() => {
    let anchor = Math.max(0, window.scrollY)
    const scroll = () => {
      const y = Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight))
      const header = headerRef.current
      const activeElement = document.activeElement
      // Link clicks retain focus across client navigation; only keyboard focus pins the header.
      const keyboardFocused = header?.contains(activeElement) && activeElement?.matches(':focus-visible')
      const engaged = keyboardFocused || header?.querySelector('[aria-expanded="true"], [data-popup-open]')
      if (y <= 80 || engaged) {
        setHiddenOnPath(null)
        anchor = y
        return
      }
      if (Math.abs(y - anchor) < 8) return
      setHiddenOnPath(y > anchor ? pathname : null)
      anchor = y
    }
    window.addEventListener('scroll', scroll, { passive: true })
    return () => window.removeEventListener('scroll', scroll)
  }, [pathname])

  return (
    <header
      ref={headerRef}
      className="studio-nav"
      data-hidden={hidden || undefined}
      onFocusCapture={() => setHiddenOnPath(null)}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: 'var(--color-bg-logo)',
        ['--color-bg-default' as string]: 'var(--light-color-bg-default)',
        ['--color-bg-subtle' as string]: 'var(--light-color-bg-subtle)',
        ['--color-text-primary' as string]: 'var(--light-color-text-primary)',
        ['--color-text-muted' as string]: 'var(--light-color-text-muted)',
        ['--color-text-on-brand' as string]: 'var(--light-color-text-on-brand)',
        ['--color-border-default' as string]: 'var(--light-color-border-default)',
        ['--color-border-muted' as string]: 'var(--light-color-border-muted)',
        ['--color-interactive-primary' as string]: 'var(--light-color-interactive-primary)',
        ['--color-interactive-primary-hover' as string]: 'var(--light-color-interactive-primary-hover)',
        height: 'clamp(var(--space-16), 5.5vw, var(--space-20))',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 'var(--max-content)',
          margin: '0 auto',
          padding: '0 var(--gutter)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-8)',
        }}
      >
        {/* Wordmark */}
        <Link className="studio-nav-logo" href="/" style={{ textDecoration: 'none', flexShrink: 0, zIndex: 101 }}>
          <Image
            src="/logo/the-utopia-studio-wordmark.avif"
            alt="The Utopia Studio"
            width={192}
            height={124}
            style={{ height: 'clamp(var(--space-7), 2.8vw, var(--layout-nav-height))', width: 'auto', display: 'block' }}
            priority
          />
        </Link>

        {/* Desktop nav — hidden below 1024px */}
        <div className="nav-desktop">
          <NavMenu portalContainer={headerRef} />
        </div>

        {/* Mobile hamburger — hidden above 1024px */}
        <div className="nav-mobile">
          <NavMobile />
        </div>
      </div>

    </header>
  )
}
