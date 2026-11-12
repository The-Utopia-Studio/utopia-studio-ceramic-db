'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useReducedMotion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { STUDIO_PRODUCTS } from '@/lib/studio-products'

const LINKS = [
  { href: '/fellows',       label: 'Fellows' },
  { href: '/portfolio',     label: 'What We Build' },
  { href: '/how-we-build',  label: 'How We Build' },
  { href: '/team',          label: 'Team' },
  { href: '/resources',     label: 'News and Resources' },
]

export function NavMobile() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const reduced = useReducedMotion()
  const menuRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const menu = menuRef.current
    const focusable = () => Array.from(menu?.querySelectorAll<HTMLElement>('a[href], button') ?? [])
    focusable()[0]?.focus()
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); triggerRef.current?.focus() }
      if (event.key !== 'Tab') return
      const elements = focusable()
      const first = elements[0], last = elements[elements.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus() }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => { setOpen(false); triggerRef.current?.focus() }

  return (
    <>
      {/* Hamburger button */}
      <button
        ref={triggerRef}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 'var(--space-2)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: "var(--space-1)",
          width: "var(--layout-nav-mobile-width)",
          height: "var(--layout-nav-mobile-height)",
          flexShrink: 0,
        }}
      >
        <span style={{
          display: 'block', height: "var(--layout-nav-mobile-height-2)", backgroundColor: 'var(--color-text-primary)',
          transformOrigin: 'center',
          transition: reduced ? 'none' : 'transform var(--dur-med) var(--ease-standard), opacity var(--dur-med) var(--ease-standard)',
          transform: open ? 'translateY(calc(var(--space-1) + var(--layout-nav-mobile-height-2))) rotate(45deg)' : 'none',
        }} />
        <span style={{
          display: 'block', height: "var(--layout-nav-mobile-height-2)", backgroundColor: 'var(--color-text-primary)',
          transition: reduced ? 'none' : 'opacity var(--dur-med) var(--ease-standard)',
          opacity: open ? 0 : 1,
        }} />
        <span style={{
          display: 'block', height: "var(--layout-nav-mobile-height-2)", backgroundColor: 'var(--color-text-primary)',
          transformOrigin: 'center',
          transition: reduced ? 'none' : 'transform var(--dur-med) var(--ease-standard), opacity var(--dur-med) var(--ease-standard)',
          transform: open ? 'translateY(calc((var(--space-1) + var(--layout-nav-mobile-height-2)) * -1)) rotate(-45deg)' : 'none',
        }} />
      </button>

      {/* Full-screen overlay */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        className="dark"
        role="dialog"
        aria-label="Site navigation"
        aria-modal={open ? true : undefined}
        style={{
          overflowY: 'auto',
          overscrollBehavior: 'contain',
          position: 'fixed',
          inset: 0,
          zIndex: 99,
          backgroundColor: 'var(--color-bg-showcase)',
          display: 'flex',
          flexDirection: 'column',
          padding: 'var(--space-16) var(--gutter) var(--space-12)',
          transform: open ? 'translateY(0)' : 'translateY(-100%)',
          transition: reduced ? 'none' : 'transform var(--dur-slow) var(--motion-reveal-ease)',
          pointerEvents: open ? 'auto' : 'none',
        }}
        aria-hidden={!open}
        inert={!open}
      >
        {/* Close button inside overlay */}
        <button
          onClick={close}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: 'var(--space-4)',
            right: 'var(--gutter)',
            background: 'none',
            border: 'var(--border-width-thin) solid var(--color-border-default)',
            color: 'var(--color-text-muted)',
            cursor: 'pointer',
            width: "var(--space-12)",
            height: "var(--space-12)",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-sans)',
            fontSize: "var(--type-body-lg)",
            lineHeight: "var(--lh-tight)",
            transition: 'border-color var(--dur-fast) var(--ease-standard)',
          }}
          onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-strong)')}
          onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-default)')}
        >
          ✕
        </button>

        {/* Nav links */}
        <nav style={{ flex: '1 0 auto', paddingBlock: 'var(--space-6)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: "var(--space-half)" }}>
          {LINKS.map((l, i) => (
            <MobileNavLink key={l.href} href={l.href} label={l.label} index={i} open={open} active={isActivePath(pathname, l.href)} onClick={close} />
          ))}
        </nav>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(var(--space-3))',
            transition: reduced ? 'none' : `opacity var(--dur-slow) var(--ease-standard) var(--dur-slow), transform var(--dur-slow) var(--motion-reveal-ease) var(--dur-slow)`,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-2)',
              marginBottom: 'var(--space-2)',
            }}
          >
            <span
              style={{
                color: 'var(--color-text-muted)',
                fontFamily: 'var(--font-sans)',
                fontWeight: 'var(--fw-medium)',
                fontSize: 'var(--type-eyebrow)',
                letterSpacing: 'var(--tracking-eyebrow)',
                textTransform: 'uppercase',
              }}
            >
              Products
            </span>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2)' }}>
              {STUDIO_PRODUCTS.map(product => <MobileProductLink key={product.name} href={product.href} label={product.name} onClick={close} />)}
            </div>
          </div>
          <a
            href="/apply"
            onClick={close}
            data-analytics-cta
            data-cta-label="Apply as a Co-Build Fellow"
            data-cta-location="mobile_menu"
            data-cta-destination="/apply"
            style={{
              display: 'block',
              textAlign: 'center',
              backgroundColor: 'var(--color-interactive-primary)',
              borderRadius: 'var(--button-radius)',
              color: 'var(--color-interactive-primary-text)',
              padding: 'var(--space-4)',
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--fw-medium)',
              fontSize: 'var(--type-eyebrow)',
              letterSpacing: 'var(--tracking-eyebrow)',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Apply as a Co-Build Fellow
          </a>
        </div>
      </div>
    </>
  )
}

function MobileNavLink({
  href,
  label,
  index,
  open,
  active,
  onClick,
}: {
  href: string
  label: string
  index: number
  open: boolean
  active: boolean
  onClick: () => void
}) {
  const reduced = useReducedMotion()
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      onClick={onClick}
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: active ? 'var(--fw-medium)' : 'var(--fw-light)',
        fontSize: 'var(--type-h2)',
        letterSpacing: 'var(--tracking-body)',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: active ? 'var(--color-text-home-accent)' : 'var(--color-text-muted)',
        lineHeight: "var(--lh-snug)",
        opacity: open ? 1 : 0,
        transform: open ? 'translateY(0)' : 'translateY(var(--space-4))',
        transition: reduced ? 'none' : `opacity var(--dur-slow) var(--ease-standard) calc(var(--motion-stagger) * ${index}), transform var(--dur-slow) var(--motion-reveal-ease) calc(var(--motion-stagger) * ${index}), color var(--dur-fast) var(--ease-standard)`,
        display: 'block',
        paddingBlock: 'var(--space-one-half)',
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-home-accent)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = active ? 'var(--color-text-home-accent)' : 'var(--color-text-muted)')}
    >
      {label}
    </Link>
  )
}

function MobileProductLink({
  href,
  label,
  onClick,
}: {
  href: string
  label: string
  onClick: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      data-analytics-cta
      data-cta-label={label}
      data-cta-location="mobile_menu_products"
      data-cta-destination={href}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 'var(--space-2)',
        color: 'var(--color-text-muted)',
        padding: 'var(--space-3)',
        border: 'var(--border-width-thin) solid var(--color-border-default)',
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--fw-medium)',
        fontSize: 'var(--type-eyebrow)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        textDecoration: 'none',
      }}
    >
      {label}
      <span aria-hidden="true">→</span>
    </Link>
  )
}

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}
