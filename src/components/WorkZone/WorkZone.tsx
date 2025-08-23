"use client";

import React from 'react';
import Link from 'next/link';
import { useCity } from '../../contexts/CityContext';
import { getMainCities, getBatayskAreaCities } from '../../lib/cities';
import { City } from '../../types/city';
import './workZone.scss';

interface WorkZoneProps {
  city?: City;
}

export default function WorkZone({ city }: WorkZoneProps) {
  const { currentCity } = useCity();
  const displayCity = city || currentCity;
  const mainCities = getMainCities();
  const batayskAreaCities = getBatayskAreaCities();

  return (
    <section className="work-zone">
      <div className="container">
        <div className="work-zone__content">
          <h2 className="work-zone__title">
            🗺️ Зона нашей работы
          </h2>
          
          <div className="work-zone__description">
            <p>
              Работаем в <strong>{displayCity.name}</strong> и близлежащих населенных пунктах. 
              Обеспечиваем качественный монтаж натяжных потолков с выездом на объект.
            </p>
          </div>

          <div className="work-zone__grid">
            {/* Основные города */}
            <div className="work-zone__section">
              <h3 className="work-zone__section-title">
                🏙️ Основные города
              </h3>
              <div className="work-zone__cities">
                {mainCities.map((city) => (
                  <div 
                    key={city.id} 
                    className={`work-zone__city ${displayCity.id === city.id ? 'work-zone__city--current' : ''}`}
                  >
                    <span className="work-zone__city-icon">📍</span>
                    <span className="work-zone__city-name">{city.name}</span>
                    {displayCity.id === city.id && (
                      <span className="work-zone__city-badge">Текущий</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Окрестности Батайска */}
            {batayskAreaCities.length > 0 && (
              <div className="work-zone__section">
                <h3 className="work-zone__section-title">
                  🏘️ Окрестности Батайска
                </h3>
                <div className="work-zone__cities">
                  {batayskAreaCities.map((city) => (
                    <div 
                      key={city.id} 
                      className={`work-zone__city ${displayCity.id === city.id ? 'work-zone__city--current' : ''}`}
                    >
                      <span className="work-zone__city-icon">🏡</span>
                      <span className="work-zone__city-name">{city.name}</span>
                      {displayCity.id === city.id && (
                        <span className="work-zone__city-badge">Текущий</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Дальние города */}
            <div className="work-zone__section">
              <h3 className="work-zone__section-title">
                🚗 Дальние города
              </h3>
              <div className="work-zone__distant-info">
                <div className="work-zone__distant-cities">
                  <span>Таганрог, Шахты, Азов, Новочеркасск</span>
                </div>
                <div className="work-zone__distant-condition">
                  <strong>⚠️ Условие:</strong> Минимальная сумма заказа 100,000₽
                </div>
                <Link href="/distant-cities" className="work-zone__distant-link">
                  Подробнее о работе в дальних городах →
                </Link>
              </div>
            </div>
          </div>

          <div className="work-zone__contact">
            <div className="work-zone__contact-card">
              <h3>📞 Нужна консультация?</h3>
              <p>Уточните возможность работы в вашем населенном пункте</p>
                              <a href="tel:+79895234952" className="work-zone__contact-phone">
                +7 (989) 523-49-52
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
