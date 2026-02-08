import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import SEOJsonLd from '@/components/SEOJsonLd';
import BookingCTA from '@/components/BookingCTA';
import RecommendedAccommodation from '@/components/RecommendedAccommodation';
import styles from '../tourism.module.css';

export const metadata: Metadata = {
  title: 'Atracții Turistice Turda - Top 10+ Obiective în 2026',
  description: 'Descoperă cele mai importante atracții turistice din Turda: Salina Turda, Cheile Turzii, Cetatea Potaissa și multe altele. Ghid complet cu recomandări.',
  alternates: {
    canonical: 'https://cazareturda.com/atractii-turda',
  },
  openGraph: {
    title: 'Atracții Turistice Turda - Ghid Complet',
    description: 'Top atracții turistice în Turda și împrejurimi: Salina, Cheile Turzii, Cetatea Potaissa.',
    url: 'https://cazareturda.com/atractii-turda',
    images: [{ url: 'https://cazareturda.com/images/cazare-turda-aproape-de-salina.webp' }],
  },
};

const faqItems = [
  {
    question: 'Care este cea mai importantă atracție în Turda?',
    answer: 'Salina Turda este principala atracție turistică, considerată una dintre cele mai spectaculoase saline din lume. Este vizitată anual de sute de mii de turiști.',
  },
  {
    question: 'Cât timp îmi trebuie pentru a vizita toate atracțiile?',
    answer: 'Pentru atracțiile principale din oraș (Salina, Muzeul Istoriei, Biserica Reformată) ai nevoie de 1-2 zile. Pentru a include și Cheile Turzii și împrejurimile, recomandăm un weekend complet.',
  },
  {
    question: 'Sunt potrivite atracțiile pentru copii?',
    answer: 'Da! Salina Turda, Cheile Turzii și parcurile din oraș sunt perfecte pentru familii cu copii. Vezi ghidul nostru special despre Turda cu copiii.',
  },
  {
    question: 'Unde mă pot caza aproape de atracții?',
    answer: 'Apartamentele noastre sunt situate central, la 5-10 minute de principalele atracții. Oferim parcare gratuită și dotări complete.',
  },
  {
    question: 'Pot vizita atracțiile iarna?',
    answer: 'Da! Salina Turda are temperatură constantă tot anul. Cheile Turzii sunt spectaculoase și iarna, dar necesită echipament adecvat.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Atracții Turistice în Turda',
  description: 'Cele mai importante obiective turistice din Turda și împrejurimi',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Salina Turda',
      description: 'Parc subteran spectacular la 120m adâncime',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Cheile Turzii',
      description: 'Rezervație naturală cu trasee montane spectaculoase',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Cetatea Potaissa',
      description: 'Ruinele romane ale vechiului castru militar',
    },
  ],
};

