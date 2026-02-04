import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ApartmentCard from '@/components/ApartmentCard';
import FAQ from '@/components/FAQ';
import SEOJsonLd from '@/components/SEOJsonLd';
import { apartments, getWhatsAppLink } from '@/data/apartments';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Cazare Turda - Apartamente moderne lângă Salina Turda',
  description: 'Apartamente în regim hotelier Turda. Cazare modernă lângă Salina Turda, cu dotări complete și prețuri accesibile. Rezervă online acum!',
  alternates: {
    canonical: 'https://cazareturda.com',
  },
  openGraph: {
    title: 'Cazare Turda - Apartamente moderne lângă Salina Turda',
    description: 'Apartamente în regim hotelier Turda. Cazare modernă lângă Salina Turda.',
    url: 'https://cazareturda.com',
    images: [
      {
        url: 'https://cazareturda.com/images/cazare-turda-aproape-de-salina.webp',
        width: 1200,
        height: 630,
        alt: 'Cazare în Turda aproape de Salina Turda – apartamente moderne pentru turiști',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Cât costă cazarea în Turda?',
    answer: 'Prețurile pentru apartamentele noastre încep de la 150 lei/noapte și variază în funcție de sezon și durata sejurului. Oferim reduceri pentru sejururi mai lungi.',
  },
  {
    question: 'Cât de departe sunt apartamentele de Salina Turda?',
    answer: 'Apartamentele Maysa și Salin Gold sunt la doar 5 minute cu mașina de Salina Turda, iar Apartamentul La Pale la aproximativ 10 minute. Toate sunt situate strategic pentru acces rapid la atracții.',
  },
  {
    question: 'Este disponibilă parcare?',
    answer: 'Da, toate apartamentele noastre oferă parcare privată gratuită pentru oaspeți.',
  },
  {
    question: 'Pot face check-in târziu?',
    answer: 'Da, oferim flexibilitate la check-in. Vă rugăm să ne contactați pe WhatsApp pentru a stabili ora sosirii.',
  },
  {
    question: 'Sunt apartamentele potrivite pentru familii cu copii?',
    answer: 'Absolut! Apartamentele noastre sunt ideale pentru familii. La Pale are 2 dormitoare separate, perfect pentru familii cu copii.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: 'Cazare Turda',
  image: 'https://cazareturda.com/images/cazare-turda-aproape-de-salina.webp',
  '@id': 'https://cazareturda.com',
  url: 'https://cazareturda.com',
  telephone: '+40748979607',
  priceRange: '150-200 lei',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Turda',
    addressLocality: 'Turda',
    postalCode: '401100',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.583678,
    longitude: 23.777108,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  sameAs: [
    'https://www.booking.com/hotel/ro/maysa-ap.ro.html',
  ],
};

export default function HomePage() {
  const mainWhatsApp = '+40 748 979 607';
  
  return (
    <>
      <SEOJsonLd data={jsonLd} />
      
      <Hero
        title="Cazare Turda – Apartamente moderne lângă Salina Turda"
        subtitle="Descoperă confortul apartamentelor în regim hotelier, situate strategic în Turda. Locații centrale, dotări complete și prețuri accesibile."
        imageUrl="/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Cazare în Turda aproape de Salina Turda – apartamente moderne pentru turiști"
      >
        <a 
          href={getWhatsAppLink(mainWhatsApp, 'Bună! Vreau să rezerv un apartament în Turda.')}
          className="btn btn-whatsapp btn-large"
          target="_blank"
          rel="noopener noreferrer"
        >
          📱 Rezervă pe WhatsApp
        </a>
        <a href="#apartamente" className="btn btn-outline btn-large">
          Vezi Apartamentele
        </a>
      </Hero>
      
      <section className={`section ${styles.badges}`}>
        <div className="container">
          <div className={styles.badgeGrid}>
            <div className={styles.badgeItem}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>Check-in Flexibil</span>
            </div>
            <div className={styles.badgeItem}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>Parcare Gratuită</span>
            </div>
            <div className={styles.badgeItem}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>WiFi Ultra-rapid</span>
            </div>
            <div className={styles.badgeItem}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeText}>Lângă Salina Turda</span>
            </div>
          </div>
        </div>
      </section>
      
      <section id="apartamente" className="section-lg" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--spacing-md)' }}>
              Apartamentele Noastre în Turda
            </h2>
            <p style={{ fontSize: 'var(--font-size-xl)', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
              Alege apartamentul perfect pentru sejurul tău în Turda. Toate apartamentele oferă confort modern, 
              locații excelente și dotări complete.
            </p>
          </div>
          
          <div className={styles.apartmentGrid}>
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.chooseBox}>
            <h2 className={styles.chooseTitle}>Cum să alegi apartamentul potrivit în Turda?</h2>
            <div className={styles.chooseGrid}>
              <div className={styles.chooseItem}>
                <h3>🏠 Pentru Cupluri</h3>
                <p>
                  <Link href="/apartamente/ap-maysa">Apartamentul Maysa</Link> sau{' '}
                  <Link href="/apartamente/ap-salin-gold">Salin Gold</Link> sunt perfecte pentru cupluri. 
                  Design modern, locație centrală și toate facilitățile necesare pentru un sejur romantic.
                </p>
              </div>
              <div className={styles.chooseItem}>
                <h3>👨‍👩‍👧‍👦 Pentru Familii</h3>
                <p>
                  <Link href="/apartamente/ap-lapale">Apartamentul La Pale</Link> oferă spațiu generos, 
                  ideal pentru familii de 2-4 persoane. Renovare de lux, balcon și zonă liniștită.
                </p>
              </div>
              <div className={styles.chooseItem}>
                <h3>📍 Aproape de Salină</h3>
                <p>
                  Toate apartamentele sunt situate la maximum 10 minute de{' '}
                  <Link href="/salina-turda">Salina Turda</Link>. 
                  Maysa și Salin Gold sunt la doar 5 minute cu mașina.
                </p>
              </div>
              <div className={styles.chooseItem}>
                <h3>💰 Cel Mai Bun Preț</h3>
                <p>
                  Prețurile încep de la 150 lei/noapte. Oferim reduceri pentru{' '}
                  <Link href="/weekend-in-turda">sejururi de weekend</Link> și 
                  rezervări mai lungi. Contactează-ne pentru oferte speciale!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Descoperă Turda – Ghid Turistic
          </h2>
          <div className={styles.linksGrid}>
            <Link href="/salina-turda" className={styles.linkCard}>
              <h3>🏛️ Salina Turda</h3>
              <p>Tot ce trebuie să știi despre cea mai vizitată atracție din Turda</p>
            </Link>
            <Link href="/atractii-turda" className={styles.linkCard}>
              <h3>🎯 Atracții Turistice</h3>
              <p>Cele mai importante obiective turistice din Turda și împrejurimi</p>
            </Link>
            <Link href="/ce-sa-faci-in-turda" className={styles.linkCard}>
              <h3>🗺️ Ce să faci în Turda</h3>
              <p>Activități, restaurante și recomandări pentru un sejur perfect</p>
            </Link>
            <Link href="/turda-cu-copiii" className={styles.linkCard}>
              <h3>👶 Turda cu copiii</h3>
              <p>Ghid complet pentru familiile care vizitează Turda</p>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <FAQ items={faqItems} />
        </div>
      </section>
    </>
  );
}
