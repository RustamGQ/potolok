import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/_next/', '/debug/'],
      },
    ],
    sitemap: 'https://potolkivip-rnd.ru/sitemap.xml',
  };
}
