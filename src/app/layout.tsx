import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';
import WhatsAppCTA from '@/components/WhatsAppCTA';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.cazareturda.com'),
  title: {
    default: 'Cazare Turda - Apartamente moderne lângă Salina Turda',
    template: '%s | Cazare Turda',
  },
  description: 'Apartamente în regim hotelier Turda. Cazare modernă lângă Salina Turda. Locații centrale, dotări complete, prețuri accesibile. Rezervă acum!',
  keywords: ['cazare Turda', 'apartamente Turda', 'Salina Turda', 'regim hotelier Turda', 'cazare lângă Salina Turda'],
  authors: [{ name: 'Cazare Turda' }],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    url: 'https://www.cazareturda.com/',
    siteName: 'Cazare Turda',
    title: 'Cazare Turda - Apartamente moderne lângă Salina Turda',
    description: 'Apartamente în regim hotelier Turda. Cazare modernă lângă Salina Turda.',
    images: [
      {
        url: 'https://www.cazareturda.com/images/cazare-turda-aproape-de-salina.webp',
        width: 1200,
        height: 630,
        alt: 'Cazare Turda - Salina Turda',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cazare Turda - Apartamente moderne lângă Salina Turda',
    description: 'Apartamente în regim hotelier Turda. Cazare modernă lângă Salina Turda.',
    images: ['https://www.cazareturda.com/images/cazare-turda-aproape-de-salina.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// Global JSON-LD structured data
const globalJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://www.cazareturda.com/#website',
      url: 'https://www.cazareturda.com/',
      name: 'Cazare Turda',
      description: 'Apartamente în regim hotelier Turda - Cazare modernă lângă Salina Turda',
      inLanguage: 'ro-RO',
      publisher: {
        '@id': 'https://www.cazareturda.com/#organization',
      },
    },
    {
      '@type': 'LodgingBusiness',
      '@id': 'https://www.cazareturda.com/#organization',
      name: 'Cazare Turda',
      url: 'https://www.cazareturda.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.cazareturda.com/images/cazare-turda-aproape-de-salina.webp',
      },
      image: 'https://www.cazareturda.com/images/cazare-turda-aproape-de-salina.webp',
      description: 'Apartamente moderne în regim hotelier în Turda, situate strategic lângă Salina Turda și principalele atracții turistice.',
      telephone: '+40748979607',
      priceRange: '150-200 RON',
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
        latitude: 46.5736,
        longitude: 23.7850,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      sameAs: [
        'https://www.booking.com/hotel/ro/maysa-ap.ro.html',
        'https://www.booking.com/hotel/ro/apartament-lapale.ro.html',
        'https://www.booking.com/hotel/ro/salin-gold-ap.ro.html',
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalJsonLd) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCTA />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
