import { Metadata } from 'next';
import Catalog from '../../components/Catalog/Catalog';

export const metadata: Metadata = {
  title: 'Каталог натяжных потолков - Цены от 330₽/м² | ПОТОЛКИ',
  description: 'Каталог натяжных потолков с фильтрацией по типам, текстурам и помещениям. Выберите подходящий потолок для вашего интерьера.',
  keywords: 'каталог натяжных потолков, потолки, матовые потолки, глянцевые потолки, сатиновые потолки, потолки с подсветкой, звездное небо, фотопечать на потолке',
  openGraph: {
    title: 'Каталог натяжных потолков - ПОТОЛКИ',
    description: 'Каталог натяжных потолков с фильтрацией по типам, текстурам и помещениям. Выберите подходящий потолок для вашего интерьера.',
    type: 'website',
    locale: 'ru_RU',
    url: 'https://potolkivip-rnd.ru/catalog',
    siteName: 'ПОТОЛКИ'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Каталог натяжных потолков - ПОТОЛКИ',
    description: 'Каталог натяжных потолков с фильтрацией по типам, текстурам и помещениям.',
  },
  alternates: {
    canonical: 'https://potolkivip-rnd.ru/catalog'
  }
};

export default function CatalogPage() {
  return (
    <main>
      <Catalog />
    </main>
  );
}
