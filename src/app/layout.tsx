import type { Metadata } from "next";
import { Inter, Roboto } from 'next/font/google';
import DynamicHeader from "../components/header/DynamicHeader";
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
  title: "🏠 Натяжные потолки в Ростове-на-Дону от 290₽/м² | Бесплатный замер | ПОТОЛКИ",
  description: "🏠 Натяжные потолки в Ростове-на-Дону от профессионалов! ✨ Бесплатный замер и выезд мастера! ⚡ Монтаж за 1 день! 🛡️ Гарантия 3 года! 💰 Цены от 290₽/м²! 📞 Звоните 8-800-XXX-XX-XX прямо сейчас!",
  keywords: "натяжные потолки ростов, потолки ростов, установка потолков ростов, натяжные потолки батайск, потолки аксай, цены на потолки, потолки от производителя, натяжные потолки батайск, натяжные потолки аксай, натяжные потолки ростов-на-дону, потолки ростов-на-дону, потолки батайск, потолки аксай",
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ПОТОЛКИ',
    title: "🏠 Натяжные потолки в Ростове-на-Дону от 290₽/м² | Бесплатный замер | ПОТОЛКИ",
    description: "🏠 Натяжные потолки в Ростове-на-Дону от профессионалов! ✨ Бесплатный замер и выезд мастера! ⚡ Монтаж за 1 день! 🛡️ Гарантия 3 года! 💰 Цены от 290₽/м²! 📞 Звоните 8-800-XXX-XX-XX прямо сейчас!",
    url: 'https://potolkivip-rnd.ru/',
    images: [
      {
        url: 'https://potolkivip-rnd.ru/img/work-1.webp',
        width: 1200,
        height: 630,
        alt: 'Натяжные потолки в Ростове-на-Дону',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "🏠 Натяжные потолки в Ростове-на-Дону от 290₽/м² | Бесплатный замер | ПОТОЛКИ",
    description: "🏠 Натяжные потолки в Ростове-на-Дону от профессионалов! ✨ Бесплатный замер и выезд мастера! ⚡ Монтаж за 1 день! 🛡️ Гарантия 3 года! 💰 Цены от 290₽/м²! 📞 Звоните 8-800-XXX-XX-XX прямо сейчас!",
    images: ['https://potolkivip-rnd.ru/img/work-1.webp'],
  },
  alternates: {
    canonical: 'https://potolkivip-rnd.ru/',
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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <CityProvider>
          <JsonLdWrapper />
          <GoogleAnalytics GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
          <DynamicHeader />
          {children}
        </CityProvider>
      </body>
    </html>
  );
}
