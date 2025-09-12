import type { Metadata } from "next";
import { Inter, Roboto } from 'next/font/google';
import DynamicHeader from "../components/header/DynamicHeader";
import Footer from "../components/Footer/Footer";
import JsonLdWrapper from "../components/JsonLd/JsonLdWrapper";
import CityProvider from "../contexts/CityContext";
import GoogleAnalytics from "../components/GoogleAnalytics/GoogleAnalytics";

import "./globals.scss";

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto = Roboto({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://potolkivip-rnd.ru'),
  title: "🏠 Натяжные потолки в Ростове-на-Дону от 330₽/м² | Бесплатный замер | ПОТОЛКИ",
  description: "🏠 Натяжные потолки в Ростове-на-Дону от профессионалов! ✨ Бесплатный замер и выезд мастера! ⚡ Монтаж за 1 день! 🛡️ Гарантия 3 года! 💰 Цены от 330₽/м²! 📞 Звоните 8-800-XXX-XX-XX прямо сейчас! 🎨 Каталог потолков • 🛠️ Услуги • 📸 Наши работы • ⭐ Отзывы • ❓ FAQ • 🧮 Калькулятор",
  keywords: "натяжные потолки ростов, потолки ростов, установка потолков ростов, натяжные потолки батайск, потолки аксай, цены на потолки, потолки от производителя, натяжные потолки батайск, натяжные потолки аксай, натяжные потолки ростов-на-дону, потолки ростов-на-дону, потолки батайск, потолки аксай",
      openGraph: {
      type: 'website',
      locale: 'ru_RU',
      siteName: 'ПОТОЛКИ',
      title: "🏠 Натяжные потолки в Ростове-на-Дону от 330₽/м² | Бесплатный замер | ПОТОЛКИ",
      description: "🏠 Натяжные потолки в Ростове-на-Дону от профессионалов! ✨ Бесплатный замер и выезд мастера! ⚡ Монтаж за 1 день! 🛡️ Гарантия 3 года! 💰 Цены от 330₽/м²! 📞 Звоните 8-800-XXX-XX-XX прямо сейчас! 🎨 Каталог потолков • 🛠️ Услуги • 📸 Наши работы • ⭐ Отзывы • ❓ FAQ • 🧮 Калькулятор",
    url: 'https://potolkivip-rnd.ru/',
    images: [
      {
        url: 'https://potolkivip-rnd.ru/img/work-1.webp',
        width: 1200,
        height: 630,
        alt: 'Натяжные потолки в Ростове-на-Дону',
        type: 'image/webp',
      },
      {
        url: 'https://potolkivip-rnd.ru/img/work-1.webp',
        width: 800,
        height: 600,
        alt: 'Натяжные потолки в Ростове-на-Дону',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "🏠 Натяжные потолки в Ростове-на-Дону от 330₽/м² | Бесплатный замер | ПОТОЛКИ",
    description: "🏠 Натяжные потолки в Ростове-на-Дону от профессионалов! ✨ Бесплатный замер и выезд мастера! ⚡ Монтаж за 1 день! 🛡️ Гарантия 3 года! 💰 Цены от 330₽/м²! 📞 Звоните 8-800-XXX-XX-XX прямо сейчас! 🎨 Каталог потолков • 🛠️ Услуги • 📸 Наши работы • ⭐ Отзывы • ❓ FAQ • 🧮 Калькулятор",
    images: ['https://potolkivip-rnd.ru/img/work-1.webp'],
  },
  alternates: {
    canonical: 'https://potolkivip-rnd.ru/',
  },
  other: {
    'canonical': 'https://potolkivip-rnd.ru/',
  },
};

// ID Google Analytics (замените на ваш)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${roboto.variable}`}>
      <head>
        {/* Favicon для всех устройств */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.svg" />
        
        {/* Apple Touch Icons */}
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="apple-touch-icon-precomposed" href="/favicon.svg" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Кэширование и индексация */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        {/* Явное резервное описание на случай отсутствия метаданных страницы */}
        <meta name="description" content="🏠 Натяжные потолки в Ростове-на-Дону от профессионалов! Бесплатный замер, монтаж за 1 день, гарантия. Цены от 330₽/м²." />
        
        {/* Hreflang для лучшей индексации */}
        <link rel="alternate" hrefLang="ru" href="https://potolkivip-rnd.ru/" />
        <link rel="alternate" hrefLang="x-default" href="https://potolkivip-rnd.ru/" />
      </head>
      <body className={inter.className}>
        <CityProvider>
          <JsonLdWrapper />
          <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
          <DynamicHeader />
          {children}
          <Footer />
        </CityProvider>
      </body>
    </html>
  );
}
