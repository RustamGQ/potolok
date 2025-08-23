import { Metadata } from 'next';
import { getCityBySlug, cities } from '../../../lib/cities';
import { notFound } from 'next/navigation';
import WorksPage from '../../../components/WorksPage/WorksPage';
import { generatePageMetadata, generatePageContent } from '../../../lib/page-generator';

interface WorksPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: WorksPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const seoMeta = generatePageMetadata(citySlug, 'works');
  
  if (!seoMeta) {
    return {
      title: 'Наши работы - ПОТОЛКИ',
      description: 'Примеры работ по установке натяжных потолков. Портфолио проектов, фотографии до и после.'
    };
  }

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: seoMeta.keywords,
    openGraph: seoMeta.openGraph,
    alternates: {
              canonical: `https://potolkivip-rnd.ru/${citySlug}/works`
    }
  };
}

export default async function WorksPageComponent({ params }: WorksPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const pageContent = generatePageContent(citySlug, 'works');

  return (
    <WorksPage 
      city={city} 
      content={pageContent && typeof pageContent === 'object' && 'title' in pageContent ? {
        title: pageContent.title as string,
        description: pageContent.description as string
      } : undefined}
    />
  );
}
