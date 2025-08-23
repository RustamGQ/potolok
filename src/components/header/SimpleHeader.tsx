"use client";
import './header.scss';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

function SimpleHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const topRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const updateTopHeightVar = () => {
            const topEl = topRef.current;
            if (!topEl) return;
            const height = topEl.offsetHeight;
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

    return (
        <header className="header">
            <div ref={topRef} className="header__top-fixed">
                <div className="container container-header">
                    <div className="header__top">
                        <Link href="/" className="header__top-logo">
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
                                        <stop offset="0%" stopColor="#3b82f6"/>
                                        <stop offset="50%" stopColor="#60a5fa"/>
                                        <stop offset="100%" stopColor="#93c5fd"/>
                                    </linearGradient>
                                    <linearGradient id="circleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#3b82f6"/>
                                        <stop offset="100%" stopColor="#60a5fa"/>
                                    </linearGradient>
                                    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#1e293b"/>
                                        <stop offset="100%" stopColor="#334155"/>
                                    </linearGradient>
                                    <linearGradient id="underlineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#3b82f6"/>
                                        <stop offset="100%" stopColor="#60a5fa"/>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Link>

                        <nav className="header__top-nav">
                            <ul className='header__top-menu'>
                                <li className="header__top-item">
                                    <Link href="/about" className="header__top-link">
                                        О компании
                                    </Link>
                                </li>
                                <li className="header__top-item">
                                    <Link href="/services" className="header__top-link">
                                        Услуги
                                    </Link>
                                </li>
                                <li className="header__top-item">
                                    <Link href="/calculator" className="header__top-link">
                                        Калькулятор
                                    </Link>
                                </li>
                                <li className="header__top-item">
                                    <Link href="/works" className="header__top-link">
                                        Наши работы
                                    </Link>
                                </li>
                                <li className="header__top-item">
                                    <Link href="/reviews" className="header__top-link">
                                        Отзывы
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="header__top-contacts">
                            <div className="header__top-phone">
                                                                 <a href="tel:+79895234952" className="header__top-phone-link">
                                     +7 (989) 523-49-52
                                 </a>
                            </div>
                            <button className="header__top-callback">
                                <span>Позвонить</span>
                            </button>
                        </div>

                        <button
                            className={`header__mobile-toggle ${isMobileMenuOpen ? 'is-active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Открыть меню"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Мобильное меню */}
            {isMobileMenuOpen && (
                <div className="header__mobile-menu">
                    <div className="container">
                        <nav className="header__mobile-nav">
                            <ul className="header__mobile-list">
                                <li>
                                    <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                                        О компании
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services" onClick={() => setIsMobileMenuOpen(false)}>
                                        Услуги
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/calculator" onClick={() => setIsMobileMenuOpen(false)}>
                                        Калькулятор
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/works" onClick={() => setIsMobileMenuOpen(false)}>
                                        Наши работы
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/reviews" onClick={() => setIsMobileMenuOpen(false)}>
                                        Отзывы
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        
                        <div className="header__mobile-contacts">
                                                         <a href="tel:+79895234952" className="header__mobile-phone">
                                 +7 (989) 523-49-52
                             </a>
                            <button className="header__mobile-callback">
                                Заказать звонок
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default SimpleHeader;

