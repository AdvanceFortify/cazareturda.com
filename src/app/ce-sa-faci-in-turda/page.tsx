import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import styles from '../tourism.module.css';

export const metadata: Metadata = {
  title: 'Ce să faci în Turda - Ghid Complet Activități 2026',
  description: 'Ghid complet cu activități în Turda: atracții turistice, restaurante, shopping, sport și agrement. Recomandări pentru o experiență completă.',
  alternates: {
    canonical: 'https://www.cazareturda.com/ce-sa-faci-in-turda',
  },
  openGraph: {
    title: 'Ce să faci în Turda - Ghid Activități',
    description: 'Descoperă cele mai interesante activități și experiențe în Turda.',
    url: 'https://www.cazareturda.com/ce-sa-faci-in-turda',
    images: [{ url: 'https://www.cazareturda.com/images/cazare-turda-aproape-de-salina.webp' }],
  },
};

const faqItems = [
  {
    question: 'Ce pot face într-o zi în Turda?',
    answer: 'Într-o zi poți vizita Salina Turda dimineața (3-4 ore), apoi explora centrul vechi al orașului, prânzești la un restaurant local și vizitezi Muzeul de Istorie sau Biserica Reformată. Seara poți lua cina la unul dintre restaurantele din centru.',
  },
  {
    question: 'Sunt activități pentru copii?',
    answer: 'Da! Salina Turda este perfectă pentru copii (mini-golf, bărci, roată panoramică), Cheile Turzii pentru drumeții ușoare, parcurile din oraș cu locuri de joacă. Vezi și ghidul nostru Turda cu copiii.',
  },
  {
    question: 'Ce pot face seara în Turda?',
    answer: 'Poți lua cina la unul dintre restaurantele locale, te plimbi pe malul râului Arieș, vizitezi un club sau bar din centru, sau te relaxezi la apartament cu un film.',
  },
  {
    question: 'Unde pot face sport în Turda?',
    answer: 'Drumeții la Cheile Turzii, ciclism pe traseele din jur, înot la bazinele din oraș, sala de fitness. Salina oferă și teren de sport subteran pentru fotbal/baschet.',
  },
  {
    question: 'Ce restaurante recomandați?',
    answer: 'În centrul Turdei găsești restaurante cu bucătărie românească tradițională, pizzerii, fast-food. Recomandăm să încerci preparatele locale și să savurezi vinurile din zonă.',
  },
];

