'use client';

import { useState, useEffect } from 'react';
import { getWhatsAppLink } from '@/data/apartments';
import styles from './WhatsAppCTA.module.css';

export default function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const mainWhatsApp = '+40 748 979 607';
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <a
      href={getWhatsAppLink(mainWhatsApp, 'Bună! Vreau să aflu mai multe despre cazare în Turda.')}
      className={`${styles.button} ${isVisible ? styles.visible : ''}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact WhatsApp"
      title="Contactează-ne pe WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className={styles.icon}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16 0C7.164 0 0 7.164 0 16c0 2.777.711 5.391 1.961 7.664L.057 30.5l7.063-1.852A15.922 15.922 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.333c-2.445 0-4.773-.664-6.773-1.875l-.484-.289-5.023 1.316 1.34-4.891-.316-.5A13.278 13.278 0 012.667 16c0-7.364 5.969-13.333 13.333-13.333S29.333 8.636 29.333 16 23.364 29.333 16 29.333z"/>
        <path d="M23.547 19.453c-.406-.203-2.398-1.183-2.77-1.32-.373-.136-.644-.203-.915.204-.27.406-1.05 1.32-1.288 1.59-.237.27-.474.305-.88.102-2.71-1.355-4.488-2.422-6.277-5.492-.474-.813.474-.755 1.356-2.516.15-.27.075-.508-.042-.71-.118-.204-.915-2.204-1.254-3.016-.33-.792-.667-.685-.915-.698-.237-.012-.508-.015-.78-.015s-.712.102-1.085.508c-.373.407-1.424 1.392-1.424 3.394s1.458 3.937 1.661 4.207c.203.27 2.872 4.385 6.958 6.149 2.586 1.118 3.598 1.194 4.89 1.007 1.288-.186 2.398-.982 2.736-1.93.339-.948.339-1.76.237-1.93-.101-.169-.373-.27-.779-.474z"/>
      </svg>
      <span className={styles.text}>WhatsApp</span>
    </a>
  );
}
