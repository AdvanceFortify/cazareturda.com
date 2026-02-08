import type { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import SEOJsonLd from '@/components/SEOJsonLd';
import BookingCTA from '@/components/BookingCTA';
import NearbyAttractions from '@/components/NearbyAttractions';
import { getApartmentBySlug, getWhatsAppLink } from '@/data/apartments';
import styles from '../../apartment.module.css';

const apartment = getApartmentBySlug('apartamente/ap-lapale')!;

export const metadata: Metadata = {
  title: 'Apartament La Pale Turda - Renovare LUX, Zonă Liniștită',
  description: 'Apartament La Pale - renovare de lux, design modern, zonă liniștită. Ideal pentru familii și sejururi mai lungi. La 10 min de Salina Turda.',
  alternates: {
    canonical: 'https://cazareturda.com/apartamente/ap-lapale',
  },
  openGraph: {
    title: 'Apartament La Pale - Renovare LUX Turda',
    description: 'Apartament cu renovare de lux în zonă liniștită, perfect pentru familii.',
    url: 'https://cazareturda.com/apartamente/ap-lapale',
    images: [{ url: apartment.heroImage }],
  },
};

const faqItems = [
  {
    question: 'Unde este situat Apartamentul La Pale?',
    answer: 'Apartamentul La Pale este situat într-o zonă liniștită din Turda (ultimul bloc, după cartierul de case noi), la aproximativ 10 minute cu mașina de Salina Turda (aprox. 10 km, în funcție de trafic).',
  },
  {
    question: 'De ce este ideal pentru familii?',
    answer: 'Apartamentul oferă renovare de lux, design modern, balcon spațios și liniște completă. Este perfect pentru familii cu copii și pentru sejururi mai lungi datorită spațiului și confortului oferit.',
  },
  {
    question: 'Câte persoane pot fi cazate?',
    answer: 'Apartamentul poate găzdui confortabil 2-4 persoane (1 pat matrimonial + 1 canapea extensibilă).',
  },
  {
    question: 'Ce înseamnă "renovare de lux"?',
    answer: 'Apartamentul a fost complet renovat cu materiale premium, design modern, finisaje de calitate și dotări noi. Totul este nou, curat și modern.',
  },
  {
    question: 'Este disponibilă parcare?',
    answer: 'Da, există parcare disponibilă în zona blocului.',
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
  email: apartment.email,
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

export default function LaPalePage() {
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
          📱 Rezervă pe WhatsApp
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
            Facilități & Dotări
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
            Locație Liniștită în Turda
          </h2>
          <div className={styles.location}>
            <div className={styles.locationInfo}>
              <h3>📍 Avantaje Locație</h3>
              <ul className={styles.locationList}>
                <li>🏛️ La ~10 minute cu mașina de <a href="/salina-turda">Salina Turda</a></li>
                <li>🏡 Zonă liniștită, ultimul bloc, cartier de case noi</li>
                <li>🏪 Supermarket la 3 minute</li>
                <li>🍽️ Restaurante în apropiere</li>
                <li>🌳 Perfect pentru odihnă și relaxare</li>
              </ul>
              <div className={styles.locationCta}>
                <p><strong>Distanță până la Salină:</strong> {apartment.distanceToSalina}</p>
                <p><strong>Capacitate:</strong> {apartment.capacity}</p>
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
