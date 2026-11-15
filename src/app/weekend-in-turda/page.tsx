import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { apartments } from '@/data/apartments';
import styles from '../tourism.module.css';

export const metadata: Metadata = {
  title: 'Weekend în Turda - Itinerariu Perfect 2 Zile (2026)',
  description: 'Planifică weekendul perfect în Turda: Salina, Cheile Turzii, restaurante, cazare. Itinerariu complet pentru 2-3 zile cu recomandări și prețuri.',
  alternates: {
    canonical: 'https://www.cazareturda.com/weekend-in-turda',
  },
};

export default function WeekendTurdaPage() {
  return (
    <>
      <Hero
        title="Weekend Perfect în Turda"
        subtitle="Itinerariu complet pentru 2-3 zile: atracții, restaurante, cazare și activități"
        imageUrl="/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Weekend în Turda"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.intro}>
            <h2>De ce Turda este perfectă pentru un weekend?</h2>
            <p>
              Turda oferă combinația perfectă pentru un weekend reușit: atracții spectaculoase 
              (Salina Turda, Cheile Turzii), istorie milenară, natură frumoasă și distanță accesibilă 
              din principalele orașe ale României. În 2-3 zile poți explora tot ce e important 
              și te întorci acasă relaxat și încântat.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            📅 Itinerariu Detaliat Weekend Turda
          </h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>📆 VINERI (Opțional - Sosire Seara)</h3>
              <div style={{ marginTop: 'var(--spacing-md)' }}>
                <p><strong>18:00-19:00:</strong> Check-in la <Link href="/cazare-langa-salina-turda">apartament</Link></p>
                <p><strong>19:00-20:30:</strong> Cină la un restaurant din centru</p>
                <p><strong>20:30-22:00:</strong> Plimbare seara prin centrul Turdei</p>
                <p><strong>22:00+:</strong> Relaxare la apartament</p>
              </div>
              <p className="note">
                <strong>💡 Tip:</strong> Dacă ajungi vineri seara, ai sâmbăta întreagă pentru Salină!
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>📆 SÂMBĂTĂ (Ziua Principală)</h3>
              <div style={{ marginTop: 'var(--spacing-md)' }}>
                <p><strong>08:00-09:00:</strong> Mic dejun la apartament (gătit sau cumpărat)</p>
                <p><strong>09:00-09:15:</strong> Drum spre <Link href="/salina-turda">Salina Turda</Link> (5-10 min cu mașina)</p>
                <p><strong>09:15-13:30:</strong> Vizită Salina Turda (4 ore)</p>
                <ul style={{ marginLeft: 'var(--spacing-xl)', color: 'var(--color-text-light)' }}>
                  <li>Roata panoramică subterană</li>
                  <li>Plimbare cu barca pe lacul sărat</li>
                  <li>Mini-golf sau biliard</li>
                  <li>Muzeul salinei</li>
                  <li>Fotografii spectaculoase</li>
                </ul>
                <p><strong>13:30-15:00:</strong> Prânz la restaurant în Turda</p>
                <p><strong>15:00-17:30:</strong> Vizită centrul vechi</p>
                <ul style={{ marginLeft: 'var(--spacing-xl)', color: 'var(--color-text-light)' }}>
                  <li>Cetatea Potaissa (ruine romane)</li>
                  <li>Biserica Reformată gotică</li>
                  <li>Muzeul de Istorie (opțional)</li>
                  <li>Plimbare prin centru</li>
                </ul>
                <p><strong>17:30-19:00:</strong> Relaxare la apartament, odihnă</p>
                <p><strong>19:00-21:00:</strong> Cină la un restaurant local (bucătărie românească)</p>
                <p><strong>21:00+:</strong> Plimbare seara sau relaxare la apartament</p>
              </div>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>📆 DUMINICĂ (Natură & Plecare)</h3>
              <div style={{ marginTop: 'var(--spacing-md)' }}>
                <p><strong>Opțiunea 1 - Activ (Cheile Turzii):</strong></p>
                <p><strong>08:00-09:00:</strong> Mic dejun consistent</p>
                <p><strong>09:00-09:30:</strong> Drum spre Cheile Turzii (15 km, 20 min)</p>
                <p><strong>09:30-13:30:</strong> Drumeție la Cheile Turzii</p>
                <ul style={{ marginLeft: 'var(--spacing-xl)', color: 'var(--color-text-light)' }}>
                  <li>Traseu ușor: 2-3 ore (familii cu copii)</li>
                  <li>Traseu moderat: 3-4 ore (drumeții obișnuiți)</li>
                  <li>Peisaje spectaculoase, aer curat</li>
                </ul>
                <p><strong>13:30-14:00:</strong> Întoarcere la apartament</p>
                <p><strong>14:00-15:00:</strong> Check-out și pregătire bagaje</p>
                <p><strong>15:00-16:00:</strong> Prânz în Turda sau pe drum</p>
                <p><strong>16:00+:</strong> Plecare spre casă</p>
                
                <div style={{ marginTop: 'var(--spacing-lg)', paddingTop: 'var(--spacing-lg)', borderTop: '1px solid var(--color-border)' }}>
                  <p><strong>Opțiunea 2 - Relaxat (Fără Cheile Turzii):</strong></p>
                  <p><strong>09:00-10:00:</strong> Mic dejun liniștit</p>
                  <p><strong>10:00-11:30:</strong> Plimbare finală în Turda, shopping produse locale</p>
                  <p><strong>11:30-12:00:</strong> Check-out</p>
                  <p><strong>12:00-13:00:</strong> Prânz la restaurant</p>
                  <p><strong>13:00+:</strong> Plecare spre casă</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2>💰 Buget Estimativ Weekend Turda (2 persoane)</h2>
          <div className="panel panel-lg">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--spacing-lg)' }}>
              <div>
                <h4>🏠 Cazare (2 nopți)</h4>
                <p className="figure">300-400 lei</p>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  {apartments[0].priceRange} × 2 nopți
                </p>
              </div>
              
              <div>
                <h4>🎟️ Bilete Salină</h4>
                <p className="figure">100 lei</p>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  50 lei × 2 persoane
                </p>
              </div>
              
              <div>
                <h4>🍽️ Mâncare</h4>
                <p className="figure">400-600 lei</p>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  Restaurante + cumpărături
                </p>
              </div>
              
              <div>
                <h4>⛽ Transport</h4>
                <p className="figure">200-300 lei</p>
                <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)' }}>
                  Benzină + parcare
                </p>
              </div>
            </div>
            
            <div style={{ marginTop: 'var(--spacing-xl)', paddingTop: 'var(--spacing-lg)', borderTop: '2px solid var(--color-border)', textAlign: 'center' }}>
              <h3>Total Estimativ:</h3>
              <p className="figure">
                1.000 - 1.400 lei
              </p>
              <p style={{ color: 'var(--color-text-light)' }}>Pentru 2 persoane, 2 nopți (weekend complet)</p>
            </div>
            
            <div className="note">
              <p><strong>💡 Economisește:</strong> Gătește micul dejun și unele mese la apartament 
              (toate au bucătării utilate). Poți economisi 150-200 lei!</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            ✅ Lista de Verificare Weekend Turda
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--spacing-lg)' }}>
            <div className="panel">
              <h3>📋 Înainte de Plecare</h3>
              <ul style={{ lineHeight: 2, color: 'var(--color-text-light)' }}>
                <li>☐ Rezervă cazare la <Link href="/apartamente-turda">apartament</Link></li>
                <li>☐ Verifică meteo</li>
                <li>☐ Planifică traseul (GPS)</li>
                <li>☐ Card/cash pentru cheltuieli</li>
              </ul>
            </div>
            
            <div className="panel">
              <h3>🎒 Ce să Iei</h3>
              <ul style={{ lineHeight: 2, color: 'var(--color-text-light)' }}>
                <li>☐ Jachetă pentru Salină (10-12°C)</li>
                <li>☐ Încălțăminte confortabilă</li>
                <li>☐ Echipament drumeții (dacă mergi la Cheile Turzii)</li>
                <li>☐ Cameră foto</li>
                <li>☐ Baterie externă telefon</li>
              </ul>
            </div>
            
            <div className="panel">
              <h3>Contacte Utile</h3>
              <ul style={{ lineHeight: 2, color: 'var(--color-text-light)' }}>
                <li>☐ Salvează nr. WhatsApp apartament</li>
                <li>☐ Programul Salinei: 09:00-17:00</li>
                <li>☐ Urgențe: 112</li>
                <li>☐ <Link href="/ce-sa-faci-in-turda">Ghid activități</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.accommodation}>
            <h2>Rezervă Cazare pentru Weekend</h2>
            <p>
              Alege unul dintre apartamentele noastre pentru baza perfectă a weekendului în Turda:
            </p>
            
            <div className={styles.apartmentLinks}>
              <Link href="/apartamente/ap-maysa" className="btn btn-primary btn-large">
                Maysa - Central
              </Link>
              <Link href="/apartamente/ap-salin-gold" className="btn btn-primary btn-large">
                Salin Gold - Premium
              </Link>
              <Link href="/apartamente/ap-lapale" className="btn btn-outline btn-large">
                La Pale - Familii
              </Link>
            </div>
            
            <p style={{ marginTop: 'var(--spacing-lg)' }}>
              Contactează-ne pe WhatsApp pentru disponibilitate și reduceri weekend!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
