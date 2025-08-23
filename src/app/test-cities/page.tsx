import { cities } from '../../lib/cities';
import Link from 'next/link';

export default function TestCitiesPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>🧪 Тест город-специфичных страниц</h1>
      <p>Проверьте, что все ссылки ведут на правильные город-специфичные страницы:</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {cities.map((city) => (
          <div key={city.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <h3>🏙️ {city.name}</h3>
            <p><strong>Slug:</strong> {city.slug}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
              <Link href={`/${city.slug}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                🏠 Главная страница
              </Link>
              <Link href={`/${city.slug}/services`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                🔧 Услуги
              </Link>
              <Link href={`/${city.slug}/works`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                🎨 Наши работы
              </Link>
              <Link href={`/${city.slug}/reviews`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                ⭐ Отзывы
              </Link>
                             <Link href={`/${city.slug}/calculator`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                 🧮 Калькулятор
               </Link>
                               <Link href={`/${city.slug}/about`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                  🏢 О компании
                </Link>
                <Link href={`/${city.slug}/faq`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                  ❓ Частые вопросы
                </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0f9ff', borderRadius: '8px' }}>
        <h3>📋 Инструкция по проверке:</h3>
        <ol>
          <li>Выберите любой город из списка выше</li>
          <li>Перейдите на любую страницу (например, &quot;Отзывы&quot;)</li>
          <li>Проверьте URL в адресной строке - он должен содержать название города</li>
          <li>Проверьте, что контент на странице адаптирован под выбранный город</li>
          <li>Проверьте, что в хедере отображается правильный город</li>
        </ol>
      </div>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#fef3c7', borderRadius: '8px' }}>
        <h3>⚠️ Важно:</h3>
        <ul>
          <li>URL должен быть вида: <code>localhost:3000/bataysk/reviews</code></li>
          <li>НЕ: <code>localhost:3000/reviews</code> (это общая страница)</li>
          <li>Заголовки должны содержать название города</li>
          <li>Селектор города в хедере должен показывать правильный город</li>
        </ul>
      </div>
    </div>
  );
}
