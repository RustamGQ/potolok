import { MetadataRoute } from 'next';
import { generateSitemap } from '../lib/page-generator';

export const dynamic = 'force-static';
export const revalidate = 86400; // Revalidate every 24 hours

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapData = generateSitemap();
  const now = new Date();
  
  // Улучшенная генерация sitemap с более точными датами и приоритетами
  return sitemapData.map(item => {
    // Определяем приоритет на основе типа страницы
    let priority = item.priority || 0.8;
    if (item.url === 'https://potolkivip-rnd.ru/') {
      priority = 1.0;
    } else if (item.url.includes('/catalog/')) {
      priority = 0.9;
    } else if (item.url.includes('/catalog') || item.url.endsWith('/rostov')) {
      priority = 0.85;
    }
    
    return {
      ...item,
      lastModified: item.lastModified || now,
      changeFrequency: item.changeFrequency || 'weekly',
      priority,
    };
  });
}
