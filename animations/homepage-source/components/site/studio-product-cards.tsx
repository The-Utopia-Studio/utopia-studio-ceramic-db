import Link from 'next/link'
import { STUDIO_PRODUCTS } from '@/lib/studio-products'
import { ProductIllustration } from './product-illustration'
import styles from './home-studio.module.css'

export function StudioProductCards({ reveal = false, className = '' }: { reveal?: boolean; className?: string }) {
  return <div className={`${styles.productGrid} ${className}`}>
    {STUDIO_PRODUCTS.map(product => (
      <Link key={product.name} href={product.href} data-home-reveal={reveal || undefined} className={styles.product} aria-label={`Learn about ${product.name}: ${product.description}`}>
        <div className={styles.productInner}>
          <div className={styles.productFront}>
            <p className={styles.eyebrow}>{product.category}</p>
            <h3>{product.name}</h3>
            <p className={styles.description}>{product.description}</p>
            <span className={styles.productArrow} aria-hidden="true">→</span>
          </div>
          <div className={styles.productBack} aria-hidden="true">
            <span className={styles.eyebrow}>{product.category}</span>
            <ProductIllustration name={product.name} />
            <span className={styles.productBackLabel}>{product.name}<span>→</span></span>
          </div>
        </div>
      </Link>
    ))}
  </div>
}
