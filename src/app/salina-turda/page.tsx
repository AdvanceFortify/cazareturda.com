import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import SEOJsonLd from '@/components/SEOJsonLd';
import BookingCTA from '@/components/BookingCTA';
import RecommendedAccommodation from '@/components/RecommendedAccommodation';
import styles from '../tourism.module.css';

export const metadata: Metadata = {
  title: 'Salina Turda - Ghid Complet 2026: Program, Prețuri, Cazare',
  description: 'Ghid complet Salina Turda: program de vizitare, prețuri bilete, ce să vezi, cum ajungi. Plus cazare apropiată și recomandări pentru o vizită perfectă.',
  alternates: {
    canonical: 'https://cazareturda.com/salina-turda',
  },
  openGraph: {
    title: 'Salina Turda - Ghid Complet 2026',
    description: 'Tot ce trebuie să știi despre vizitarea Salinei Turda în 2026.',
    url: 'https://cazareturda.com/salina-turda',
    images: [{ url: 'https://cazareturda.com/wp-content/uploads/2025/12/SalinaTurda02.jpg' }],
  },
};

const faqItems = [
  {
    question: 'Cât costă biletul la Salina Turda?',
    answer: 'Prețurile în 2026 sunt: Adult - 50 lei, Copii (sub 14 ani) - 25 lei, Pensionari - 35 lei. Există și tarife speciale pentru grupuri.',
  },
  {
    question: 'Care este programul de vizitare?',
    answer: 'Salina Turda este deschisă zilnic între 09:00 - 17:00, ultima intrare fiind la 16:00. Este deschis și în weekend și sărbători legale.',
  },
  {
    question: 'Cât durează vizita la Salină?',
    answer: 'O vizită completă durează între 2-4 ore, în funcție de cât timp doriți să petreceți explorând și folosind atracțiile (roata panoramică, bărci, mini-golf).',
  },
  {
    question: 'Este nevoie de rezervare în avans?',
    answer: 'Nu este obligatorie, dar este recomandat să ajungeți dimineața pentru a evita aglomerația, mai ales în weekend și pe timpul verii.',
  },
  {
    question: 'Unde pot să mă cazez aproape de Salină?',
    answer: 'Apartamentele noastre Maysa și Salin Gold sunt la doar 5 minute cu mașina, iar La Pale la 10 minute. Toate oferă parcare gratuită și dotări complete.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Salina Turda',
  description: 'Una dintre cele mai spectaculoase saline din lume, transformată în parc subteran de agrement.',
  image: 'https://cazareturda.com/wp-content/uploads/2025/12/SalinaTurda02.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aleea Durgăului 7',
    addressLocality: 'Turda',
    postalCode: '401106',
    addressCountry: 'RO',
  },
  openingHours: 'Mo-Su 09:00-17:00',
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.5847,
    longitude: 23.7850,
  },
};

