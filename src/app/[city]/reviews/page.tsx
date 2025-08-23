import { Metadata } from 'next';
import { getCityBySlug, cities } from '../../../lib/cities';
import { notFound } from 'next/navigation';
import ReviewsPage from '../../../components/ReviewsPage/ReviewsPage';
import { generatePageMetadata, generatePageContent } from '../../../lib/page-generator';

interface ReviewsPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: ReviewsPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const seoMeta = generatePageMetadata(citySlug, 'reviews');
  
  if (!seoMeta) {
    return {
      title: 'Отзывы - ПОТОЛКИ',
      description: 'Отзывы клиентов о натяжных потолках. Реальные мнения о качестве монтажа и сервисе.'
    };
  }

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: seoMeta.keywords,
    openGraph: seoMeta.openGraph,
    alternates: {
              canonical: `https://potolkivip-rnd.ru/${citySlug}/reviews`
    }
  };
}

export default async function ReviewsPageComponent({ params }: ReviewsPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const pageContent = generatePageContent(citySlug, 'reviews');

  return (
    <ReviewsPage 
      city={city} 
      content={pageContent && typeof pageContent === 'object' && 'title' in pageContent ? {
        title: pageContent.title as string,
        description: pageContent.description as string
      } : undefined}
    />
  );
}
