export interface Apartment {
  id: string;
  name: string;
  slug: string;
  shortKicker: string;
  heroImage: string;
  heroImageAlt: string;
  galleryImages: Array<{ src: string; alt: string }>;
  whatsappNumber: string;
  bookingUrl: string;
  capacity: string;
  distanceToSalina: string;
  highlights: string[];
  amenities: string[];
  geo: {
    lat: number;
    lng: number;
  };
  mapsEmbedUrl: string;
  email?: string;
  priceRange: string;
  description: string;
  longDescription: string;
}

export const apartments: Apartment[] = [
  {
    id: 'maysa',
    name: 'Apartament Maysa',
    slug: 'apartamente/ap-maysa',
    shortKicker: 'La 1 minut de intrarea in Salina Turda',
    heroImage: '/images/apartamente-salina-turda.jpg',
    heroImageAlt: 'Apartament Maysa – cazare în Turda aproape de Salina Turda',
    galleryImages: [
      {
        src: "/images/Maysa/apartamente salina turda.jpg",
        alt: "Cazare Turda lângă Salina Turda – apartament modern cu pat matrimonial și living confortabil"
      },
      {
        src: "/images/Maysa/cazare-turda-langa.jpg",
        alt: "Cazare Turda lângă Salina Turda – intrare modernă în apartament, acces rapid și sigur"
      },
      {
        src: "/images/Maysa/cazare-turda-langa-salina-apartament-maysa.jpg",
        alt: "Cazare Turda lângă Salina Turda – Apartament Maysa, design modern aproape de intrare"
      },
      {
        src: "/images/Maysa/cazare-turda-langa-salina-maysa.jpg",
        alt: "Cazare Turda lângă Salina Turda – living modern Apartament Maysa, ideal pentru cupluri"
      },
      {
        src: "/images/Maysa/cazare-turda-langa-salina-maysa-baie-moderna.jpg",
        alt: "Cazare Turda lângă Salina Turda – baie modernă, curată și complet utilată"
      },
      {
        src: "/images/Maysa/cazare-turda-langa-salina-maysa-bucatarie-utilata.jpg",
        alt: "Cazare Turda lângă Salina Turda – bucătărie complet utilată pentru sejur confortabil"
      },
      {
        src: "/images/Maysa/cazare-turda-langa-salina-maysa-design-modern.jpg",
        alt: "Cazare Turda lângă Salina Turda – design interior modern și spațios în Apartament Maysa"
      },
      {
        src: "/images/Maysa/cazare-turda-langa-salina-maysa-dormitor-modern.jpg",
        alt: "Cazare Turda lângă Salina Turda – dormitor modern cu pat matrimonial și lenjerie premium"
      },
      {
        src: "/images/Maysa/cazare-turda-langa-salina-maysa-intrare-apartament.jpg",
        alt: "Cazare Turda lângă Salina Turda – self check-in cu seif pentru cheie, acces oricând"
      },
      {
        src: "/images/Maysa/cazare-turda-langa-salina-maysa-living-spatios.jpg",
        alt: "Cazare Turda lângă Salina Turda – living spațios și luminos, ideal pentru relaxare"
      },
      {
        src: "/images/Maysa/cazare-turda-langa-salina-maysa-self-check-in.jpg",
        alt: "Cazare Turda lângă Salina Turda – self check-in rapid, fără program, cod primit de la proprietar"
      },
      {
        src: "/images/Maysa/langa-salina-apartament-maysa.jpg",
        alt: "Cazare Turda lângă Salina Turda – apartament situat la 1 minut pe jos de intrare"
      }
    ],
    whatsappNumber: '+40 748 979 607',
    bookingUrl: 'https://www.booking.com/hotel/ro/maysa-ap.ro.html',
    capacity: '1-4 persoane',
    distanceToSalina: 'La 20 metri de Salina Turda (max. 1 minut pe jos)',
    highlights: [
      'La doar 20 metri de Salina Turda',
      'Parter - acces facil',
      'Self check-in cu seif pentru cheie',
      'Parcare GRATUITĂ',
      'Aer condiționat',
      '1 pat matrimonial + canapea extensibilă',
    ],
    amenities: [
      'Bucătărie complet utilată',
      'Smart TV & Netflix',
      'Aer condiționat',
      'Mașină de spălat',
      'Uscător de păr',
      'Lenjerie de calitate',
      'Prosoape incluse',
      'Cafea & ceai gratuit',
    ],
    geo: {
      lat: 46.583678,
      lng: 23.777108,
    },
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.666301411077!2d23.777108235076458!3d46.583678473803204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47496909c67686a9%3A0xdf874ab5c524a629!2sCazare%20Turda%20ap%20Maysa!5e1!3m2!1sen!2sro!4v1765479095891!5m2!1sen!2sro',
    email: 'cj96abi@gmail.com',
    priceRange: 'De la 180 lei/noapte',
    description: 'Cea mai apropiată cazare de Salina Turda - la doar 20 metri. Perfect pentru vizitatorii salinei.',
    longDescription: 'Apartamentul Maysa este cea mai apropiată cazare de Salina Turda - la doar 20 metri distanță (maxim 1 minut pe jos). Situat la parter cu acces facil, oferă self check-in cu seif pentru cheie, parcare gratuită, aer condiționat și toate dotările necesare pentru un sejur confortabil.',
  },
  {
    id: 'lapale',
    name: 'Apartament La Pale',
    slug: 'apartamente/ap-lapale',
    shortKicker: 'Renovare LUX, Zonă Liniștită',
    heroImage: '/images/la-pale-living1.jpg',
    heroImageAlt: 'Apartament La Pale – cazare modernă în Turda, zonă liniștită',
    galleryImages: [
      {
        src: '/images/lapale/IMG-20251210-WA0043.jpg',
        alt: 'Cazare Turda – Apartament La Pale, living modern aproape de Salina Turda'
      },
      {
        src: '/images/lapale/IMG-20251210-WA0064.jpg',
        alt: 'Dormitor elegant Apartament La Pale – cazare Turda aproape de Salina'
      },
      {
        src: '/images/lapale/IMG-20251210-WA0068.jpg',
        alt: 'Dormitor matrimonial Apartament La Pale – cazare confortabilă în Turda'
      },
      {
        src: '/images/lapale/IMG-20251210-WA0072.jpg',
        alt: 'Living spațios Apartament La Pale – ideal pentru familii în Turda'
      },
      {
        src: '/images/lapale/IMG-20251210-WA0073.jpg',
        alt: 'Zonă de relaxare Apartament La Pale – cazare modernă lângă Salina Turda'
      },
      {
        src: '/images/lapale/IMG-20251210-WA0111.jpg',
        alt: 'Baie modernă Apartament La Pale – cazare Turda cu dotări premium'
      },
      {
        src: '/images/lapale/IMG-20251210-WA0112.jpg',
        alt: 'Baie elegantă Apartament La Pale – cazare Turda aproape de Salina'
      },
      {
        src: '/images/lapale/IMG-20251210-WA0117.jpg',
        alt: 'Hol Apartament La Pale – cazare modernă și curată în Turda'
      },
      {
        src: '/images/lapale/WhatsApp Image 2025-04-19 at 18.21.40_de148ee0.jpg',
        alt: 'Balcon Apartament La Pale – vedere liniștită, cazare Turda'
      },
    ],
    whatsappNumber: '+40 752 951 061',
    bookingUrl: 'https://www.booking.com/hotel/ro/apartament-lapale.ro.html',
    capacity: '1-3 persoane',
    distanceToSalina: '~10 minute cu mașina până la Salina Turda (aprox. 10 km, în funcție de trafic)',
    highlights: [
      'Renovare de LUX - design modern',
      'Zonă liniștită, ultimul bloc',
      'Ideal pentru familii & sejururi lungi',
      'Balcon spațios',
      'Aer condiționat',
      'Cartier de case noi în apropiere',
    ],
    amenities: [
      '1 pat matrimonial + canapea extensibilă',
      'Living modern',
      'Bucătărie complet utilată',
      'Smart TV',
      'Aer condiționat',
      'WiFi gratuit',
      'Mașină de spălat',
      'Balcon',
    ],
    geo: {
      lat: 46.555393,
      lng: 23.815403,
    },
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1398.4740460716766!2d23.815403613432157!3d46.555393317634625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sro!4v1765475570647!5m2!1sen!2sro',
    email: 'cj10ana@gmail.com',
    priceRange: 'De la 200 lei/noapte',
    description: 'Apartament cu renovare de lux în zonă liniștită. Perfect pentru familii și sejururi mai lungi.',
    longDescription: 'Apartamentul La Pale se distinge prin renovarea de lux și designul modern. Situat într-o zonă liniștită (ultimul bloc, după cartierul de case noi), este ideal pentru familii și sejururi mai lungi. La aproximativ 10 minute cu mașina de Salina Turda, oferă liniște, balcon spațios, aer condiționat și toate dotările moderne.',
  },
  {
    id: 'salingold',
    name: 'Salin Gold',
    slug: 'apartamente/ap-salin-gold',
    shortKicker: 'La 1 minut de intrarea in Salina Turda',
    heroImage: '/images/cazare-salin-gold.jpg',
    heroImageAlt: 'Salin Gold – apartament premium pentru cazare în Turda',
    galleryImages: [
      {
        src: '/images/salingold/IMG-20250128-WA0008.jpg',
        alt: 'Salin Gold – apartament premium în Turda, cazare lângă Salina Turda'
      },
      {
        src: '/images/salingold/IMG-20250128-WA0009 .jpg',
        alt: 'Cazare Turda lângă Salina Turda – Salin Gold, interior modern și elegant'
      },
      {
        src: '/images/salingold/IMG-20250128-WA0012 .jpg',
        alt: 'Salin Gold Turda – dormitor modern pentru sejur confortabil lângă Salina Turda'
      },
      {
        src: '/images/salingold/IMG-20250128-WA0013.jpg',
        alt: 'Apartament Salin Gold – spațiu luminos, cazare premium în Turda'
      },
      {
        src: '/images/salingold/IMG-20250128-WA0014.jpg',
        alt: 'Cazare lângă Salina Turda – Salin Gold, design modern și finisaje elegante'
      },
      {
        src: '/images/salingold/IMG-20250128-WA0015.jpg',
        alt: 'Salin Gold – apartament modern în Turda cu self check-in, aproape de Salina Turda'
      },
      {
        src: '/images/salingold/IMG-20250128-WA0016.jpg',
        alt: 'Salin Gold Turda – detalii premium, cazare ideală lângă Salina Turda'
      },
    ],
    whatsappNumber: '+40 740 865 386',
    bookingUrl: 'https://www.booking.com/hotel/ro/salin-gold-ap.ro.html',
    capacity: '1-4 persoane',
    distanceToSalina: 'La 20 metri de Salina Turda (ușă în ușă cu Maysa)',
    highlights: [
      'Stil premium / elegant "gold"',
      'Ușă în ușă cu Maysa - hol comun',
      'Împreună cu Maysa: max 8 persoane',
      'La 20 metri de Salina Turda',
      'Aer condiționat',
      'Finisaje de lux',
    ],
    amenities: [
      'Design interior premium',
      'Bucătărie modernă utilată',
      'Smart TV & streaming',
      'Aer condiționat',
      'WiFi de mare viteză',
      'Pat confortabil',
      'Baie modernă cu duș',
      'Lenjerie premium',
    ],
    geo: {
      lat: 46.583678,
      lng: 23.777108,
    },
    mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1640.666301411077!2d23.777108235076458!3d46.583678473803204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47496909c67686a9%3A0xdf874ab5c524a629!2sCazare%20Turda%20ap%20Maysa!5e1!3m2!1sen!2sro!4v1765479095891!5m2!1sen!2sro',
    priceRange: 'De la 180 lei/noapte',
    description: 'Varianta premium lângă Salina Turda. Stil elegant "gold", finisaje de lux, ușă în ușă cu Maysa.',
    longDescription: 'Salin Gold este varianta premium pentru cazare lângă Salina Turda. Cu stil elegant "gold" și finisaje de lux, este situat ușă în ușă cu Apartamentul Maysa (hol comun). Împreună pot găzdui maximum 8 persoane, ideal pentru grupuri care doresc cazare premium la doar 20 metri de Salină.',
  },
];

export const getApartmentBySlug = (slug: string): Apartment | undefined => {
  return apartments.find(apt => apt.slug === slug);
};

export const getWhatsAppLink = (number: string, message?: string): string => {
  const cleanNumber = number.replace(/[^0-9]/g, '');
  const defaultMessage = 'Bună! Aș dori să aflu mai multe despre cazare.';
  const encodedMessage = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${cleanNumber}?text=${encodedMessage}`;
};
