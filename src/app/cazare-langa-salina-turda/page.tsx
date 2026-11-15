import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ApartmentCard from '@/components/ApartmentCard';
import FAQ from '@/components/FAQ';
import { apartments } from '@/data/apartments';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'Cazare lângă Salina Turda - Apartamente la 5-10 minute',
  description: 'Cazare aproape de Salina Turda: apartamente moderne la 5-10 minute cu mașina. Parcare gratuită, dotări complete, check-in flexibil. Rezervă online!',
  alternates: {
    canonical: 'https://www.cazareturda.com/cazare-langa-salina-turda',
  },
};

const faqItems = [
  {
    question: 'Cât de aproape sunt apartamentele de Salina Turda?',
    answer: 'Apartamentele Maysa și Salin Gold sunt la doar 20 metri de Salina Turda (1 minut pe jos), iar Apartamentul La Pale la aproximativ 10 minute cu mașina. Toate oferă parcare gratuită.',
  },
  {
    question: 'Este disponibilă parcare?',
    answer: 'Da, toate apartamentele noastre oferă parcare privată gratuită pentru oaspeți.',
  },
  {
    question: 'Pot face check-in târziu seara?',
    answer: 'Da, oferim check-in flexibil. Contactează-ne pe WhatsApp pentru a stabili ora sosirii, chiar și după orele standard.',
  },
  {
    question: 'Ce dotări au apartamentele?',
    answer: 'Toate apartamentele au bucătărie complet utilată, Smart TV, WiFi rapid, aer condiționat, mașină de spălat, lenjerie și prosoape de calitate. Totul pentru un sejur confortabil.',
  },
];

export default function CazareLangaSalinaPage() {
  return (
    <>
      <Hero
        title="Cazare lângă Salina Turda"
        subtitle="Apartamente moderne la 5-10 minute de cea mai vizitată atracție din Transilvania"
        imageUrl="/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Cazare aproape de Salina Turda"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <div className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            <h2>De ce să alegi cazare aproape de Salina Turda?</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', lineHeight: 1.7 }}>
              Dacă vizitezi Turda pentru Salină, locația cazării este esențială. Apartamentele noastre 
              sunt situate strategic pentru acces rapid la Salină, dar și la celelalte atracții din oraș. 
              Economisești timp, bani la transport și poți reveni ușor la cazare între vizite.
            </p>
          </div>
          
          <div className={styles.chooseBox}>
            <h3 style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              Avantaje Cazare Aproape de Salină
            </h3>
            <div className={styles.chooseGrid}>
              <div className={styles.chooseItem}>
                <h3>⏱️ Economisești Timp</h3>
                <p>
                  La doar 5-10 minute distanță, poți ajunge rapid la Salină dimineața și eviți 
                  aglomerația. Poți reveni ușor la cazare pentru odihnă între vizite.
                </p>
              </div>
              <div className={styles.chooseItem}>
                <h3>🚗 Parcare Gratuită</h3>
                <p>
                  Toate apartamentele oferă parcare privată gratuită. La Salină parcarea costă 
                  5 lei/zi și poate fi aglomerată în weekend.
                </p>
              </div>
              <div className={styles.chooseItem}>
                <h3>🏠 Mai Mult Spațiu</h3>
                <p>
                  Apartamente spațioase cu bucătării utilate, în loc de camere mici de hotel. 
                  Perfect pentru familii și sejururi mai lungi.
                </p>
              </div>
              <div className={styles.chooseItem}>
                <h3>💰 Preț Mai Bun</h3>
                <p>
                  Raport calitate-preț excelent comparativ cu hotelurile. De la 150 lei/noapte 
                  pentru apartamente moderne, complet utilate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-lg" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Apartamente lângă Salina Turda
          </h2>
          <div className={styles.apartmentGrid}>
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2>Cum să planifici vizita la Salina Turda</h2>
          <div className="panel panel-lg">
            <h3>🕐 Când să vizitezi?</h3>
            <p>
              Cele mai bune momente pentru vizită sunt dimineața (9:00-11:00) când este mai puțin aglomerat. 
              Dacă stai aproape, poți ajunge ușor la deschidere și te bucuri de Salină fără mulțimi.
            </p>
            
            <h3 style={{ marginTop: 'var(--spacing-lg)' }}>⏱️ Cât să stai în Turda?</h3>
            <p>
              <strong>1 noapte:</strong> Suficient pentru Salina Turda + centrul vechi<br/>
              <strong>2 nopți:</strong> Recomandabil - adaugi <Link href="/atractii-turda">Cheile Turzii</Link> și alte atracții<br/>
              <strong>3+ nopți:</strong> Perfect pentru explorare completă + relaxare
            </p>
            
            <h3 style={{ marginTop: 'var(--spacing-lg)' }}>📋 Ce să iei cu tine?</h3>
            <ul style={{ lineHeight: 1.8, color: 'var(--color-text-light)' }}>
              <li>✓ Jachetă ușoară (10-12°C în Salină constant)</li>
              <li>✓ Încălțăminte confortabilă</li>
              <li>✓ Cameră foto (iluminare specială, dezactivează flash-ul)</li>
              <li>✓ Bani cash pentru activități extra (bărci, mini-golf)</li>
            </ul>
            
            <p className="note">
              <strong>💡 Pro Tip:</strong> Rezervă cazarea aproape de Salină cu check-in flexibil. 
              Poți ajunge seara, te odihnești și dimineața ești deja aproape de atracția principală!
            </p>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <FAQ items={faqItems} />
        </div>
      </section>
      
      <section className="section">
        <div className="container container-narrow text-center">
          <h2>Rezervă Cazare lângă Salina Turda</h2>
          <p style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-xl)', color: 'var(--color-text-light)' }}>
            Contactează-ne direct pe WhatsApp pentru disponibilitate și prețuri speciale. 
            Răspundem rapid și oferim asistență completă!
          </p>
          <div style={{ display: 'flex', gap: 'var(--spacing-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/apartamente/ap-maysa" className="btn btn-primary btn-large">
              Vezi Apartament Maysa
            </Link>
            <Link href="/apartamente/ap-salin-gold" className="btn btn-primary btn-large">
              Vezi Salin Gold
            </Link>
            <Link href="/apartamente/ap-lapale" className="btn btn-outline btn-large">
              Vezi La Pale
            </Link>
          </div>
          
          <p style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link href="/" style={{ fontSize: 'var(--font-size-lg)' }}>
              ← Înapoi la pagina principală
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
