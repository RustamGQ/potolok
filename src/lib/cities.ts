import { City } from '../types/city';

export const cities: City[] = [
  // Основные города
  {
    id: 'rostov',
    name: 'Ростов-на-Дону',
    nameGenitive: 'Ростова-на-Дону',
    namePrepositional: 'Ростове-на-Дону',
    slug: 'rostov',
    isMain: true,
    isDistant: false,
    coordinates: { lat: 47.2357, lng: 39.7015 },
    description: 'Профессиональная установка натяжных потолков в Ростове-на-Дону. Бесплатный замер, гарантия качества, выгодные цены.',
    seoTitle: 'Натяжные потолки в Ростове-на-Дону - Установка от 1200₽/м² | ПОТОЛКИ',
    seoDescription: 'Натяжные потолки в Ростове-на-Дону от профессионалов. Бесплатный замер, монтаж за 1 день, гарантия 3 года. Цены от 1200₽/м². Звоните!'
  },
  {
    id: 'bataysk',
    name: 'Батайск',
    nameGenitive: 'Батайска',
    namePrepositional: 'Батайске',
    slug: 'bataysk',
    isMain: true,
    isDistant: false,
    coordinates: { lat: 47.1391, lng: 39.7519 },
    description: 'Установка натяжных потолков в Батайске. Опытные мастера, качественные материалы, доступные цены.',
    seoTitle: 'Натяжные потолки в Батайске - Монтаж от 1200₽/м² | ПОТОЛКИ',
    seoDescription: 'Натяжные потолки в Батайске с гарантией качества. Бесплатный замер, быстрый монтаж, цены от 1200₽/м². Работаем в Батайске и окрестностях.'
  },
  {
    id: 'aksay',
    name: 'Аксай',
    nameGenitive: 'Аксая',
    namePrepositional: 'Аксае',
    slug: 'aksay',
    isMain: true,
    isDistant: false,
    coordinates: { lat: 47.2606, lng: 39.8706 },
    description: 'Натяжные потолки в Аксае. Современные решения для вашего интерьера по доступным ценам.',
    seoTitle: 'Натяжные потолки в Аксае - Установка от 1200₽/м² | ПОТОЛКИ',
    seoDescription: 'Натяжные потолки в Аксае от проверенной компании. Бесплатный замер, качественный монтаж, цены от 1200₽/м².'
  },
  
  // Населенные пункты Батайска
  {
    id: 'mokryy-bataysk',
    name: 'Мокрый Батай',
    nameGenitive: 'Мокрого Батайска',
    namePrepositional: 'Мокром Батайске',
    slug: 'mokryy-bataysk',
    isMain: false,
    isDistant: false,
    coordinates: { lat: 47.1391, lng: 39.7519 },
    description: 'Натяжные потолки в Мокром Батайске. Работаем в рамках обслуживания Батайска.',
    seoTitle: 'Натяжные потолки в Мокром Батайске - Монтаж от 1200₽/м² | ПОТОЛКИ',
    seoDescription: 'Натяжные потолки в Мокром Батайске. Бесплатный замер, быстрый монтаж, цены от 1200₽/м². Работаем в рамках обслуживания Батайска.'
  },
  {
    id: 'kuschevka',
    name: 'Кущевка',
    nameGenitive: 'Кущевки',
    namePrepositional: 'Кущевке',
    slug: 'kuschevka',
    isMain: false,
    isDistant: false,
    coordinates: { lat: 47.1391, lng: 39.7519 },
    description: 'Установка натяжных потолков в Кущевке. Обслуживаем в рамках работы в Батайске.',
    seoTitle: 'Натяжные потолки в Кущевке - Установка от 1200₽/м² | ПОТОЛКИ',
    seoDescription: 'Натяжные потолки в Кущевке. Бесплатный замер, качественный монтаж, цены от 1200₽/м². Работаем в рамках обслуживания Батайска.'
  },
  {
    id: 'dnt-trud',
    name: 'ДНТ Труд',
    nameGenitive: 'ДНТ Труд',
    namePrepositional: 'ДНТ Труд',
    slug: 'dnt-trud',
    isMain: false,
    isDistant: false,
    coordinates: { lat: 47.1391, lng: 39.7519 },
    description: 'Натяжные потолки в ДНТ Труд. Обслуживаем в рамках работы в Батайске.',
    seoTitle: 'Натяжные потолки в ДНТ Труд - Монтаж от 1200₽/м² | ПОТОЛКИ',
    seoDescription: 'Натяжные потолки в ДНТ Труд. Бесплатный замер, быстрый монтаж, цены от 1200₽/м². Работаем в рамках обслуживания Батайска.'
  },
  {
    id: 'krasnyy-sad',
    name: 'Красный Сад',
    nameGenitive: 'Красного Сада',
    namePrepositional: 'Красном Саде',
    slug: 'krasnyy-sad',
    isMain: false,
    isDistant: false,
    coordinates: { lat: 47.1391, lng: 39.7519 },
    description: 'Установка натяжных потолков в Красном Саде. Обслуживаем в рамках работы в Батайске.',
    seoTitle: 'Натяжные потолки в Красном Саде - Установка от 1200₽/м² | ПОТОЛКИ',
    seoDescription: 'Натяжные потолки в Красном Саде. Бесплатный замер, качественный монтаж, цены от 1200₽/м². Работаем в рамках обслуживания Батайска.'
  },
  {
    id: 'koysug',
    name: 'Койсуг',
    nameGenitive: 'Койсуга',
    namePrepositional: 'Койсуге',
    slug: 'koysug',
    isMain: false,
    isDistant: false,
    coordinates: { lat: 47.1391, lng: 39.7519 },
    description: 'Натяжные потолки в Койсуге. Обслуживаем в рамках работы в Батайске.',
    seoTitle: 'Натяжные потолки в Койсуге - Монтаж от 1200₽/м² | ПОТОЛКИ',
    seoDescription: 'Натяжные потолки в Койсуге. Бесплатный замер, быстрый монтаж, цены от 1200₽/м². Работаем в рамках обслуживания Батайска.'
  },
  {
    id: 'ovoshchnoy-rayon',
    name: 'Овощной район',
    nameGenitive: 'Овощного района',
    namePrepositional: 'Овощном районе',
    slug: 'ovoshchnoy-rayon',
    isMain: false,
    isDistant: false,
    coordinates: { lat: 47.1391, lng: 39.7519 },
    description: 'Натяжные потолки в Овощном районе. Обслуживаем в рамках работы в Батайске.',
    seoTitle: 'Натяжные потолки в Овощном районе - Монтаж от 1200₽/м² | ПОТОЛКИ',
    seoDescription: 'Натяжные потолки в Овощном районе. Бесплатный замер, быстрый монтаж, цены от 1200₽/м². Работаем в рамках обслуживания Батайска.'
  },
  {
    id: 'dorozhnyy',
    name: 'Дорожный',
    nameGenitive: 'Дорожного',
    namePrepositional: 'Дорожном',
    slug: 'dorozhnyy',
    isMain: false,
    isDistant: false,
    coordinates: { lat: 47.1391, lng: 39.7519 },
    description: 'Натяжные потолки в Дорожном. Обслуживаем в рамках работы в Батайске.',
    seoTitle: 'Натяжные потолки в Дорожном - Установка от 1200₽/м² | ПОТОЛКИ',
    seoDescription: 'Натяжные потолки в Дорожном. Бесплатный замер, качественный монтаж, цены от 1200₽/м². Работаем в рамках обслуживания Батайска.'
  }
];

// Дальние города (одна общая страница)
export const distantCities = [
  'Таганрог',
  'Шахты', 
  'Азов',
  'Новочеркасск',
  'Волгодонск',
  'Каменск-Шахтинский'
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(city => city.slug === slug);
}

export function getNearbyCities(): City[] {
  return cities.filter(city => !city.isDistant);
}



export function getMainCities(): City[] {
  return cities.filter(city => city.isMain);
}

export function getBatayskAreaCities(): City[] {
  return cities.filter(city => !city.isMain && !city.isDistant);
}
