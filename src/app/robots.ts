import { MetadataRoute } from 'next';
import { generateRobotsTxt } from '../lib/page-generator';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/debug-cities/', '/test-cities/'],
    },
    sitemap: 'https://potolkivip-rnd.ru/sitemap.xml',
  };
}

