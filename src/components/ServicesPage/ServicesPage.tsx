import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { City } from '../../types/city';
import { catalogProducts } from '../../lib/catalog';
import './servicesPage.scss';

// Детальный прайс-лист на основе PDF
const priceList = {
  standard: {
    title: "Стандартные потолки",
    description: "Базовые решения для любых помещений",
    categories: [
      {
        name: "MSD Evolution, Perfekt",
        items: [
          { texture: "Матовые и сатиновые белые", width: "3.2м", price: "400₽/м²", priceLarge: "395₽/м²" },
          { texture: "Матовые и сатиновые белые", width: "3.6м", price: "405₽/м²", priceLarge: "400₽/м²" },
          { texture: "Матовые и сатиновые белые", width: "5м", price: "435₽/м²", priceLarge: "430₽/м²" },
          { texture: "Глянцевые белые", width: "3.2м", price: "410₽/м²", priceLarge: "405₽/м²" },
          { texture: "Глянцевые белые", width: "3.6м", price: "415₽/м²", priceLarge: "410₽/м²" },
        ]
      },
      {
        name: "MSD/Halead/Eco Premium/DEKEN",
        items: [
          { texture: "Матовые и сатиновые белые", width: "1.5-3.2м", price: "390₽/м²", priceLarge: "385₽/м²" },
          { texture: "Матовые и сатиновые белые", width: "3.4-3.6м", price: "395₽/м²", priceLarge: "390₽/м²" },
          { texture: "Матовые и сатиновые белые", width: "4.0-5.0м", price: "420₽/м²", priceLarge: "415₽/м²" },
          { texture: "Глянцевые белые", width: "1.5-3.2м", price: "400₽/м²", priceLarge: "395₽/м²" },
          { texture: "Глянцевые белые", width: "3.6м", price: "405₽/м²", priceLarge: "400₽/м²" },
          { texture: "Глянцевые белые", width: "4.0-5.0м", price: "430₽/м²", priceLarge: "425₽/м²" },
        ]
      },
      {
        name: "Standard, MSD Классик",
        items: [
          { texture: "Матовые и сатиновые белые", width: "1.5-3.2м", price: "370₽/м²", priceLarge: "365₽/м²" },
          { texture: "Матовые и сатиновые белые", width: "3.6м", price: "375₽/м²", priceLarge: "370₽/м²" },
          { texture: "Матовые и сатиновые белые", width: "4.0-5.0м", price: "405₽/м²", priceLarge: "400₽/м²" },
          { texture: "Глянцевые белые", width: "1.5-3.2м", price: "380₽/м²", priceLarge: "375₽/м²" },
          { texture: "Глянцевые белые", width: "3.6м", price: "385₽/м²", priceLarge: "380₽/м²" },
          { texture: "Глянцевые белые", width: "4.0-5.0м", price: "420₽/м²", priceLarge: "415₽/м²" },
        ]
      }
    ]
  },
  premium: {
    title: "Премиум потолки",
    description: "Высококачественные материалы BAUF и TEQTUM",
    categories: [
      {
        name: "BAUF 205",
        items: [
          { texture: "Матовые и сатиновые белые", width: "1.5-3.6м", price: "405₽/м²", priceLarge: "400₽/м²" },
          { texture: "Матовые и сатиновые белые", width: "4-4.5м", price: "440₽/м²", priceLarge: "435₽/м²" },
          { texture: "Глянцевые белые", width: "1.5-3.6м", price: "415₽/м²", priceLarge: "410₽/м²" },
          { texture: "Глянцевые белые", width: "4-4.5м", price: "450₽/м²", priceLarge: "445₽/м²" },
          { texture: "Матовые белые", width: "5.0м", price: "485₽/м²", priceLarge: "480₽/м²" },
          { texture: "Матовые белые", width: "5.5-6.0м", price: "565₽/м²", priceLarge: "560₽/м²" },
          { texture: "Матовые цветные", width: "3.2м", price: "450₽/м²", priceLarge: "445₽/м²" },
          { texture: "Матовые цветные", width: "4.5м", price: "510₽/м²", priceLarge: "505₽/м²" },
          { texture: "Глянцевые цветные", width: "3.2м", price: "470₽/м²", priceLarge: "465₽/м²" },
        ]
      },
      {
        name: "BAUF 230",
        items: [
          { texture: "Матовые белые", width: "1.5-3.6м", price: "460₽/м²", priceLarge: "455₽/м²" },
          { texture: "Матовые белые", width: "4-4.5м", price: "555₽/м²", priceLarge: "550₽/м²" },
          { texture: "Матовые белые", width: "5.0м", price: "620₽/м²", priceLarge: "615₽/м²" },
        ]
      },
      {
        name: "BAUF 270",
        items: [
          { texture: "Матовые белые", width: "2.4-3.6м", price: "530₽/м²", priceLarge: "525₽/м²" },
          { texture: "Матовые белые", width: "4-4.5м", price: "580₽/м²", priceLarge: "575₽/м²" },
          { texture: "Глянцевые белые", width: "2.4-3.6м", price: "545₽/м²", priceLarge: "540₽/м²" },
          { texture: "Глянцевые белые", width: "4-4.5м", price: "600₽/м²", priceLarge: "595₽/м²" },
        ]
      },
      {
        name: "TEQTUM EURO",
        items: [
          { texture: "Матовые, сатиновые белые", width: "1.0-3.6м", price: "555₽/м²", priceLarge: "550₽/м²" },
          { texture: "Матовые, сатиновые белые", width: "3.7-4.5м", price: "600₽/м²", priceLarge: "595₽/м²" },
          { texture: "Глянцевые белые", width: "1.0-3.6м", price: "585₽/м²", priceLarge: "580₽/м²" },
          { texture: "Глянцевые белые", width: "3.7-4.5м", price: "615₽/м²", priceLarge: "610₽/м²" },
          { texture: "Матовые цветные", width: "1.0-3.6м", price: "585₽/м²", priceLarge: "580₽/м²" },
          { texture: "Матовые цветные", width: "3.7-4.5м", price: "645₽/м²", priceLarge: "640₽/м²" },
          { texture: "Глянцевые цветные", width: "1.0-3.6м", price: "615₽/м²", priceLarge: "610₽/м²" },
          { texture: "Глянцевые цветные", width: "3.7-4.5м", price: "675₽/м²", priceLarge: "670₽/м²" },
        ]
      }
    ]
  },
  special: {
    title: "Специальные потолки",
    description: "Фактурные, огнестойкие и эксклюзивные решения",
    categories: [
      {
        name: "LumFer (Фактурные)",
        items: [
          { texture: "303-305 Mat_Stuck (белый фактурный мат)", width: "3.05м", price: "880₽/м²", priceLarge: "880₽/м²" },
          { texture: "303-450 Mat_Stuck (белый фактурный мат)", width: "4.5м", price: "1030₽/м²", priceLarge: "1030₽/м²" },
          { texture: "303-305 Mat_Raute (белый ромбовидный мат)", width: "3.05м", price: "880₽/м²", priceLarge: "880₽/м²" },
        ]
      },
      {
        name: "BAUF FIRE PROOF",
        items: [
          { texture: "Матовые полотна", width: "2.4-3.2м", price: "435₽/м²", priceLarge: "430₽/м²" },
          { texture: "Матовые полотна", width: "4.5м", price: "480₽/м²", priceLarge: "475₽/м²" },
        ]
      },
      {
        name: "Halead (Холодная натяжка)",
        items: [
          { texture: "Folien cold stretch матовая белая", width: "3.60м", price: "495₽/м²", priceLarge: "490₽/м²" },
        ]
      }
    ]
  }
};

