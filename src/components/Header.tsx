import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          Cazare Turda
        </Link>
        
        <nav className={styles.nav} aria-label="Main navigation">
          <Link href="/#apartamente" className={styles.navLink}>
            Apartamente
          </Link>
          <Link href="/salina-turda" className={styles.navLink}>
            Salina Turda
          </Link>
          <Link href="/atractii-turda" className={styles.navLink}>
            Atracții
          </Link>
          <Link href="/ghid-turda" className={styles.navLink}>
            Ghid
          </Link>
          <Link href="/#contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
