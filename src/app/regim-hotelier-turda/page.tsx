import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ApartmentCard from '@/components/ApartmentCard';
import { apartments } from '@/data/apartments';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'Regim Hotelier Turda - Apartamente cu Servicii Complete',
  description: 'Cazare în regim hotelier Turda: apartamente moderne cu servicii hoteliere, dotări complete, locații centrale. Prețuri avantajoase, rezervă online!',
  alternates: {
    canonical: 'https://cazareturda.com/regim-hotelier-turda',
  },
};

export default function RegimHotelierPage() {
  return (
    <>
      <Hero
        title="Regim Hotelier în Turda"
        subtitle="Combinația perfectă: confortul apartamentului tău cu serviciile unui hotel"
        imageUrl="https://cazareturda.com/wp-content/uploads/2025/12/IMG-20251210-WA0097.jpg"
        imageAlt="Regim hotelier Turda"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <h2>Ce înseamnă regim hotelier?</h2>
          <div style={{ background: 'white', padding: 'var(--spacing-2xl)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}>
            <p style={{ fontSize: 'var(--font-size-lg)', lineHeight: 1.8, color: 'var(--color-text-light)' }}>
              <strong style={{ color: 'var(--color-text)' }}>Regimul hotelier</strong> înseamnă că 
              îți închiriezi un apartament complet utilat, dar beneficiezi de servicii similare celor 
              dintr-un hotel: check-in flexibil, lenjerie curată, asistență non-stop, și posibilitatea 
              de a plăti pe nopți.
            </p>
            
            <h3 style={{ marginTop: 'var(--spacing-xl)' }}>Beneficii față de Hotel Clasic:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-md)' }}>
              <div>
                <h4>🏠 Mai Mult Spațiu</h4>
                <p style={{ color: 'var(--color-text-light)' }}>
                  Living, bucătărie, dormitoare separate - nu doar o cameră mică.
                </p>
              </div>
              <div>
                <h4>💰 Preț Mai Bun</h4>
                <p style={{ color: 'var(--color-text-light)' }}>
                  Mai mult spațiu și confort la un preț competitiv cu hotelurile.
                </p>
              </div>
              <div>
                <h4>🍳 Bucătărie</h4>
                <p style={{ color: 'var(--color-text-light)' }}>
                  Gătește când vrei, economisește la restaurant.
                </p>
              </div>
              <div>
                <h4>👨‍👩‍👧‍👦 Perfect Familii</h4>
                <p style={{ color: 'var(--color-text-light)' }}>
                  Spațiu pentru toată familia, nu camere separate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-lg" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Apartamente în Regim Hotelier Turda
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
          <h2>Pentru cine este potrivit regimul hotelier?</h2>
          <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
            <div style={{ background: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <h3>👨‍👩‍👧‍👦 Familii cu Copii</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Mai mult spațiu pentru copii să se joace, bucătărie pentru preparate familiare, 
                posibilitate de spălat haine. <Link href="/turda-cu-copiii">Vezi ghidul pentru familii</Link>.
              </p>
            </div>
            
            <div style={{ background: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <h3>💼 Călătorii de Afaceri</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Spațiu de lucru confortabil, WiFi rapid, liniște, posibilitate de a găti sau 
                comanda mâncare. Mai productiv decât într-o cameră de hotel.
              </p>
            </div>
            
            <div style={{ background: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <h3>🎒 Sejururi Lungi</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Pentru sejururi de 3+ zile, apartamentul devine "acasă". Bucătărie, mașină de spălat, 
                spațiu de relaxare - mult mai confortabil pe termen lung.
              </p>
            </div>
            
            <div style={{ background: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
              <h3>👥 Grupuri de Prieteni</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Puteți sta împreună într-un apartament spațios în loc de camere separate. 
                Bucătărie comună, living pentru socializare, mai economic.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <div className="text-center">
            <h2>De ce să alegi apartamentele noastre?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-xl)' }}>
              <div style={{ background: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>📍</div>
                <h4>Locații Centrale</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  5-10 min de Salina Turda
                </p>
              </div>
              
              <div style={{ background: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>🅿️</div>
                <h4>Parcare Gratuită</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  Privată la fiecare apartament
                </p>
              </div>
              
              <div style={{ background: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>🔑</div>
                <h4>Check-in Flexibil</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  Când vrei tu, chiar și târziu
                </p>
              </div>
              
              <div style={{ background: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>💬</div>
                <h4>Suport Non-Stop</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  WhatsApp 24/7
                </p>
              </div>
              
              <div style={{ background: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>✨</div>
                <h4>Curățenie Impecabilă</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  După fiecare oaspete
                </p>
              </div>
              
              <div style={{ background: 'white', padding: 'var(--spacing-lg)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>💰</div>
                <h4>Prețuri Corecte</h4>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  De la 150 lei/noapte
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-narrow text-center">
          <h2>Rezervă în Regim Hotelier</h2>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
            Contactează-ne pentru disponibilitate și rezervare rapidă!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', maxWidth: '400px', margin: '0 auto' }}>
            <Link href="/apartamente/ap-maysa" className="btn btn-primary btn-large">
              Apartament Maysa
            </Link>
            <Link href="/apartamente/ap-salin-gold" className="btn btn-primary btn-large">
              Salin Gold Premium
            </Link>
            <Link href="/apartamente/ap-lapale" className="btn btn-outline btn-large">
              La Pale - Familii
            </Link>
          </div>
          
          <p style={{ marginTop: 'var(--spacing-xl)' }}>
            <Link href="/apartamente-turda">Vezi toate apartamentele →</Link>
          </p>
        </div>
      </section>
    </>
  );
}
