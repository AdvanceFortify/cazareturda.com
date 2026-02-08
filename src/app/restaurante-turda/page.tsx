import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import RecommendedAccommodation from '@/components/RecommendedAccommodation';
import styles from '../tourism.module.css';

export const metadata: Metadata = {
  title: 'Restaurante Turda - Top Locuri Unde să Mănânci 2026',
  description: 'Ghid restaurante Turda: bucătărie românească, pizza, terase, cafenele. Recomandări verificate pentru turiști și localnici.',
  alternates: {
    canonical: 'https://cazareturda.com/restaurante-turda',
  },
};

export default function RestauranteTurdaPage() {
  return (
    <>
      <Hero
        title="Restaurante în Turda"
        subtitle="De la bucătărie românească tradițională la pizza și cafenele moderne"
        imageUrl="https://cazareturda.com/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Restaurante Turda"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <h2>Unde să mănânci în Turda</h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>🍽️ Bucătărie Românească Tradițională</h3>
              <p>
                <strong>Recomandări:</strong> Sarmale, mici, ciorbă de burtă, mămăligă, tocăniță.<br/>
                <strong>Preț mediu:</strong> 40-60 lei/persoană<br/>
                <strong>Locație:</strong> Centrul orașului, zona Pieței
              </p>
              <p>
                Restaurantele din centrul Turdei oferă preparate autentice românești. 
                Recomandăm să încerci sarmalele cu mămăligă și smântână.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>🍕 Pizza & Fast-Food</h3>
              <p>
                <strong>Opțiuni:</strong> Pizzerii locale, KFC, McDonald's<br/>
                <strong>Preț mediu:</strong> 25-45 lei/persoană<br/>
                <strong>Livrare:</strong> Disponibilă prin Glovo, Tazz
              </p>
              <p>
                Pentru o masă rapidă, pizza locală este proaspătă și gustoasă. 
                Multe pizzerii au și terase vara.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>☕ Cafenele & Terase</h3>
              <p>
                <strong>Perfect pentru:</strong> Cafea, deserturi, brunch<br/>
                <strong>Preț:</strong> 10-25 lei/persoană<br/>
                <strong>Ambianță:</strong> Relaxată, WiFi gratuit
              </p>
              <p>
                Cafenelele din Turda oferă cafea bună, deserturi delicioase și atmosferă plăcută. 
                Ideal pentru o pauză între vizite.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>🏪 Supermarketuri & Piețe</h3>
              <p>
                <strong>Opțiuni:</strong> Kaufland, Lidl, Carrefour, Penny<br/>
                <strong>Piața centrală:</strong> Produse locale fresh
              </p>
              <p>
                Dacă stai la unul dintre <Link href="/apartamente-turda">apartamentele noastre</Link>, 
                poți găti acasă. Supermarketurile au program prelungit și prețuri bune.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2>Sfaturi pentru Masă în Turda</h2>
          
          <div className={styles.tipsList}>
            <div className={styles.tip}>
              <span className={styles.tipIcon}>💰</span>
              <div>
                <h4>Buget</h4>
                <p>
                  Mănâncarea în Turda este accesibilă: 30-60 lei/persoană pentru o masă completă. 
                  Meniul zilei (prânz) costă 20-30 lei și include supă + fel principal.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🕐</span>
              <div>
                <h4>Program</h4>
                <p>
                  Majoritatea restaurantelor servesc între 10:00-22:00. Rezervare recomandată 
                  în weekend la restaurantele populare.
                </p>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🏠</span>
              <div>
                <h4>Gătește la Apartament</h4>
                <p>
                  Economisești 150-200 lei/zi pentru o familie de 4 persoane. 
                  Toate <Link href="/apartamente-turda">apartamentele noastre</Link> au bucătării complet utilate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <RecommendedAccommodation />
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.related}>
            <h2>Explorează Turda:</h2>
            <div className={styles.relatedLinks}>
              <Link href="/salina-turda">🏛️ Salina Turda</Link>
              <Link href="/atractii-turda">🎯 Atracții Turistice</Link>
              <Link href="/cheile-turzii">🏔️ Cheile Turzii</Link>
              <Link href="/itinerariu-1-zi-turda">🗓️ Itinerariu 1 Zi</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
