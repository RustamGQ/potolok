
import { Metadata } from 'next';
import ReviewsPage from "@/components/ReviewsPage/ReviewsPage";
import "@/styles/reset.css";

export const metadata: Metadata = {
  title: 'Отзывы клиентов - Натяжные потолки ПОТОЛКИ',
  description: 'Отзывы наших клиентов о работе с натяжными потолками. Реальные мнения о качестве установки, материалах и сервисе.',
  keywords: 'отзывы натяжные потолки, отзывы клиентов, мнения о потолках, качество установки',
  openGraph: {
    title: 'Отзывы клиентов - Натяжные потолки ПОТОЛКИ',
    description: 'Отзывы наших клиентов о работе с натяжными потолками.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://potolkivip-rnd.ru/reviews',
  },
  alternates: {
    canonical: 'https://potolkivip-rnd.ru/reviews',
  },
};

export default function Reviews() {
  return (
    <>
      <ReviewsPage />
      
    </>
  );
}


