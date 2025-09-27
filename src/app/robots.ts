import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/debug-cities/', '/test-cities/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/debug-cities/', '/test-cities/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/debug-cities/', '/test-cities/'],
      },
    ],
    sitemap: 'https://potolkivip-rnd.ru/sitemap.xml',
    host: 'https://potolkivip-rnd.ru',
  };
}

