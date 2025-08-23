"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Натяжные потолки Ростов-на-Дону",
  "image": "https://potolkivip-rnd.ru/img/work-1.webp",
  "@id": "https://potolkivip-rnd.ru/",
  "url": "https://potolkivip-rnd.ru/",
  "telephone": "+7 (989) 523-49-52",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ростов-на-Дону",
    "addressRegion": "Ростовская область",
    "addressCountry": "RU"
  },
  "openingHours": "Mo-Su 09:00-21:00",
  "priceRange": "₽₽",
  "email": "potolokrostov1@gmail.com",
  "description": "Натяжные потолки в Ростове-на-Дону, Батайске, Аксае и области. Бесплатный замер, монтаж за 1 день, гарантия 3 года. Цены от 1200₽/м²."
};

const faqJsonLd = [
  {
    "@type": "Question",
    "name": "Сколько стоит установка натяжных потолков?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Базовые цены начинаются от 1200₽/м². Точную стоимость рассчитываем при бесплатном замере."
    }
  },
  {
    "@type": "Question",
    "name": "Как долго устанавливаются натяжные потолки?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Стандартная комната 15-20м² устанавливается за 3-4 часа. Многоуровневые конструкции могут занять 1-2 дня."
    }
  },
  {
    "@type": "Question",
    "name": "Какие гарантии предоставляете?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Гарантия 3 года на материалы и 1 год на монтажные работы."
    }
  }
];

const productJsonLd = (product: { name?: string; image?: string; description?: string; price?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product?.name || "Натяжной потолок",
  "image": product?.image || "https://potolkivip-rnd.ru/img/work-1.webp",
  "description": product?.description || "Качественный натяжной потолок с гарантией.",
  "brand": {
    "@type": "Brand",
    "name": "ПОТОЛКИ"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "RUB",
    "price": product?.price || "1200",
    "availability": "https://schema.org/InStock",
    "url": typeof window !== 'undefined' ? window.location.href : ''
  }
});

const breadcrumbJsonLd = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, idx) => ({
    "@type": "ListItem",
    "position": idx + 1,
    "name": item.name,
    "item": item.url
  }))
});

interface JsonLdWrapperProps {
  product?: {
    name?: string;
    image?: string;
    description?: string;
    price?: string;
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
}

export default function JsonLdWrapper({ product, breadcrumbs }: JsonLdWrapperProps) {
  const pathname = usePathname();
  let jsonLd = null;

  if (pathname === '/' || pathname.startsWith('/rostov')) {
    jsonLd = businessJsonLd;
  }
  if (pathname.includes('/faq')) {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqJsonLd
    };
  }
  if (product) {
    jsonLd = productJsonLd(product);
  }
  if (breadcrumbs) {
    jsonLd = breadcrumbJsonLd(breadcrumbs);
  }

  if (!jsonLd) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

