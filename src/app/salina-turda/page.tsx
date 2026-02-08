import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ApartmentCard from '@/components/ApartmentCard';
import Accordion from '@/components/Accordion';
import SEOJsonLd from '@/components/SEOJsonLd';
import { apartments } from '@/data/apartments';
import styles from './salina-turda.module.css';

export const metadata: Metadata = {
  title: 'Salina Turda – Ghid complet 2026',
  description: 'Ghid Salina Turda: ce vezi în interior, program și prețuri, cum ajungi, parcare, sfaturi practice. Cazare la câțiva pași de intrare. Informații utile pentru familii și cupluri.',
  alternates: {
    canonical: 'https://cazareturda.com/salina-turda',
  },
  openGraph: {
    title: 'Salina Turda – Ghid complet 2026',
    description: 'Tot ce trebuie să știi pentru o vizită la Salina Turda: program, ce vezi, cum ajungi, sfaturi și cazare aproape.',
    url: 'https://cazareturda.com/salina-turda',
    images: [{ url: 'https://cazareturda.com/images/apartamente-salina-turda.jpg' }],
  },
};

const OFFICIAL_SALINA_URL = 'https://www.salinaturda.eu/';
const SALINA_GOOGLE_MAPS = 'https://www.google.com/maps/search/Salina+Turda';

const faqItems = [
  {
    question: 'Cât durează o vizită la Salina Turda?',
    answer: 'Recomandăm să aloci între 2 și 3 ore pentru a parcurge principalele zone și a te bucura de atracții. Dacă incluzi roata panoramică, barca și pauze, poți ușor depăși 3 ore.',
  },
  {
    question: 'Este potrivită pentru copii?',
    answer: 'Da. Salina Turda este foarte potrivită pentru familii. Copiii se bucură de peisajul subteran, roata panoramică și activitățile din interior. Îmbracă-i mai gros pentru temperatura constantă din salină.',
  },
  {
    question: 'Ce temperatură este în interior?',
    answer: 'Temperatura în salină este constantă pe tot parcursul anului, între aproximativ 10 și 12 °C. Este recomandat să ai o jachetă sau un hanorac, chiar și vara.',
  },
  {
    question: 'Salina este accesibilă pentru scaun cu rotile?',
    answer: 'Există acces pentru persoane cu mobilitate redusă, dar unele zone (galerii, trepte) pot fi limitate. Pentru detalii exacte și trasee recomandate, verifică informațiile de pe site-ul oficial al salinei.',
  },
  {
    question: 'Pot cumpăra bilete online?',
    answer: 'În funcție de sezon și politică, Salina Turda poate oferi vânzare de bilete online. Pentru varianta actuală și pentru a evita cozile, verifică întotdeauna site-ul oficial salinaturda.eu.',
  },
  {
    question: 'Unde mă cazez dacă vreau să fiu foarte aproape de Salină?',
    answer: 'Apartamentele noastre Maysa și Salin Gold sunt la 1–2 minute pe jos de intrarea în Salină. La Pale este la câteva minute cu mașina. Toate au parcare și sunt ideale ca bază pentru o vizită la Salina Turda.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Salina Turda',
  description: 'Salina Turda – parc subteran de agrement și destinație de wellness, cu roată panoramică, lac și atracții unice.',
  image: 'https://cazareturda.com/images/apartamente-salina-turda.jpg',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Aleea Durgăului 7',
    addressLocality: 'Turda',
    postalCode: '401106',
    addressCountry: 'RO',
  },
  url: OFFICIAL_SALINA_URL,
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 46.5847,
    longitude: 23.785,
  },
};