export default function CeSaFaciTurdaPage() {
  return (
    <>
      <Hero
        title="Ce să faci în Turda"
        subtitle="Ghid complet cu activități, restaurante, shopping și agrement pentru un sejur perfect"
        imageUrl="/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Activități în Turda"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.intro}>
            <h2>Experiențe Complete în Turda</h2>
            <p>
              Turda oferă mult mai mult decât Salina! De la drumeții spectaculoase la Cheile Turzii 
              până la restaurante locale autentice, de la muzee fascinante până la parcuri liniștite, 
              orașul are activități pentru toate gusturile și vârstele.
            </p>
            <p>
              Fie că vii pentru un weekend sau pentru o vacanță mai lungă, acest ghid te va ajuta 
              să descoperi toate experiențele pe care Turda le poate oferi.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            🏛️ Atracții & Obiective Turistice
          </h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>Salina Turda (Obligatoriu!)</h3>
              <p>
                Începe vizita în Turda cu Salina - cea mai importantă atracție. Alocă 3-4 ore 
                pentru a explora roata panoramică, lacul cu bărci, muzeul și celelalte atracții subterane. 
                Este deschisă zilnic 09:00-17:00.
              </p>
              <p><Link href="/salina-turda">→ Citește ghidul complet Salina Turda</Link></p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>Cheile Turzii (Pentru Iubitorii de Natură)</h3>
              <p>
                La 15 km de oraș găsești una dintre cele mai frumoase rezervații naturale din România. 
                Trasee pentru toate nivelurile, de la familii cu copii până la alpiniști. Peisaje spectaculoase, 
                stânci impresionante, aer curat.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>Centrul Vechi & Cetatea Potaissa</h3>
              <p>
                Plimbă-te prin centrul istoric, vizitează ruinele romane ale Cetății Potaissa, 
                admiră Biserica Reformată gotică. Istorie milenară la fiecare pas.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>Muzee & Cultură</h3>
              <p>
                Muzeul de Istorie oferă colecții fascinante despre istoria Turdei. Casa de Cultură 
                găzduiește spectacole și evenimente. Verifică programul pentru concerte sau expoziții 
                în perioada vizitei tale.
              </p>
            </div>
          </div>
          
          <p style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link href="/atractii-turda" style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600 }}>
              Vezi toate atracțiile turistice din Turda →
            </Link>
          </p>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            🍽️ Unde să Mănânci în Turda
          </h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>Bucătărie Românească Tradițională</h3>
              <p>
                Încearcă preparatele tradiționale românești: sarmale, mici, ciorbă de burtă, papanași. 
                Restaurantele din centru oferă mâncăruri autentice la prețuri accesibile. 
                Recomandăm să încerci și vinurile locale din regiunea Turda.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>Pizza & Fast-Food</h3>
              <p>
                Pentru o masă rapidă, găsești pizzerii cu preparate proaspete, KFC, McDonald's 
                și alte lanțuri de fast-food. Perfect când vizitezi cu copiii sau vrei ceva rapid.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>Cafenele & Terase</h3>
              <p>
                Relaxează-te la o cafea pe una dintre terasele din centru. Atmosferă plăcută, 
                deserturi delicioase, WiFi gratuit. Perfect pentru o pauză între vizitări.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>Gătește la Apartament</h3>
              <p>
                Toate <Link href="/apartamente-turda">apartamentele noastre</Link> au bucătării 
                complet utilate. Mergi la supermarket (Kaufland, Lidl, Carrefour) și gătește 
                acasă - economic și confortabil, mai ales pentru familii.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            🛍️ Shopping & Servicii
          </h2>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3>🏪 Supermarketuri</h3>
              <p>Kaufland, Lidl, Carrefour, Penny - toate în oraș, cu program prelungit</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>🛒 Piața Centrală</h3>
              <p>Produse locale fresh: fructe, legume, brânzeturi, produse tradiționale</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>👔 Magazine Îmbrăcăminte</h3>
              <p>Boutique-uri locale și branduri internaționale în centru</p>
            </div>
            
            <div className={styles.infoCard}>
              <h3>⚕️ Farmacii</h3>
              <p>Multiple farmacii în oraș, unele cu program non-stop</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            🏃 Sport & Agrement
          </h2>
          
          <div className={styles.tipsList}>
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🏔️</span>
              <div>
                <h4>Drumeții & Hiking</h4>
                <p>
                  Cheile Turzii oferă trasee spectaculoase de toate dificultățile. De la plimbări 
                  ușoare cu familia până la trasee challenging pentru cei experimentați. 
                  Nu uita apă, echipament corespunzător și verifică meteo.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🚴</span>
              <div>
                <h4>Ciclism</h4>
                <p>
                  Trasee de ciclism în jurul orașului și către Cheile Turzii. Poți închiria 
                  biciclete din oraș. Drumurile sunt relativ sigure și peisajele frumoase.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🏊</span>
              <div>
                <h4>Înot & Relaxare</h4>
                <p>
                  Vara poți merge la bazinele din oraș. Salina oferă și speleoterapie - 
                  benefic pentru sistem respirator. Atmosfera relaxantă garantată.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🎯</span>
              <div>
                <h4>Mini-golf & Jocuri</h4>
                <p>
                  În Salina Turda găsești mini-golf, biliard, teren de sport. Perfect pentru 
                  familii și grupuri de prieteni. Experiență unică la 120m sub pământ!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            📅 Itinerariu Recomandat
          </h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>Ziua 1: Salina & Centrul Vechi</h3>
              <p>
                <strong>09:00</strong> - Check-in la <Link href="/apartamente/ap-maysa">apartament</Link><br/>
                <strong>10:00</strong> - Salina Turda (3-4 ore)<br/>
                <strong>14:00</strong> - Prânz la restaurant tradițional<br/>
                <strong>15:30</strong> - Centrul vechi: Biserica Reformată, Cetatea Potaissa<br/>
                <strong>18:00</strong> - Plimbare pe malul Arieșului<br/>
                <strong>19:30</strong> - Cină la apartament sau restaurant
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>Ziua 2: Cheile Turzii & Relaxare</h3>
              <p>
                <strong>09:00</strong> - Plecare spre Cheile Turzii<br/>
                <strong>09:30-14:00</strong> - Drumeție la Cheile Turzii<br/>
                <strong>14:30</strong> - Prânz la Turda<br/>
                <strong>16:00</strong> - Muzee sau shopping<br/>
                <strong>18:00</strong> - Relaxare la apartament<br/>
                <strong>19:30</strong> - Cină la restaurant local
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>Ziua 3: Împrejurimi & Check-out</h3>
              <p>
                <strong>09:00</strong> - Mic dejun la apartament<br/>
                <strong>10:00</strong> - Explorare zone din împrejurimi (opțional)<br/>
                <strong>12:00</strong> - Check-out<br/>
                <strong>12:30</strong> - Ultima plimbare în centru<br/>
                <strong>14:00</strong> - Plecare spre casă
              </p>
            </div>
          </div>
          
          <p style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link href="/weekend-in-turda" style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600 }}>
              Vezi itinerariul complet pentru un weekend în Turda →
            </Link>
          </p>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.accommodation}>
            <h2>Cazare Confortabilă în Turda</h2>
            <p>
              Alege unul dintre apartamentele noastre pentru baza perfectă de explorare a Turdei:
            </p>
            
            <div className={styles.apartmentLinks}>
              <Link href="/apartamente/ap-maysa" className="btn btn-primary">
                Apartament Maysa
              </Link>
              <Link href="/apartamente/ap-salin-gold" className="btn btn-primary">
                Salin Gold Premium
              </Link>
              <Link href="/apartamente/ap-lapale" className="btn btn-outline">
                La Pale - Familii
              </Link>
            </div>
            
            <p style={{ marginTop: 'var(--spacing-lg)' }}>
              ✓ Locații centrale ✓ Parcare gratuită ✓ Bucătării utilate ✓ Check-in flexibil
            </p>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <FAQ items={faqItems} title="Întrebări despre Activități în Turda" />
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.related}>
            <h2>Ghiduri Utile:</h2>
            <div className={styles.relatedLinks}>
              <Link href="/salina-turda">🏛️ Salina Turda</Link>
              <Link href="/atractii-turda">🎯 Atracții Turistice</Link>
              <Link href="/turda-cu-copiii">👶 Turda cu Copiii</Link>
              <Link href="/weekend-in-turda">📅 Weekend Perfect</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
