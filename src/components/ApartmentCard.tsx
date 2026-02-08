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
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{apartment.name}</h3>
        <p className={styles.description}>{apartment.description}</p>
        
        <div className={styles.features}>
          <span className={styles.feature}>👥 {apartment.capacity}</span>
          <span className={styles.feature}>📍 {apartment.distanceToSalina}</span>
        </div>
        
        <div className={styles.highlights}>
          {apartment.highlights.slice(0, 3).map((highlight, index) => (
            <span key={index} className="badge">
              {highlight}
            </span>
          ))}
        </div>
        
        <div className={styles.footer}>
          <span className={styles.price}>{apartment.priceRange}</span>
          <Link href={`/${apartment.slug}`} className="btn btn-primary">
            {ctaText}
          </Link>
        </div>
      </div>
    </article>
  );
}
