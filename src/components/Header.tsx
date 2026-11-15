'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const links = [
  { href: '/#apartamente', label: 'Apartamente' },
  { href: '/salina-turda', label: 'Salina Turda' },
  { href: '/atractii-turda', label: 'Atracții' },
  { href: '/ghid-turda', label: 'Ghid' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Guide articles are the only pages without a full-bleed hero under the header
  const hasHero = !/^\/ghid-turda\/.+/.test(pathname);
  const solid = scrolled || !hasHero;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const className = [styles.header, solid ? styles.solid : '', open ? styles.open : '']
    .filter(Boolean)
    .join(' ');

  return (
    <header className={className}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          Cazare Turda
        </Link>

        <nav id="main-nav" className={styles.nav} aria-label="Main navigation">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
