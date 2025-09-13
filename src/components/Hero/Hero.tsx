"use client";
import './hero.scss';
import React from 'react';
import CalcMini from '../CalcMini/CalcMini';
import { useCity } from '../../contexts/CityContext';
import { City } from '../../types/city';
import { useState } from 'react';
import OrderForm from '../OrderForm/OrderForm';

interface HeroProps {
  city?: City;
  content?: {
    title: string;
    description: string;
  };
}

function Hero({ city, content }: HeroProps) {
  const { currentCity } = useCity();
  const displayCity = city || currentCity;
  const [showOrderForm, setShowOrderForm] = useState(false);

  // --- 3D управление: плавный поворот сцены мышью/тачем ---
  const roomRef = React.useRef<HTMLDivElement | null>(null);
  const stateRef = React.useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    targetYaw: -8, // мягче начальный поворот
    targetPitch: 10,
    yaw: -8,
    pitch: 10,
    raf: 0 as number | 0,
  });

  const setTransform = (yaw: number, pitch: number) => {
    if (!roomRef.current) return;
    roomRef.current.style.setProperty('--yaw', `${yaw}deg`);
    roomRef.current.style.setProperty('--pitch', `${pitch}deg`);
  };

  React.useEffect(() => {
    const root = roomRef.current;
    if (!root) return;

    // Уважать уменьшение анимации
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let started = false;
    const startAnimation = () => {
      if (started) return;
      started = true;
      let rafLocal = 0;
      const animate = () => {
        const s = stateRef.current;
        s.yaw += (s.targetYaw - s.yaw) * 0.08;
        s.pitch += (s.targetPitch - s.pitch) * 0.08;
        setTransform(s.yaw, s.pitch);
        rafLocal = requestAnimationFrame(animate);
        s.raf = rafLocal;
      };
      rafLocal = requestAnimationFrame(animate);
      stateRef.current.raf = rafLocal;
    };

    // Запускаем анимацию только когда секция видима
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        startAnimation();
        observer.disconnect();
      }
    }, { rootMargin: '0px 0px -20% 0px', threshold: 0.2 });

    observer.observe(root);

    return () => {
      observer.disconnect();
      // Используем локальную копию кадра, чтобы избежать предупреждения eslint
      const rafId = stateRef.current.raf;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleOrderClick = () => {
    setShowOrderForm(true);
  };

  return (
    <>
      <section className="hero">
        {/* Крутой анимированный фон */}
        <div className="hero__bg">
          {/* Большие плавающие сферы */}
          <div className="hero__floating-orbs">
            <div className="hero__orb hero__orb--1"></div>
            <div className="hero__orb hero__orb--2"></div>
            <div className="hero__orb hero__orb--3"></div>
          </div>

          {/* Геометрические фигуры */}
          <div className="hero__shapes">
            <div className="hero__shape hero__shape--triangle"></div>
            <div className="hero__shape hero__shape--diamond"></div>
            <div className="hero__shape hero__shape--hexagon"></div>
          </div>

          {/* Мерцающие звезды */}
          <div className="hero__stars">
            <div className="hero__star hero__star--1"></div>
            <div className="hero__star hero__star--2"></div>
            <div className="hero__star hero__star--3"></div>
          </div>
        </div>

        <div className="container">
          <div className="hero__layout">
            {/* Верхний блок с метриками */}
            <div className="hero__metrics">
              <div className="hero__metric-card">
                <div className="hero__metric-icon">📈</div>
                <div className="hero__metric-content">
                  <div className="hero__metric-number">427+</div>
                  <div className="hero__metric-label">Установок в 2025</div>
                </div>
                <div className="hero__metric-trend">+24%</div>
              </div>
              <div className="hero__metric-card">
                <div className="hero__metric-icon">⭐</div>
                <div className="hero__metric-content">
                  <div className="hero__metric-number">4.9</div>
                  <div className="hero__metric-label">Рейтинг клиентов</div>
                </div>
                <div className="hero__metric-trend">427+ отзывов</div>
              </div>
              <div className="hero__metric-card">
                <div className="hero__metric-icon">⚡</div>
                <div className="hero__metric-content">
                  <div className="hero__metric-number">от 3 часа</div>
                  <div className="hero__metric-label">Время установки</div>
                </div>
                <div className="hero__metric-trend">Чистый монтаж</div>
              </div>
            </div>

            {/* Основной контент */}
            <div className="hero__main-content">
              <div className="hero__left">
                <div className="hero__badge-group">
                  <span className="hero__badge hero__badge--featured">🏆 Лидер рынка</span>
                  <span className="hero__badge hero__badge--new">✨ Новые технологии 2025</span>
                </div>

                <h1 className="hero__title">
                  <span className="hero__title-line hero__title-line--main">{content?.title || `Натяжные потолки в ${displayCity.namePrepositional}`}</span>
                  <span className="hero__title-line hero__title-line--highlight">от 330₽/м²</span>
                  <span className="hero__title-sub">Бесплатный замер • Работы займут ~ один рабочий день • Гарантия 5 лет</span>
                </h1>

                <div className="hero__value-props">
                  <div className="hero__value-prop">
                    <div className="hero__prop-number">01</div>
                    <div className="hero__prop-content">
                      <h3>Умные потолки</h3>
                      <p>Встроенная LED-подсветка и климат-контроль</p>
                    </div>
                  </div>
                  <div className="hero__value-prop">
                    <div className="hero__prop-number">02</div>
                    <div className="hero__prop-content">
                      <h3>Экологичность</h3>
                      <p>100% безопасные материалы с сертификацией</p>
                    </div>
                  </div>
                  <div className="hero__value-prop">
                    <div className="hero__prop-number">03</div>
                    <div className="hero__prop-content">
                      <h3>Гарантия от производителя 15 лет</h3>
                      <p>Уверенность в качестве</p>
                    </div>
                  </div>
                </div>

                <div className="hero__action-zone">
                  <div className="hero__cta-buttons">
                                         <button onClick={handleOrderClick} className="hero__btn hero__btn--primary">
                       <span className="hero__btn-text">Заказать бесплатный замер</span>
                       <span className="hero__btn-icon">📐</span>
                     </button>
                    <button className="hero__btn hero__btn--secondary">
                      <span className="hero__btn-text">Бесплатный замер</span>
                      <span className="hero__btn-icon">📐</span>
                    </button>
                  </div>
                  {/* Удалён hero__contact-card (эксперт по потолкам) */}
                </div>
              </div>

              {/* Мини-калькулятор */}
              <div className="hero__right">
                <CalcMini />
              </div>
            </div>

            {/* Нижний блок с преимуществами */}
            <div className="hero__advantages" ref={roomRef}>
              <div className="hero__advantage">
                <div className="hero__advantage-icon">🚀</div>
                <div className="hero__advantage-text">
                  <strong>Установка за день</strong>
                  <span>Без ремонта и грязи</span>
                </div>
              </div>
              <div className="hero__advantage">
                <div className="hero__advantage-icon">🛡️</div>
                <div className="hero__advantage-text">
                  <strong>Гарантия качества</strong>
                  <span>25 лет официальной гарантии</span>
                </div>
              </div>
              <div className="hero__advantage">
                <div className="hero__advantage-icon">💎</div>
                <div className="hero__advantage-text">
                  <strong>Премиум материалы</strong>
                  <span>Европейские бренды</span>
                </div>
              </div>
              <div className="hero__advantage">
                <div className="hero__advantage-icon">🎯</div>
                <div className="hero__advantage-text">
                  <strong>Точная цена</strong>
                  <span>Без скрытых доплат</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showOrderForm && (
  <div className="orderForm-overlay" style={{zIndex: 2000}}>
    <OrderForm onClose={() => setShowOrderForm(false)} />
  </div>
)}
    </>
  );
}

export default Hero;