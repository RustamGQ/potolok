'use client';

import Link from 'next/link';
import './footer.scss';

function Footer() {
    const currentYear = new Date().getFullYear();

    const services = [
        { name: "Каталог", href: "/catalog" },
        { name: "Услуги", href: "/services" },
    ];

    const company = [
        { name: "О компании", href: "/about" },
        { name: "Наши работы", href: "/works" },
        { name: "Отзывы клиентов", href: "/reviews" },
    ];

    const regions = [
        { name: "Натяжные потолки Ростов-на-Дону", href: "/rostov" },
        { name: "Потолки Батайск", href: "/bataysk" },
        { name: "Потолки Аксай", href: "/aksay" },
        { name: "Потолки Азов", href: "/azov" },
        { name: "Потолки Новочеркасск", href: "/novocherkassk" }
    ];

    const socialLinks = [
        { 
            name: "WhatsApp", 
            href: "https://wa.me/79895234952?text=Здравствуйте! Хочу заказать натяжные потолки", 
            icon: "M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 2.125.554 4.122 1.525 5.854L0 24l6.221-1.516C7.925 23.436 9.875 24 12 24c6.627 0 12-5.373 12-12z M12 22c-1.78 0-3.473-.456-4.94-1.258l-.354-.21-3.681.897.917-3.626-.23-.374C2.464 15.96 2 14.03 2 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z M17.7 14.45c-.275-.138-1.627-.803-1.88-.895-.252-.092-.436-.138-.622.138-.185.276-.718.895-.88 1.08-.162.184-.324.207-.598.069-.276-.138-1.162-.428-2.213-1.365-.818-.73-1.371-1.632-1.532-1.908-.162-.276-.017-.426.121-.563.124-.124.276-.324.414-.486.138-.162.184-.276.276-.461.092-.184.046-.346-.023-.484-.069-.138-.622-1.498-.853-2.052-.225-.54-.454-.467-.622-.475-.162-.008-.346-.008-.53-.008-.184 0-.484.069-.737.346-.253.276-.967.945-.967 2.304s.99 2.673 1.128 2.858c.138.184 1.949 2.975 4.723 4.173.661.286 1.177.457 1.579.585.664.21 1.269.18 1.747.109.533-.08 1.627-.666 1.857-1.31.23-.644.23-1.196.162-1.31-.069-.115-.253-.184-.53-.324z", 
            color: "#25D366" 
        },
        { 
            name: "Telegram", 
            href: "https://t.me/rostovpotolki", 
            icon: "M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12z M12.3 8.7c-1.1.5-3.3 1.4-6.6 2.7-.9.4-.9.8-.2 1l1.7.5c.8.3 1.9.1 2.4-.1 2.7-1.8 4.1-2.8 4.2-2.9.1-.1.3-.1.2.1-.1.2-1.6 1.6-2.4 2.4-.3.3-.2.6 0 .8l3 2.1c.5.4 1-.1.8-.6l-1.2-5.8c-.2-.9-.7-1-1.2-.7z", 
            color: "#0088cc" 
        },
    ];

    const achievements = [
        { number: "2000+", text: "Довольных клиентов" },
        { number: "19", text: "Лет на рынке" },
        { number: "15", text: "Лет гарантии" },
    ];

    const handleCtaClick = (type: 'consultation' | 'measurement') => {
        const phone = "+79895234952";
        const message = type === 'consultation' 
            ? "Здравствуйте! Хочу получить бесплатную консультацию по натяжным потолкам"
            : "Здравствуйте! Хочу заказать бесплатный замер помещения";
        
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
        <>
            {/* Структурированные данные для SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Натяжные потолки Ростов-на-Дону",
                        "description": "Установка натяжных потолков в Ростове-на-Дону и области. Более 7 лет опыта, 2000+ довольных клиентов, гарантия 15 лет.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Ростов-на-Дону",
                            "addressRegion": "Ростовская область",
                            "postalCode": "344002",
                            "addressCountry": "RU"
                        },
                        "telephone": "+7 (989) 523-49-52",
                        "email": "potolokrostov1@gmail.com",
                        "openingHours": "Mo-Su 09:00-21:00",
                        "areaServed": [
                            "Ростов-на-Дону",
                            "Батайск",
                            "Аксай", 
                            "Азов",
                            "Новочеркасск"
                        ],
                        "serviceType": [
                            "Установка натяжных потолков",
                            "Многоуровневые потолки",
                            "Фотопечать на потолках",
                            "Звездное небо",
                            "Парящие потолки",
                            "3D потолки"
                        ]
                    })
                }}
            />

            <footer className="footer" itemScope itemType="https://schema.org/LocalBusiness">
                <div className="footer__bg">
                    <div className="footer__decoration"></div>
                </div>

                <div className="container">
                    {/* Главный призыв к действию */}
                    <div className="footer__cta">
                        <div className="footer__cta-content">
                            <h2 className="footer__cta-title">
                                Преобразите свой дом с натяжными потолками
                            </h2>
                            <p className="footer__cta-description">
                                Бесплатная консультация, замер и расчет стоимости. 
                                Гарантия качества 15 лет.
                            </p>
                        </div>
                        <div className="footer__cta-actions">
                            <button 
                                className="footer__cta-btn footer__cta-btn--primary"
                                onClick={() => handleCtaClick('consultation')}
                                aria-label="Получить бесплатную консультацию"
                            >
                                <svg className="footer__cta-icon" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Бесплатная консультация
                            </button>
                            <button 
                                className="footer__cta-btn footer__cta-btn--secondary"
                                onClick={() => handleCtaClick('measurement')}
                                aria-label="Заказать бесплатный замер"
                            >
                                <svg className="footer__cta-icon" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Бесплатный замер
                            </button>
                        </div>
                    </div>

                    {/* Основной контент футера */}
                    <div className="footer__main">
                        {/* Колонка с брендом */}
                        <div className="footer__brand">
                            <div className="footer__logo" itemProp="logo">
                                <h3 itemProp="name">Натяжные потолки</h3>
                                <span className="footer__logo-location" itemProp="address">Ростов-на-Дону</span>
                            </div>
                            
                            <p className="footer__description" itemProp="description">
                                Ведущая компания по установке натяжных потолков в Ростове-на-Дону и области. 
                                Премиальное качество, современные технологии и индивидуальный подход к каждому клиенту.
                            </p>
                            
                            <div className="footer__achievements">
                                {achievements.map((achievement, index) => (
                                    <div key={index} className="footer__achievement">
                                        <span className="footer__achievement-number">{achievement.number}</span>
                                        <span className="footer__achievement-text">{achievement.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Услуги */}
                        <div className="footer__column">
                            <h3 className="footer__column-title">Услуги по натяжным потолкам</h3>
                            <nav className="footer__nav">
                                <ul className="footer__list">
                                    {services.map((service, index) => (
                                        <li key={index} className="footer__list-item">
                                            <a href={service.href} className="footer__link">
                                                {service.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Компания */}
                        <div className="footer__column">
                            <h3 className="footer__column-title">О компании</h3>
                            <nav className="footer__nav">
                                <ul className="footer__list">
                                    {company.map((item, index) => (
                                        <li key={index} className="footer__list-item">
                                            <a href={item.href} className="footer__link">
                                                {item.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Регионы */}
                        <div className="footer__column">
                            <h3 className="footer__column-title">Регионы работы</h3>
                            <nav className="footer__nav">
                                <ul className="footer__list">
                                    {regions.map((region, index) => (
                                        <li key={index} className="footer__list-item">
                                            <a href={region.href} className="footer__link">
                                                {region.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Контакты */}
                        <div className="footer__column footer__contact">
                            <h3 className="footer__column-title">Контакты</h3>
                            
                            <div className="footer__contact-info">
                                <div className="footer__contact-item" itemProp="telephone">
                                    <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    <div>
                                        <span className="footer__contact-label">Телефон</span>
                                        <a href="tel:+79895234952" className="footer__contact-value">
                                            +7 (989) 523-49-52
                                        </a>
                                    </div>
                                </div>

                                <div className="footer__contact-item" itemProp="email">
                                    <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
                                        <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    <div>
                                        <span className="footer__contact-label">Email</span>
                                        <a href="mailto:potolokrostov1@gmail.com" className="footer__contact-value">
                                            potolokrostov1@gmail.com
                                        </a>
                                    </div>
                                </div>



                                <div className="footer__contact-item" itemProp="openingHours">
                                    <svg className="footer__contact-icon" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                                        <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                    <div>
                                        <span className="footer__contact-label">Режим работы</span>
                                        <span className="footer__contact-value">
                                        Без выходных: 8:00 - 22:00
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Социальные сети */}
                            <div className="footer__social">
                                <h4 className="footer__social-title">Мы в соцсетях</h4>
                                <div className="footer__social-links">
                                    {socialLinks.map((social, index) => (
                                        <a 
                                            key={index}
                                            href={social.href} 
                                            className="footer__social-link"
                                            title={social.name}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{'--social-color': social.color} as React.CSSProperties}
                                            aria-label={`Подписаться на ${social.name}`}
                                        >
                                            <svg className="footer__social-icon" viewBox="0 0 24 24" fill="currentColor">
                                                <path d={social.icon}/>
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Нижняя строка */}
                    <div className="footer__bottom">
                        <div className="footer__bottom-left">
                            <p className="footer__copyright">
                                © {currentYear} Натяжные потолки Ростов-на-Дону. Все права защищены.
                            </p>
                            <nav className="footer__legal">
                                <Link href="/privacy" className="footer__legal-link">Политика конфиденциальности</Link>
                                <Link href="/terms" className="footer__legal-link">Пользовательское соглашение</Link>
                            </nav>
                        </div>
                        <div className="footer__bottom-right">
                            <button 
                                className="footer__back-to-top"
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                aria-label="Вернуться к началу страницы"
                                title="Наверх"
                            >
                                <svg viewBox="0 0 24 24" fill="none">
                                    <path d="M7 14l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;