interface ServicesPageProps {
  city?: City;
  content?: {
    title: string;
    description: string;
  };
}

const ServicesPage: React.FC<ServicesPageProps> = ({ city, content }) => {
  return (
    <main className="services-page">
      <section className="services-hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">Прайс-лист</span>
            <h1>{content?.title || `Цены на натяжные потолки ${city ? `в ${city.name}` : ''}`}</h1>
            <p>{content?.description || `Актуальные цены на все виды натяжных потолков ${city ? `в ${city.namePrepositional}` : ''}. Закупочная цена + наша наценка за монтаж и материалы.`}</p>
            <div className="price-note">
              <strong>ВНИМАНИЕ!</strong> Цены указаны с учетом нашей наценки за монтаж, материалы и гарантию.
            </div>
          </div>
        </div>
      </section>

      <section className="price-sections">
        <div className="container">
          {Object.entries(priceList).map(([key, section]) => (
            <div key={key} className="price-section">
              <div className="section-header">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>
              
              {section.categories.map((category, catIndex) => (
                <div key={catIndex} className="category-block">
                  <h3 className="category-title">{category.name}</h3>
                  <div className="price-table">
                                         <div className="table-header">
                       <div className="header-texture">Тип потолка</div>
                       <div className="header-width">Ширина полотна</div>
                       <div className="header-price">до 200м²</div>
                       <div className="header-price">от 200м²</div>
                     </div>
                    
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="price-row">
                        <div className="row-texture">{item.texture}</div>
                        <div className="row-width">{item.width}</div>
                        <div className="row-price">{item.price}</div>
                        <div className="row-price">{item.priceLarge}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="additional-services">
        <div className="container">
          <h2>Дополнительные услуги</h2>
          <div className="services-grid">
            <div className="service-item">
              <h3>Монтаж потолка</h3>
              <p>Профессиональная установка с гарантией качества</p>
              <div className="service-price">Включено в стоимость</div>
            </div>
            <div className="service-item">
              <h3>Демонтаж старого потолка</h3>
              <p>Аккуратный демонтаж без повреждения стен</p>
              <div className="service-price">от 150₽/м²</div>
            </div>
            <div className="service-item">
              <h3>Установка освещения</h3>
              <p>Монтаж точечных светильников и LED-лент</p>
              <div className="service-price">от 500₽/шт</div>
            </div>
            <div className="service-item">
              <h3>Обход труб и коммуникаций</h3>
              <p>Аккуратный обход труб и вентиляции</p>
              <div className="service-price">от 300₽/шт</div>
            </div>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Получите точный расчет стоимости</h2>
            <p>Бесплатный замер и расчет. Привезем образцы материалов, подберем оптимальное решение под ваш бюджет.</p>
            <div className="cta-actions">
              <a href="tel:+79895234952" className="btn-primary-large">Заказать бесплатный замер</a>
              <Link href={city ? `/${city.slug}/calculator` : "/calculator"} className="btn-outline">Онлайн калькулятор</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ceiling-gallery">
        <div className="container">
          <div className="gallery-header">
            <h2>Галерея наших работ</h2>
            <p>Более 25 типов натяжных потолков для любого интерьера</p>
          </div>
          <div className="gallery-grid">
            {catalogProducts.map((product) => (
              <div key={product.id} className="gallery-item">
                <div className="item-image">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={400}
                    height={300}
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className="item-content">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <div className="item-features">
                    {product.features.slice(0, 2).map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <div className="item-price">
                    от {product.price.min}{product.price.unit}
                  </div>
                  <Link href={city ? `/${city.slug}/catalog/${product.id}` : `/catalog/${product.id}`} className="btn-outline-small">
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
