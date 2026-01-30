import Link from 'next/link';
import ApartmentCard from './ApartmentCard';
import { apartments } from '@/data/apartments';
import styles from './RecommendedAccommodation.module.css';

export default function RecommendedAccommodation() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Cazare Recomandată în Turda</h2>
          <p className={styles.subtitle}>
            Apartamente moderne situate strategic pentru acces rapid la toate atracțiile
          </p>
        </div>
        
        <div className={styles.grid}>
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
          ))}
        </div>
        
        <div className={styles.cta}>
          <Link href="/apartamente-turda" className="btn btn-primary btn-large">
            Vezi Toate Apartamentele
          </Link>
        </div>
      </div>
    </section>
  );
}
