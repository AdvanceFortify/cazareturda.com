import { MetadataRoute } from 'next';
import { apartments } from '@/data/apartments';
import { guidePosts } from '@/data/guides';

const BASE_URL = 'https://www.cazareturda.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const apartmentEntries: MetadataRoute.Sitemap = apartments.map((apartment) => {
    const slug = String(apartment.slug || '').replace(/^\/+/, ''); // remove leading slashes
    return {
      url: `${BASE_URL}/${slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.95,
    };
  });

  const guideEntries: MetadataRoute.Sitemap = guidePosts.map((post) => {
    const slug = String(post.slug || '').replace(/^\/+/, '');
    return {
      url: `${BASE_URL}/ghid-turda/${slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
      changeFrequency: 'weekly',
      priority: 0.8,
    };
  });

  // ✅ Deduplicate URLs (important for SEO hygiene)
  const all = [...staticEntries, ...apartmentEntries, ...guideEntries];
  const dedup = Array.from(new Map(all.map((e) => [e.url, e])).values());

  return dedup;
}
