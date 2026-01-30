'use client';

import { usePathname } from 'next/navigation';
import styles from './StickyCTA.module.css';
import { getWhatsAppLink } from '@/data/apartments';

export default function StickyCTA() {
  const pathname = usePathname();
  
  // Show only on home and apartment pages
  const showCTA = pathname === '/' || 
                  pathname.startsWith('/ap-maysa') || 
                  pathname.startsWith('/ap-lapale') || 
                  pathname.startsWith('/ap-salingold');
  
  if (!showCTA) return null;
  
  const mainWhatsApp = '+40 748 979 607';
  
  return (
    <div className={styles.sticky}>
      <div className={styles.container}>
        <a 
          href={getWhatsAppLink(mainWhatsApp, 'Bună! Vreau să rezerv un apartament.')}
          className={`btn btn-whatsapp ${styles.btn}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact WhatsApp pentru rezervare"
        >
          📱 WhatsApp
        </a>
        <a 
          href="/#apartamente"
          className={`btn btn-primary ${styles.btn}`}
        >
          Vezi Apartamente
        </a>
      </div>
    </div>
  );
}
