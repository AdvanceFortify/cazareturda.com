import Image from 'next/image';
import Link from 'next/link';
import styles from './ApartmentCard.module.css';
import type { Apartment } from '@/data/apartments';

interface ApartmentCardProps {
  apartment: Apartment;
  ctaText?: string;
}

export default function ApartmentCard({ apartment, ctaText = 'Vezi Detalii' }: ApartmentCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={apartment.heroImage}
          alt={apartment.heroImageAlt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 95vw, (max-width: 1200px) 45vw, 400px"
          quality={90}
        />
        <span className={styles.badge}>{apartment.shortKicker}</span>
        <span className={styles.price}>{apartment.priceRange}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{apartment.name}</h3>
        <p className={styles.description}>{apartment.description}</p>

        <div className={styles.features}>
          <span className={styles.feature}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.500V20" />
              <circle cx="10" cy="8" r="3.5" />
              <path d="M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.350M15.5 4.650a3.5 3.5 0 0 1 0 6.7" />
            </svg>
            {apartment.capacity}
          </span>
          <span className={styles.feature}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 21s-7-6.2-7-11.500a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
              <circle cx="12" cy="9.5" r="2.5" />
            </svg>
            {apartment.distanceToSalina}
          </span>
        </div>

        <div className={styles.highlights}>
          {apartment.highlights.slice(0, 3).map((highlight, index) => (
            <span key={index} className="badge">
              {highlight}
            </span>
          ))}
        </div>

        <Link href={`/${apartment.slug}`} className={styles.cta}>
          {ctaText}
          <span className={styles.arrow} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </span>
        </Link>
      </div>
    </article>
  );
}
