
import { Metadata } from 'next';
import AboutPage from "../../components/AboutPage/AboutPage";
import CityProvider from "../../contexts/CityContext";
import "../../styles/reset.css";

export const metadata: Metadata = {
  title: 'О компании - Натяжные потолки ПОТОЛКИ',
  description: 'О компании "ПОТОЛКИ" - профессиональная установка натяжных потолков. Опыт работы, команда специалистов, гарантии качества.',
  keywords: 'о компании потолки, натяжные потолки ростов, опыт работы, гарантия качества, команда специалистов',
  openGraph: {
    title: 'О компании - Натяжные потолки ПОТОЛКИ',
    description: 'О компании "ПОТОЛКИ" - профессиональная установка натяжных потолков.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://potolkivip-rnd.ru/about',
    siteName: 'ПОТОЛКИ'
  },
  twitter: {
    card: 'summary',
    title: 'О компании - Натяжные потолки ПОТОЛКИ',
    description: 'О компании "ПОТОЛКИ" - профессиональная установка натяжных потолков.',
  },
  alternates: {
    canonical: 'https://potolkivip-rnd.ru/about',
  },
};

export async function generateStaticParams() {
  return [{}]; // Статическая страница
}

export default function About() {
  return (
    <CityProvider>
      <AboutPage />
      
    </CityProvider>
  );
}
