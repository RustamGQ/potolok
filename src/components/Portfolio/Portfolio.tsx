'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useCity } from '../../contexts/CityContext';
import { City } from '../../types/city';
import OrderForm from '../OrderForm/OrderForm';
import './portfolio.scss';

interface PortfolioProps {
    city?: City;
    content?: {
        title: string;
        description: string;
    };
}

function Portfolio({ city, content }: PortfolioProps) {
    const { currentCity } = useCity();
    const displayCity = city || currentCity;
    const [showOrderForm, setShowOrderForm] = useState(false);
    
    // Динамические данные портфолио в зависимости от города
    const portfolioData = [
        {
            id: 1,
            image: "/img/work-1.webp",
            alt: `Натяжной потолок в гостиной - ${displayCity.name}`
        },
        {
            id: 2,
            image: "/img/work-2.webp",
            alt: `Двухуровневый потолок в спальне - ${displayCity.name}`
        },
        {
            id: 3,
            image: "/img/work-3.webp",
            alt: `Натяжной потолок на кухне - ${displayCity.name}`
        },
        {
            id: 4,
            image: "/img/work-4.webp",
            alt: `Потолок звездное небо - ${displayCity.name}`
        },
        {
            id: 5,
            image: "/img/work-5.webp",
            alt: `Черный глянцевый потолок - ${displayCity.name}`
        },
        {
            id: 6,
            image: "/img/work-6.webp",
            alt: `Фотопечать на потолке - ${displayCity.name}`
        }
    ];

    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!carouselRef.current) return;

        // Отложенный старт: ждем, пока секция станет видимой
        const root = carouselRef.current as HTMLElement | null;
        if (!root) return;
        let started = false;
        const start = () => {
            if (started) return;
            started = true;

        // Функция инициализации карусели
        function carousel(root: HTMLElement) {
            const figure = root.querySelector("figure") as HTMLElement;
            const nav = root.querySelector("nav") as HTMLElement;
            const images = figure.children;
            const n = images.length;
            const bfc = "bfc" in root.dataset;
            const theta = 2 * Math.PI / n;
            let currImage = 0;

            function setupCarousel(n: number, s: number) {
                const apothem = (s / (2 * Math.tan(Math.PI / n))) * 0.6 + 25; // Уменьшаем радиус на 40% + добавляем 25px
                figure.style.transformOrigin = `50% 50% ${-apothem}px`;
                
                for (let i = 0; i < n; i++) {
                    (images[i] as HTMLElement).style.padding = '0';
                    (images[i] as HTMLElement).style.position = 'absolute';
                    (images[i] as HTMLElement).style.left = '50%';
                    (images[i] as HTMLElement).style.top = '50%';
                    (images[i] as HTMLElement).style.transformOrigin = `50% 50% ${-apothem}px`;
                    (images[i] as HTMLElement).style.transform = `translate(-50%, -50%) rotateY(${i * theta}rad) translateZ(${apothem}px)`;
                }
                
                if (bfc) {
                    for (let i = 0; i < n; i++) {
                        (images[i] as HTMLElement).style.backfaceVisibility = "hidden";
                    }
                }
                
                rotateCarousel(currImage);
            }

            function setupNavigation() {
                nav.addEventListener("click", onClick, true);
                
                function onClick(e: Event) {
                    e.stopPropagation();
                    const t = e.target as HTMLElement;
                    if (t.tagName.toUpperCase() != "BUTTON") return;
                    
                    if (t.classList.contains("next")) {
                        currImage++;
                    } else {
                        currImage--;
                    }
                    rotateCarousel(currImage);
                }
            }

            function rotateCarousel(imageIndex: number) {
                figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
            }

            // Инициализация
            window.addEventListener("resize", () => {
                setupCarousel(n, parseFloat(getComputedStyle(images[0] as HTMLElement).width));
            });
            
            setupNavigation();
            
            // Запуск после загрузки изображений
            const firstImg = images[0].querySelector('img') as HTMLImageElement;
            if (firstImg) {
                if (firstImg.complete) {
                    setupCarousel(n, parseFloat(getComputedStyle(images[0] as HTMLElement).width));
                } else {
                    firstImg.addEventListener('load', () => {
                        setupCarousel(n, parseFloat(getComputedStyle(images[0] as HTMLElement).width));
                    });
                }
            }

            // Mouse/Touch events
            let xClick = 0;
            let mouseDown = false;

            figure.addEventListener('mousedown', (event) => {
                xClick = event.pageX;
                mouseDown = true;
            });

            figure.addEventListener('mouseup', () => {
                mouseDown = false;
            });

            figure.addEventListener('mousemove', (event) => {
                if (mouseDown) {
                    const xMove = event.pageX;
                    if (Math.floor(xClick - xMove) > 5) {
                        currImage++;
                        rotateCarousel(currImage);
                        mouseDown = false;
                    } else if (Math.floor(xClick - xMove) < -5) {
                        currImage--;
                        rotateCarousel(currImage);
                        mouseDown = false;
                    }
                }
            });

            figure.addEventListener('touchstart', (event) => {
                event.preventDefault();
                xClick = event.changedTouches[0].pageX;
                mouseDown = true;
            }, { passive: false });

            figure.addEventListener('touchend', () => {
                mouseDown = false;
            });

            figure.addEventListener('touchmove', (event) => {
                event.preventDefault();
                if (mouseDown) {
                    const xMove = event.changedTouches[0].pageX;
                    if (Math.floor(xClick - xMove) > 5) {
                        currImage++;
                        rotateCarousel(currImage);
                        mouseDown = false;
                    } else if (Math.floor(xClick - xMove) < -5) {
                        currImage--;
                        rotateCarousel(currImage);
                        mouseDown = false;
                    }
                }
            }, { passive: false });
        }

        // Запуск карусели (root гарантированно не null)
        carousel(root);
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                start();
                observer.disconnect();
            }
        }, { rootMargin: '0px 0px -20% 0px', threshold: 0.2 });

        observer.observe(root);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="portfolio" id="portfolio">
            {/* Декоративный фон */}
            <div className="portfolio__bg">
                <div className="portfolio__floating-circles">
                    <div className="portfolio__circle portfolio__circle--1"></div>
                    <div className="portfolio__circle portfolio__circle--2"></div>
                    <div className="portfolio__circle portfolio__circle--3"></div>
                </div>
                <div className="portfolio__geometric-shapes">
                    <div className="portfolio__shape portfolio__shape--triangle"></div>
                    <div className="portfolio__shape portfolio__shape--square"></div>
                </div>
            </div>

            <div className="container">
                {/* Заголовок секции */}
                <div className="portfolio__header">
                    <div className="portfolio__badge">
                        <span className="portfolio__badge-text">Наши работы</span>
                        <div className="portfolio__badge-icon">🎨</div>
                    </div>
                    <h2 className="portfolio__title">
                        {content?.title || (
                    <>
                        Примеры наших <span className="portfolio__title-accent">работ</span>
                    </>
                )}
                    </h2>
                    <p className="portfolio__subtitle">
                        {content?.description || `Более 1000 довольных клиентов по всему ${displayCity.nameGenitive}. 
                        Каждый проект - это уникальное решение с гарантией качества.`}
                    </p>

                    {/* Статистика достижений */}
                    <div className="portfolio__stats">
                        <div className="portfolio__stat-item">
                            <div className="portfolio__stat-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="portfolio__stat-content">
                                <span className="portfolio__stat-number">1000+</span>
                                <span className="portfolio__stat-label">Проектов</span>
                            </div>
                        </div>

                        <div className="portfolio__stat-item">
                            <div className="portfolio__stat-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="portfolio__stat-content">
                                <span className="portfolio__stat-number">15</span>
                                <span className="portfolio__stat-label">Лет гарантии</span>
                            </div>
                        </div>

                        <div className="portfolio__stat-item">
                            <div className="portfolio__stat-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <div className="portfolio__stat-content">
                                <span className="portfolio__stat-number">1-3</span>
                                <span className="portfolio__stat-label">Дня монтажа</span>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Оригинальная 3D Карусель */}
                <div className="carousel-3d" ref={carouselRef}>
                    <figure>
                        {portfolioData.map((item) => (
                            <div key={item.id}>
                                <a href="#any">
                                    <Image 
                                      src={item.image} 
                                      alt={item.alt} 
                                      width={800} 
                                      height={600} 
                                      loading="lazy"
                                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 800px"
                                    />
                                </a>
                            </div>
                        ))}
                    </figure>
                    <nav>
                        <button className="prev">
                            Назад
                        </button>
                        <button className="next">
                            Вперед
                        </button>
                    </nav>
                </div>

                {/* Информационная панель */}
                <div className="portfolio__info-panel">
                    <div className="portfolio__info-grid">
                        <div className="portfolio__info-card">
                            <div className="portfolio__info-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h4 className="portfolio__info-title">Премиум качество</h4>
                            <p className="portfolio__info-text">
                                Используем только сертифицированные материалы от ведущих европейских производителей
                            </p>
                        </div>

                        <div className="portfolio__info-card">
                            <div className="portfolio__info-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h4 className="portfolio__info-title">Быстрый монтаж</h4>
                            <p className="portfolio__info-text">
                                Установка любой сложности за 1–3 дня. Чистый монтаж, по желанию заказчика — укрытие стен плёнкой
                            </p>
                        </div>

                        <div className="portfolio__info-card">
                            <div className="portfolio__info-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2"/>
                                </svg>
                            </div>
                            <h4 className="portfolio__info-title">Гарантия 15 лет</h4>
                            <p className="portfolio__info-text">
                                Расширенная гарантия на все виды работ и материалы с бесплатным сервисом
                            </p>
                        </div>
                        
                        <div className="portfolio__info-card">
                            <div className="portfolio__info-icon">
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h4 className="portfolio__info-title">Световые линии</h4>
                            <p className="portfolio__info-text">
                                Современные потолки со встроенными световыми линиями для создания уникальной атмосферы
                            </p>
                        </div>
                    </div>


                </div>

                {/* CTA секция */}
                <div className="portfolio__cta">
                    <div className="portfolio__cta-content">
                        <h3 className="portfolio__cta-title">
                            Хотите такой же результат?
                        </h3>
                        <p className="portfolio__cta-text">
                            Закажите бесплатный замер и получите персональный расчет стоимости
                        </p>
                        <div className="portfolio__cta-actions">
                            <button 
                                className="portfolio__cta-btn portfolio__cta-btn--primary"
                                onClick={() => setShowOrderForm(true)}
                            >
                                Заказать замер
                            </button>
                            <button 
                                className="portfolio__cta-btn portfolio__cta-btn--secondary"
                                onClick={() => window.location.href = `/${displayCity.slug}/works`}
                            >
                                Посмотреть все работы
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* OrderForm Modal */}
            {showOrderForm && (
                <div className="orderForm-overlay" style={{zIndex: 2000}}>
                    <OrderForm onClose={() => setShowOrderForm(false)} />
                </div>
            )}
        </section>
    );
}

export default Portfolio;