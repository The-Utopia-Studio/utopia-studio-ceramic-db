import type { CSSProperties } from 'react'

export type SocialPlatform = 'YouTube' | 'LinkedIn' | 'Instagram' | 'GitHub'
const paths: Record<SocialPlatform, string> = {
  GitHub: 'M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z',

  YouTube: 'M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z',
  LinkedIn: 'M20.45 0H3.55A3.55 3.55 0 0 0 0 3.55v16.9A3.55 3.55 0 0 0 3.55 24h16.9A3.55 3.55 0 0 0 24 20.45V3.55A3.55 3.55 0 0 0 20.45 0ZM7.2 20H3.6V9h3.6v11ZM5.4 7.5a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM20.4 20h-3.6v-5.4c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V20H9.3V9h3.5v1.5h.1a3.9 3.9 0 0 1 3.5-1.9c3.7 0 4.4 2.4 4.4 5.6V20Z',
  Instagram: 'M7 0h10a7 7 0 0 1 7 7v10a7 7 0 0 1-7 7H7a7 7 0 0 1-7-7V7a7 7 0 0 1 7-7Zm0 2a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5H7Zm5 4a6 6 0 1 1 0 12 6 6 0 0 1 0-12Zm0 2a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm6.3-4.3a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8Z',
}
const style: CSSProperties = { width: 'var(--space-4)', height: 'var(--space-4)', flexShrink: 0, display: 'inline-block', verticalAlign: 'middle' }
export function SocialIcon({ platform }: { platform: SocialPlatform }) {
  return <svg viewBox="0 0 24 24" fill="currentColor" style={style} aria-hidden="true" focusable="false"><path fillRule="evenodd" d={paths[platform]} /></svg>
}
export function socialPlatform(source: string): SocialPlatform | undefined {
  return source.includes('GitHub') ? 'GitHub' : source.includes('LinkedIn') ? 'LinkedIn' : source.includes('Instagram') ? 'Instagram' : source.includes('Podcast') || source.includes('YouTube') ? 'YouTube' : undefined
}
