import { MetadataRoute } from 'next';
import { generateSitemap } from '../lib/page-generator';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return generateSitemap();
}
