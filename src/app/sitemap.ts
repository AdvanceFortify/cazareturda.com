import { MetadataRoute } from 'next';
import { apartments } from '@/data/apartments';
import { guidePosts } from '@/data/guides';

const BASE_URL = 'https://www.cazareturda.com';

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes discovered from app/ (excluding api, _*, layout, loading, error, not-found)
  const staticRoutes: { path: string; priority: number; changeFrequency: 'daily' | 'weekly' }[] = [
    { path: '', priority: 1.0, changeFrequency: 'daily' }, // homepage
    { path: '/salina-turda', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/atractii-turda', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/cheile-turzii', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/ce-sa-faci-in-turda', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/restaurante-turda', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/itinerariu-1-zi-turda', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/weekend-in-turda', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/cazare-langa-salina-turda', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/apartamente-turda', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/regim-hotelier-turda', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/turda-cu-copiii', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/ghid-turda', priority: 0.8, changeFrequency: 'weekly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority, changeFrequency }) => ({
    url: path ? `${BASE_URL}${path}` : BASE_URL,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));

  const apartmentEntries: MetadataRoute.Sitemap = apartments.map((apartment) => ({
    url: `${BASE_URL}/${apartment.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.95,
  }));

  const guideEntries: MetadataRoute.Sitemap = guidePosts.map((post) => ({
    url: `${BASE_URL}/ghid-turda/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...apartmentEntries, ...guideEntries];
}
