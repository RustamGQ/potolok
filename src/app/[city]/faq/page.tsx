import { Metadata } from 'next';
import { getCityBySlug, cities } from '../../../lib/cities';
import { notFound } from 'next/navigation';
import { generatePageMetadata, generatePageContent } from '../../../lib/page-generator';
import '../../../styles/faq.scss';

interface FAQPageProps {
  params: Promise<{
    city: string;
  }>;
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: FAQPageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const seoMeta = generatePageMetadata(citySlug, 'faq');
  
  if (!seoMeta) {
    return {
      title: 'FAQ - ПОТОЛКИ',
      description: 'Ответы на частые вопросы о натяжных потолках. Цены, сроки, гарантии, материалы.'
    };
  }

  return {
    title: seoMeta.title,
    description: seoMeta.description,
    keywords: seoMeta.keywords,
    openGraph: seoMeta.openGraph,
    alternates: {
              canonical: `https://potolkivip-rnd.ru/${citySlug}/faq`
    }
  };
}

export default async function FAQPage({ params }: FAQPageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);
  
  if (!city) {
    notFound();
  }

  const pageContent = generatePageContent(citySlug, 'faq');

  return (
    <section className="faq-page">
      <div className="container">
        <div className="faq-page__header">
          <h1 className="faq-page__title">Частые вопросы о натяжных потолках в {city.name}</h1>
          <p className="faq-page__subtitle">
            Ответы на самые популярные вопросы наших клиентов в {city.name}. 
            Если не нашли ответ на свой вопрос - свяжитесь с нами!
          </p>
        </div>

        <div className="faq-page__content">
          <div className="faq-list">
            {pageContent && 'faq' in pageContent && Array.isArray(pageContent.faq) ? 
              pageContent.faq.map((item, index) => (
                <div key={index} className="faq-item">
                  <details className="faq-item__details">
                    <summary className="faq-item__question">
                      {item.question}
                      <span className="faq-item__icon">+</span>
                    </summary>
                    <div className="faq-item__answer">
                      <p>{item.answer}</p>
                    </div>
                  </details>
                </div>
              )) : null}
          </div>

          <div className="faq-page__contact">
            <h3>Не нашли ответ на свой вопрос?</h3>
            <p>Свяжитесь с нами любым удобным способом и получите бесплатную консультацию</p>
            <div className="faq-page__contact-buttons">
              <a href="tel:+79895234952" className="faq-page__contact-btn faq-page__contact-btn--phone">
                📞 Позвонить
              </a>
              <a href="https://wa.me/79895234952" className="faq-page__contact-btn faq-page__contact-btn--whatsapp">
                💬 WhatsApp
              </a>
              <a href="https://t.me/rostovpotolki" className="faq-page__contact-btn faq-page__contact-btn--telegram">
                📱 Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
