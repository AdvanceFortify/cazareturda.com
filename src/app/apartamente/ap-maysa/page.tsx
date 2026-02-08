import type { Metadata } from 'next';
import Image from 'next/image';
import Hero from '@/components/Hero';
import FAQ from '@/components/FAQ';
import SEOJsonLd from '@/components/SEOJsonLd';
import BookingCTA from '@/components/BookingCTA';
import NearbyAttractions from '@/components/NearbyAttractions';
import AvailabilityCalendar from '@/components/AvailabilityCalendar';
import { getApartmentBySlug, getWhatsAppLink } from '@/data/apartments';
import styles from '../../apartment.module.css';

const apartment = getApartmentBySlug('apartamente/ap-maysa')!;
const BOOKING_ICS_URL = 'https://ical.booking.com/v1/export?t=b643edda-663e-4087-8e8c-ad76eb2d9a1f';

export const metadata: Metadata = {
  title: 'Apartament Maysa - Cazare la 20m de Salina Turda',
  description: 'Apartament Maysa - cea mai apropiată cazare de Salina Turda, la doar 20 metri (1 min pe jos). Parter, parcare gratuită, self check-in.',
  alternates: {
    canonical: 'https://cazareturda.com/apartamente/ap-maysa',
  },
  openGraph: {
    title: 'Apartament Maysa - La 20m de Salina Turda',
    description: 'Cea mai apropiată cazare de Salina Turda - la doar 20 metri distanță.',
    url: 'https://cazareturda.com/apartamente/ap-maysa',
    images: [{ url: apartment.heroImage }],
  },
};

const faqItems = [
  {
    question: 'Cât de aproape este Apartamentul Maysa de Salina Turda?',
    answer: 'Apartamentul Maysa este la doar 20 metri de intrarea în Salina Turda - maxim 1 minut pe jos. Este cea mai apropiată cazare de Salină din Turda.',
  },
  {
    question: 'Câte persoane pot fi cazate?',
    answer: 'Apartamentul poate găzdui confortabil între 2 și 4 persoane (1 pat matrimonial + 1 canapea extensibilă).',
  },
  {
    question: 'Este disponibilă parcare?',
    answer: 'Da, oferim parcare GRATUITĂ pentru oaspeți, direct la proprietate.',
  },
  {
    question: 'Cum funcționează check-in-ul?',
    answer: 'Oferim self check-in cu seif pentru cheie. Vei primi instrucțiuni detaliate prin WhatsApp înainte de sosire. Este foarte simplu și flexibil.',
  },
  {
    question: 'Apartamentul este la parter sau etaj?',
    answer: 'Apartamentul este la parter, cu acces facil direct din parcare. Ideal dacă aveți bagaje sau călătoriți cu copii mici.',
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
    ratingValue: '4.8',
  },
};

async function getBlockedDates(): Promise<{ blockedDates: string[]; hasError: boolean }> {
  try {
    // In production on Vercel, use relative URL. In dev, construct full URL
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    
    const encodedUrl = encodeURIComponent(BOOKING_ICS_URL);
    const apiUrl = `${baseUrl}/api/booking-ics?url=${encodedUrl}`;
    
    console.log('Fetching blocked dates from API...');
    
    const response = await fetch(apiUrl, {
      cache: 'no-store',
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      console.error('Failed to fetch blocked dates:', response.status, data);
      return { blockedDates: [], hasError: true };
    }
    
    if (data.error) {
      console.error('API returned error:', data.error);
      if (data.preview) {
        console.error('Response preview:', data.preview);
      }
      return { blockedDates: [], hasError: true };
    }
    
    // Empty array is VALID - means no bookings, all days available
    console.log('Blocked dates received:', data.blockedDates?.length || 0);
    
    return { 
      blockedDates: data.blockedDates || [], 
      hasError: false 
    };
  } catch (error) {
    console.error('Error fetching blocked dates:', error);
    return { blockedDates: [], hasError: true };
  }
}

export default async function MaysaPage() {
  const { blockedDates, hasError } = await getBlockedDates();
  
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
      
      <section id="disponibilitate" className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container">
          {!hasError ? (
            <AvailabilityCalendar
              blockedDates={blockedDates}
              title="Disponibilitate (sincronizat automat cu Booking)"
            />
          ) : (
            <div style={{ textAlign: 'center', padding: 'var(--spacing-xl)', backgroundColor: 'white', borderRadius: 'var(--radius-lg)', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ marginBottom: 'var(--spacing-md)', fontSize: 'var(--font-size-3xl)' }}>
                Disponibilitate (sincronizat automat cu Booking)
              </h2>
              <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-lg)', marginBottom: 'var(--spacing-lg)' }}>
                Calendar indisponibil momentan.
              </p>
              <a 
                href={getWhatsAppLink(apartment.whatsappNumber, `Bună! Vreau să aflu disponibilitatea pentru ${apartment.name}.`)}
                className="btn btn-whatsapp btn-large"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱 Rezervă pe WhatsApp
              </a>
            </div>
          )}
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
            Locație Excelentă în Turda
          </h2>
          <div className={styles.location}>
            <div className={styles.locationInfo}>
              <h3>📍 Avantaje Locație</h3>
              <ul className={styles.locationList}>
                <li>🏛️ La 20 metri de <a href="/salina-turda">Salina Turda</a> (1 min pe jos)</li>
                <li>🏪 La 2 minute de supermarket și magazine</li>
                <li>🍽️ Restaurante și cafenele în apropiere</li>
                <li>🏥 Farmacii și servicii medicale la 5 minute</li>
                <li>🚗 Acces rapid la DN1 și autostrăzi</li>
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
          <FAQ items={faqItems} title="Întrebări despre Apartamentul Maysa" />
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
