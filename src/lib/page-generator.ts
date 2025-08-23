import { cities } from './cities';
import { generateCityContent, generateSEOMeta, generateCityReviews, generateCityFAQ } from './content-generator';
import { catalogProducts } from './catalog';

// Генерация всех статических путей для городов
export function generateAllCityPaths() {
  const paths = [];
  
  // Главные страницы городов
  for (const city of cities) {
    paths.push({ city: city.slug });
  }
  
  // Страницы каталога для каждого города
  for (const city of cities) {
    paths.push({ city: city.slug, page: 'catalog' });
  }
  
  // Страницы отдельных продуктов для каждого города
  for (const city of cities) {
    for (const product of catalogProducts) {
      paths.push({ city: city.slug, productId: product.id });
    }
  }
  
  // Страницы услуг для каждого города
  for (const city of cities) {
    paths.push({ city: city.slug, page: 'services' });
  }
  
  // Страницы работ для каждого города
  for (const city of cities) {
    paths.push({ city: city.slug, page: 'works' });
  }
  
  // Страницы отзывов для каждого города
  for (const city of cities) {
    paths.push({ city: city.slug, page: 'reviews' });
  }
  
  // Страницы FAQ для каждого города
  for (const city of cities) {
    paths.push({ city: city.slug, page: 'faq' });
  }
  
  // Страницы о компании для каждого города
  for (const city of cities) {
    paths.push({ city: city.slug, page: 'about' });
  }
  
  // Страницы калькулятора для каждого города
  for (const city of cities) {
    paths.push({ city: city.slug, page: 'calculator' });
  }
  
  return paths;
}

// Генерация мета-данных для всех страниц
export function generatePageMetadata(citySlug: string, page?: string, productId?: string) {
  const city = cities.find(c => c.slug === citySlug);
  if (!city) return null;
  
  if (productId) {
    const product = catalogProducts.find(p => p.id === productId);
    if (!product) return null;
    
    return generateSEOMeta(city, product.name, 
      `${product.name} в ${city.name} - ${product.seoTitle}`,
      `${product.seoDescription} Установка в ${city.name}. Цены от ${product.price.min}${product.price.unit}.`
    );
  }
  
  switch (page) {
    case 'catalog':
      return generateSEOMeta(city, 'Каталог', 
        `Каталог натяжных потолков в ${city.name} - 25+ вариантов | ПОТОЛКИ`,
        `Каталог натяжных потолков в ${city.name}. Матовые, глянцевые, сатиновые потолки. Цены от 1200₽/м². Бесплатный замер.`
      );
    case 'services':
      return generateSEOMeta(city, 'Услуги', 
        `Услуги по установке натяжных потолков в ${city.name} | ПОТОЛКИ`,
        `Услуги по установке натяжных потолков в ${city.name}. Бесплатный замер, профессиональный монтаж, гарантия качества.`
      );
    case 'works':
      return generateSEOMeta(city, 'Наши работы', 
        `Наши работы - Натяжные потолки в ${city.name} | ПОТОЛКИ`,
        `Примеры работ по установке натяжных потолков в ${city.name}. Портфолио проектов, фотографии до и после.`
      );
    case 'reviews':
      return generateSEOMeta(city, 'Отзывы', 
        `Отзывы о натяжных потолках в ${city.name} | ПОТОЛКИ`,
        `Отзывы клиентов о натяжных потолках в ${city.name}. Реальные мнения о качестве монтажа и сервисе.`
      );
    case 'faq':
      return generateSEOMeta(city, 'FAQ', 
        `Частые вопросы о натяжных потолках в ${city.name} | ПОТОЛКИ`,
        `Ответы на частые вопросы о натяжных потолках в ${city.name}. Цены, сроки, гарантии, материалы.`
      );
    case 'about':
      return generateSEOMeta(city, 'О компании', 
        `О компании - Натяжные потолки в ${city.name} | ПОТОЛКИ`,
        `О компании "Натяжные потолки ${city.name}". Опыт работы, команда специалистов, гарантии качества.`
      );
    case 'calculator':
      return generateSEOMeta(city, 'Калькулятор', 
        `Калькулятор стоимости натяжных потолков в ${city.name} | ПОТОЛКИ`,
        `Онлайн калькулятор стоимости натяжных потолков в ${city.name}. Быстрый расчет цены, бесплатный замер.`
      );
    default:
      return generateSEOMeta(city, 'Главная', 
        `Натяжные потолки в ${city.name} - цены от 1200₽/м² | ПОТОЛКИ`,
        `Натяжные потолки в ${city.name}. Профессиональная установка, качественные материалы, опытные мастера. Цены от 1200₽/м².`
      );
  }
}

