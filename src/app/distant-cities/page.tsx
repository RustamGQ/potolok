import { Metadata } from 'next';
import { distantCities } from '../../lib/cities';
import Portfolio from "../../components/Portfolio/Portfolio";
import About from "../../components/About/About";
import Services from "../../components/Services/Services";

import CityProvider from "../../contexts/CityContext";
import "../../styles/reset.css";
import "./distant-cities.scss";

export const metadata: Metadata = {
  title: 'Натяжные потолки в дальних городах - Таганрог, Шахты, Азов | ПОТОЛКИ',
  description: 'Натяжные потолки в Таганроге, Шахтах, Азове и других дальних городах. Работаем при заказах от 100,000₽. Замер 2000₽ (возврат при заказе). Качественный монтаж.',
  keywords: 'натяжные потолки таганрог, потолки шахты, натяжные потолки азов, установка потолков дальние города',
  openGraph: {
    title: 'Натяжные потолки в дальних городах - Таганрог, Шахты, Азов | ПОТОЛКИ',
    description: 'Натяжные потолки в Таганроге, Шахтах, Азове и других дальних городах. Работаем при заказах от 100,000₽. Замер 2000₽ (возврат при заказе).',
    type: 'website',
    locale: 'ru_RU',
  },
};

export default function DistantCitiesPage() {
  return (
    <CityProvider>
      <div className="distant-cities-notice">
        <div className="container">
          <div className="distant-cities-notice__content">
            <h1>Натяжные потолки в дальних городах</h1>
            <div className="distant-cities-notice__info">
              <h2>🏙️ Работаем в городах:</h2>
              <ul>
                {distantCities.map((city, index) => (
                  <li key={index}>{city}</li>
                ))}
              </ul>
              
              <div className="distant-cities-notice__condition">
                <h3>⚠️ Важное условие:</h3>
                <p>
                  <strong>Минимальная сумма заказа: 100,000₽</strong>
                </p>
                <p>
                  <strong>Стоимость замера: 2000₽</strong> (возвращаем при заказе)
                </p>
                <p>
                  В дальние города выезжаем только при крупных заказах. 
                  Это связано с транспортными расходами и временем в пути.
                </p>
              </div>
              
              <div className="distant-cities-notice__contact">
                <h3>📞 Свяжитесь с нами:</h3>
                <p>Для уточнения возможности работы в вашем городе:</p>
                                  <a href="tel:+79895234952" className="distant-cities-notice__phone">
                  +7 (989) 523-49-52
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Portfolio />
      <About />
      <Services />
      
    </CityProvider>
  );
}
