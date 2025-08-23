import { Metadata } from 'next';
import { getCityBySlug, cities } from '../../../lib/cities';
import { notFound } from 'next/navigation';
import ServicesPage from '../../../components/ServicesPage/ServicesPage';
import { generatePageMetadata, generatePageContent } from '../../../lib/page-generator';

interface ServicesPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: ServicesPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const seoMeta = generatePageMetadata(citySlug, 'services');
  
  if (!seoMeta) {
    return {
      title: 'Услуги - ПОТОЛКИ',
      description: 'Услуги по установке натяжных потолков. Профессиональный монтаж, гарантия качества.'
    };
  }

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: seoMeta.keywords,
    openGraph: seoMeta.openGraph,
    alternates: {
              canonical: `https://potolkivip-rnd.ru/${citySlug}/services`
    }
  };
}

export default async function ServicesPageComponent({ params }: ServicesPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const pageContent = generatePageContent(citySlug, 'services');

  return (
    <ServicesPage 
      city={city} 
      content={pageContent && typeof pageContent === 'object' && 'title' in pageContent ? {
        title: pageContent.title as string,
        description: pageContent.description as string
      } : undefined}
    />
  );
}
