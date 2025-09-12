import React from 'react';
import { City } from '../../types/city';
import './aboutPage.scss';

interface AboutPageProps {
  city?: City;
  content?: {
    title: string;
    description: string;
    stats?: Array<{ number: string; label: string }>;
  };
}

const AboutPage: React.FC<AboutPageProps> = ({ city, content }) => {
  return (
    <main className="about-page">
      {/* Minimal Hero */}
      <section className="about-hero-minimal">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">О компании</span>
              <h1>{content?.title || 'Создаем идеальные потолки с 2014 года'}</h1>
              <p>
                {content?.description || `Мы не просто устанавливаем потолки — мы создаем пространства, 
                которые вдохновляют и радуют каждый день. Наша миссия — сделать 
                качественные натяжные потолки доступными для каждого дома${city ? ` в ${city.name}` : ''}.`}
              </p>
              <div className="hero-cta">
                <a href="tel:+79895234952" className="btn-primary">
                  Бесплатная консультация
                </a>
                <a href="#portfolio" className="btn-secondary">
                  Смотреть работы
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-element">
                <div className="ceiling-preview">
                  <div className="ceiling-line"></div>
                  <div className="ceiling-line"></div>
                  <div className="ceiling-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="about-numbers">
        <div className="container">
          <div className="numbers-grid">
            {content?.stats ? (
              content.stats.map((stat, index) => (
                <div key={index} className="number-item">
                  <div className="number">{stat.number}</div>
                  <div className="label">{stat.label}</div>
                </div>
              ))
            ) : (
              <>
                <div className="number-item">
                                          <div className="number">4,850+</div>
                  <div className="label">Установленных потолков</div>
                </div>
                <div className="number-item">
                  <div className="number">19+</div>
                  <div className="label">Лет опыта</div>
                </div>
                <div className="number-item">
                  <div className="number">5 лет</div>
                  <div className="label">Гарантия на монтаж</div>
                </div>
                <div className="number-item">
                  <div className="number">15 лет</div>
                  <div className="label">Гарантия на материалы</div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>О нашей компании</h2>
              <p>
                Мы специализируемся на установке качественных натяжных потолков уже более 10 лет. 
                За это время мы помогли сотням клиентов создать идеальные интерьеры 
                в их домах и офисах.
              </p>
              <p>
                Наша миссия — сделать качественные натяжные потолки доступными для каждого. 
                Мы используем только проверенные материалы от ведущих производителей 
                и гарантируем качество всех работ.
              </p>
              <div className="story-highlights">
                <div className="highlight">
                  <div className="highlight-icon">🏆</div>
                  <div className="highlight-text">
                    <strong>Лучшие материалы</strong>
                    <span>Только проверенные бренды</span>
                  </div>
                </div>
                <div className="highlight">
                  <div className="highlight-icon">⚡</div>
                  <div className="highlight-text">
                    <strong>Быстрая установка</strong>
                    <span>За 1-2 дня</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <div className="ceiling-demo">
                  <div className="demo-line"></div>
                  <div className="demo-line"></div>
                  <div className="demo-line"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="about-advantages-minimal">
        <div className="container">
          <div className="section-header">
            <h2>Почему выбирают нас</h2>
            <p>Наши преимущества, которые делают нас лучшим выбором</p>
          </div>
          <div className="advantages-grid">
            <div className="advantage-item">
              <div className="advantage-icon">✨</div>
              <div className="advantage-content">
                <h3>Качественные материалы</h3>
                <p>Работаем только с проверенными европейскими производителями: BAUF, MSD, TEQTUM. Все материалы имеют сертификаты качества.</p>
              </div>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">🔧</div>
              <div className="advantage-content">
                <h3>Опытные мастера</h3>
                <p>Наша команда - это квалифицированные специалисты с многолетним опытом установки натяжных потолков.</p>
              </div>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">🚀</div>
              <div className="advantage-content">
                <h3>Быстрая установка</h3>
                <p>Монтаж натяжного потолка занимает всего 2-4 часа. Работаем чисто, аккуратно, без лишней пыли и грязи.</p>
              </div>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">🛡️</div>
              <div className="advantage-content">
                <h3>Гарантия качества</h3>
                <p>Предоставляем гарантию 3 года на монтажные работы и до 15 лет на материалы от производителя.</p>
              </div>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">💰</div>
              <div className="advantage-content">
                <h3>Прозрачные цены</h3>
                <p>Никаких скрытых доплат! Точная стоимость рассчитывается при бесплатном замере. Работаем без предоплаты.</p>
              </div>
            </div>
            <div className="advantage-item">
              <div className="advantage-icon">📐</div>
              <div className="advantage-content">
                <h3>Бесплатный замер</h3>
                <p>Выезжаем в любое удобное время. Точный расчет стоимости на месте. Никаких обязательств.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="about-process-minimal">
        <div className="container">
          <div className="section-header">
            <h2>Как мы работаем</h2>
            <p>Простой и понятный процесс от заявки до готового потолка</p>
          </div>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Заявка</h3>
                <p>Оставляете заявку на сайте или звоните нам</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Замер</h3>
                <p>Бесплатный выезд мастера для замера и консультации</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Монтаж</h3>
                <p>Профессиональная установка в оговоренные сроки</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Готово</h3>
                <p>Принимаете работу и получаете гарантию 3 года</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-minimal">
        <div className="container">
          <div className="cta-content">
            <h2>Готовы преобразить свой интерьер?</h2>
            <p>Получите бесплатную консультацию и точный расчет стоимости вашего проекта</p>
            <div className="cta-actions">
              <a href="tel:+79895234952" className="btn-primary-large">
                📞 Позвонить сейчас
              </a>
              <a href="https://wa.me/79895234952" className="btn-outline">
                💬 Написать в WhatsApp
              </a>
            </div>
            <div className="cta-info">
              <div className="info-item">
                <span className="info-icon">🕐</span>
                <span>Работаем ежедневно с 8:00 до 22:00</span>
              </div>
              <div className="info-item">
                <span className="info-icon">📐</span>
                <span>Бесплатный замер в удобное время</span>
              </div>
              <div className="info-item">
                <span className="info-icon">💰</span>
                <span>Без предоплаты - оплата после работ</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
