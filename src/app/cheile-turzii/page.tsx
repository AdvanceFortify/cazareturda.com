import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import RecommendedAccommodation from '@/components/RecommendedAccommodation';
import SEOJsonLd from '@/components/SEOJsonLd';
import styles from '../tourism.module.css';

export const metadata: Metadata = {
  title: 'Cheile Turzii - Ghid Complet Trasee & Drumeții 2026',
  description: 'Ghid complet Cheile Turzii: trasee drumeții, cum ajungi, ce să iei cu tine, perioada ideală de vizitare. Plus cazare apropiată în Turda.',
  alternates: {
    canonical: 'https://www.cazareturda.com/cheile-turzii',
  },
  openGraph: {
    title: 'Cheile Turzii - Ghid Trasee Drumeții',
    description: 'Rezervație naturală spectaculoasă cu trasee pentru toate nivelurile',
    url: 'https://www.cazareturda.com/cheile-turzii',
  },
};

const faqItems = [
  {
    question: 'Cât durează traseul prin Cheile Turzii?',
    answer: 'Traseul principal durează între 2-4 ore, în funcție de ritmul tău și de câte opriri faci pentru fotografii. Există trasee mai ușoare de 1-2 ore pentru familii cu copii.',
  },
  {
    question: 'Este nevoie de echipament special?',
    answer: 'Pentru traseul principal nu. Încălțăminte de drumeție sau sport, apă, protecție solară și o jachetă ușoară sunt suficiente. Pentru trasee dificile recomandăm bețe de drumeție.',
  },
  {
    question: 'Se percepe taxă de intrare?',
    answer: 'Nu există taxă de intrare în rezervație. Parcarea costă 5-10 lei.',
  },
  {
    question: 'Care este perioada ideală pentru vizitare?',
    answer: 'Primăvara (aprilie-iunie) și toamna (septembrie-octombrie) sunt cele mai frumoase. Vara poate fi foarte cald. Iarna este spectacular dar necesită experiență și echipament adecvat.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Cheile Turzii',
  description: 'Rezervație naturală spectaculoasă cu stânci impresionante și trasee de drumeție',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Turda',
    addressRegion: 'Cluj',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.555,
    longitude: 23.815,
  },
};

