
import { Metadata } from 'next';
import ServicesPage from "@/components/ServicesPage/ServicesPage";
import "@/styles/reset.css";

export const metadata: Metadata = {
  title: 'Услуги по установке натяжных потолков - ПОТОЛКИ',
  description: 'Профессиональные услуги по установке натяжных потолков. Монтаж, ремонт, обслуживание. Гарантия качества, опытные мастера.',
  keywords: 'услуги натяжные потолки, установка потолков, монтаж потолков, ремонт потолков, обслуживание потолков',
  openGraph: {
    title: 'Услуги по установке натяжных потолков - ПОТОЛКИ',
    description: 'Профессиональные услуги по установке натяжных потолков. Монтаж, ремонт, обслуживание.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://potolkivip-rnd.ru/services',
    siteName: 'ПОТОЛКИ'
  },
  twitter: {
    card: 'summary',
    title: 'Услуги по установке натяжных потолков - ПОТОЛКИ',
    description: 'Профессиональные услуги по установке натяжных потолков.',
  },
  alternates: {
    canonical: 'https://potolkivip-rnd.ru/services',
  },
};

export default function Services() {
  return (
    <>
      <ServicesPage />
      
    </>
  );
}
