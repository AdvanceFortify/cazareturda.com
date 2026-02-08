import Image from 'next/image';
import styles from './Hero.module.css';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  imageAlt: string;
  children?: React.ReactNode;
  compact?: boolean;
}

export default function Hero({ 
  title, 
  subtitle, 
  imageUrl, 
  imageAlt, 
  children,
  compact = false 
}: HeroProps) {
  return (
    <section className={`${styles.hero} ${compact ? styles.compact : ''}`}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          priority
          className={styles.image}
          sizes="100vw"
          quality={85}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className={styles.overlay} />
      </div>
      
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        {children && <div className={styles.actions}>{children}</div>}
      </div>
    </section>
  );
}
