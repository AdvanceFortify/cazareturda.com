import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import styles from '../tourism.module.css';

export const metadata: Metadata = {
  title: 'Turda cu Copiii - Ghid Complet pentru Familii 2026',
  description: 'Ghid complet pentru vizitarea Turdei cu copiii: atracții potrivite, cazare family-friendly, activități, restaurante. Planifică vacanța perfectă!',
  alternates: {
    canonical: 'https://cazareturda.com/turda-cu-copiii',
  },
};

const faqItems = [
  {
    question: 'Este Salina Turda potrivită pentru copii mici?',
    answer: 'Da! Salina este perfectă pentru copii de toate vârstele. Mini-golf, bărci, roată panoramică - le plac tuturor. Temperatura constantă de 10-12°C necesită o jachetă ușoară.',
  },
  {
    question: 'Pot merge la Cheile Turzii cu copii?',
    answer: 'Da! Există trasee ușoare perfecte pentru familii cu copii. Evitați traseele dificile și mergeți pe potecile marcate ușor. Peisajele sunt spectaculoase și copiilor le place aventura.',
  },
  {
    question: 'Unde să mă cazez cu copiii în Turda?',
    answer: 'Apartamentul La Pale este ideal pentru familii - 2 dormitoare, living spațios, bucătărie mare. Toate apartamentele noastre au dotări complete pentru familii.',
  },
  {
    question: 'Sunt restaurante prietenoase cu copiii?',
    answer: 'Da, majoritatea restaurantelor din Turda sunt family-friendly, cu meniuri pentru copii și zone de joacă. Sau poți găti la apartament - mai economic și mai comod.',
  },
];

