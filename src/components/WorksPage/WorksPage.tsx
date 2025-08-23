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

// Сначала фото-работы
const photoItems: WorkItem[] = [
  {
    id: 1,
    title: 'Матовый белый потолок',
    subtitle: 'Классика для любого интерьера',
    media: '/img/work-1.webp',
    mediaType: 'image',
    description: 'Матовый потолок — бюджетное и универсальное решение. Идеально подходит для кухни, спальни и гостиной.',
  },
  {
    id: 2,
    title: 'Глянцевый потолок',
    subtitle: 'Современный стиль',
    media: '/img/work-2.webp',
    mediaType: 'image',
    description: 'Глянцевый потолок визуально увеличивает пространство и добавляет блеск вашему интерьеру.',
  },
  {
    id: 3,
    title: 'Сатиновый потолок',
    subtitle: 'Мягкий блеск',
    media: '/img/work-3.webp',
    mediaType: 'image',
    description: 'Сатиновый потолок сочетает в себе элегантность и универсальность. Отлично подходит для спальни и гостиной.',
  },
  {
    id: 4,
    title: 'Двухуровневый потолок с подсветкой',
    subtitle: 'Зонирование пространства',
    media: '/img/work-4.webp',
    mediaType: 'image',
    description: 'Двухуровневый потолок с LED-подсветкой — современное решение для стильного интерьера.',
  },
  {
    id: 5,
    title: 'Декоративный потолок',
    subtitle: 'Индивидуальный дизайн',
    media: '/img/work-5.webp',
    mediaType: 'image',
    description: 'Декоративные потолки с уникальными эффектами — акцент в любом помещении.',
  },
  {
    id: 6,
    title: 'Потолок с фотопечатью',
    subtitle: 'Уникальный рисунок',
    media: '/img/work-6.webp',
    mediaType: 'image',
    description: 'Потолки с фотопечатью — возможность реализовать любой дизайн и подчеркнуть индивидуальность.',
  },
  {
    id: 7,
    title: 'Потолок с подсветкой',
    subtitle: 'Современный уют',
    media: '/img/work-7.jpg',
    mediaType: 'image',
    description: 'Потолок с подсветкой создаёт особую атмосферу и визуально расширяет пространство.',
  },
  {
    id: 8,
    title: 'Элегантный потолок',
    subtitle: 'Декоративные элементы',
    media: '/img/work-8.jpg',
    mediaType: 'image',
    description: 'Элегантные потолки с декоративными элементами — для утончённого интерьера.',
  },
  {
    id: 9,
    title: 'Тканевый потолок',
    subtitle: 'Экологичность и комфорт',
    media: '/img/work-9.jpg',
    mediaType: 'image',
    description: 'Тканевый потолок — премиум-решение для спальни и детской. Без швов, приятная текстура.',
  },
  {
    id: 10,
    title: '3D потолок',
    subtitle: 'Объём и глубина',
    media: '/img/work-10.jpg',
    mediaType: 'image',
    description: '3D потолки с рельефными элементами добавляют глубину и выразительность.',
  },
  {
    id: 11,
    title: 'Современный потолок',
    subtitle: 'Инновационные решения',
    media: '/img/work-11.jpg',
    mediaType: 'image',
    description: 'Современные потолки с инновационными решениями для стильного интерьера.',
  },
  {
    id: 12,
    title: 'Дизайнерский потолок',
    subtitle: 'Уникальные формы',
    media: '/img/work-12.jpg',
    mediaType: 'image',
    description: 'Дизайнерские потолки с уникальными формами и авторским стилем.',
  },
  {
    id: 13,
    title: 'Функциональный потолок',
    subtitle: 'Практичность и стиль',
    media: '/img/work-13.jpg',
    mediaType: 'image',
    description: 'Функциональные потолки с дополнительными возможностями для любых задач.',
  },
  {
    id: 14,
    title: 'Инновационный потолок',
    subtitle: 'Эксклюзивные технологии',
    media: '/img/work-14.jpg',
    mediaType: 'image',
    description: 'Инновационные потолки с уникальными технологиями и эффектами.',
  },
  {
    id: 15,
    title: 'Потолок с быстрым монтажом',
    subtitle: 'Чистота и скорость',
    media: '/img/work-15.jpg',
    mediaType: 'image',
    description: 'Потолки с быстрым и чистым монтажом — идеальны для жилых помещений и офисов.',
  },
  {
    id: 16,
    title: 'Текстурированный потолок',
    subtitle: 'Объёмная фактура',
    media: '/img/work-16.jpg',
    mediaType: 'image',
    description: 'Текстурированные потолки с рельефной поверхностью для выразительного дизайна.',
  },
  {
    id: 17,
    title: 'Цветной потолок',
    subtitle: 'Яркие решения',
    media: '/img/work-17.jpg',
    mediaType: 'image',
    description: 'Цветные потолки создают настроение и подчёркивают индивидуальность интерьера.',
  },
  {
    id: 18,
    title: 'Глянцевый цветной потолок',
    subtitle: 'Смелый дизайн',
    media: '/img/work-18.jpg',
    mediaType: 'image',
    description: 'Глянцевые цветные потолки для смелых дизайнерских решений.',
  },
  {
    id: 19,
    title: 'Сатиновый цветной потолок',
    subtitle: 'Элегантность',
    media: '/img/work-19.jpg',
    mediaType: 'image',
    description: 'Сатиновые цветные потолки — изысканная атмосфера и утончённость.',
  },
  {
    id: 20,
    title: 'Многоуровневый потолок',
    subtitle: 'Эксклюзивный дизайн',
    media: '/img/work-20.jpg',
    mediaType: 'image',
    description: 'Многоуровневые потолки с комбинированными решениями для эксклюзивного интерьера.',
  },
  {
    id: 21,
    title: 'Экологичный потолок',
    subtitle: 'Натуральные материалы',
    media: '/img/work-21.jpg',
    mediaType: 'image',
    description: 'Экологичные потолки из натуральных материалов — безопасность для здоровья.',
  },
  {
    id: 22,
    title: 'Акустический потолок',
    subtitle: 'Профессиональные решения',
    media: '/img/work-22.jpg',
    mediaType: 'image',
    description: 'Акустические потолки для помещений с особыми требованиями.',
  },
  {
    id: 23,
    title: 'Безопасный потолок',
    subtitle: 'Повышенная защита',
    media: '/img/work-23.jpg',
    mediaType: 'image',
    description: 'Безопасные потолки с защитными характеристиками для любых помещений.',
  },
  {
    id: 24,
    title: 'Влагостойкий потолок',
    subtitle: 'Для влажных помещений',
    media: '/img/work-24.jpg',
    mediaType: 'image',
    description: 'Влагостойкие потолки — идеальны для кухни, ванной и других влажных помещений.',
  },
  {
    id: 25,
    title: 'Премиум потолок',
    subtitle: 'Эксклюзивные материалы',
    media: '/img/work-25.jpg',
    mediaType: 'image',
    description: 'Премиум потолки с эксклюзивными материалами и уникальным дизайном.',
  },
  {
    id: 26,
    title: 'Эксклюзивная работа',
    subtitle: 'Уникальный дизайн',
    media: '/img/work-26.jpg',
    mediaType: 'image',
    description: 'Эксклюзивная работа с уникальным дизайном для вашего интерьера.',
  },
  {
    id: 27,
    title: 'Современная работа',
    subtitle: 'Стиль и качество',
    media: '/img/work-27jpg.jpg',
    mediaType: 'image',
    description: 'Современная работа с акцентом на стиль и качество исполнения.',
  },
];

