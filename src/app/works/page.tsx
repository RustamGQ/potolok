
import { Metadata } from 'next';
import WorksPage from "@/components/WorksPage/WorksPage";
import "@/styles/reset.css";

export const metadata: Metadata = {
  title: 'Наши работы - Портфолио натяжных потолков ПОТОЛКИ',
  description: 'Портфолио наших работ по установке натяжных потолков. Фото готовых проектов, различные типы потолков и дизайнерские решения.',
  keywords: 'портфолио потолков, наши работы, фото потолков, готовые проекты, дизайн потолков',
  openGraph: {
    title: 'Наши работы - Портфолио натяжных потолков ПОТОЛКИ',
    description: 'Портфолио наших работ по установке натяжных потолков.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://potolkivip-rnd.ru/works',
  },
  alternates: {
    canonical: 'https://potolkivip-rnd.ru/works',
  },
};

export default function Works() {
  return (
    <>
      <WorksPage />
      
    </>
  );
}


