export interface GuidePost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  category: string;
  imageUrl: string;
}

export const guidePosts: GuidePost[] = [
  {
    slug: 'cum-ajungi-la-salina-turda',
    title: 'Cum ajungi la Salina Turda – Ghid complet 2026',
    excerpt: 'Tot ce trebuie să știi despre cum să ajungi la Salina Turda cu mașina, trenul sau autobuzul.',
    content: `
# Cum ajungi la Salina Turda – Ghid complet 2026

Salina Turda este una dintre cele mai vizitate atracții din România. Iată cum poți ajunge aici:

## Cu mașina

Dacă vii din Cluj-Napoca, drumul durează aproximativ 40 de minute pe DN1. Există parcare amplă la intrarea în Salina.

## Cu trenul

Gara Turda este conectată cu Cluj-Napoca și alte orașe majore. De la gară, poți lua un taxi sau autobuz local.

## Parcare

Parcarea la Salina Turda este de 5 lei pe zi. Recomandăm să ajungi dimineața pentru a evita aglomerația.

**Cazare apropiată:** Verifică [apartamentele noastre](/apartamente/ap-maysa) situate la doar 20 metri de Salina Turda.
    `,
    publishedAt: '2026-01-15',
    category: 'Transport',
    imageUrl: 'https://cazareturda.com/images/cazare-turda-aproape-de-salina.webp',
  },
  {
    slug: 'cele-mai-bune-restaurante-turda',
    title: 'Top 10 Restaurante în Turda – Unde să mănânci în 2026',
    excerpt: 'Descoperă cele mai bune locuri unde să mănânci în Turda, de la bucătărie tradițională la pizza și fast-food.',
    content: `
# Top 10 Restaurante în Turda

Turda oferă o varietate de opțiuni culinare pentru toți gusturile:

## 1. Restaurant Traditional

Bucătărie românească autentică în centrul orașului.

## 2. La Piscine

Perfect pentru o masă în aer liber vara.

## 3. Pizza Napoli

Cea mai bună pizza din Turda, la prețuri accesibile.

După o zi de explorare, relaxează-te în unul dintre [apartamentele noastre moderne](/apartamente-turda).
    `,
    publishedAt: '2026-01-20',
    category: 'Food & Drinks',
    imageUrl: 'https://cazareturda.com/images/cazare-turda-aproape-de-salina.webp',
  },
  {
    slug: 'program-salina-turda-2026',
    title: 'Program și Prețuri Salina Turda – Actualizat 2026',
    excerpt: 'Află programul de vizitare, prețurile biletelor și cele mai bune momente pentru a vizita Salina Turda.',
    content: `
# Program și Prețuri Salina Turda 2026

## Program de funcționare

- Luni - Duminică: 09:00 - 17:00
- Ultima intrare: 16:00

## Prețuri bilete

- Adult: 50 lei
- Copii (sub 14 ani): 25 lei
- Pensionari: 35 lei

## Recomandări

Cea mai bună perioadă pentru vizită este dimineața între 9-11, când este mai puțin aglomerat.

**Planifici un weekend în Turda?** Descoperă [opțiunile noastre de cazare](/weekend-in-turda) situate strategic lângă toate atracțiile.
    `,
    publishedAt: '2026-01-25',
    category: 'Atracții',
    imageUrl: 'https://cazareturda.com/images/cazare-turda-aproape-de-salina.webp',
  },
];

export const getGuidePostBySlug = (slug: string): GuidePost | undefined => {
  return guidePosts.find(post => post.slug === slug);
};
