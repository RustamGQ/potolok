"use client";
import './header.scss';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { useCity } from '../../contexts/CityContext';
import CitySelector from '../CitySelector/CitySelector';
import { cities } from '../../lib/cities';
import OrderForm from '../OrderForm/OrderForm';


function Header() {
    const { currentCity } = useCity();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isContactsOpen, setIsContactsOpen] = useState(false);
    const [isMobileCityOpen, setIsMobileCityOpen] = useState(false);
    const [showOrderForm, setShowOrderForm] = useState(false);

    const topRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateTopHeightVar = () => {
            const topEl = topRef.current;
            if (!topEl) return;
            const height = topEl.offsetHeight;
            // Apply to the header element to scope the spacing locally
            topEl.parentElement?.style.setProperty('--header-top-h', `${height}px`);
        };

        updateTopHeightVar();
        const ro = new ResizeObserver(updateTopHeightVar);
        if (topRef.current) ro.observe(topRef.current);
        window.addEventListener('resize', updateTopHeightVar);
        return () => {
            ro.disconnect();
            window.removeEventListener('resize', updateTopHeightVar);
        };
    }, []);

    // Закрываем мобильное меню при изменении города
    const handleCitySelect = () => {
        setIsMobileCityOpen(false);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="header">
            <div ref={topRef} className="header__top-fixed">
                <div className="container container-header">
                    <div className="header__top">
                    <Link href={`/${currentCity.slug}`} className="header__top-logo">
                        <svg width="160" height="28" viewBox="0 0 160 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            {/* Изысканные волны */}
                            <path d="M1 20 Q11 10 19 15 T37 13 T49 17" stroke="url(#waveGradient)" strokeWidth="2.2" fill="none"/>
                            <path d="M1 22 Q11 13 19 18 T37 16 T49 19" stroke="url(#waveGradient2)" strokeWidth="1.4" fill="none" opacity="0.6"/>
                            
                            {/* Декоративные узоры */}
                            <g opacity="0.4">
                                <path d="M7 6 L11 10 L7 13 L4 10 Z" stroke="#3b82f6" strokeWidth="0.4" fill="none"/>
                                <path d="M24 5 L27 9 L24 12 L21 9 Z" stroke="#60a5fa" strokeWidth="0.4" fill="none"/>
                                <path d="M42 6 L45 10 L42 13 L39 10 Z" stroke="#3b82f6" strokeWidth="0.4" fill="none"/>
                            </g>
                            
                            {/* Филигранные детали */}
                            <circle cx="14" cy="14" r="1.4" fill="none" stroke="url(#circleGradient)" strokeWidth="0.7"/>
                            <circle cx="14" cy="14" r="0.4" fill="#3b82f6"/>
                            <circle cx="29" cy="16" r="1.2" fill="none" stroke="url(#circleGradient)" strokeWidth="0.6"/>
                            <circle cx="29" cy="16" r="0.3" fill="#60a5fa"/>
                            <circle cx="43" cy="15" r="1.3" fill="none" stroke="url(#circleGradient)" strokeWidth="0.7"/>
                            <circle cx="43" cy="15" r="0.35" fill="#3b82f6"/>
                            
                            {/* Премиальная типографика */}
                            <g>
                                {/* Тень текста */}
                                <text x="56" y="16" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="#1e293b" opacity="0.2">
                                    ПОТОЛКИ
                                </text>
                                {/* Основной текст с градиентом */}
                                <text x="55" y="15" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="800" fill="url(#textGradient)" letterSpacing="-0.2px">
                                    ПОТОЛКИ
                                </text>
                                {/* Подчеркивание */}
                                <rect x="55" y="17" width="52" height="0.4" fill="url(#underlineGradient)"/>
                            </g>
                            
                            {/* Изысканный подтекст */}
                            <text x="55" y="24" fontFamily="Inter, sans-serif" fontSize="6.5" fontWeight="500" fill="#64748b" letterSpacing="2px">
                                PREMIUM INTERIORS
                            </text>
                            
                            {/* Декоративные элементы в тексте */}
                            <circle cx="108" cy="12" r="0.7" fill="#fbbf24"/>
                            <circle cx="111" cy="12" r="0.5" fill="#f59e0b"/>
                            
                            {/* Градиенты */}
                            <defs>
                                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#1e40af"/>
                                    <stop offset="50%" stopColor="#3b82f6"/>
                                    <stop offset="100%" stopColor="#60a5fa"/>
                                </linearGradient>
                                <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#60a5fa"/>
                                    <stop offset="100%" stopColor="#93c5fd"/>
                                </linearGradient>
                                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#1e40af"/>
                                    <stop offset="50%" stopColor="#3b82f6"/>
                                    <stop offset="100%" stopColor="#1e293b"/>
                                </linearGradient>
                                <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="transparent"/>
                                    <stop offset="20%" stopColor="#3b82f6"/>
                                    <stop offset="80%" stopColor="#3b82f6"/>
                                    <stop offset="100%" stopColor="transparent"/>
                                </linearGradient>
                                <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#3b82f6"/>
                                    <stop offset="100%" stopColor="#60a5fa"/>
                                </linearGradient>
                            </defs>
                        </svg>
                    </Link>
                    <nav className='header__top-nav'>
                        <ul className="header__top-menu">
                            <li className="header__top-item">
                                <Link href={`/${currentCity.slug}`} className="header__top-link">
                                    Главная
                                </Link>
                            </li>
                            <li className="header__top-item">
                                <Link href={`/${currentCity.slug}/catalog`} className="header__top-link">
                                    Каталог
                                </Link>
                            </li>
                            <li className="header__top-item">
                                <Link href={`/${currentCity.slug}/services`} className="header__top-link">
                                    Услуги
                                </Link>
                            </li>
                            <li className="header__top-item">
                                <Link href={`/${currentCity.slug}/calculator`} className="header__top-link">
                                    Калькулятор цен
                                </Link>
                            </li>
                            <li
                                className="header__top-item header__top-item--dropdown"
                                onMouseEnter={() => setIsContactsOpen(true)}
                                onMouseLeave={() => setIsContactsOpen(false)}
                            >
                                <button
                                    type="button"
                                    className="header__top-link header__top-link--dropdown"
                                    aria-haspopup="menu"
                                    aria-expanded={isContactsOpen}
                                >
                                    Контакты
                                    <span className={`caret ${isContactsOpen ? 'is-open' : ''}`} aria-hidden>▾</span>
                                </button>
                                <ul className={`header__dropdown ${isContactsOpen ? 'is-open' : ''}`} role="menu">
                                    <li role="none"><a role="menuitem" href="tel:+79895234952">📞 Позвонить</a></li>
                                    <li role="none"><a role="menuitem" href="https://wa.me/79895234952" target="_blank" rel="noopener noreferrer">🟢 WhatsApp</a></li>
                                    <li role="none"><a role="menuitem" href="https://t.me/rostovpotolki" target="_blank" rel="noopener noreferrer">🔵 Telegram</a></li>
                                    <li role="none">
                                        <a
                                            role="menuitem"
                                            href="#"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowOrderForm(true);
                                            }}
                                        >
                                            📋 Онлайн-заявка
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className='header__top-menu header__top-menu--bottom'>
                            <li className="header__top-item">
                                <Link href={`/${currentCity.slug}/works`} className="header__top-link">
                                    Наши работы
                                </Link>
                            </li>
                            <li className="header__top-item">
                                <Link href={`/${currentCity.slug}/reviews`} className="header__top-link">
                                    Отзывы
                                </Link>
                            </li>
                                                         <li className="header__top-item">
                                 <Link href={`/${currentCity.slug}/about`} className="header__top-link">
                                     О компании
                                 </Link>
                             </li>
                                                         <li className="header__top-item">
                                 <Link href={`/${currentCity.slug}/faq`} className="header__top-link">
                                     Частые вопросы
                                 </Link>
                             </li>
                        </ul>
                    </nav>
                    <div className="header__top-right">
                        <button
                            type="button"
                            className="header__top-link header__top-link--cta header__top-link--desktopOnly"
                            style={{
                                marginLeft: 16,
                                fontWeight: 700,
                                color: '#2563eb',
                                background: 'none',
                                border: 'none',
                                padding: '8px 18px',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                fontSize: '16px',
                                outline: 'none',
                                boxShadow: 'none',
                                lineHeight: 1.2,
                                display: 'inline-block',
                            }}
                            onClick={() => setShowOrderForm(true)}
                        >
                            Онлайн-заявка
                        </button>
                        {!isMobileMenuOpen && <CitySelector />}
                        <button
                            className={`header__burger ${isMobileMenuOpen ? 'is-open' : ''}`}
                            aria-label="Открыть меню"
                            aria-expanded={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(v => !v)}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={`header__mobile ${isMobileMenuOpen ? 'is-open' : ''}`} onClick={() => setIsMobileMenuOpen(false)}>
                <div className="header__mobile-panel" onClick={(e) => e.stopPropagation()}>
                    {/* Город, кнопка заявки и телефон в мобильном меню */}
                    <div className="header__mobile-header">
                        <div className="header__mobile-city">
                            <button
                                className="header__mobile-city-button"
                                onClick={() => setIsMobileCityOpen(!isMobileCityOpen)}
                                aria-expanded={isMobileCityOpen}
                            >
                                <span className="header__mobile-city-icon">📍</span>
                                <span className="header__mobile-city-name">{currentCity.name}</span>
                                <span className={`header__mobile-city-arrow ${isMobileCityOpen ? 'is-open' : ''}`}>▾</span>
                            </button>
                            
                            {isMobileCityOpen && (
                                <div className="header__mobile-city-dropdown">
                                    <div className="header__mobile-city-section">
                                        <h4 className="header__mobile-city-section-title">Основные города</h4>
                                        <ul className="header__mobile-city-list">
                                            {cities.filter(city => city.isMain).map((city) => (
                                                <li key={city.id}>
                                                    <Link
                                                        href={`/${city.slug}`}
                                                        className={`header__mobile-city-option ${currentCity.id === city.id ? 'is-active' : ''}`}
                                                        onClick={() => handleCitySelect()}
                                                    >
                                                        {city.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="header__mobile-city-section">
                                        <h4 className="header__mobile-city-section-title">Окрестности Батайска</h4>
                                        <ul className="header__mobile-city-list">
                                            {cities.filter(city => !city.isMain && !city.isDistant).map((city) => (
                                                <li key={city.id}>
                                                    <Link
                                                        href={`/${city.slug}`}
                                                        className={`header__mobile-city-option ${currentCity.id === city.id ? 'is-active' : ''}`}
                                                        onClick={() => handleCitySelect()}
                                                    >
                                                        {city.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="header__mobile-city-section">
                                        <h4 className="header__mobile-city-section-title">Дальние города</h4>
                                                                                  <p className="header__mobile-city-note">
                                             Работаем при заказах от 100,000₽<br/>
                                             Замер 2000₽ (возврат при заказе)
                                          </p>
                                        <ul className="header__mobile-city-list">
                                            <li>
                                                <Link 
                                                    href="/distant-cities" 
                                                    className="header__mobile-city-option header__mobile-city-option--link"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    Таганрог, Шахты, Азов и др.
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Кнопка онлайн-заявки между городом и телефоном */}
                        <button
                            type="button"
                            className="header__mobile-cta"
                            style={{
                                width: '100%',
                                background: '#2563eb',
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '16px',
                                border: 'none',
                                borderRadius: '12px',
                                padding: '16px 0',
                                marginTop: '8px',
                                marginBottom: '8px',
                                cursor: 'pointer',
                                boxShadow: '0 4px 20px rgba(37,99,235,0.10)',
                                transition: 'background 0.2s',
                            }}
                            onClick={() => { setShowOrderForm(true); setIsMobileMenuOpen(false); }}
                        >
                            📋 Онлайн-заявка
                        </button>
                        
                        <div className="header__mobile-phone">
                            <a href="tel:+79895234952" className="header__mobile-phone-link">
                                <span className="header__mobile-phone-icon">📞</span>
                                <span className="header__mobile-phone-number">+7 (989) 523-49-52</span>
                            </a>
                            <span className="header__mobile-phone-note">Бесплатная консультация</span>
                        </div>
                    </div>
                    
                    <ul className="header__mobile-list">
                        <li><Link href={`/${currentCity.slug}`} onClick={() => setIsMobileMenuOpen(false)}>Главная</Link></li>
                        <li><Link href={`/${currentCity.slug}/catalog`} onClick={() => setIsMobileMenuOpen(false)}>Каталог</Link></li>
                        <li><Link href={`/${currentCity.slug}/services`} onClick={() => setIsMobileMenuOpen(false)}>Услуги</Link></li>
                        <li><Link href={`/${currentCity.slug}/calculator`} onClick={() => setIsMobileMenuOpen(false)}>Калькулятор цен</Link></li>
                        <li><Link href={`/${currentCity.slug}/works`} onClick={() => setIsMobileMenuOpen(false)}>Наши работы</Link></li>
                        <li><Link href={`/${currentCity.slug}/reviews`} onClick={() => setIsMobileMenuOpen(false)}>Отзывы</Link></li>
                    </ul>
                    
                    {/* Социальные сети */}
                    <div className="header__mobile-social">
                        <h4 className="header__mobile-social-title">Мы в соцсетях</h4>
                        <div className="header__mobile-social-grid">
                                                         <a href="https://wa.me/79895234952" target="_blank" rel="noopener noreferrer" className="header__mobile-social-link">
                                <div className="header__mobile-social-icon header__mobile-social-icon--whatsapp">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="currentColor"/>
                                    </svg>
                                </div>
                            </a>
                            <a href="https://t.me/rostovpotolki" target="_blank" rel="noopener noreferrer" className="header__mobile-social-link">
                                <div className="header__mobile-social-icon header__mobile-social-icon--telegram">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="currentColor"/>
                                    </svg>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            {showOrderForm && (
  <div className="orderForm-overlay" style={{zIndex: 2000}}>
    <OrderForm onClose={() => setShowOrderForm(false)} />
  </div>
)}
            <div className="container">
                <div className="header__bottom">
                    {/* Мобильная версия header_bottom */}
                    <div className="header__bottom-mobile">
                        {/* Верхняя секция с телефоном и временем работы */}
                        <div className="header__bottom-mobile-top">
                            <div className="header__bottom-mobile-contact">
                                <div className="header__bottom-mobile-phone">
                                    <span className="header__bottom-mobile-phone-icon">📞</span>
                                                                         <a href="tel:+79895234952" className="header__bottom-mobile-phone-link">+7 (989) 523-49-52</a>
                                </div>
                                <div className="header__bottom-mobile-info">
                                    <span className="header__bottom-mobile-consultation">Бесплатная консультация</span>
                                    <span className="header__bottom-mobile-work">🕓 Работаем ежедневно с 8:00 до 22:00</span>
                                </div>
                            </div>
                        </div>

                        {/* Средняя секция со статистикой */}
                        <div className="header__bottom-mobile-stats">
                            <div className="header__bottom-mobile-stat">
                                <span className="header__bottom-mobile-stat-number">500+</span>
                                <span className="header__bottom-mobile-stat-text">довольных клиентов</span>
                            </div>
                            <div className="header__bottom-mobile-stat">
                                <span className="header__bottom-mobile-stat-number">19 лет</span>
                                <span className="header__bottom-mobile-stat-text">на рынке</span>
                            </div>
                            <div className="header__bottom-mobile-stat">
                                <span className="header__bottom-mobile-stat-number">15 лет</span>
                                <span className="header__bottom-mobile-stat-text">гарантия</span>
                            </div>
                        </div>

                        {/* Нижняя секция с кнопками */}
                        <div className="header__bottom-mobile-actions">
                            {/* Основные кнопки */}
                            <div className="header__bottom-mobile-main-buttons">
                                <Link href={`/${currentCity.slug}/catalog`} className="header__bottom-mobile-btn header__bottom-mobile-btn--primary">
                                    <span className="header__bottom-mobile-btn-icon">📋</span>
                                    <span className="header__bottom-mobile-btn-text">Каталог</span>
                                </Link>
                                <Link href={`/${currentCity.slug}/works`} className="header__bottom-mobile-btn header__bottom-mobile-btn--secondary">
                                    <span className="header__bottom-mobile-btn-icon">📷</span>
                                    <span className="header__bottom-mobile-btn-text">Примеры работ</span>
                                </Link>
                            </div>

                            {/* Дополнительные кнопки */}
                            <div className="header__bottom-mobile-extra-buttons">
                                <Link href={`/${currentCity.slug}/reviews`} className="header__bottom-mobile-btn header__bottom-mobile-btn--reviews">
                                    <span className="header__bottom-mobile-btn-icon">⭐</span>
                                    <span className="header__bottom-mobile-btn-text">Отзывы</span>
                                </Link>
                                <Link href={`/${currentCity.slug}/calculator`} className="header__bottom-mobile-btn header__bottom-mobile-btn--calculator">
                                    <span className="header__bottom-mobile-btn-icon">🧮</span>
                                    <span className="header__bottom-mobile-btn-text">Калькулятор</span>
                                </Link>
                            </div>

                            {/* Гарантии */}
                            <div className="header__bottom-mobile-guarantees">
                                <div className="header__bottom-mobile-guarantee">
                                    <span className="header__bottom-mobile-guarantee-icon">✅</span>
                                    <span className="header__bottom-mobile-guarantee-text">Гарантия качества</span>
                                </div>
                                <div className="header__bottom-mobile-guarantee">
                                    <span className="header__bottom-mobile-guarantee-icon">💰</span>
                                    <span className="header__bottom-mobile-guarantee-text">Без предоплаты</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Десктопная версия header_bottom (скрыта на мобильных) */}
                    <div className="header__bottom-desktop">
                        <div className="header__bottom-left">
                            <div className="header__bottom-logo">
                                📞
                                <div className="header__bottom-box">
                                                                         <a href="tel:+79895234952" className="header__bottom-phone">+7 (989) 523-49-52</a>
                                    <span className="header__bottom-consultation">Бесплатная консультация</span>
                                </div>
                            </div>
                            <p className="header__bottom-work">🕓 Работаем ежедневно с 8:00 до 22:00</p>
                        </div>
                        <div className="header__bottom-center">
                            <div className="header__bottom-wrapper">
                                <p className="header__bottom-title">500+</p>
                                <p className="header__bottom-text">ДОВОЛЬНЫХ КЛИЕНТОВ</p>
                            </div>
                            <div className="header__bottom-wrapper">
                                <p className="header__bottom-title">19 лет</p>
                                <p className="header__bottom-text">НА РЫНКЕ</p>
                            </div>
                            <div className="header__bottom-wrapper">
                                <p className="header__bottom-title">15 лет</p>
                                <p className="header__bottom-text">ГАРАНТИЯ</p>
                            </div>
                        </div>
                        <div className="header__bottom-right">
                            <div className="header__bottom-boxe">
                                <Link href={`/${currentCity.slug}/catalog`} className="header__bottom-link header__bottom-link--catalog">📋 Каталог</Link>
                                <Link href={`/${currentCity.slug}/works`} className="header__bottom-link header__bottom-link--bg">📷 Примеры работ</Link>
                                <Link href={`/${currentCity.slug}/reviews`} className="header__bottom-link header__bottom-link--border">⭐ Отзывы клиентов</Link>
                            </div>
                            <div className="header__bottom-boxe">
                                <p className="header__bottom-info">
                                    ✅ Гарантия качества
                                </p>
                                <p className="header__bottom-info">
                                    💰 Без предоплаты
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;