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
            <p>{content?.description || `Подборка реальных отзывов ${city ? `о натяжных потолках в ${city.namePrepositional}` : ''}.`}</p>
          </div>
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


