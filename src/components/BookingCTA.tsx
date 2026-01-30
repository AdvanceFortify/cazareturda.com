import Link from 'next/link';
import { getWhatsAppLink } from '@/data/apartments';
import styles from './BookingCTA.module.css';

interface BookingCTAProps {
  title?: string;
  subtitle?: string;
  whatsappNumber?: string;
  whatsappMessage?: string;
  showApartmentsButton?: boolean;
}

export default function BookingCTA({
  title = 'Rezervă Cazare în Turda',
  subtitle = 'Contactează-ne pentru disponibilitate și prețuri speciale. Răspundem în câteva minute!',
  whatsappNumber = '+40 748 979 607',
  whatsappMessage = 'Bună! Vreau să rezerv cazare în Turda.',
  showApartmentsButton = true,
}: BookingCTAProps) {
  return (
    <section className={styles.cta}>
      <div className="container container-narrow">
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          
          <div className={styles.buttons}>
            <a
              href={getWhatsAppLink(whatsappNumber, whatsappMessage)}
              className="btn btn-whatsapp btn-large"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 Rezervă pe WhatsApp
            </a>
            
            {showApartmentsButton && (
              <Link href="/apartamente-turda" className="btn btn-outline btn-large">
                Vezi Apartamentele
              </Link>
            )}
          </div>
          
          <div className={styles.trust}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Răspuns rapid</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Check-in flexibil</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Parcare gratuită</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
