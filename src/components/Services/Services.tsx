"use client";

import './services.scss';
import Image from 'next/image';
import Link from 'next/link';
import { useCity } from '../../contexts/CityContext';
import { City } from '../../types/city';
import { useState } from 'react';
import OrderForm from '../OrderForm/OrderForm';

type ServiceItem = {
    id: number;
    title: string;
    description: string;
    price: string;
    popular?: boolean;
    image: string;
    features: string[];
    serviceId: string;
};

interface ServicesProps {
    city?: City;
    content?: {
        title: string;
        description: string;
    };
}

function Services({ city, content }: ServicesProps) {
    const { currentCity } = useCity();
    const displayCity = city || currentCity;
    const [showOrderForm, setShowOrderForm] = useState(false);
    const [selectedService, setSelectedService] = useState<string>('matte');
    const [selectedArea] = useState<number>(20);

    const servicesData: ServiceItem[] = [
        { 
            id: 1, 
            title: 'Матовые потолки', 
            description: 'Классические матовые потолки с идеально ровной поверхностью. Подходят для любого интерьера и создают уютную атмосферу.', 
            price: 'от 405₽/м²', 
            image: '/img/work-7.jpg', 
            features: ['BAUF 205', 'Гарантия 15 лет', 'Быстрый монтаж'],
            serviceId: 'matte'
        },
        { 
            id: 2, 
            title: 'Глянцевые потолки', 
            description: 'Блестящие глянцевые потолки с зеркальным эффектом. Визуально увеличивают пространство и создают эффект глубины.', 
            price: 'от 415₽/м²', 
            popular: true, 
            image: '/img/work-8.jpg', 
            features: ['BAUF 205', 'Зеркальный эффект', 'Визуально больше'],
            serviceId: 'glossy'
        },
        { 
            id: 3, 
            title: 'Цветные потолки', 
            description: 'Матовые и глянцевые потолки в любом цвете по вашему выбору. Индивидуальный подход к каждому проекту.', 
            price: 'от 450₽/м²', 
            image: '/img/work-9.jpg', 
            features: ['200+ цветов', 'BAUF 205', 'Индивидуальный дизайн'],
            serviceId: 'colored'
        },
        { 
            id: 4, 
            title: 'Премиум потолки', 
            description: 'Высококачественные потолки премиум-класса BAUF 270 и TEQTUM. Максимальная прочность и долговечность.', 
            price: 'от 545₽/м²', 
            image: '/img/work-10.jpg', 
            features: ['BAUF 270', 'TEQTUM EURO', 'Премиум качество'],
            serviceId: 'premium'
        },
        { 
            id: 5, 
            title: 'Фактурные потолки', 
            description: 'Объёмные текстуры и рельефные поверхности. Создают уникальный дизайн и добавляют характер помещению.', 
            price: 'от 880₽/м²', 
            image: '/img/work-11.jpg', 
            features: ['LumFer', '3D текстуры', 'Эксклюзивный дизайн'],
            serviceId: 'textured'
        },
        { 
            id: 6, 
            title: 'Огнестойкие потолки', 
            description: 'Потолки с повышенной огнестойкостью BAUF FIRE PROOF. Безопасность и сертификация для коммерческих помещений.', 
            price: 'от 435₽/м²', 
            image: '/img/work-12.jpg', 
            features: ['BAUF FIRE PROOF', 'Безопасность', 'Сертификация'],
            serviceId: 'fireproof'
        },
        { 
            id: 7, 
            title: 'Парящий профиль', 
            description: 'Современные потолки с встроенной подсветкой по периметру. Создают эффект "парящего" потолка.', 
            price: '950₽/м', 
            image: '/img/work-13.jpg', 
            features: ['Встроенная подсветка', 'Эффект "парящего" потолка', 'Без светодиодной ленты и блока питания'],
            serviceId: 'floating'
        },
        { 
            id: 8, 
            title: 'Фото печать любой сложности', 
            description: 'Потолки с фотопечатью любой сложности. Создают уникальный дизайн и подчеркивают стиль интерьера.', 
            price: 'от 3900₽/м²', 
            image: '/img/work-14.jpg', 
            features: ['Любая сложность', 'Высокое качество печати', 'Индивидуальный дизайн'],
            serviceId: 'photoprint'
        },
        { 
            id: 9, 
            title: 'Световые линии', 
            description: 'Современные потолки со встроенными световыми линиями. Создают уникальную атмосферу.', 
            price: '3800₽/м', 
            image: '/img/work-15.jpg', 
            features: ['Световые линии', 'Современный дизайн', 'Каждый угол +800₽'],
            serviceId: 'light-lines'
        },
        { 
            id: 10, 
            title: 'Трек накладной', 
            description: 'Накладные трековые системы освещения для натяжных потолков. Современное решение.', 
            price: '2100₽/м', 
            image: '/img/work-16.jpg', 
            features: ['Накладной монтаж', 'Современный дизайн', 'Без светильников'],
            serviceId: 'track-surface'
        },
        { 
            id: 11, 
            title: 'Трек встроенный', 
            description: 'Встроенные трековые системы освещения для натяжных потолков. Элегантное решение.', 
            price: '4900₽/м', 
            image: '/img/work-17.jpg', 
            features: ['Встроенный монтаж', 'Элегантный дизайн', 'Без светильников'],
            serviceId: 'track-recessed'
        },
        { 
            id: 12, 
            title: 'Магнитные треки', 
            description: 'Магнитные трековые системы освещения для натяжных потолков. Инновационное решение.', 
            price: '12500₽/м', 
            image: '/img/work-18.jpg', 
            features: ['Магнитная система', 'Инновационный дизайн', 'Без светильников'],
            serviceId: 'track-magnetic'
        },
    ];

    const handleOrderClick = (serviceId: string) => {
        setSelectedService(serviceId);
        setShowOrderForm(true);
    };

    return (
        <>
            <section className="services" id="services">
                <div className="container">
                    <div className="services__header">
                        <div className="services__badge">
                            <span className="services__badge-text">Наши услуги</span>
                            <div className="services__badge-icon">📸</div>
                        </div>
                        <h2 className="services__title">{content?.title || `Популярные <span className="services__title-accent">виды потолков</span> в ${displayCity.name}`}</h2>
                        <p className="services__subtitle">{content?.description || `Реальные фотографии работ вашего дяди. Каждый потолок — это качество и профессионализм.`}</p>
                    </div>

                    <div className="services__photoGrid">
                        {servicesData.map((s) => (
                            <article key={s.id} className={`serviceCard ${s.popular ? 'is-popular' : ''}`}>
                                <div className="serviceCard__media">
                                    <Image 
                                        src={s.image} 
                                        alt={s.title} 
                                        fill 
                                        priority 
                                        sizes="(max-width: 1024px) 100vw, 33vw"
                                    />
                                    {s.popular && <span className="serviceCard__badge">Популярно</span>}
                                    <span className="serviceCard__priceChip">{s.price}</span>
                                </div>
                                <div className="serviceCard__info">
                                    <h3 className="serviceCard__title">{s.title}</h3>
                                    <p className="serviceCard__desc">{s.description}</p>
                                    <ul className="serviceCard__features">
                                        {s.features.map((f, i) => (
                                            <li key={i} className="serviceCard__feature">{f}</li>
                                        ))}
                                    </ul>
                                    <div className="serviceCard__actions">
                                        <button 
                                            onClick={() => handleOrderClick(s.serviceId)}
                                            className="serviceCard__btn serviceCard__btn--primary"
                                        >
                                            Заказать замер
                                        </button>
                                        <Link href={`/${displayCity.slug}/services`} className="serviceCard__btn serviceCard__btn--ghost">Подробнее</Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {showOrderForm && (
  <div className="orderForm-overlay" style={{zIndex: 2000}}>
    <OrderForm
        initialService={selectedService}
        initialArea={selectedArea}
        onClose={() => setShowOrderForm(false)}
    />
  </div>
)}
        </>
    );
}

export default Services;