export default function CheileTurziiPage() {
  return (
    <>
      <SEOJsonLd data={jsonLd} />
      
      <Hero
        title="Cheile Turzii"
        subtitle="Rezervație naturală spectaculoasă la 15 km de Turda: stânci de 300m, trasee drumeții și peisaje de vis"
        imageUrl="/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Cheile Turzii - rezervație naturală"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.intro}>
            <h2>De ce să vizitezi Cheile Turzii?</h2>
            <p>
              Cheile Turzii este una dintre cele mai spectaculoase rezervații naturale din România, 
              situată la doar 15 km de Turda. Cu stânci impresionante de până la 300m înălțime, 
              peșteri naturale și trasee pentru toate nivelurile, este destinația perfectă pentru 
              iubitorii de natură și drumeții.
            </p>
          </div>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>📍 Locație</h3>
              <p><strong>Distanță:</strong> 15 km de Turda (20 min cu mașina)</p>
              <p><strong>Acces:</strong> DN75 spre Mihai Viteazu</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>💰 Cost</h3>
              <p><strong>Intrare:</strong> Gratuită</p>
              <p><strong>Parcare:</strong> 5-10 lei</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>⏱️ Durată</h3>
              <p><strong>Traseu principal:</strong> 2-4 ore</p>
              <p><strong>Trasee ușoare:</strong> 1-2 ore</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>🎯 Dificultate</h3>
              <p><strong>Ușor-Moderat</strong></p>
              <p>Trasee pentru toate nivelurile</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Trasee în Cheile Turzii
          </h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>🟢 Traseu Ușor (Familii cu copii)</h3>
              <p>
                <strong>Durată:</strong> 1-2 ore<br/>
                <strong>Denivel:</strong> Minim<br/>
                <strong>Descriere:</strong> Plimbare pe poteca principală până la primele stânci impresionante. 
                Perfect pentru familii cu copii mici. Peisaje frumoase fără efort mare.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>🟡 Traseu Principal (Moderat)</h3>
              <p>
                <strong>Durată:</strong> 2-3 ore<br/>
                <strong>Denivel:</strong> Moderat<br/>
                <strong>Descriere:</strong> Traseul clasic care străbate cheia. Stânci spectaculoase pe ambele părți, 
                pârâiaș, peșteri mici. Cel mai popular traseu.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>🔴 Traseu Lung (Avansat)</h3>
              <p>
                <strong>Durată:</strong> 4-6 ore<br/>
                <strong>Denivel:</strong> Ridicat<br/>
                <strong>Descriere:</strong> Traseu circular complet cu urcușuri serioase. Pentru drumeții experimentați. 
                Priveliști panoramice spectaculoase.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Ce să iei cu tine
          </h2>
          
          <div className={styles.tipsList}>
            <div className={styles.tip}>
              <span className={styles.tipIcon}>👟</span>
              <div>
                <h4>Încălțăminte Adecvată</h4>
                <p>
                  Bocanci sau adidași de drumeție cu talpă aderentă. EVITĂ sandalele sau papucii sport.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>💧</span>
              <div>
                <h4>Apă & Snacks</h4>
                <p>
                  Minimum 1L apă/persoană. Snacks energizante (batoane, fructe uscate, nuci). 
                  Nu există magazine pe traseu.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>☀️</span>
              <div>
                <h4>Protecție</h4>
                <p>
                  Cremă solară, pălărie/șapcă, ochelari soare. Jachetă ușoară (meteo se schimbă rapid în munte).
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>📱</span>
              <div>
                <h4>Telefon & Baterie</h4>
                <p>
                  Telefon încărcat (pentru urgențe și fotografii). Baterie externă recomandată. 
                  Semnal OK în cea mai mare parte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Hartă & Acces
          </h2>
          
          <div className={styles.location}>
            <div className={styles.locationInfo}>
              <h3>🚗 Cum ajungi</h3>
              <ul className={styles.locationList}>
                <li>Din Turda: DN75 spre Mihai Viteazu, apoi urmează indicatoarele (15 km)</li>
                <li>Din Cluj-Napoca: E60 până la Turda, apoi DN75 (55 km, ~1h)</li>
                <li>Parcare: La intrarea în rezervație (5-10 lei)</li>
              </ul>
              
              <h3 style={{ marginTop: 'var(--spacing-lg)' }}>📋 Informații Utile</h3>
              <ul className={styles.locationList}>
                <li>Cel mai bine dimineața (8-10) sau după-amiază (15-17)</li>
                <li>Evită weekendurile aglomerate în vară</li>
                <li>Toalete: La parcare și la începutul traseului</li>
                <li>Punct salvare: +40 755 123 456 (Salvamont)</li>
              </ul>
            </div>
            
            <div className={styles.mapWrapper}>
              <div style={{ 
                width: '100%', 
                height: '400px', 
                background: 'var(--color-bg-alt)', 
                borderRadius: 'var(--radius-lg)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                border: '2px dashed var(--color-border)'
              }}>
                <p style={{ color: 'var(--color-text-light)' }}>Google Maps placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <FAQ items={faqItems} title="Întrebări despre Cheile Turzii" />
        </div>
      </section>
      
      <RecommendedAccommodation />
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <div className={styles.related}>
            <h2>Citește și:</h2>
            <div className={styles.relatedLinks}>
              <Link href="/salina-turda">🏛️ Salina Turda - Ghid Complet</Link>
              <Link href="/atractii-turda">🎯 Atracții Turistice Turda</Link>
              <Link href="/weekend-in-turda">📅 Weekend Perfect în Turda</Link>
              <Link href="/itinerariu-1-zi-turda">🗓️ Itinerariu 1 Zi Turda</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
