"use client";

import React from 'react';
import { useCity } from '../../contexts/CityContext';

interface JsonLdProps {
  type: 'organization' | 'localBusiness' | 'service';
}

export default function JsonLd({ type }: JsonLdProps) {
  const { currentCity } = useCity();

  const getOrganizationData = () => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ПОТОЛКИ - Натяжные потолки",
    "url": "https://potolkivip-rnd.ru",
    "logo": "https://potolkivip-rnd.ru/logo.png",
    "description": `Профессиональная установка натяжных потолков в ${currentCity.name}. Бесплатный замер, гарантия качества, выгодные цены.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": currentCity.name,
      "addressRegion": "Ростовская область",
      "addressCountry": "RU"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+79895234952",
      "contactType": "customer service",
      "availableLanguage": "Russian"
    },
    "sameAs": [
      "https://t.me/rostovpotolki"
    ]
  });

  const getLocalBusinessData = () => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Натяжные потолки в ${currentCity.name}`,
    "description": `Установка натяжных потолков в ${currentCity.name}. Профессиональный монтаж, бесплатный замер, гарантия качества.`,
    "url": `https://potolkivip-rnd.ru/${currentCity.slug}`,
    "telephone": "+79895234952",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": currentCity.name,
      "addressRegion": "Ростовская область",
      "addressCountry": "RU"
    },
    "geo": currentCity.coordinates ? {
      "@type": "GeoCoordinates",
      "latitude": currentCity.coordinates.lat,
      "longitude": currentCity.coordinates.lng
    } : undefined,
    "openingHours": "Mo-Su 08:00-22:00",
    "priceRange": "405₽-1030₽",
    "areaServed": {
      "@type": "City",
      "name": currentCity.name
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": currentCity.coordinates ? {
        "@type": "GeoCoordinates",
        "latitude": currentCity.coordinates.lat,
        "longitude": currentCity.coordinates.lng
      } : undefined,
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Натяжные потолки",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Матовые натяжные потолки",
            "description": "Классические матовые потолки BAUF 205"
          },
          "price": "405",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "405",
            "priceCurrency": "RUB",
            "unitText": "м²"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Глянцевые натяжные потолки",
            "description": "Блестящие глянцевые потолки BAUF 205"
          },
          "price": "415",
          "priceCurrency": "RUB",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "415",
            "priceCurrency": "RUB",
            "unitText": "м²"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1200",
      "bestRating": "5",
      "worstRating": "1"
    }
  });

  const getServiceData = () => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Натяжные потолки в ${currentCity.name}`,
    "description": `Профессиональная установка натяжных потолков в ${currentCity.name}. Бесплатный замер, монтаж за 1 день, гарантия 3 года.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ПОТОЛКИ",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": currentCity.name,
        "addressRegion": "Ростовская область",
        "addressCountry": "RU"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": currentCity.name
    },
    "serviceType": "Установка натяжных потолков",
    "offers": {
      "@type": "Offer",
      "price": "405",
      "priceCurrency": "RUB",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "price": "405",
        "priceCurrency": "RUB",
        "unitText": "м²"
      },
      "availability": "https://schema.org/InStock"
    }
  });

  const getData = () => {
    switch (type) {
      case 'organization':
        return getOrganizationData();
      case 'localBusiness':
        return getLocalBusinessData();
      case 'service':
        return getServiceData();
      default:
        return getOrganizationData();
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getData())
      }}
    />
  );
}
