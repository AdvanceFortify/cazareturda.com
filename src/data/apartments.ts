export interface Apartment {
  id: string;
  name: string;
  slug: string;
  shortKicker: string;
  heroImage: string;
  heroImageAlt: string;
  galleryImages: string[];
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
    shortKicker: 'La 20m de Salina Turda',
    heroImage: '/images/apartamente-salina-turda.jpg',
    heroImageAlt: 'Apartament Maysa – cazare în Turda aproape de Salina Turda',
    galleryImages: [
      'https://cazareturda.com/wp-content/uploads/2025/12/IMG-20251210-WA0088.jpg',
      'https://cazareturda.com/wp-content/uploads/2025/12/IMG-20240903-WA0026.jpg',
      'https://cazareturda.com/wp-content/uploads/2025/12/IMG-20251210-WA0083.jpg',
      'https://cazareturda.com/wp-content/uploads/2025/11/IMG_20240624_120157-scaled.jpg',
    ],
    whatsappNumber: '+40 748 979 607',
    bookingUrl: 'https://www.booking.com/hotel/ro/maysa-ap.ro.html',
    capacity: '2-4 persoane',
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
    priceRange: 'De la 150 lei/noapte',
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
      'https://cazareturda.com/wp-content/uploads/2025/12/IMG-20251210-WA0097.jpg',
      'https://cazareturda.com/wp-content/uploads/2025/12/IMG-20251210-WA0099.jpg',
      'https://cazareturda.com/wp-content/uploads/2025/12/la-pale.png',
      'https://cazareturda.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-04-19-at-18.21.40_f2e5c57f-scaled.jpg',
      'https://cazareturda.com/wp-content/uploads/2025/12/IMG-20251210-WA0115.jpg',
      'https://cazareturda.com/wp-content/uploads/2025/12/WhatsApp-Image-2025-04-19-at-18.21.40_de148ee0-scaled.jpg',
    ],
    whatsappNumber: '+40 752 951 061',
    bookingUrl: 'https://www.booking.com/hotel/ro/apartament-lapale.ro.html',
    capacity: '2-4 persoane',
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
    priceRange: 'De la 180 lei/noapte',
    description: 'Apartament cu renovare de lux în zonă liniștită. Perfect pentru familii și sejururi mai lungi.',
    longDescription: 'Apartamentul La Pale se distinge prin renovarea de lux și designul modern. Situat într-o zonă liniștită (ultimul bloc, după cartierul de case noi), este ideal pentru familii și sejururi mai lungi. La aproximativ 10 minute cu mașina de Salina Turda, oferă liniște, balcon spațios, aer condiționat și toate dotările moderne.',
  },
  {
    id: 'salingold',
    name: 'Salin Gold',
    slug: 'apartamente/ap-salin-gold',
    shortKicker: 'Premium & Elegant',
    heroImage: '/images/cazare-salin-gold.jpg',
    heroImageAlt: 'Salin Gold – apartament premium pentru cazare în Turda',
    galleryImages: [
      'https://cazareturda.com/wp-content/uploads/2025/12/IMG-20251210-WA0024.jpg',
      'https://cazareturda.com/wp-content/uploads/2025/12/IMG-20251210-WA0027.jpg',
      'https://cazareturda.com/wp-content/uploads/2025/12/IMG-20251210-WA0032.jpg',
      'https://cazareturda.com/wp-content/uploads/2025/11/IMG-20250128-WA0014.jpg',
    ],
    whatsappNumber: '+40 740 865 386',
    bookingUrl: 'https://www.booking.com/hotel/ro/salin-gold-ap.ro.html',
    capacity: '2-4 persoane',
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
    priceRange: 'De la 170 lei/noapte',
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
