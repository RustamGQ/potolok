import React from 'react';
import Link from 'next/link';
import { City } from '../../types/city';
import './reviewsPage.scss';

type Review = {
  id: number;
  name: string;
  city: string;
  date: string;
  rating: number; // 1..5
  text: string;
};

const mockReviews: Review[] = [
  { id: 1, name: 'Алексей', city: 'Ростов-на-Дону', date: 'Июнь 2024', rating: 5, text: 'Сделали быстро и очень аккуратно. Подсказали, как лучше расположить свет. Рекомендую!' },
  { id: 2, name: 'Наталья', city: 'Батайск', date: 'Май 2024', rating: 5, text: 'Результат превзошёл ожидания, ровно, без запаха, монтаж занял всего несколько часов.' },
  { id: 3, name: 'Игорь', city: 'Азов', date: 'Март 2024', rating: 5, text: 'Отличная команда. Смета прозрачная, помогли подобрать фактуру под интерьер.' },
  { id: 4, name: 'Юлия', city: 'Ростов-на-Дону', date: 'Февраль 2024', rating: 4, text: 'Всё супер, единственное — немного задержались с началом работ, но всё отработали.' },
  { id: 5, name: 'Марина', city: 'Аксай', date: 'Январь 2024', rating: 5, text: 'Красиво и качественно. Парящий потолок — это любовь. Спасибо!' },
  { id: 6, name: 'Сергей', city: 'Ростов-на-Дону', date: 'Декабрь 2023', rating: 5, text: 'Понравился подход — объяснили каждый этап. Дали гарантию и чек.' },
];

const TELEGRAM_REVIEWS_URL = 'https://t.me/rostovpotolki';

interface ReviewsPageProps {
  city?: City;
  content?: {
    title: string;
    description: string;
  };
}

const ReviewsPage: React.FC<ReviewsPageProps> = ({ city, content }) => {
  return (
    <main className="reviews-page">
      <section className="reviews-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Отзывы</span>
            <h1>{content?.title || `Что говорят наши клиенты ${city ? `в ${city.name}` : ''}`}</h1>
            <p>{content?.description || `Подборка реальных отзывов ${city ? `о натяжных потолках в ${city.namePrepositional}` : ''}. Ещё больше — в нашем Telegram‑канале.`}</p>
          </div>
        </div>
      </section>

      <section className="telegram-cta">
        <div className="container">
          <a className="tg-card" href={TELEGRAM_REVIEWS_URL} target="_blank" rel="noopener noreferrer" aria-label="Открыть наш Telegram-канал с отзывами">
            <div className="tg-card__icon" aria-hidden>
              <svg width="36" height="36" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="120" cy="120" r="120" fill="url(#g)"/>
                <path d="M179 73L156 171c-2 9-8 11-16 7l-44-33-21 20c-2 2-4 3-7 3l3-48 88-79c3-3 0-4-4-2L80 126l-46-14c-10-3-10-10 2-15l133-51c8-3 15 2 10 27z" fill="#fff"/>
                <defs>
                  <linearGradient id="g" x1="120" y1="0" x2="120" y2="240" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#34b3ff"/>
                    <stop offset="1" stopColor="#1e40af"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="tg-card__content">
              <h2>Реальные отзывы в Telegram</h2>
              <p>Скриншоты переписок, голосовые, фото и видео от наших клиентов. Без накруток.</p>
              <span className="tg-card__btn">Открыть канал</span>
            </div>
          </a>
        </div>
      </section>

      <section className="reviews-list">
        <div className="container">
          <div className="reviews-grid">
            {mockReviews.map((r) => (
              <article key={r.id} className="review-card">
                <div className="review-card__header">
                  <div className="avatar" aria-hidden>{r.name[0]}</div>
                  <div className="meta">
                    <h3>{r.name} · <span className="city">{r.city}</span></h3>
                    <span className="date">{r.date}</span>
                  </div>
                  <div className="rating" aria-label={`Оценка ${r.rating} из 5`}>
                    {'★★★★★'.slice(0, r.rating)}
                    <span className="muted">{'★★★★★'.slice(r.rating)}</span>
                  </div>
                </div>
                <p className="review-card__text">{r.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="reviews-cta">
        <div className="container">
          <div className="cta">
            <h2>Хотите так же красиво?</h2>
            <p>Позвоните — проконсультируем бесплатно и назовём точную стоимость.</p>
            <div className="actions">
              <a href="tel:+79895234952" className="btn-primary">Позвонить</a>
              <Link href={city ? `/${city.slug}/works` : "/works"} className="btn-outline">Посмотреть работы</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ReviewsPage;