export default function SalinaTurdaPage() {
  return (
    <>
      <SEOJsonLd data={jsonLd} />
      
      <Hero
        title="Salina Turda - Ghid Complet 2026"
        subtitle="Tot ce trebuie să știi despre vizitarea celei mai spectaculoase saline din România"
        imageUrl="https://cazareturda.com/wp-content/uploads/2025/12/SalinaTurda02.jpg"
        imageAlt="Salina Turda - interior spectaculos"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.intro}>
            <h2>De ce să vizitezi Salina Turda?</h2>
            <p>
              Salina Turda este una dintre cele mai impresionante atracții turistice din România și Europa. 
              Situată la 120 de metri sub pământ, această mină de sare transformată în parc subteran oferă 
              o experiență unică: roată panoramică subterană, lac cu bărci, mini-golf, amfiteatru și multe altele.
            </p>
            <p>
              Temperatura constantă de 10-12 grade Celsius pe tot parcursul anului și atmosfera specială 
              fac din Salina Turda o destinație perfectă în orice sezon.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Informații Practice 2026
          </h2>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>🕐 Program</h3>
              <p><strong>Luni - Duminică:</strong> 09:00 - 17:00</p>
              <p><strong>Ultima intrare:</strong> 16:00</p>
              <p className="text-muted">Deschis și în zilele de sărbătoare</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>💰 Prețuri Bilete</h3>
              <p><strong>Adult:</strong> 50 lei</p>
              <p><strong>Copii (sub 14 ani):</strong> 25 lei</p>
              <p><strong>Pensionari:</strong> 35 lei</p>
              <p className="text-muted">Tarife speciale pentru grupuri</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>⏱️ Durata Vizitei</h3>
              <p><strong>Minim:</strong> 2 ore</p>
              <p><strong>Recomandat:</strong> 3-4 ore</p>
              <p className="text-muted">Pentru a explora toate atracțiile</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>🚗 Parcare</h3>
              <p><strong>Cost:</strong> 5 lei/zi</p>
              <p><strong>Locuri:</strong> Peste 200</p>
              <p className="text-muted">Parcare supravegheată la intrare</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2>Ce să vezi în Salina Turda</h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>🎡 Roata Panoramică Subterană</h3>
              <p>
                Singura roată panoramică subterană din lume! De la înălțimea ei poți admira 
                întreaga magnificență a salinei. Experiență unică și fotografii spectaculoase garantate.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>🚣 Lacul Subteran cu Bărci</h3>
              <p>
                Plimbă-te cu barca pe lacul sărat la 120m adâncime. O experiență relaxantă 
                și romantică în același timp. Prețul este de 7 lei/15 minute.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>⛳ Mini Golf & Biliard</h3>
              <p>
                Joacă mini-golf sau biliard într-un cadru cu totul special. Perfect pentru 
                familii cu copii sau grupuri de prieteni.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>🎭 Amfiteatru & Teren de Sport</h3>
              <p>
                Amfiteatrul găzduiește evenimente speciale, iar terenul de sport este perfect 
                pentru cei care vor să se joace fotbal sau baschet subteran.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>🏛️ Muzeul Salinei</h3>
              <p>
                Descoperă istoria fascinantă a exploatării sării la Turda, care datează 
                din epoca romană. Expoziții interactive și educative.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>🧘 Speleoterapie</h3>
              <p>
                Aerul bogat în sare are efecte terapeutice asupra sistemului respirator. 
                Mulți vizitatori vin special pentru beneficiile pentru sănătate.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Sfaturi pentru o Vizită Reușită
          </h2>
          
          <div className={styles.tipsList}>
            <div className={styles.tip}>
              <span className={styles.tipIcon}>👕</span>
              <div>
                <h4>Îmbracă-te Corespunzător</h4>
                <p>
                  Temperatura în salină este de 10-12°C constant. Ia cu tine o haină sau 
                  jachetă ușoară, chiar dacă afară este cald.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🕐</span>
              <div>
                <h4>Ajunge Dimineața</h4>
                <p>
                  Cele mai puține aglomerații sunt între 9:00-11:00. Weekend-urile și 
                  vacanțele școlare sunt cele mai aglomerate perioade.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>📸</span>
              <div>
                <h4>Pregătește Camera</h4>
                <p>
                  Iluminarea este artificială și specială. Folosește ISO mai mare și 
                  dezactivează flash-ul pentru cele mai bune fotografii.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🚶</span>
              <div>
                <h4>Ia-ți Timp</h4>
                <p>
                  Nu te grăbi! Alocă minimum 3 ore pentru a explora totul și a te bucura 
                  de atmosfera unică a salinei.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <BookingCTA 
        title="Planifici să vizitezi Salina Turda?"
        subtitle="Rezervă cazare la 5 minute distanță. Parcare gratuită, dotări complete, check-in flexibil."
      />
      
      <RecommendedAccommodation />
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <FAQ items={faqItems} title="Întrebări Frecvente despre Salina Turda" />
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.related}>
            <h2>Citește și:</h2>
            <div className={styles.relatedLinks}>
              <Link href="/atractii-turda">🎯 Atracții Turistice în Turda</Link>
              <Link href="/ce-sa-faci-in-turda">🗺️ Ce să faci în Turda - Ghid Complet</Link>
              <Link href="/turda-cu-copiii">👶 Turda cu Copiii - Ghid pentru Familii</Link>
              <Link href="/weekend-in-turda">📅 Weekend în Turda - Itinerariu Perfect</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
