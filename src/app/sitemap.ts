import { MetadataRoute } from 'next';
import { apartments } from '@/data/apartments';
import { guidePosts } from '@/data/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cazareturda.com';
  
  // Static pages
  const staticPages = [
    '',
    '/salina-turda',
    '/atractii-turda',
    '/cheile-turzii',
    '/ce-sa-faci-in-turda',
    '/restaurante-turda',
    '/itinerariu-1-zi-turda',
    '/weekend-in-turda',
    '/cazare-langa-salina-turda',
    '/apartamente-turda',
    '/regim-hotelier-turda',
    '/turda-cu-copiii',
    '/ghid-turda',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // Apartment pages
  const apartmentPages = apartments.map((apartment) => ({
    url: `${baseUrl}/${apartment.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));
  
  // Guide posts
  const guidePages = guidePosts.map((post) => ({
    url: `${baseUrl}/ghid-turda/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  
  return [...staticPages, ...apartmentPages, ...guidePages];
}
