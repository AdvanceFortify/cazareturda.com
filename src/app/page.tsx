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
    canonical: 'https://cazareturda.com/',
  },
  openGraph: {
    title: 'Cazare Turda - Apartamente moderne lângă Salina Turda',
    description: 'Apartamente în regim hotelier Turda. Cazare modernă lângă Salina Turda.',
    url: 'https://cazareturda.com/',
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
    answer: 'Apartamentele Maysa și Salin Gold sunt situate la aproximativ 1 minut pe jos de intrarea în Salina Turda. Apartamentul La Pale se află la aproximativ 10 minute cu mașina. Pentru Maysa și Salin Gold nu este necesară mașina.',
  },
  {
    question: 'Este disponibilă parcare?',
    answer: 'Da, toate apartamentele noastre oferă parcare privată gratuită pentru oaspeți.',
  },
  {
    question: 'Pot face check-in târziu?',
    answer: 'Da, check-in-ul se poate face oricând. Toate apartamentele folosesc self check-in: cheia se află într-un seif, iar codul de acces este furnizat de proprietar înainte de sosire.',
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
  '@id': 'https://cazareturda.com/',
  url: 'https://cazareturda.com/',
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

const icon = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  'aria-hidden': true,
} as const;

const perks = [
  {
    label: 'Check-in Flexibil',
    icon: (
      <svg {...icon}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
  {
    label: 'Parcare Gratuită',
    icon: (
      <svg {...icon}>
        <rect x="4" y="4" width="16" height="16" rx="4" />
        <path d="M10 16V8h2.5a2.5 2.5 0 0 1 0 5H10" />
      </svg>
    ),
  },
  {
    label: 'WiFi Ultra-rapid',
    icon: (
      <svg {...icon}>
        <path d="M3 9a14 14 0 0 1 18 0M6 12.5a9.5 9.5 0 0 1 12 0M9 16a5 5 0 0 1 6 0" />
        <circle cx="12" cy="19" r="0.6" />
      </svg>
    ),
  },
  {
    label: 'Lângă Salina Turda',
    icon: (
      <svg {...icon}>
        <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
        <circle cx="12" cy="9.5" r="2.5" />
      </svg>
    ),
  },
];

const arrow = (
  <svg {...icon} strokeWidth={1.8}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

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
          Rezervă pe WhatsApp
        </a>
        <a href="#apartamente" className="btn btn-outline btn-large">
          Vezi Apartamentele
        </a>
      </Hero>

      <section className={styles.perks}>
        <div className="container">
          <ul className={styles.perkList}>
            {perks.map((perk) => (
              <li key={perk.label} className={styles.perk}>
                <span className={styles.perkIcon}>{perk.icon}</span>
                <span className={styles.perkText}>{perk.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="apartamente" className={styles.apartments}>
        <div className="container">
          <header className={styles.sectionHead}>
            <span className={styles.sectionIndex} aria-hidden="true">01</span>
            <h2 className={styles.sectionTitle}>Apartamentele Noastre în Turda</h2>
            <p className={styles.sectionLead}>
              Alege apartamentul perfect pentru sejurul tău în Turda. Toate apartamentele oferă confort modern,
              locații excelente și dotări complete.
            </p>
          </header>

          <div className={styles.apartmentGrid}>
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.choose}>
        <div className="container">
          <header className={`${styles.sectionHead} ${styles.onDark}`}>
            <span className={styles.sectionIndex} aria-hidden="true">02</span>
            <h2 className={styles.sectionTitle}>Cum să alegi apartamentul potrivit în Turda?</h2>
          </header>

          <div className={styles.chooseGrid}>
            <div className={styles.chooseItem}>
              <span className={styles.chooseIcon}>
                <svg {...icon}>
                  <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
                </svg>
              </span>
              <h3>Pentru Cupluri</h3>
              <p>
                Apartamentele <Link href="/apartamente/ap-maysa">Maysa</Link>,{' '}
                <Link href="/apartamente/ap-salin-gold">Salin Gold</Link> și{' '}
                <Link href="/apartamente/ap-lapale">La Pale</Link> sunt potrivite pentru cupluri.
                Design modern, locație excelentă și toate facilitățile necesare pentru un sejur confortabil.
              </p>
            </div>
            <div className={styles.chooseItem}>
              <span className={styles.chooseIcon}>
                <svg {...icon}>
                  <path d="M16 20v-1.5a3.5 3.5 0 0 0-3.5-3.5h-5A3.5 3.5 0 0 0 4 18.5V20" />
                  <circle cx="10" cy="8" r="3.5" />
                  <path d="M20 20v-1.5a3.5 3.5 0 0 0-2.5-3.35M15.5 4.65a3.5 3.5 0 0 1 0 6.7" />
                </svg>
              </span>
              <h3>Pentru Familii</h3>
              <p>
                Toate cele 3 apartamente sunt potrivite pentru familii.
                Apartamentul <Link href="/apartamente/ap-lapale">La Pale</Link> este ideal pentru familii de până la 3 persoane.
                Pentru grupuri mai mari, <Link href="/apartamente/ap-salin-gold">Salin Gold</Link> + <Link href="/apartamente/ap-maysa">Maysa</Link> pot fi combinate pentru maximum 8 persoane.
              </p>
            </div>
            <div className={styles.chooseItem}>
              <span className={styles.chooseIcon}>
                <svg {...icon}>
                  <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
              </span>
              <h3>Aproape de Salină</h3>
              <p>
                Toate apartamentele sunt foarte aproape de{' '}
                <Link href="/salina-turda">Salina Turda</Link> — maximum 2 minute pe jos.
                Nu este necesară mașina pentru a ajunge la intrarea în Salină.
              </p>
            </div>
            <div className={styles.chooseItem}>
              <span className={styles.chooseIcon}>
                <svg {...icon}>
                  <path d="M3 12.5V5a2 2 0 0 1 2-2h7.5L21 11.5 12.5 20 3 12.5z" />
                  <circle cx="8" cy="8" r="1.4" />
                </svg>
              </span>
              <h3>Cel Mai Bun Preț</h3>
              <p>
                Prețurile încep de la 150 lei/noapte. Oferim reduceri pentru{' '}
                <Link href="/weekend-in-turda">sejururi de weekend</Link> și
                rezervări mai lungi. Contactează-ne pentru oferte speciale!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.guide}>
        <div className="container">
          <header className={styles.sectionHead}>
            <span className={styles.sectionIndex} aria-hidden="true">03</span>
            <h2 className={styles.sectionTitle}>Descoperă Turda – Ghid Turistic</h2>
          </header>

          <div className={styles.linksGrid}>
            <Link href="/salina-turda" className={`${styles.linkCard} ${styles.linkCardFeatured}`}>
              <Image
                src="/images/cazare-turda-aproape-de-salina.webp"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.linkImage}
              />
              <span className={styles.linkNum} aria-hidden="true">01</span>
              <h3>Salina Turda</h3>
              <p>Tot ce trebuie să știi despre cea mai vizitată atracție din Turda</p>
              <span className={styles.linkArrow}>{arrow}</span>
            </Link>
            <Link href="/atractii-turda" className={styles.linkCard}>
              <span className={styles.linkNum} aria-hidden="true">02</span>
              <h3>Atracții Turistice</h3>
              <p>Cele mai importante obiective turistice din Turda și împrejurimi</p>
              <span className={styles.linkArrow}>{arrow}</span>
            </Link>
            <Link href="/ce-sa-faci-in-turda" className={styles.linkCard}>
              <span className={styles.linkNum} aria-hidden="true">03</span>
              <h3>Ce să faci în Turda</h3>
              <p>Activități, restaurante și recomandări pentru un sejur perfect</p>
              <span className={styles.linkArrow}>{arrow}</span>
            </Link>
            <Link href="/turda-cu-copiii" className={styles.linkCard}>
              <span className={styles.linkNum} aria-hidden="true">04</span>
              <h3>Turda cu copiii</h3>
              <p>Ghid complet pentru familiile care vizitează Turda</p>
              <span className={styles.linkArrow}>{arrow}</span>
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
