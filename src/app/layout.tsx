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
  keywords: "натяжные потолки ростов, потолки ростов, установка потолков ростов, натяжные потолки батайск, потолки аксай, цены на потолки, потолки от производителя, натяжные потолки батайск, натяжные потолки аксай, натяжные потолки ростов-на-дону, потолки ростов-на-дону, потолки батайск, потолки аксай, монтаж потолков ростов, натяжные потолки цена ростов 2025",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  },
  authors: [{ name: "ПОТОЛКИ - Натяжные потолки Ростов-на-Дону" }],
  creator: "ПОТОЛКИ",
  publisher: "ПОТОЛКИ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    creator: '@potolki_rnd',
    site: '@potolki_rnd',
  },
  other: {
    'revisit-after': '7 days',
    'rating': 'general',
    'distribution': 'global',
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
        {/* Favicon: .ico + .png для кросс-браузерной поддержки */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Доп. fallback на SVG (не обязателен для Яндекса) */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        
        {/* Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        
        {/* Кэширование и индексация */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        {/* Явное резервное описание на случай отсутствия метаданных страницы */}
        <meta name="description" content="🏠 Натяжные потолки в Ростове-на-Дону от профессионалов! Бесплатный замер, монтаж за 1 день, гарантия. Цены от 330₽/м²." />
        
        {/* Дополнительные мета-теги для улучшения SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Структурированные данные для улучшения поисковой выдачи */}
        <meta name="application-name" content="ПОТОЛКИ" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Geo локация для улучшения локального SEO */}
        <meta name="geo.region" content="RU-ROS" />
        <meta name="geo.placename" content="Ростов-на-Дону" />
        <meta name="geo.position" content="47.222078;39.720358" />
        <meta name="ICBM" content="47.222078, 39.720358" />
        
        {/* Hreflang для лучшей индексации */}
        <link rel="alternate" hrefLang="ru" href="https://potolkivip-rnd.ru/" />
        <link rel="alternate" hrefLang="x-default" href="https://potolkivip-rnd.ru/" />
        
        {/* Preconnect для улучшения производительности */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://api.airtable.com" />
        <link rel="dns-prefetch" href="https://api.sendgrid.com" />
        
        {/* Дополнительные мета-теги для поисковиков */}
        <meta name="author" content="ПОТОЛКИ - Натяжные потолки Ростов-на-Дону" />
        <meta name="copyright" content="ПОТОЛКИ 2025" />
        <meta name="language" content="Russian" />
        <meta name="revisit-after" content="7 days" />
        <meta name="coverage" content="Worldwide" />
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
