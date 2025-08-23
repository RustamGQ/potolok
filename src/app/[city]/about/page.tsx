import { Metadata } from 'next';
import { getCityBySlug, cities } from '../../../lib/cities';
import { notFound } from 'next/navigation';
import AboutPage from '../../../components/AboutPage/AboutPage';
import { generatePageMetadata, generatePageContent } from '../../../lib/page-generator';

interface AboutPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: AboutPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const seoMeta = generatePageMetadata(citySlug, 'about');
  
  if (!seoMeta) {
    return {
      title: 'О компании - ПОТОЛКИ',
      description: 'О компании "Натяжные потолки". Опыт работы, команда специалистов, гарантии качества.'
    };
  }

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: seoMeta.keywords,
    openGraph: seoMeta.openGraph,
    alternates: {
              canonical: `https://potolkivip-rnd.ru/${citySlug}/about`
    }
  };
}

export default async function AboutPageComponent({ params }: AboutPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const pageContent = generatePageContent(citySlug, 'about');

  return (
    <AboutPage 
      city={city} 
      content={pageContent && 'about' in pageContent ? {
        title: pageContent.about.title,
        description: pageContent.about.description,
        stats: [
          { number: "5+", label: "лет опыта" },
          { number: "1000+", label: "довольных клиентов" },
          { number: "100%", label: "гарантия качества" },
          { number: "24/7", label: "поддержка клиентов" }
        ]
      } : undefined}
    />
  );
}
