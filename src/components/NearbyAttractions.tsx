import Link from 'next/link';
import styles from './NearbyAttractions.module.css';

const attractions = [
  {
    title: 'Salina Turda',
    distance: '5-10 min',
    icon: '🏛️',
    url: '/salina-turda',
    description: 'Parc subteran spectaculos',
  },
  {
    title: 'Cheile Turzii',
    distance: '20 min',
    icon: '🏔️',
    url: '/cheile-turzii',
    description: 'Rezervație naturală',
  },
  {
    title: 'Centrul Vechi',
    distance: '5 min',
    icon: '🏰',
    url: '/atractii-turda',
    description: 'Istorie și arhitectură',
  },
  {
    title: 'Restaurante',
    distance: '2-5 min',
    icon: '🍽️',
    url: '/restaurante-turda',
    description: 'Bucătărie locală',
  },
];

export default function NearbyAttractions() {
  return (
    <section className={styles.section}>
      <div className="container container-content">
        <h2 className={styles.title}>Atracții în Apropiere</h2>
        <p className={styles.subtitle}>
          De la apartament ai acces rapid la toate atracțiile importante din Turda
        </p>
        
        <div className={styles.grid}>
          {attractions.map((attraction, index) => (
            <Link key={index} href={attraction.url} className={styles.card}>
              <div className={styles.icon}>{attraction.icon}</div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{attraction.title}</h3>
                <p className={styles.description}>{attraction.description}</p>
                <span className={styles.distance}>📍 {attraction.distance}</span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className={styles.cta}>
          <Link href="/ce-sa-faci-in-turda" className="btn btn-outline">
            Vezi Ce Poți Face în Turda
          </Link>
        </div>
      </div>
    </section>
  );
}