export default function TurdaCuCopiiiPage() {
  return (
    <>
      <Hero
        title="Turda cu Copiii"
        subtitle="Ghid complet pentru familii: atracții, cazare, activități și sfaturi practice"
        imageUrl="/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Turda cu copiii - vacanță în familie"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.intro}>
            <h2>De ce Turda este perfectă pentru o vacanță în familie?</h2>
            <p>
              Turda oferă combinația ideală pentru familiile cu copii: atracții spectaculoase dar sigure, 
              distanțe scurte între obiective, facilități moderne și prețuri accesibile. Salina Turda 
              încântă copiii de toate vârstele, iar natura din jur oferă aventuri memorabile.
            </p>
            <p>
              Cu apartamente spațioase dotate cu bucătării (pentru mese familiare) și atracții 
              educative și distractive, Turda este destinația perfectă pentru un weekend sau o 
              vacanță mai lungă cu copiii.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            🎯 Atracții Perfecte pentru Copii
          </h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>1. 🏛️ Salina Turda (⭐ Cel mai iubit de copii!)</h3>
              <p>
                <strong>De ce le place copiilor:</strong> Roată panoramică la 120m sub pământ (!), 
                plimbări cu barca pe lac sărat, mini-golf, biliard, teren de sport. Este ca un parc 
                de distracții subteran!
              </p>
              <ul style={{ marginLeft: 'var(--spacing-xl)', color: 'var(--color-text-light)', marginTop: 'var(--spacing-sm)' }}>
                <li><strong>Vârsta:</strong> Potrivit pentru orice vârstă (și bebeluși în cărucior)</li>
                <li><strong>Durată:</strong> 3-4 ore (copiii nu vor să plece!)</li>
                <li><strong>Bilet copii:</strong> 25 lei (sub 14 ani)</li>
                <li><strong>Sfat:</strong> Luați jachete ușoare - este răcoare constant</li>
              </ul>
              <p style={{ marginTop: 'var(--spacing-md)' }}>
                <Link href="/salina-turda">→ Citește ghidul complet Salina Turda</Link>
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>2. 🏔️ Cheile Turzii (Pentru familia activă)</h3>
              <p>
                <strong>Aventură în natură:</strong> Trasee ușoare perfecte pentru copii de la 5-6 ani în sus. 
                Stânci impresionante, peșteri, pârâiaș, aer curat. Copiii adoră să exploreze!
              </p>
              <ul style={{ marginLeft: 'var(--spacing-xl)', color: 'var(--color-text-light)', marginTop: 'var(--spacing-sm)' }}>
                <li><strong>Traseu ușor:</strong> 2-3 ore, potrivit și pentru copii mici</li>
                <li><strong>Ce să aduci:</strong> Apă, snacks, încălțăminte sport, jachetă</li>
                <li><strong>Sfat:</strong> Mergeți dimineața când e mai răcoare</li>
                <li><strong>Acces:</strong> Gratuit, parcare 5 lei</li>
              </ul>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>3. 🌳 Parcuri & Zone de Joacă</h3>
              <p>
                Turda are mai multe parcuri cu locuri de joacă moderne și sigure. Perfect pentru 
                pauze de relaxare între vizite sau pentru serile liniștite.
              </p>
              <ul style={{ marginLeft: 'var(--spacing-xl)', color: 'var(--color-text-light)' }}>
                <li>Parc Central - cea mai mare zonă de joacă</li>
                <li>Parcul de pe malul Arieșului - frumos pentru plimbări</li>
                <li>Zone verzi amenajate în tot orașul</li>
              </ul>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>4. 🏛️ Muzeul de Istorie (Educativ & Interactiv)</h3>
              <p>
                Colecții fascinante despre romani, arme medievale, expoziții interactive. 
                Copiilor mai mari (8+) le place să vadă piesele arheologice și să învețe 
                despre istoria locului.
              </p>
              <ul style={{ marginLeft: 'var(--spacing-xl)', color: 'var(--color-text-light)' }}>
                <li><strong>Program:</strong> Marți-Duminică 10:00-18:00</li>
                <li><strong>Bilet:</strong> Gratuit pentru copii sub 7 ani</li>
                <li><strong>Durată:</strong> 1-1.5 ore</li>
              </ul>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>5. 🏰 Cetatea Potaissa & Centrul Vechi</h3>
              <p>
                Ruinele romane fascinează copiii - pot explora, se pot juca de-a "arheologii", 
                pot învăța despre romani. Plus plimbare prin centrul istoric cu clădiri colorate 
                și străzi pietonale sigure.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            🏠 Cazare Family-Friendly în Turda
          </h2>
          
          <div className={styles.tipsList}>
            <div className={styles.tip}>
              <span className={styles.tipIcon}>👨‍👩‍👧‍👦</span>
              <div>
                <h4>Apartament La Pale - Perfect pentru Familii</h4>
                <p>
                  <strong>2 dormitoare + living spațios</strong> - Părinții în camera lor, 
                  copiii în a lor. Bucătărie mare pentru mese în familie. 
                  Capacitate 4-6 persoane. Zonă liniștită.
                </p>
                <Link href="/apartamente/ap-lapale" className="btn btn-primary" style={{ marginTop: 'var(--spacing-sm)' }}>
                  Vezi Apartamentul La Pale
                </Link>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>✓</span>
              <div>
                <h4>De ce apartament în loc de hotel cu copiii?</h4>
                <ul style={{ color: 'var(--color-text-light)', lineHeight: 2 }}>
                  <li>✓ <strong>Bucătărie:</strong> Gătești mâncarea preferată a copiilor</li>
                  <li>✓ <strong>Spațiu:</strong> Copiii au unde să se joace</li>
                  <li>✓ <strong>Mașină de spălat:</strong> Speli hainele murdare</li>
                  <li>✓ <strong>Living separat:</strong> Copiii dorm, tu te relaxezi</li>
                  <li>✓ <strong>Preț:</strong> Mai ieftin decât 2 camere de hotel</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.tip}>
              <span className={styles.tipIcon}>🏠</span>
              <div>
                <h4>Apartamentele Maysa & Salin Gold</h4>
                <p>
                  Potrivite pentru familii cu 1-2 copii mici. Un dormitor spațios + living cu canapea extensibilă. 
                  Ultracentrale, la 5 minute de Salină.
                </p>
                <div style={{ display: 'flex', gap: 'var(--spacing-sm)', marginTop: 'var(--spacing-sm)', flexWrap: 'wrap' }}>
                  <Link href="/apartamente/ap-maysa" className="btn btn-outline">Vezi Maysa</Link>
                  <Link href="/apartamente/ap-salin-gold" className="btn btn-outline">Vezi Salin Gold</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2>🍽️ Mâncare cu Copiii în Turda</h2>
          
          <div style={{ display: 'grid', gap: 'var(--spacing-md)' }}>
            <div className="panel">
              <h3>Opțiunea 1: Gătește la Apartament (Recomandat!)</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                <strong>Cel mai economic și comod.</strong> Supermarketuri în oraș (Kaufland, Lidl). 
                Gătești ce știi că mănâncă copiii tăi, controlez calitatea, economisești bani. 
                Bucătăriile sunt complet utilate.
              </p>
            </div>
            
            <div className="panel">
              <h3>Opțiunea 2: Restaurante Family-Friendly</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Restaurante cu bucătărie românească (sarmale, mici - copiilor le place!), 
                pizzerii (Pizza Napoli - foarte bună), fast-food (KFC, McDonald's). 
                Majoritatea au meniuri copii și scaune înalte pentru bebeluși.
              </p>
            </div>
            
            <div className="panel">
              <h3>Opțiunea 3: Combinat</h3>
              <p style={{ color: 'var(--color-text-light)' }}>
                Micul dejun și cina la apartament, prânzul la restaurant. Echilibru perfect 
                între economii și experiența culinară locală.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2>📋 Sfaturi Practice pentru Părinți</h2>
          
          <div className="panel panel-lg">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-xl)' }}>
              <div>
                <h3>🎒 Ce să Iei</h3>
                <ul style={{ lineHeight: 2, color: 'var(--color-text-light)' }}>
                  <li>Jachete pentru toată familia (Salina)</li>
                  <li>Încălțăminte confortabilă</li>
                  <li>Rucsac cu apă și snacks</li>
                  <li>Medicamente de bază</li>
                  <li>Jucării preferate pentru drum</li>
                  <li>Cărucior pliabil (dacă bebeluș)</li>
                </ul>
              </div>
              
              <div>
                <h3>⏰ Planificare</h3>
                <ul style={{ lineHeight: 2, color: 'var(--color-text-light)' }}>
                  <li>Ajunge dimineața la Salină (mai puțin aglomerat)</li>
                  <li>Pauze frecvente - copiii obosesc</li>
                  <li>Nu forța un program strict</li>
                  <li>Alocă timp pentru odihnă la apartament</li>
                  <li>Evită orele foarte calde vara</li>
                </ul>
              </div>
              
              <div>
                <h3>💡 Pro Tips</h3>
                <ul style={{ lineHeight: 2, color: 'var(--color-text-light)' }}>
                  <li>La Salină: Luați bani cash pentru bărci/mini-golf</li>
                  <li>Cărucioarul merge în Salină (lift disponibil)</li>
                  <li>Cheile Turzii: Stick-uri pentru stabilitate</li>
                  <li>Farmacii sunt în tot orașul</li>
                  <li>Apartamentele au WiFi - pentru desenele copiilor</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            📅 Itinerariu Recomandat cu Copiii (2 zile)
          </h2>
          
          <div className={styles.attractions}>
            <div className={styles.attractionItem}>
              <h3>Ziua 1: Salina Turda & Centru</h3>
              <p>
                <strong>09:00:</strong> Plecare spre Salină (micul dejun la drum sau la apartament)<br/>
                <strong>09:30-13:00:</strong> Salina Turda - luați-vă timpul! (3.5 ore)<br/>
                <strong>13:00-14:30:</strong> Prânz la restaurant (pizza e sigură cu copiii)<br/>
                <strong>14:30-16:00:</strong> Plimbare ușoară centrul vechi, înghețată<br/>
                <strong>16:00-18:00:</strong> Odihnă la apartament (copiii dorm/se joacă)<br/>
                <strong>18:00-19:00:</strong> Parc cu loc de joacă<br/>
                <strong>19:00:</strong> Cină la apartament sau restaurant
              </p>
            </div>
            
            <div className={styles.attractionItem}>
              <h3>Ziua 2: Natură sau Relaxare</h3>
              <p>
                <strong>Varianta Activă (copii 6+ ani):</strong><br/>
                09:00-13:00: Cheile Turzii (traseu ușor)<br/>
                13:00-15:00: Prânz și check-out<br/>
                15:00: Plecare spre casă
              </p>
              <p style={{ marginTop: 'var(--spacing-md)' }}>
                <strong>Varianta Relaxată (copii mici):</strong><br/>
                09:00-11:00: Mic dejun liniștit, joacă la apartament<br/>
                11:00-12:30: Parc, plimbare finală<br/>
                12:30: Check-out și plecare
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <FAQ items={faqItems} title="Întrebări despre Turda cu Copiii" />
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-narrow text-center">
          <h2>Rezervă Cazare Family-Friendly</h2>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
            Alege apartamentul perfect pentru familia ta în Turda!
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)', maxWidth: '400px', margin: '0 auto' }}>
            <Link href="/apartamente/ap-lapale" className="btn btn-primary btn-large">
              La Pale - Perfect Familii (2 dormitoare)
            </Link>
            <Link href="/apartamente/ap-maysa" className="btn btn-outline btn-large">
              Maysa - Familii Mici
            </Link>
            <Link href="/apartamente/ap-salin-gold" className="btn btn-outline btn-large">
              Salin Gold - Central
            </Link>
          </div>
          
          <p style={{ marginTop: 'var(--spacing-xl)' }}>
            Contactează-ne pe WhatsApp pentru sfaturi personalizate!
          </p>
        </div>
      </section>
    </>
  );
}
