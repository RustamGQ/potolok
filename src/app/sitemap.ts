import { MetadataRoute } from 'next';
import { generateSitemap } from '../lib/page-generator';

export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate every 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapData = generateSitemap();
  
  // Добавляем дополнительные метаданные для улучшения SEO
  return sitemapData.map(item => ({
    ...item,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: item.url === 'https://potolkivip-rnd.ru/' ? 1.0 : 0.8,
  }));
}
