"use client";

import './about.scss';
import { useCity } from '../../contexts/CityContext';
import { City } from '../../types/city';

interface AboutProps {
    city?: City;
    content?: {
        title: string;
        description: string;
    };
}

function About({ city, content }: AboutProps) {
    const { currentCity } = useCity();
    const displayCity = city || currentCity;
    return (
        <section className="about" id="about">
            {/* Декоративный фон */}
            <div className="about__bg">
                <div className="about__floating-circles">
                    <div className="about__circle about__circle--1"></div>
                    <div className="about__circle about__circle--2"></div>
                    <div className="about__circle about__circle--3"></div>
                </div>
                <div className="about__geometric-shapes">
                    <div className="about__shape about__shape--triangle"></div>
                    <div className="about__shape about__shape--square"></div>
                </div>
            </div>

            <div className="container">
                <div className="about__layout">
                    {/* Заголовок секции */}
                    <div className="about__header">
                        <div className="about__badge">
                            <span className="about__badge-text">О компании</span>
                            <div className="about__badge-icon">🏢</div>
                        </div>
                        <h2 className="about__title">
                            {content?.title || (
                                <>
                                    О нашей <span className="about__title-accent">компании</span>
                                </>
                            )}
                        </h2>
                        <p className="about__subtitle">
                            {content?.description || `Мы специализируемся на установке качественных натяжных потолков в ${displayCity.name} и области. 
                            Более 10 лет опыта, сотни довольных клиентов, гарантия качества на все работы.`}
                        </p>
                    </div>

                    {/* Основной контент */}
                    <div className="about__content">
                        {/* Левая колонка - информация */}
                        <div className="about__info">
                            {/* Статистика */}
                            <div className="about__stats">
                                <div className="about__stat-card">
                                    <div className="about__stat-number">19+</div>
                                    <div className="about__stat-label">лет опыта</div>
                                </div>
                                <div className="about__stat-card">
                                    <div className="number">4,850+</div>
                                    <div className="about__stat-label">довольных клиентов</div>
                                </div>
                                <div className="about__stat-card">
                                    <div className="about__stat-number">5 лет</div>
                                    <div className="about__stat-label">гарантия на монтаж</div>
                                </div>
                                <div className="about__stat-card">
                                    <div className="about__stat-number">15 лет</div>
                                    <div className="about__stat-label">гарантия на материалы</div>
                                </div>
                            </div>

                            {/* Описание компании */}
                            <div className="about__description">
                                <h3 className="about__description-title">Почему выбирают нас?</h3>
                                <div className="about__features">
                                    <div className="about__feature">
                                        <div className="about__feature-icon">✨</div>
                                        <div className="about__feature-content">
                                            <h4 className="about__feature-title">Качественные материалы</h4>
                                            <p className="about__feature-text">
                                                Работаем только с проверенными европейскими производителями: BAUF, MSD, TEQTUM. Все материалы имеют сертификаты качества и гарантию от производителя до 15 лет.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about__feature">
                                        <div className="about__feature-icon">🔧</div>
                                        <div className="about__feature-content">
                                            <h4 className="about__feature-title">Опытные мастера</h4>
                                            <p className="about__feature-text">
                                                Наша команда - это квалифицированные специалисты с многолетним опытом установки натяжных потолков. Каждый мастер прошел обучение и регулярно повышает квалификацию.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about__feature">
                                        <div className="about__feature-icon">💎</div>
                                        <div className="about__feature-content">
                                            <h4 className="about__feature-title">Индивидуальный подход</h4>
                                            <p className="about__feature-text">
                                                Каждый проект уникален. Мы внимательно изучаем особенности помещения, учитываем все пожелания клиента и предлагаем оптимальные решения для конкретной ситуации.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about__feature">
                                        <div className="about__feature-icon">🚀</div>
                                        <div className="about__feature-content">
                                            <h4 className="about__feature-title">Быстрая установка</h4>
                                            <p className="about__feature-text">
                                                Монтаж натяжного потолка занимает всего 2-4 часа. Работаем чисто, аккуратно, без лишней пыли и грязи. После установки сразу можно заселяться в помещение.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about__feature">
                                        <div className="about__feature-icon">🛡️</div>
                                        <div className="about__feature-content">
                                            <h4 className="about__feature-title">Гарантия и сервис</h4>
                                            <p className="about__feature-text">
                                                Предоставляем гарантию 3 года на монтажные работы и до 15 лет на материалы. Осуществляем сервисное обслуживание и ремонт в течение всего гарантийного срока.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about__feature">
                                        <div className="about__feature-icon">💰</div>
                                        <div className="about__feature-content">
                                            <h4 className="about__feature-title">Прозрачные цены</h4>
                                            <p className="about__feature-text">
                                                Никаких скрытых доплат! Точная стоимость рассчитывается при бесплатном замере. Работаем без предоплаты - оплата только после завершения работ.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Правая колонка - преимущества и процесс работы */}
                        <div className="about__visual">
                            {/* Наши преимущества */}
                            <div className="about__advantages">
                                <h3 className="about__advantages-title">Наши преимущества</h3>
                                <div className="about__advantages-grid">
                                    <div className="about__advantage">
                                        <div className="about__advantage-icon">📐</div>
                                        <div className="about__advantage-content">
                                            <h4>Бесплатный замер</h4>
                                            <p>Выезжаем в любое удобное время. Точный расчет стоимости на месте.</p>
                                        </div>
                                    </div>
                                    <div className="about__advantage">
                                        <div className="about__advantage-icon">⚡</div>
                                        <div className="about__advantage-content">
                                            <h4>Быстрый монтаж</h4>
                                            <p>Устанавливаем потолки за 1 день. Без грязи и пыли.</p>
                                        </div>
                                    </div>
                                    <div className="about__advantage">
                                        <div className="about__advantage-icon">🎨</div>
                                        <div className="about__advantage-content">
                                            <h4>Любые цвета и фактуры</h4>
                                            <p>Более 100 вариантов цветов. Матовые, глянцевые, сатиновые.</p>
                                        </div>
                                    </div>
                                    <div className="about__advantage">
                                        <div className="about__advantage-icon">💡</div>
                                        <div className="about__advantage-content">
                                            <h4>Встроенное освещение</h4>
                                            <p>Устанавливаем светильники, LED-ленты, подсветку.</p>
                                        </div>
                                    </div>
                                    <div className="about__advantage">
                                        <div className="about__advantage-icon">✨</div>
                                        <div className="about__advantage-content">
                                            <h4>Световые линии</h4>
                                            <p>Современные потолки со встроенными световыми линиями для уникальной атмосферы.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Процесс работы */}
                            <div className="about__process">
                                <h3 className="about__process-title">Как мы работаем</h3>
                                <div className="about__process-steps">
                                    <div className="about__step">
                                        <div className="about__step-number">01</div>
                                        <div className="about__step-content">
                                            <h4>Бесплатный замер</h4>
                                            <p>Выезжаем к вам, замеряем помещение, обсуждаем варианты</p>
                                        </div>
                                    </div>
                                    <div className="about__step">
                                        <div className="about__step-number">02</div>
                                        <div className="about__step-content">
                                            <h4>Расчет стоимости</h4>
                                            <p>Предоставляем точную смету с учетом всех материалов и работ</p>
                                        </div>
                                    </div>
                                    <div className="about__step">
                                        <div className="about__step-number">03</div>
                                        <div className="about__step-content">
                                            <h4>Заключение договора</h4>
                                            <p>Подписываем договор с гарантиями и фиксированной ценой</p>
                                        </div>
                                    </div>
                                    <div className="about__step">
                                        <div className="about__step-number">04</div>
                                        <div className="about__step-content">
                                            <h4>Установка потолка</h4>
                                            <p>Выполняем монтаж в оговоренные сроки с гарантией качества</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA секция */}
                    <div className="about__cta">
                        <div className="about__cta-content">
                            <h3 className="about__cta-title">
                                Готовы преобразить свой интерьер?
                            </h3>
                            <p className="about__cta-text">
                                Получите бесплатную консультацию и точный расчет стоимости вашего проекта уже сегодня
                            </p>
                            <div className="about__cta-actions">
                                <a href="tel:+79895234952" className="about__cta-btn about__cta-btn--primary">
                                    📞 Позвонить сейчас
                                </a>
                                <a href="https://wa.me/79895234952" className="about__cta-btn about__cta-btn--secondary">
                                    💬 Написать в WhatsApp
                                </a>
                            </div>
                        </div>
                        <div className="about__cta-info">
                            <div className="about__info-item">
                                <span className="about__info-icon">🕐</span>
                                <span className="about__info-text">Работаем ежедневно с 8:00 до 22:00</span>
                            </div>
                            <div className="about__info-item">
                                <span className="about__info-icon">📐</span>
                                <span className="about__info-text">Бесплатный замер в удобное время</span>
                            </div>
                            <div className="about__info-item">
                                <span className="about__info-icon">💰</span>
                                <span className="about__info-text">Без предоплаты - оплата после работ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;