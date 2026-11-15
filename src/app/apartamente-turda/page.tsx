import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ApartmentCard from '@/components/ApartmentCard';
import FAQ from '@/components/FAQ';
import { apartments } from '@/data/apartments';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'Apartamente Turda - Regim Hotelier, Dotări Complete 2026',
  description: 'Apartamente moderne în Turda: regim hotelier, bucătării utilate, WiFi, parcare gratuită. Prețuri de la 150 lei/noapte. Rezervă acum!',
  alternates: {
    canonical: 'https://www.cazareturda.com/apartamente-turda',
  },
};

const faqItems = [
  {
    question: 'Ce înseamnă apartament în regim hotelier?',
    answer: 'Apartament în regim hotelier oferă tot confortul unui apartament privat (bucătărie, living, dormitoare separate) cu serviciile unui hotel: check-in flexibil, lenjerie curată, asistență 24/7.',
  },
  {
    question: 'Care sunt avantajele față de hotel?',
    answer: 'Mai mult spațiu, bucătărie utilată (economii la mâncare), prețuri mai bune, atmosferă mai intimă și confortabilă. Perfect pentru familii și sejururi mai lungi.',
  },
  {
    question: 'Cât costă un apartament în Turda?',
    answer: 'Prețurile pornesc de la 150 lei/noapte pentru apartamente moderne, complet utilate. Oferim reduceri pentru sejururi mai lungi de 3+ nopți.',
  },
  {
    question: 'Pot găti la apartament?',
    answer: 'Da! Toate apartamentele au bucătării complet utilate cu aragaz, frigider, ustensile, vase. Poți găti toate mesele și economisești la restaurant.',
  },
];

export default function ApartamenteTurdaPage() {
  return (
    <>
      <Hero
        title="Apartamente în Turda"
        subtitle="Regim hotelier modern: confort, spațiu și prețuri accesibile în inima Transilvaniei"
        imageUrl="/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Apartamente moderne Turda"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <h2>De ce să alegi apartament în loc de hotel?</h2>
          <div className={styles.chooseBox}>
            <div className={styles.chooseGrid}>
              <div className={styles.chooseItem}>
                <h3>🏠 Mai Mult Spațiu</h3>
                <p>
                  Apartamentele oferă living, dormitoare separate, bucătărie. Mult mai confortabil 
                  decât o cameră de hotel, mai ales pentru familii sau sejururi mai lungi.
                </p>
              </div>
              <div className={styles.chooseItem}>
                <h3>💰 Economisești Bani</h3>
                <p>
                  Prețuri mai bune decât hotelurile + posibilitatea de a găti acasă. 
                  Pentru o familie de 4 persoane, economiile pot fi semnificative.
                </p>
              </div>
              <div className={styles.chooseItem}>
                <h3>🍳 Bucătărie Utilată</h3>
                <p>
                  Gătește când vrei, economisește la restaurant, mănâncă sănătos. 
                  Perfect pentru copii mici sau regimuri alimentare speciale.
                </p>
              </div>
              <div className={styles.chooseItem}>
                <h3>🔑 Flexibilitate</h3>
                <p>
                  Check-in/check-out flexibil, fără reguli stricte de hotel. 
                  Vii și pleci când vrei, simți-te ca acasă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-lg" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Apartamentele Noastre în Turda
          </h2>
          <p className="text-center" style={{ fontSize: 'var(--font-size-lg)', maxWidth: '800px', margin: '0 auto var(--spacing-xl) auto', color: 'var(--color-text-light)' }}>
            Toate apartamentele sunt situate strategic în Turda, la 5-10 minute de 
            <Link href="/salina-turda"> Salina Turda</Link> și principalele atracții.
          </p>
          <div className={styles.apartmentGrid}>
            {apartments.map((apartment) => (
              <ApartmentCard key={apartment.id} apartment={apartment} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2>Ce găsești în apartamentele noastre?</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
            <div className="panel">
              <h3>🏠 În Apartament</h3>
              <ul style={{ lineHeight: 2, color: 'var(--color-text-light)' }}>
                <li>✓ Bucătărie complet utilată</li>
                <li>✓ Living spațios</li>
                <li>✓ Dormitoare confortabile</li>
                <li>✓ Baie modernă</li>
                <li>✓ Balcon (la unele apartamente)</li>
              </ul>
            </div>
            
            <div className="panel">
              <h3>Tehnologie</h3>
              <ul style={{ lineHeight: 2, color: 'var(--color-text-light)' }}>
                <li>✓ Smart TV & streaming</li>
                <li>✓ WiFi ultra-rapid</li>
                <li>✓ Aer condiționat</li>
                <li>✓ Mașină de spălat</li>
                <li>✓ Uscător de păr</li>
              </ul>
            </div>
            
            <div className="panel">
              <h3>🛏️ Confort</h3>
              <ul style={{ lineHeight: 2, color: 'var(--color-text-light)' }}>
                <li>✓ Lenjerie de calitate</li>
                <li>✓ Prosoape incluse</li>
                <li>✓ Produse curățenie</li>
                <li>✓ Cafea & ceai gratuit</li>
                <li>✓ Fier de călcat</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Ce poți vizita din apartamentele noastre
          </h2>
          <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
            <div className="panel panel-accent">
              <h4>🏛️ <Link href="/salina-turda">Salina Turda</Link> - 5-10 minute</h4>
              <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
                Cea mai spectaculoasă atracție din zonă, la doar câteva minute cu mașina.
              </p>
            </div>
            <div className="panel panel-accent">
              <h4>🏔️ Cheile Turzii - 20 minute</h4>
              <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
                Rezervație naturală spectaculoasă, perfectă pentru drumeții și natură.
              </p>
            </div>
            <div className="panel panel-accent">
              <h4>🏰 Centrul Vechi Turda - 5 minute</h4>
              <p style={{ color: 'var(--color-text-light)', margin: 0 }}>
                Istorie milenară, cetate romană, biserici gotice, muzee.
              </p>
            </div>
          </div>
          <p style={{ textAlign: 'center', marginTop: 'var(--spacing-xl)' }}>
            <Link href="/atractii-turda" style={{ fontSize: 'var(--font-size-lg)', fontWeight: 600 }}>
              Vezi toate atracțiile din Turda →
            </Link>
          </p>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <FAQ items={faqItems} />
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
        <div className="container container-narrow text-center">
          <h2 style={{ color: 'white' }}>Rezervă Apartament în Turda</h2>
          <p style={{ fontSize: 'var(--font-size-lg)', opacity: 0.95, marginBottom: 'var(--spacing-xl)' }}>
            Contactează-ne pe WhatsApp pentru disponibilitate și cele mai bune prețuri!
          </p>
          <Link href="/#apartamente" className="btn btn-whatsapp btn-large">
            Vezi Apartamentele & Rezervă
          </Link>
        </div>
      </section>
    </>
  );
}
