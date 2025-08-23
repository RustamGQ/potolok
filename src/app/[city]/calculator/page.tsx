import { Metadata } from 'next';
import { getCityBySlug, cities } from '../../../lib/cities';
import { notFound } from 'next/navigation';
import Calculator from '../../../components/Calculator/Calculator';
import { generatePageMetadata, generatePageContent } from '../../../lib/page-generator';

interface CalculatorPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CalculatorPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const seoMeta = generatePageMetadata(citySlug, 'calculator');
  
  if (!seoMeta) {
    return {
      title: 'Калькулятор - ПОТОЛКИ',
      description: 'Онлайн калькулятор стоимости натяжных потолков. Быстрый расчет цены, бесплатный замер.'
    };
  }

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: seoMeta.keywords,
    openGraph: seoMeta.openGraph,
    alternates: {
              canonical: `https://potolkivip-rnd.ru/${citySlug}/calculator`
    }
  };
}

export default async function CalculatorPage({ params }: CalculatorPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const pageContent = generatePageContent(citySlug, 'calculator');

  return (
    <Calculator 
      city={city} 
      content={pageContent && typeof pageContent === 'object' && 'title' in pageContent ? {
        title: pageContent.title as string,
        description: pageContent.description as string
      } : undefined}
    />
  );
}
