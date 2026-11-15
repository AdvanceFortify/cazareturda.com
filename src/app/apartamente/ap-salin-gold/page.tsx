import type { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import SEOJsonLd from '@/components/SEOJsonLd';
import BookingCTA from '@/components/BookingCTA';
import NearbyAttractions from '@/components/NearbyAttractions';
import { getApartmentBySlug, getWhatsAppLink } from '@/data/apartments';
import styles from '../../apartment.module.css';

const apartment = getApartmentBySlug('apartamente/ap-salin-gold')!;

export const metadata: Metadata = {
  title: 'Salin Gold Turda - Cazare Premium lângă Salina Turda',
  description: 'Salin Gold - varianta premium lângă Salina Turda. Stil elegant "gold", finisaje de lux, la 20m de Salină. Ușă în ușă cu Maysa.',
  alternates: {
    canonical: 'https://cazareturda.com/apartamente/ap-salin-gold',
  },
  openGraph: {
    title: 'Salin Gold - Cazare Premium Turda',
    description: 'Varianta premium lângă Salina Turda cu stil elegant gold și finisaje de lux.',
    url: 'https://cazareturda.com/apartamente/ap-salin-gold',
    images: [{ url: apartment.heroImage }],
  },
};

const faqItems = [
  {
    question: 'Ce înseamnă "ușă în ușă cu Maysa"?',
    answer: 'Salin Gold și Apartamentul Maysa sunt situate ușă în ușă, cu hol comun. Împreună pot găzdui maximum 8 persoane, fiind ideale pentru grupuri sau familii extinse care doresc să fie aproape dar să aibă și intimitate.',
  },
  {
    question: 'Cât de aproape este de Salina Turda?',
    answer: 'Salin Gold este la doar 20 metri de intrarea în Salina Turda - maxim 1 minut pe jos. Aceeași locație excelentă ca și Maysa.',
  },
  {
    question: 'Ce înseamnă stil "gold" / premium?',
    answer: 'Apartamentul are finisaje de lux, design elegant cu accente aurii, mobilier premium și atenție la detalii. Este varianta premium pentru cei care apreciază calitatea superioară.',
  },
  {
    question: 'Câte persoane pot fi cazate?',
    answer: 'Salin Gold poate găzdui 2-4 persoane. Împreună cu Maysa (apartament vecin), puteți găzdui maximum 8 persoane total.',
  },
  {
    question: 'Este disponibilă parcare?',
    answer: 'Da, parcare gratuită la fel ca la Maysa, fiind în același loc.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LodgingBusiness',
  name: apartment.name,
  description: apartment.longDescription,
  image: apartment.galleryImages.map(img => img.src),
  url: `https://cazareturda.com/${apartment.slug}`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Turda',
    addressLocality: 'Turda',
    addressRegion: 'Cluj',
    postalCode: '401100',
    addressCountry: 'RO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: apartment.geo.lat,
    longitude: apartment.geo.lng,
  },
  telephone: apartment.whatsappNumber,
  priceRange: apartment.priceRange,
  petsAllowed: false,
  checkinTime: '14:00',
  checkoutTime: '12:00',
  amenityFeature: apartment.amenities.map(amenity => ({
    '@type': 'LocationFeatureSpecification',
    name: amenity,
  })),
  starRating: {
    '@type': 'Rating',
    ratingValue: '4.9',
  },
};

export default function SalinGoldPage() {
  return (
    <>
      <SEOJsonLd data={jsonLd} />
      
      <Hero
        title={apartment.name}
        subtitle={apartment.longDescription}
        imageUrl={apartment.heroImage}
        imageAlt={`${apartment.name} - cazare Turda`}
        compact
      >
        <a 
          href={getWhatsAppLink(apartment.whatsappNumber, `Bună! Vreau să rezerv ${apartment.name}.`)}
          className="btn btn-whatsapp btn-large"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rezervă pe WhatsApp
        </a>
        <a 
          href={apartment.bookingUrl}
          className="btn btn-primary btn-large"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rezervă pe Booking.com
        </a>
      </Hero>
      
      <section className="section">
        <div className="container container-content">
          <div className={styles.highlights}>
            {apartment.highlights.map((highlight, index) => (
              <div key={index} className={styles.highlightItem}>
                <span className={styles.highlightIcon}>✓</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <BookingCTA 
        title="Verifică Disponibilitatea"
        subtitle="Contactează-ne acum pentru a afla disponibilitatea și prețurile actuale."
        whatsappNumber={apartment.whatsappNumber}
        whatsappMessage={`Bună! Vreau să aflu disponibilitatea pentru ${apartment.name}.`}
        showApartmentsButton={false}
      />
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Galerie Foto
          </h2>
          <div className={styles.gallery}>
            {apartment.galleryImages.map((image, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.galleryImage}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Facilități & Dotări Premium
          </h2>
          <div className={styles.amenitiesGrid}>
            {apartment.amenities.map((amenity, index) => (
              <div key={index} className={styles.amenityItem}>
                <span className={styles.amenityIcon}>✓</span>
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <NearbyAttractions />
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Locație Premium în Turda
          </h2>
          <div className={styles.location}>
            <div className={styles.locationInfo}>
              <h3>📍 Avantaje Locație</h3>
              <ul className={styles.locationList}>
                <li>🏛️ La 20 metri de <a href="/salina-turda">Salina Turda</a> (1 min pe jos)</li>
                <li>🏠 Ușă în ușă cu Apartamentul Maysa - ideal pentru grupuri</li>
                <li>🏪 La 2 minute de supermarket și magazine</li>
                <li>🍽️ Restaurante și cafenele în apropiere</li>
                <li>🚗 Acces rapid la DN1 și autostrăzi</li>
              </ul>
              <div className={styles.locationCta}>
                <p><strong>Distanță până la Salină:</strong> {apartment.distanceToSalina}</p>
                <p><strong>Capacitate:</strong> {apartment.capacity}</p>
                <p><strong>Cu Maysa împreună:</strong> Max 8 persoane</p>
                <p><strong>Preț:</strong> {apartment.priceRange}</p>
              </div>
            </div>
            <div className={styles.mapWrapper}>
              <iframe
                src={apartment.mapsEmbedUrl}
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: 'var(--radius-lg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Hartă ${apartment.name}`}
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-content">
          <FAQ items={faqItems} title={`Întrebări despre ${apartment.name}`} />
        </div>
      </section>
      
      <BookingCTA 
        title={`Rezervă Acum ${apartment.name}`}
        subtitle="Contactează-ne pentru disponibilitate și prețuri speciale. Răspundem în câteva minute!"
        whatsappNumber={apartment.whatsappNumber}
        whatsappMessage={`Bună! Vreau să rezerv ${apartment.name}.`}
        showApartmentsButton={false}
      />
    </>
  );
}
