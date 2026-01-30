import Link from 'next/link';
import styles from './Footer.module.css';
import { getWhatsAppLink } from '@/data/apartments';

export default function Footer() {
  const mainWhatsApp = '+40 748 979 607';
  
  return (
    <footer className={styles.footer} id="contact">
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.title}>Cazare Turda</h3>
            <p className={styles.description}>
              Apartamente moderne în regim hotelier, situate strategic în Turda, 
              lângă Salina Turda și principalele atracții turistice.
            </p>
            <a 
              href={getWhatsAppLink(mainWhatsApp, 'Bună! Vreau să aflu mai multe despre cazare în Turda.')}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact prin WhatsApp"
            >
              📱 WhatsApp: {mainWhatsApp}
            </a>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Apartamente</h4>
            <ul className={styles.list}>
              <li><Link href="/apartamente/ap-maysa">Apartament Maysa</Link></li>
              <li><Link href="/apartamente/ap-lapale">Apartament La Pale</Link></li>
              <li><Link href="/apartamente/ap-salin-gold">Salin Gold</Link></li>
              <li><Link href="/apartamente-turda">Toate Apartamentele</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Turism în Turda</h4>
            <ul className={styles.list}>
              <li><Link href="/salina-turda">Salina Turda</Link></li>
              <li><Link href="/atractii-turda">Atracții Turistice</Link></li>
              <li><Link href="/ce-sa-faci-in-turda">Ce să faci în Turda</Link></li>
              <li><Link href="/ghid-turda">Ghid Complet Turda</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Informații Utile</h4>
            <ul className={styles.list}>
              <li><Link href="/cazare-langa-salina-turda">Cazare lângă Salină</Link></li>
              <li><Link href="/weekend-in-turda">Weekend în Turda</Link></li>
              <li><Link href="/turda-cu-copiii">Turda cu copiii</Link></li>
              <li><Link href="/regim-hotelier-turda">Regim Hotelier</Link></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Cazare Turda. Toate drepturile rezervate.
          </p>
          <p className={styles.disclaimer}>
            Apartamente în regim hotelier Turda • Cazare lângă Salina Turda
          </p>
        </div>
      </div>
    </footer>
  );
}