export default function SalinaTurdaPage() {
  return (
    <>
      <SEOJsonLd data={jsonLd} />

      {/* 1) HERO – același component și imagine ca pe homepage */}
      <Hero
        title="Salina Turda – Ghid complet 2026"
        subtitle="O experiență unică la câțiva pași sub pământ: roată panoramică, lac și aer salin. Recomandat pentru familii și cupluri, în orice anotimp."
        imageUrl="/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Salina Turda – cazare aproape și ghid pentru vizitare"
        compact
      >
        <a href="#program" className="btn btn-primary btn-large">
          Vezi Program & Prețuri
        </a>
        <a href="#cazare-aproape" className="btn btn-secondary btn-large">
          Cazare lângă Salina Turda
        </a>
      </Hero>

      {/* Quick Navigation – sticky pe desktop optional */}
      <nav className={`${styles.quickNavWrap} ${styles.sticky}`} aria-label="Navigare rapidă în pagină">
        <div className={styles.quickNav}>
          <a href="#program" className={styles.quickNavLink}>Program & Prețuri</a>
          <a href="#ce-vezi" className={styles.quickNavLink}>Ce vezi</a>
          <a href="#cum-ajungi" className={styles.quickNavLink}>Cum ajungi</a>
          <a href="#parcare" className={styles.quickNavLink}>Parcare</a>
          <a href="#sfaturi" className={styles.quickNavLink}>Sfaturi</a>
          <a href="#atractii-aproape" className={styles.quickNavLink}>Atracții aproape</a>
          <a href="#cazare-aproape" className={styles.quickNavLink}>Cazare aproape</a>
          <a href="#faq" className={styles.quickNavLink}>FAQ</a>
        </div>
      </nav>

      {/* 2) De ce să vizitezi – 4 carduri */}
      <section className="section" aria-labelledby="de-ce-vizitezi">
        <div className="container container-content">
          <h2 id="de-ce-vizitezi" className={styles.sectionTitle}>De ce să vizitezi Salina Turda?</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} aria-hidden="true">💨</div>
              <h3>Aer salin</h3>
              <p>Atmosfera din salină este benefică pentru respirație și relaxare. Mulți vizitatori simt o îmbunătățire a disconfortului respirator după câteva ore în interior.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} aria-hidden="true">✨</div>
              <h3>Experiență unică</h3>
              <p>Roata panoramică subterană, lacul și galeriile iluminate oferă o combinație pe care nu o găsești în altă parte. Ideal pentru fotografii și amintiri de neuitat.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} aria-hidden="true">👨‍👩‍👧‍👦</div>
              <h3>Potrivit pentru familii</h3>
              <p>Copiii se bucură de peisajul de poveste și de atracțiile din interior. Drumul este plăcut și pentru bătrâni, dacă mergi în ritmul tău.</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon} aria-hidden="true">🧘</div>
              <h3>Relaxare & wellness</h3>
              <p>Liniștea și temperatura constantă te scot din agitația zilnică. Mulți vin special pentru o pauză de câteva ore într-un mediu aparte.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3) Ce găsești în interior – #ce-vezi, 6 highlights */}
      <section id="ce-vezi" className={`section ${styles.sectionAlt}`} aria-labelledby="ce-vezi-title">
        <div className="container container-content">
          <h2 id="ce-vezi-title" className={styles.sectionTitle}>Ce găsești în interior</h2>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon} aria-hidden="true">⛏️</span>
              <div>
                <h3>Mina Rudolf</h3>
                <p>Una dintre cele mai impresionante săli. Galerii înalte și iluminat spectaculos.</p>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon} aria-hidden="true">🏛️</span>
              <div>
                <h3>Mina Terezia</h3>
                <p>Spălătoria istorică și traseul prin istoria exploatării sării.</p>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon} aria-hidden="true">🎡</span>
              <div>
                <h3>Roata panoramică</h3>
                <p>Singura roată panoramică subterană din lume. Vedere de ansamblu de neuitat.</p>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon} aria-hidden="true">🚣</span>
              <div>
                <h3>Lac subteran</h3>
                <p>Plimbare cu barca pe lacul sărat, în inima salinei.</p>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon} aria-hidden="true">🎭</span>
              <div>
                <h3>Amfiteatru</h3>
                <p>Evenimente și concerte într-un cadru unic, sub pământ.</p>
              </div>
            </div>
            <div className={styles.highlightItem}>
              <span className={styles.highlightIcon} aria-hidden="true">📸</span>
              <div>
                <h3>Zone foto</h3>
                <p>Colțuri perfecte pentru poze de amintire în toată salina.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4) Program & Prețuri – #program, #preturi */}
      <section id="program" className="section" aria-labelledby="program-title">
        <div className="container container-content">
          <h2 id="program-title" className={styles.sectionTitle}>Program & Prețuri</h2>
          <div id="preturi" className={styles.programNotice}>
            <p><strong>Programul și tarifele se pot schimba.</strong> Verifică întotdeauna pagina oficială a Salinei Turda pentru orar actualizat și prețuri bilete.</p>
          </div>
          <div className={styles.officialLinkWrap}>
            <a
              href={OFFICIAL_SALINA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Verifică tarifele oficiale
            </a>
          </div>
          <h3 style={{ marginTop: 'var(--spacing-lg)', marginBottom: 'var(--spacing-sm)' }}>Estimări utile</h3>
          <ul className={styles.estimariList}>
            <li>Timp de vizită recomandat: 2–3 ore (poate fi mai mult dacă folosești roata, barca și pauze).</li>
            <li>Temperatura în interior este constantă, între aproximativ 10–12 °C – ia un hanorac sau o jachetă.</li>
            <li>Încălțăminte comodă și haine pe straturi sunt recomandate.</li>
          </ul>
          <p className={styles.disclaimer}>
            Nu afișăm aici prețuri sau program exact pentru a evita informații depășite. Surse oficiale: salinaturda.eu.
          </p>
        </div>
      </section>

      {/* 5) Cum ajungi + Parcare – #cum-ajungi, #parcare */}
      <section id="cum-ajungi" className={`section ${styles.sectionAlt}`} aria-labelledby="cum-ajungi-title">
        <div className="container container-content">
          <h2 id="cum-ajungi-title" className={styles.sectionTitle}>Cum ajungi & Parcare</h2>
          <div className={styles.twoCols}>
            <div className={styles.colCard}>
              <h3>Cum ajungi</h3>
              <p><strong>Cu mașina:</strong> Salina este bine semnalizată din Turda. Urmează indicatoarele pentru „Salina Turda” / „Salina Turda Theme Park”.</p>
              <p><strong>Taxi:</strong> Din centrul Turdei poți lua un taxi până la intrarea în salină.</p>
              <p><strong>Pe jos din centru:</strong> Este posibil să mergi pe jos din centrul Turdei până la salină; distanța este de câțiva kilometri, deci doar dacă îți place mersul pe jos.</p>
              <div className={styles.mapsCta}>
                <a
                  href={SALINA_GOOGLE_MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  Deschide în Google Maps
                </a>
              </div>
            </div>
            <div id="parcare" className={styles.colCard}>
              <h3>Parcare</h3>
              <p>Există parcare la intrarea în Salina Turda. Recomandăm să ajungi mai devreme, mai ales în weekend și în sezon, pentru a găsi loc. Tarifele și capacitatea se verifică pe site-ul oficial.</p>
              <p>Dacă te cazezi la noi (Maysa sau Salin Gold), ești la 1–2 minute pe jos de salină și poți lăsa mașina la cazare.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6) Sfaturi rapide – #sfaturi, checklist 10 puncte */}
      <section id="sfaturi" className="section" aria-labelledby="sfaturi-title">
        <div className="container container-content">
          <h2 id="sfaturi-title" className={styles.sectionTitle}>Sfaturi rapide</h2>
          <ul className={styles.tipsChecklist}>
            <li>Îmbracă-te pe straturi și ia un hanorac sau o jachetă – în interior e răcoare constantă.</li>
            <li>Încălțăminte comodă – vei merge mult pe jos.</li>
            <li>Vizitează dimineața sau în ore mai libere pentru mai puțină aglomerație.</li>
            <li>Rezervă 2–3 ore (sau mai mult) pentru a nu te grăbi.</li>
            <li>Copiii se descurcă foarte bine – doar îmbracă-i mai gros.</li>
            <li>Poți face poze fără flash; iluminatul oferă atmosferă de film.</li>
            <li>Verifică programul și tarifele pe site-ul oficial înainte de plecare.</li>
            <li>Dacă ai nevoie de acces pentru persoane cu mobilitate redusă, întreabă la intrare sau pe site-ul oficial.</li>
            <li>Păstrează biletele la tine pe tot parcursul vizitei.</li>
            <li>Pentru cazare foarte aproape, Maysa și Salin Gold sunt la 1–2 minute pe jos de intrare.</li>
          </ul>
        </div>
      </section>

      {/* 7) Atracții aproape – #atractii-aproape, 6 carduri */}
      <section id="atractii-aproape" className={`section ${styles.sectionAlt}`} aria-labelledby="atractii-title">
        <div className="container container-content">
          <h2 id="atractii-title" className={styles.sectionTitle}>Atracții aproape</h2>
          <div className={styles.attractionsGrid}>
            <div className={styles.attractionCard}>
              <h3>Cheile Turzii</h3>
              <p>Rezervație naturală cu trasee de drumeție și peisaje spectaculoase, la câteva zeci de minute de Turda.</p>
            </div>
            <div className={styles.attractionCard}>
              <h3>Centrul Turda</h3>
              <p>Piața și străzile din centru, cu restaurante și magazine. Ideal pentru o plimbare după salină.</p>
            </div>
            <div className={styles.attractionCard}>
              <h3>Lacul Tarnița</h3>
              <p>Zonă de agrement și natură, potrivită pentru o escapadă de o zi dacă ai timp în plus.</p>
            </div>
            <div className={styles.attractionCard}>
              <h3>Cheile Turda (Tureni)</h3>
              <p>Alt traseu de natură în apropiere, pentru iubitorii de drumeții și peisaje.</p>
            </div>
            <div className={styles.attractionCard}>
              <h3>Durgău</h3>
              <p>Zonă de agrement și lacuri în vecinătate, plimbări și natură.</p>
            </div>
            <div className={styles.attractionCard}>
              <h3>Muzeul de Istorie Turda</h3>
              <p>Pentru cei interesați de istoria orașului și a regiunii.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8) Cazare aproape – #cazare-aproape, 3 carduri Maysa, La Pale, Salin Gold */}
      <section id="cazare-aproape" className="section" aria-labelledby="cazare-title">
        <div className="container">
          <h2 id="cazare-title" className={styles.sectionTitle}>Cazare aproape de Salina Turda</h2>
          <p className={styles.cazareIntro}>
            La 1–2 minute pe jos de intrarea în Salină (Maysa, Salin Gold) sau la câteva minute cu mașina (La Pale). Toate cu parcare și dotări complete.
          </p>
          <div className={styles.cazareGrid}>
            {apartments.map((apartment) => (
              <ApartmentCard
                key={apartment.id}
                apartment={apartment}
                ctaText="Vezi apartamentul"
              />
            ))}
          </div>
        </div>
      </section>

      {/* 9) FAQ – #faq, accordion */}
      <section id="faq" className={`section ${styles.sectionAlt}`} aria-labelledby="faq-title">
        <div className="container container-content">
          <h2 id="faq-title" className={styles.sectionTitle}>Întrebări frecvente</h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Linkuri utile */}
      <section className="section">
        <div className="container container-content">
          <h2 className={styles.sectionTitle}>Citește și</h2>
          <div className={styles.relatedLinks}>
            <Link href="/atractii-turda">Atracții turistice în Turda</Link>
            <Link href="/ce-sa-faci-in-turda">Ce să faci în Turda – ghid</Link>
            <Link href="/turda-cu-copiii">Turda cu copiii</Link>
            <Link href="/weekend-in-turda">Weekend în Turda</Link>
          </div>
        </div>
      </section>
    </>
  );
}
