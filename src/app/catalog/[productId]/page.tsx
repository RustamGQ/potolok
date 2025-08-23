import { Metadata } from 'next';
import { getProductById, getCatalogData } from '../../../lib/catalog';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import './productPage.scss';

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

export async function generateStaticParams() {
  const catalogData = getCatalogData();
  
  return catalogData.products.map(product => ({
    productId: product.id
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = getProductById(productId);
  
  if (!product) {
    return {
      title: 'Натяжной потолок - ПОТОЛКИ',
      description: 'Детальная информация о натяжном потолке. Характеристики, цены, особенности монтажа.'
    };
  }

  return {
    title: `${product.name} - ${product.seoTitle}`,
    description: product.seoDescription,
    keywords: `${product.name.toLowerCase()}, натяжные потолки, ${product.textures.join(', ')}, ${product.types.join(', ')}`,
    openGraph: {
      title: `${product.name} - ПОТОЛКИ`,
      description: product.seoDescription,
      type: 'website',
      locale: 'ru_RU',
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name
        }
      ]
    },
    alternates: {
      canonical: `https://potolkivip-rnd.ru/catalog/${product.id}`
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = getProductById(productId);
  
  if (!product) {
    notFound();
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price);
  };

  const getPriceText = () => {
    if (product.price.min === product.price.max) {
      return `от ${formatPrice(product.price.min)} ${product.price.unit}`;
    }
    return `${formatPrice(product.price.min)} - ${formatPrice(product.price.max)} ${product.price.unit}`;
  };

  return (
    <main className="product-page">
      <div className="product-container">
        <div className="product-header">
          <nav className="breadcrumbs">
            <Link href="/">Главная</Link>
            <span> / </span>
            <Link href="/catalog">Каталог</Link>
            <span> / </span>
            <span>{product.name}</span>
          </nav>
          
          <h1 className="product-title">{product.name}</h1>
        </div>

        <div className="product-content">
          <div className="product-gallery">
            <div className="main-image">
              <Image
                src={product.image}
                alt={product.name}
                width={600}
                height={450}
                className="product-image"
                priority
              />
            </div>
          </div>

          <div className="product-info">
            <div className="product-price-section">
              <div className="price-info">
                <span className="price-label">Цена:</span>
                <span className="price-value">{getPriceText()}</span>
              </div>
              
              <div className="product-actions">
                <Link 
                  href="/calculator"
                  className="calculate-btn"
                >
                  Рассчитать стоимость
                </Link>
                <button className="order-btn">
                  Заказать потолок
                </button>
              </div>
            </div>

            <div className="product-description">
              <h3>Описание</h3>
              <p>{product.description}</p>
            </div>

            <div className="product-features">
              <h3>Особенности</h3>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="product-specifications">
              <h3>Характеристики</h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Текстура:</span>
                  <span className="spec-value">
                    {product.textures.map(texture => 
                      product.textures.indexOf(texture) === product.textures.length - 1 
                        ? texture 
                        : `${texture}, `
                    )}
                  </span>
                </div>
                
                <div className="spec-item">
                  <span className="spec-label">Тип:</span>
                  <span className="spec-value">
                    {product.types.map(type => 
                      product.types.indexOf(type) === product.types.length - 1 
                        ? type 
                        : `${type}, `
                    )}
                  </span>
                </div>
                
                <div className="spec-item">
                  <span className="spec-label">Применение:</span>
                  <span className="spec-value">
                    {product.rooms.map(room => 
                      product.rooms.indexOf(room) === product.rooms.length - 1 
                        ? room 
                        : `${room}, `
                    )}
                  </span>
                </div>
                
                <div className="spec-item">
                  <span className="spec-label">Производители:</span>
                  <span className="spec-value">
                    {product.manufacturers.map(manufacturer => 
                      product.manufacturers.indexOf(manufacturer) === product.manufacturers.length - 1 
                        ? manufacturer 
                        : `${manufacturer}, `
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-footer">
          <div className="cta-section">
            <h3>Заказать установку потолка</h3>
            <p>Получите бесплатный замер и расчет стоимости</p>
            <div className="cta-buttons">
              <Link 
                href="/calculator"
                className="cta-calculate-btn"
              >
                Рассчитать стоимость
              </Link>
              <button className="cta-order-btn">
                Заказать замер
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
