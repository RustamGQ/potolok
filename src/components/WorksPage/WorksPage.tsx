import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { City } from '../../types/city';
import './worksPage.scss';



// Новый тип WorkItem с расширенными полями
type WorkItem = {
  id: number;
  title: string;
  subtitle: string;
  media: string;
  mediaType?: 'image' | 'video' | 'youtube';
  price?: string;
  area?: string;
  duration?: string;
  description?: string;
  tips?: string[];
};


const workVideos: WorkItem[] = [
  {
    id: 101,
    title: 'Монтаж потолка - Процесс работы',
    subtitle: 'Этапы установки',
    media: '/videos/video-1.mp4',
    mediaType: 'video',
    description: 'Показываем весь процесс монтажа: от замера до готового результата. Работаем аккуратно и быстро.',
  },
  {
    id: 102,
    title: 'Быстрый монтаж за 1 день',
    subtitle: 'Эффективность',
    media: '/videos/video-2.mp4',
    mediaType: 'video',
    description: 'Устанавливаем потолки в течение одного дня. Чисто, быстро, качественно.',
  },
  {
    id: 103,
    title: 'Разные типы потолков',
    subtitle: 'Ассортимент материалов',
    media: '/videos/video-3.mp4',
    mediaType: 'video',
    description: 'Матовые, глянцевые, сатиновые - подберем идеальный вариант для вашего интерьера.',
  },
  {
    id: 104,
    title: 'Монтаж в спальне',
    subtitle: 'Уютная атмосфера',
    media: '/videos/video-4.mp4',
    mediaType: 'video',
    description: 'Создаем уютную атмосферу в спальной комнате с помощью натяжного потолка.',
  },
  {
    id: 105,
    title: 'Работа с подсветкой',
    subtitle: 'LED-освещение',
    media: '/videos/video-5.mp4',
    mediaType: 'video',
    description: 'Монтируем потолки с современной LED-подсветкой для стильного интерьера.',
  },
  {
    id: 106,
    title: 'Готовый результат',
    subtitle: 'Качество работы',
    media: '/videos/video-6.mp4',
    mediaType: 'video',
    description: 'Результат нашей работы - идеально ровный потолок без швов и дефектов.',
  },
];

interface WorksPageProps {
  city?: City;
  content?: {
    title: string;
    description: string;
  };
}

const WorksPage: React.FC<WorksPageProps> = ({ city, content }) => {
  return (
    <main className="works-page">
      <section className="works-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Наши работы</span>
            <h1>{content?.title || `Портфолио выполненных проектов ${city ? `в ${city.name}` : ''}`}</h1>
            <p>{content?.description || `Живые примеры: как это выглядит в квартирах и домах наших клиентов ${city ? `в ${city.namePrepositional}` : ''}.`}</p>
          </div>
        </div>
      </section>

      <section className="works-grid">
        <div className="container">
          <div className="grid">
            {workVideos.map((it) => (
              <article key={it.id} className="work-card">
                <div className="media" style={{ width: '100%', height: 300, overflow: 'hidden', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                  <video 
                    src={it.media} 
                    poster={`/img/work-${it.id - 100}.webp`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16 }} 
                    controls
                    preload="metadata"
                    playsInline
                  >
                    Ваш браузер не поддерживает видео.
                  </video>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Информационные блоки */}
      <section className="works-info-blocks">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <h2>Как формируется цена?</h2>
              <p>Стоимость зависит от площади, выбранного материала, сложности монтажа и дополнительных опций (подсветка, обход труб, многоуровневость).</p>
            </div>
            <div className="info-card">
              <h2>Почему выбирают нас?</h2>
              <ul>
                <li>Гарантия 3 года на все работы</li>
                <li>Работаем без посредников</li>
                <li>Бесплатный замер и консультация</li>
                <li>Соблюдаем сроки и чистоту</li>
              </ul>
            </div>
            <div className="info-card">
              <h2>Гарантии и сервис</h2>
              <p>Мы предоставляем официальный договор, гарантийный талон и всегда на связи для поддержки клиентов.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="works-cta">
        <div className="container">
          <div className="cta">
            <h2>Хотите подобный результат?</h2>
            <p>Приедем сегодня, подберём решения под ваш бюджет и интерьер.</p>
            <div className="actions">
              <a href="tel:+79895234952" className="btn-primary">Быстрый звонок</a>
              <Link href={city ? `/${city.slug}/calculator` : "/calculator"} className="btn-outline">Рассчитать стоимость</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default WorksPage;