// Генерация контента для страниц
export function generatePageContent(citySlug: string, page?: string) {
  const city = cities.find(c => c.slug === citySlug);
  if (!city) return null;
  
  const cityContent = generateCityContent(city);
  
  switch (page) {
    case 'catalog':
      return {
        title: cityContent.catalog.title,
        description: cityContent.catalog.description,
        products: catalogProducts
      };
    case 'services':
      return {
        title: cityContent.services.title,
        description: cityContent.services.description,
        priceList: {
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
              }
            ]
          }
        }
      };
    case 'works':
      return {
        title: cityContent.works.title,
        description: cityContent.works.description,
        portfolio: catalogProducts.slice(0, 12) // Показываем первые 12 работ
      };
    case 'reviews':
      return {
        title: cityContent.reviews.title,
        description: cityContent.reviews.description,
        reviews: generateCityReviews(city)
      };
    case 'faq':
      return {
        title: cityContent.faq.title,
        description: cityContent.faq.description,
        faq: generateCityFAQ(city)
      };
    case 'about':
      return {
        title: cityContent.about.title,
        description: cityContent.about.description,
        stats: [
          { number: "5+", label: "лет опыта" },
          { number: "1000+", label: "довольных клиентов" },
          { number: "100%", label: "гарантия качества" },
          { number: "24/7", label: "поддержка клиентов" }
        ]
      };
    case 'calculator':
      return {
        title: `Калькулятор стоимости - Натяжные потолки ${city.name}`,
        description: `Онлайн калькулятор стоимости натяжных потолков в ${city.name}. Быстрый расчет цены, бесплатный замер.`,
        products: catalogProducts
      };
    default:
      return cityContent;
  }
}

// Генерация sitemap для всех городов
export function generateSitemap() {
  const sitemap = [];
  
  for (const city of cities) {
    // Главная страница города
    sitemap.push({
      url: `https://potolkivip-rnd.ru/${city.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0
    });
    
    // Страницы каталога
    sitemap.push({
      url: `https://potolkivip-rnd.ru/${city.slug}/catalog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9
    });
    
    // Страницы отдельных продуктов
    for (const product of catalogProducts) {
      sitemap.push({
        url: `https://potolkivip-rnd.ru/${city.slug}/catalog/${product.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8
      });
    }
    
    // Остальные страницы
    const pages = ['services', 'works', 'reviews', 'faq', 'about', 'calculator'];
    for (const page of pages) {
      sitemap.push({
        url: `https://potolkivip-rnd.ru/${city.slug}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7
      });
    }
  }
  
  return sitemap;
}

// Генерация robots.txt
export function generateRobotsTxt() {
  return `User-agent: *
Allow: /

Sitemap: https://potolkivip-rnd.ru/sitemap.xml

# Городские страницы
Allow: /*/catalog
Allow: /*/services
Allow: /*/works
Allow: /*/reviews
Allow: /*/faq
Allow: /*/about
Allow: /*/calculator

# Запрещаем технические страницы
Disallow: /api/
Disallow: /_next/
Disallow: /debug/
`;
}
