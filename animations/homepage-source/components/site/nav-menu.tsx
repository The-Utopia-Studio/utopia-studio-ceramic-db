'use client'

import Link from 'next/link'
import type { RefObject } from 'react'
import { usePathname } from 'next/navigation'
import { Menu } from '@base-ui/react/menu'
import { STUDIO_PRODUCTS } from '@/lib/studio-products'

export interface NavLink {
  href: string
  label: string
  external?: boolean
}

const PRIMARY_LINKS: NavLink[] = [
  { href: '/fellows',       label: 'Fellows' },
  { href: '/portfolio',     label: 'What We Build' },
  { href: '/how-we-build',  label: 'How We Build' },
  { href: '/team',          label: 'Team' },
  { href: '/resources',     label: 'News and Resources' },
]

interface NavMenuProps {
  links?: NavLink[]
  portalContainer?: RefObject<HTMLElement | null>
}

export function NavMenu({ links = PRIMARY_LINKS, portalContainer }: NavMenuProps) {
  const pathname = usePathname()

  return (
    <nav
      style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}
      aria-label="Primary"
    >
      {links.map((l) => {
        const active = isActivePath(pathname, l.href)
        const style = getLinkStyle(active)

        return l.external ? (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            style={style}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--color-interactive-primary)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = active ? 'var(--color-interactive-primary)' : 'var(--color-text-muted)')
            }
          >
            {l.label}
          </a>
        ) : (
          <Link
            key={l.href}
            href={l.href}
            style={style}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--color-interactive-primary)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = active ? 'var(--color-interactive-primary)' : 'var(--color-text-muted)')
            }
          >
            {l.label}
          </Link>
        )
      })}

      {/* Divider */}
      <div style={{ width: "var(--layout-nav-menu-width)", height: "var(--layout-nav-menu-height)", backgroundColor: 'var(--color-border-muted)', flexShrink: 0 }} />

      {/* Products */}
      <Menu.Root modal={false}>
        <Menu.Trigger
          className="products-menu-trigger"
          style={ghostCtaStyle}
          openOnHover
          delay={80}
          closeDelay={120}
        >
          Products
          <ChevronDown />
        </Menu.Trigger>
        <Menu.Portal container={portalContainer}>
          <Menu.Positioner className="products-menu-positioner" sideOffset={8} align="start">
            <Menu.Popup className="products-menu-popup">
              {STUDIO_PRODUCTS.map(product => <ProductMenuLink key={product.name} href={product.href} label={product.name} />)}
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>

      {/* Apply — primary CTA */}
      <a
        href="/apply"
        data-analytics-cta
        data-cta-label="Apply as a Co-Build Fellow"
        data-cta-location="header"
        data-cta-destination="/apply"
        style={primaryCtaStyle}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.backgroundColor =
            'var(--color-interactive-primary-hover)')
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.backgroundColor =
            'var(--color-interactive-primary)')
        }
      >
        Apply as a Co-Build Fellow
      </a>

    </nav>
  )
}

function ProductMenuLink({ href, label }: { href: string; label: string }) {
  return (
    <Menu.LinkItem
      className="products-menu-link"
      render={<Link href={href} />}
      closeOnClick
      data-analytics-cta
      data-cta-label={label}
      data-cta-location="header_products"
      data-cta-destination={href}
    >
      <span>{label}</span>
      <span aria-hidden="true">→</span>
    </Menu.LinkItem>
  )
}

function ChevronDown() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
      <path d="m2.5 4.5 3.5 3 3.5-3" stroke="currentColor" strokeWidth="1.25" />
    </svg>
  )
}

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

function getLinkStyle(active: boolean): React.CSSProperties {
  return {
    ...baseLinkStyle,
    color: active ? 'var(--color-interactive-primary)' : 'var(--color-text-muted)',
    boxShadow: active ? 'inset 0 -2px 0 var(--color-interactive-primary)' : 'inset 0 -2px 0 transparent',
  }
}

const baseLinkStyle: React.CSSProperties = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--fw-medium)',
  fontSize: 'var(--type-eyebrow)',
  letterSpacing: 'var(--tracking-eyebrow)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  padding: 'var(--space-7) 0 var(--space-7)',
  transition: 'color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
  whiteSpace: 'nowrap',
}

const ghostCtaStyle: React.CSSProperties = {
  borderRadius: 'var(--button-radius)',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--fw-medium)',
  fontSize: 'var(--type-eyebrow)',
  letterSpacing: 'var(--tracking-eyebrow)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: 'var(--color-text-primary)',
  backgroundColor: 'transparent',
  border: 'var(--border-width-thin) solid var(--color-border-default)',
  padding: 'var(--space-one-half) var(--space-4)',
  whiteSpace: 'nowrap',
  transition: 'background-color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
}

const primaryCtaStyle: React.CSSProperties = {
  borderRadius: 'var(--button-radius)',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--fw-medium)',
  fontSize: 'var(--type-eyebrow)',
  letterSpacing: 'var(--tracking-eyebrow)',
  textTransform: 'uppercase',
  textDecoration: 'none',
  color: 'var(--color-text-on-brand)',
  backgroundColor: 'var(--color-interactive-primary)',
  padding: 'var(--space-2) var(--space-4)',
  whiteSpace: 'nowrap',
  transition: 'background-color var(--dur-fast) var(--ease-standard)',
}