// Затем видео-работы (Shorts)
const shortsItems: WorkItem[] = [
  {
    id: 101,
    title: 'Shorts: Монтаж потолка 1',
    subtitle: 'YouTube Shorts',
    media: 'https://www.youtube.com/embed/4re1Q2GFmRM',
    mediaType: 'youtube',
    description: 'Короткое видео о монтаже потолка (Shorts)',
  },
  {
    id: 102,
    title: 'Shorts: zmhaJW2NiG4',
    subtitle: 'YouTube Shorts',
    media: 'https://www.youtube.com/embed/zmhaJW2NiG4',
    mediaType: 'youtube',
  },
  {
    id: 103,
    title: 'Shorts: WKUiF8VqCcM',
    subtitle: 'YouTube Shorts',
    media: 'https://www.youtube.com/embed/WKUiF8VqCcM',
    mediaType: 'youtube',
  },
  {
    id: 104,
    title: 'Shorts: aAp5rQhTymc',
    subtitle: 'YouTube Shorts',
    media: 'https://www.youtube.com/embed/aAp5rQhTymc',
    mediaType: 'youtube',
  },
  {
    id: 105,
    title: 'Shorts: I6F6UURuBaQ',
    subtitle: 'YouTube Shorts',
    media: 'https://www.youtube.com/embed/I6F6UURuBaQ',
    mediaType: 'youtube',
  },
  {
    id: 106,
    title: 'Shorts: kwOKn1HDnZE',
    subtitle: 'YouTube Shorts',
    media: 'https://www.youtube.com/embed/kwOKn1HDnZE',
    mediaType: 'youtube',
  },
  {
    id: 107,
    title: 'Shorts: n4A70_KZmLQ',
    subtitle: 'YouTube Shorts',
    media: 'https://www.youtube.com/embed/n4A70_KZmLQ',
    mediaType: 'youtube',
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
            {photoItems.map((it) => (
              <article key={it.id} className="work-card">
                <div className="media" style={{ width: '100%', height: 260, overflow: 'hidden', borderRadius: 14, border: '2px solid #2563eb', boxShadow: '0 2px 16px #2563eb22', marginBottom: 8 }}>
                  <Image src={it.media} alt={it.title} width={400} height={260} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
                </div>
                <div className="work-info">
                  <div style={{ color: '#2563eb', fontWeight: 700, fontSize: 20, marginBottom: 4 }}>от 1800 ₽/м²</div>
                  <h3 style={{ color: '#2563eb', fontSize: 18, margin: '0 0 2px 0' }}>{it.title}</h3>
                  <span style={{ color: '#2563ebcc', fontSize: 15 }}>{it.subtitle}</span>
                  {it.description && <div className="work-description" style={{ color: '#0f172a', margin: '10px 0 12px 0', fontSize: 15 }}>{it.description}</div>}
                  <div style={{ display: 'flex', gap: 12, marginBottom: 10 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: '#2563eb', fontWeight: 600, fontSize: 14 }}>Гарантия 3 года</div>
                      <div style={{ color: '#64748b', fontSize: 13 }}>Бесплатный замер</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ color: '#2563eb', fontWeight: 600, fontSize: 14 }}>Быстрый монтаж</div>
                      <div style={{ color: '#64748b', fontSize: 13 }}>Экологичные материалы</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 10 }}>
                    <Link href="/catalog" className="btn-more" style={{ flex: 1, background: '#2563eb', color: '#fff', borderRadius: 8, padding: '8px 0', fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px #2563eb22', letterSpacing: 0.5, textAlign: 'center' }}>Подробнее</Link>
                    <a href="https://wa.me/79000000000" target="_blank" rel="noopener noreferrer" className="btn-order" style={{ flex: 1, background: '#fff', color: '#2563eb', border: '2px solid #2563eb', borderRadius: 8, padding: '8px 0', fontWeight: 600, textDecoration: 'none', boxShadow: '0 2px 8px #2563eb22', letterSpacing: 0.5, textAlign: 'center' }}>Заказать</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Отступ и заголовок для видео-блока */}
      <div style={{ height: 48 }} />
      <section className="works-grid works-shorts-block">
        <div className="container">
          <h2 style={{ fontSize: 28, margin: '0 0 24px 0', color: '#e11d48', textAlign: 'center', letterSpacing: 1 }}>Видео Shorts</h2>
          <div className="grid">
            {shortsItems.map((it) => (
              <article key={it.id} className="work-card">
                <div className="media">
                  <div style={{ position: 'relative', paddingBottom: '177%', height: 0, overflow: 'hidden', borderRadius: '16px', background: '#000' }}>
                    <iframe
                      src={it.media}
                      title={it.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: '16px' }}
                    ></iframe>
                    <div style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(255,0,0,0.85)', color: '#fff', borderRadius: 6, padding: '2px 8px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 4 }}>
                      Shorts
                    </div>
                  </div>
                  <div className="overlay">
                    <h3>{it.title}</h3>
                    <span>{it.subtitle}</span>
                  </div>
                </div>
                <div className="work-info">
                  {it.description && <div className="work-description">{it.description}</div>}
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