export default function AtractiiTurdaPage() {
  return (
    <>
      <SEOJsonLd data={jsonLd} />
      
      <Hero
        title="Atracții Turistice în Turda"
        subtitle="Descoperă cele mai importante obiective turistice din Turda și împrejurimi"
        imageUrl="https://cazareturda.com/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Atracții turistice Turda"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.intro}>
            <h2>De ce să vizitezi Turda?</h2>
            <p>
              Turda este un oraș cu o istorie milenară și atracții turistice spectaculoase. 
              De la Salina Turda, considerată una dintre cele mai frumoase din lume, până la 
              Cheile Turzii, rezervație naturală unică, orașul oferă experiențe memorabile 
              pentru toate vârstele și preferințele.
            </p>
            <p>
              Situat strategic între Cluj-Napoca și Alba Iulia, Turda este destinația perfectă 
              pentru un weekend sau o vacanță mai lungă în Transilvania.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Top Atracții Turistice în Turda
          </h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>1. 🏛️ Salina Turda</h3>
              <p>
                <strong>Principala atracție din oraș!</strong> Mină de sare transformată în parc subteran 
                spectaculos la 120m adâncime. Roată panoramică, lac cu bărci, mini-golf, amfiteatru. 
                Temperatură constantă de 10-12°C pe tot parcursul anului.
              </p>
              <p>
                <strong>Program:</strong> 09:00-17:00 zilnic | <strong>Preț:</strong> 50 lei adulți
              </p>
              <p>
                <Link href="/salina-turda">→ Vezi ghidul complet Salina Turda</Link>
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>2. 🏔️ Cheile Turzii</h3>
              <p>
                Rezervație naturală spectaculoasă cu stânci impresionante de până la 300m înălțime. 
                Trasee montane pentru toate nivelurile, de la familii cu copii până la alpiniști experimentați. 
                Peșteri naturale, peisaje de basm și aer curat.
              </p>
              <p>
                <strong>Distanță:</strong> 15 km de Turda | <strong>Acces:</strong> Gratuit | 
                <strong>Durată vizită:</strong> 2-4 ore
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>3. 🏰 Cetatea Potaissa</h3>
              <p>
                Ruinele romane ale vechiului castru militar din secolul al II-lea. Una dintre cele mai 
                mari garnizoane romane din Dacia. Site arheologic important cu expoziții și descoperiri fascinante.
              </p>
              <p>
                <strong>Locație:</strong> Str. Trasită, Turda | <strong>Acces:</strong> Gratuit (cu ghid la cerere)
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>4. ⛪ Biserica Reformată</h3>
              <p>
                Monument istoric din secolul al XV-lea cu arhitectură gotică impresionantă. 
                Turn înalt vizibil din tot orașul. Interior bogat decorat, orgă istorică.
              </p>
              <p>
                <strong>Locație:</strong> Piața Republicii | <strong>Acces:</strong> Vizite pe timpul zilei
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>5. 🏛️ Muzeul de Istorie Turda</h3>
              <p>
                Colecții impresionante de arheologie, istorie locală, etnografie. Descoperă istoria 
                milenară a Turdei de la romani până în prezent. Expoziții interactive și educative.
              </p>
              <p>
                <strong>Program:</strong> Marți-Duminică 10:00-18:00 | <strong>Preț:</strong> 10 lei
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>6. 🌳 Parcul Național Cheile Turzii</h3>
              <p>
                Parc natural protejat, perfect pentru drumeții și picnicuri. Trasee marcate, 
                zone de campare, peșteri și priveliști spectaculoase. Ideal pentru o zi în natură 
                împreună cu familia.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>7. 🎭 Casa de Cultură Turda</h3>
              <p>
                Clădire impresionantă care găzduiește evenimente culturale, spectacole, concerte 
                și expoziții. Verifică programul pentru evenimente în perioada vizitei tale.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>8. 🌊 Râul Arieș & Promenade</h3>
              <p>
                Plimbări relaxante pe malul râului Arieș. Zone verzi amenajate, bănci, 
                locuri de joacă pentru copii. Perfect pentru o seară liniștită după vizitarea atracțiilor.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>9. 🍷 Cramele din Zona Turda</h3>
              <p>
                Descoperă vinurile locale din zonă. Cramele oferă degustări și tururi ghidate. 
                Regiunea are tradiție viticolă din vremea romanilor.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>10. 🏛️ Mănăstirea Franciscană</h3>
              <p>
                Monument istoric religios cu arhitectură barocă. Atmosferă liniștită, 
                perfect pentru momente de contemplare și relaxare.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Planifică-ți Vizita în Turda
          </h2>
          
          <div className={styles.tipsList}>
            <div className={styles.tip}>
              <span className={styles.tipIcon}>📅</span>
              <div>
                <h4>Perioada Ideală</h4>
                <p>
                  Primăvara (aprilie-iunie) și toamna (septembrie-octombrie) sunt cele mai plăcute 
                  pentru drumeții la Cheile Turzii. Salina poate fi vizitată oricând.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🗓️</span>
              <div>
                <h4>Câte Zile să Stau?</h4>
                <p>
                  <strong>1 zi:</strong> Salina + centrul vechi | 
                  <strong>2 zile:</strong> + Cheile Turzii | 
                  <strong>3+ zile:</strong> explorare completă + împrejurimi
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🚗</span>
              <div>
                <h4>Transport</h4>
                <p>
                  Cea mai convenabilă opțiune este mașina personală. Cazările noastre oferă 
                  parcare gratuită. Salina și centrul sunt la 5-10 minute cu mașina.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🏨</span>
              <div>
                <h4>Unde să Te Cazezi</h4>
                <p>
                  <Link href="/apartamente/ap-maysa">Apartamentul Maysa</Link>, <Link href="/apartamente/ap-salin-gold">Salin Gold</Link> 
                  {' '}și <Link href="/apartamente/ap-lapale">La Pale</Link> oferă locații centrale, 
                  dotări complete și raport calitate-preț excelent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <BookingCTA 
        title="Planifici să vizitezi Turda?"
        subtitle="Rezervă cazare centrală cu acces rapid la toate atracțiile. Parcare gratuită!"
      />
      
      <RecommendedAccommodation />
      
      <section className="section">
        <div className="container container-content">
          <FAQ items={faqItems} title="Întrebări despre Atracțiile din Turda" />
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <div className={styles.related}>
            <h2>Citește și:</h2>
            <div className={styles.relatedLinks}>
              <Link href="/salina-turda">🏛️ Ghid Complet Salina Turda</Link>
              <Link href="/ce-sa-faci-in-turda">🗺️ Ce să faci în Turda</Link>
              <Link href="/turda-cu-copiii">👶 Turda cu Copiii</Link>
              <Link href="/weekend-in-turda">📅 Weekend Perfect în Turda</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
