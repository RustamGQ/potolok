"use client";

import { useCity } from '../../contexts/CityContext';
import { cities } from '../../lib/cities';
import Link from 'next/link';

export default function DebugCitiesPage() {
  const { currentCity, setCurrentCity } = useCity();

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>🔍 Отладка системы городов</h1>
      
      <div style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
        <h3>📊 Текущее состояние:</h3>
        <p><strong>Выбранный город:</strong> {currentCity.name}</p>
        <p><strong>Slug:</strong> {currentCity.slug}</p>
        <p><strong>ID:</strong> {currentCity.id}</p>
        <p><strong>Текущий URL:</strong> {typeof window !== 'undefined' ? window.location.href : 'Неизвестно'}</p>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>🧪 Тест навигации:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
          <Link href={`/${currentCity.slug}`} style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>
            🏠 Главная
          </Link>
          <Link href={`/${currentCity.slug}/services`} style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>
            🔧 Услуги
          </Link>
          <Link href={`/${currentCity.slug}/works`} style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>
            🎨 Работы
          </Link>
          <Link href={`/${currentCity.slug}/reviews`} style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>
            ⭐ Отзывы
          </Link>
                     <Link href={`/${currentCity.slug}/calculator`} style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>
             🧮 Калькулятор
           </Link>
                       <Link href={`/${currentCity.slug}/about`} style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>
              🏢 О компании
            </Link>
            <Link href={`/${currentCity.slug}/faq`} style={{ padding: '10px', backgroundColor: '#3b82f6', color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>
              ❓ Частые вопросы
            </Link>
        </div>
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>🏙️ Быстрая смена города:</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px' }}>
          {cities.slice(0, 6).map((city) => (
            <button
              key={city.id}
              onClick={() => setCurrentCity(city)}
              style={{
                padding: '10px',
                backgroundColor: currentCity.id === city.id ? '#10b981' : '#e5e7eb',
                color: currentCity.id === city.id ? 'white' : '#374151',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: currentCity.id === city.id ? 'bold' : 'normal'
              }}
            >
              {city.name}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '30px', padding: '15px', backgroundColor: '#fef3c7', borderRadius: '8px' }}>
        <h3>⚠️ Что проверить:</h3>
        <ol>
          <li>Нажмите на любую кнопку навигации выше</li>
          <li>Проверьте, что URL изменился на <code>localhost:3000/{currentCity.slug}/...</code></li>
          <li>Проверьте, что в хедере отображается правильный город</li>
          <li>Проверьте, что контент на странице адаптирован под город</li>
        </ol>
      </div>

      <div style={{ padding: '15px', backgroundColor: '#ecfdf5', borderRadius: '8px' }}>
        <h3>✅ Ожидаемый результат:</h3>
        <ul>
          <li>URL должен содержать название города: <code>localhost:3000/aksay/reviews</code></li>
          <li>НЕ должно быть: <code>localhost:3000/reviews</code></li>
          <li>Заголовки страниц должны содержать название города</li>
          <li>Селектор города в хедере должен показывать правильный город</li>
        </ul>
      </div>
    </div>
  );
}
