import { Metadata } from 'next';
import { getCityBySlug, cities } from '../../../lib/cities';
import { notFound } from 'next/navigation';
import Catalog from '../../../components/Catalog/Catalog';
import { generatePageMetadata, generatePageContent } from '../../../lib/page-generator';

interface CatalogPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CatalogPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const seoMeta = generatePageMetadata(citySlug, 'catalog');
  
  if (!seoMeta) {
    return {
      title: 'Каталог потолков - ПОТОЛКИ',
      description: 'Каталог натяжных потолков. Матовые, глянцевые, сатиновые потолки.'
    };
  }

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: seoMeta.keywords,
    openGraph: seoMeta.openGraph,
    alternates: {
              canonical: `https://potolkivip-rnd.ru/${citySlug}/catalog`
    }
  };
}

export default async function CatalogPage({ params }: CatalogPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const pageContent = generatePageContent(citySlug, 'catalog');

  return (
    <Catalog 
      citySlug={citySlug}
      content={pageContent && typeof pageContent === 'object' && 'title' in pageContent ? {
        title: pageContent.title as string,
        description: pageContent.description as string
      } : undefined}
    />
  );
}
