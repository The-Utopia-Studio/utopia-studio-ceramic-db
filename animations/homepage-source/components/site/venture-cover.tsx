import styles from './home-fellows.module.css'

/** Editorial artwork, not a venture's official brand asset. */
export function VentureCover({ venture }: { venture: string }) {
  return (
    <div className={styles.cover} data-venture={venture} aria-hidden="true">
      <svg viewBox="0 0 400 300" fill="none" preserveAspectRatio="xMidYMid slice">
        {venture === 'EVOS' ? (
          <g stroke="currentColor" strokeWidth="16">
            {[0, 1, 2, 3, 4].map(i => <path key={i} d={`M ${-60 + i * 74} 330 V ${180 - i * 26} L ${125 + i * 74} ${35 - i * 26} H 460`} />)}
          </g>
        ) : venture === 'Azraq' ? (
          <g stroke="currentColor" strokeWidth="20">
            {[70, 115, 160, 205, 250, 295].map(r => <circle key={r} cx="310" cy="235" r={r} />)}
          </g>
        ) : venture === 'Mentix' ? (
          <g stroke="currentColor" strokeWidth="24" transform="rotate(-35 200 150)">
            <rect x="110" y="-80" width="105" height="310" rx="52" />
            <rect x="195" y="80" width="105" height="310" rx="52" />
          </g>
        ) : venture === 'Renacore' ? (
          <g stroke="currentColor" strokeWidth="3">
            {Array.from({ length: 18 }, (_, i) => <path key={i} d={`M -50 ${70 + i * 15} Q 125 ${-100 + i * 8} 210 ${70 + i * 12} T 460 ${50 + i * 15}`} />)}
          </g>
        ) : (
          <g fill="currentColor">
            <path d="M-60 300 200 0h110L50 300Z" />
            <path d="M100 300 360 0h110L210 300Z" opacity=".5" />
          </g>
        )}
      </svg>
    </div>
  )
}
