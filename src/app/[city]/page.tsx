import { Metadata } from 'next';
import { getCityBySlug, cities } from '../../lib/cities';
import { notFound } from 'next/navigation';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Services from '../../components/Services/Services';
import Portfolio from '../../components/Portfolio/Portfolio';
import WorkZone from '../../components/WorkZone/WorkZone';
import Footer from '../../components/Footer/Footer';
import { generateCityContent, generateSEOMeta } from '../../lib/content-generator';
import "../../styles/reset.css";

interface CityPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    return {
      title: 'Натяжные потолки - ПОТОЛКИ',
      description: 'Профессиональная установка натяжных потолков. Качественные материалы, опытные мастера, гарантия на работы.'
    };
  }

  const seoMeta = generateSEOMeta(city, 'Главная', 
    `Натяжные потолки в ${city.name} - цены от 1200₽/м² | ПОТОЛКИ`,
    `Натяжные потолки в ${city.name}. Профессиональная установка, качественные материалы, опытные мастера. Цены от 1200₽/м². Бесплатный замер, гарантия качества.`
  );

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: seoMeta.keywords,
    openGraph: seoMeta.openGraph,
    alternates: {
              canonical: `https://potolkivip-rnd.ru/${city.slug}`
    }
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const cityContent = generateCityContent(city);

  return (
    <>
      <Hero key={`hero-${city.slug}`} city={city} content={cityContent.hero} />
      <Portfolio key={`portfolio-${city.slug}`} city={city} content={cityContent.works} />
      <About key={`about-${city.slug}`} city={city} content={cityContent.about} />
      <Services key={`services-${city.slug}`} city={city} content={cityContent.services} />
      <WorkZone key={`workzone-${city.slug}`} city={city} />
      <Footer />
    </>
  );
}
