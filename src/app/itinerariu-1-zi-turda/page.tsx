import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import RecommendedAccommodation from '@/components/RecommendedAccommodation';
import styles from '../tourism.module.css';

export const metadata: Metadata = {
  title: 'Itinerariu 1 Zi Turda - Ghid Complet Cu Orar 2026',
  description: 'Itinerariu detaliat pentru o zi în Turda: Salina Turda, centrul vechi, restaurante, atracții. Optimizat pentru timp și buget.',
  alternates: {
    canonical: 'https://cazareturda.com/itinerariu-1-zi-turda',
  },
};

export default function Itinerariu1ZiTurdaPage() {
  return (
    <>
      <Hero
        title="Itinerariu 1 Zi în Turda"
        subtitle="Ghid complet cu orar: maximizează experiența într-o singură zi"
        imageUrl="/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Itinerariu Turda"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.intro}>
            <h2>Cum să petreci o zi perfectă în Turda</h2>
            <p>
              Dacă ai doar o zi pentru Turda, acest itinerariu te va ajuta să vezi tot ce este important, 
              fără grabă și fără să ratezi nimic esențial. Am optimizat traseul pentru a minimiza 
              timpul de deplasare și a maximiza experiența.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            📅 Itinerariu Detaliat
          </h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>08:00 - 09:00: Sosire & Mic Dejun</h3>
              <p>
                <strong>Unde:</strong> Cafenea în centrul Turdei<br/>
                <strong>Cost:</strong> 20-30 lei/persoană<br/>
                <strong>Sau:</strong> Mic dejun la unul dintre <Link href="/apartamente-turda">apartamentele noastre</Link>
              </p>
              <p>
                Începe ziua cu un mic dejun consistent. Cafenelele din centru se deschid de la 8:00. 
                Dacă ai cazare, gătește acasă și economisești timp și bani.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>09:00 - 13:00: Salina Turda (4 ore)</h3>
              <p>
                <strong>Activități:</strong> Roată panoramică, bărci, mini-golf, muzeul salinei<br/>
                <strong>Bilet:</strong> 50 lei adulți, 25 lei copii<br/>
                <strong>Extra:</strong> Bărci 7 lei/15 min
              </p>
              <p>
                Ajunge la <Link href="/salina-turda">Salină</Link> la deschidere (9:00) pentru a evita aglomerația. 
                Ia cu tine o jachetă ușoară (10-12°C constant). Alocă minimum 3-4 ore - merită fiecare minut!
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>13:00 - 14:30: Prânz</h3>
              <p>
                <strong>Opțiuni:</strong> Restaurant românesc sau pizzerie<br/>
                <strong>Cost:</strong> 40-60 lei/persoană<br/>
                <strong>Locație:</strong> Centrul Turdei
              </p>
              <p>
                Vezi <Link href="/restaurante-turda">ghidul nostru de restaurante</Link> pentru recomandări. 
                Meniul zilei (20-30 lei) este o opțiune economică și bună.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>14:30 - 17:00: Centrul Vechi Turda</h3>
              <p>
                <strong>Obiective:</strong> Biserica Reformată, Cetatea Potaissa, Muzeul de Istorie<br/>
                <strong>Cost:</strong> Gratuit sau 10 lei (muzeu)<br/>
                <strong>Durată:</strong> 2-3 ore relaxat
              </p>
              <p>
                Plimbă-te prin <Link href="/atractii-turda">centrul istoric</Link>, admiră arhitectura gotică, 
                vizitează ruinele romane. E o plimbare liniștită, perfectă după Salină.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>17:00 - 18:00: Parc & Relaxare</h3>
              <p>
                <strong>Unde:</strong> Parcul Central sau malul râului Arieș<br/>
                <strong>Cost:</strong> Gratuit
              </p>
              <p>
                Pauză de relaxare în parc. Înghețată sau cafea la terasă. Moment perfect pentru a procesa ziua.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>18:00 - 19:30: Cină</h3>
              <p>
                <strong>Opțiuni:</strong> Restaurant tradițional sau terasă<br/>
                <strong>Recomandare:</strong> Bucătărie românească pentru experiență completă
              </p>
              <p>
                Încheie ziua cu o cină la un restaurant local. Încearcă preparatele tradiționale: 
                sarmale, mici, papanași.
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>19:30 - 20:00: Plecare sau Check-in</h3>
              <p>
                <strong>Opțiune 1:</strong> Plecare spre casă<br/>
                <strong>Opțiune 2:</strong> Check-in la apartament pentru o noapte
              </p>
              <p>
                Dacă rămâi peste noapte, vezi <Link href="/weekend-in-turda">itinerariul pentru 2 zile</Link>. 
                A doua zi poți vizita <Link href="/cheile-turzii">Cheile Turzii</Link>!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2>💰 Buget Estimativ 1 Zi</h2>
          
          <div className="panel panel-lg">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-lg)' }}>
              <div>
                <h4>🎟️ Intrări</h4>
                <p><strong>Salină:</strong> 50 lei</p>
                <p><strong>Muzeu:</strong> 10 lei</p>
                <p><strong>Total:</strong> 60 lei</p>
              </div>
              
              <div>
                <h4>🍽️ Mâncare</h4>
                <p><strong>Mic dejun:</strong> 25 lei</p>
                <p><strong>Prânz:</strong> 50 lei</p>
                <p><strong>Cină:</strong> 60 lei</p>
                <p><strong>Total:</strong> 135 lei</p>
              </div>
              
              <div>
                <h4>🚗 Transport</h4>
                <p><strong>Benzină:</strong> 40-60 lei</p>
                <p><strong>Parcare:</strong> 10 lei</p>
                <p><strong>Total:</strong> 50-70 lei</p>
              </div>
              
              <div style={{ gridColumn: 'span 1' }}>
                <h3>Total Estimativ:</h3>
                <p className="figure">
                  245-265 lei
                </p>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  per persoană, fără cazare
                </p>
              </div>
            </div>
            
            <div className="note">
              <p><strong>💡 Sfat economisire:</strong> Gătește la apartament și economisești ~100 lei/zi. 
              Vezi <Link href="/apartamente-turda">apartamentele cu bucătărie utilată</Link>.</p>
            </div>
          </div>
        </div>
      </section>
      
      <RecommendedAccommodation />
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <div className={styles.related}>
            <h2>Planifică Mai Mult:</h2>
            <div className={styles.relatedLinks}>
              <Link href="/weekend-in-turda">📅 Itinerariu 2-3 Zile</Link>
              <Link href="/turda-cu-copiii">👶 Turda cu Copiii</Link>
              <Link href="/cheile-turzii">🏔️ Cheile Turzii</Link>
              <Link href="/salina-turda">🏛️ Ghid Salina Turda</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
