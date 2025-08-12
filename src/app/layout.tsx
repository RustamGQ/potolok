import type { Metadata } from "next";
import { Inter, Roboto } from 'next/font/google';
import DynamicHeader from "../components/header/DynamicHeader";
import JsonLdWrapper from "../components/JsonLd/JsonLdWrapper";
import CityProvider from "../contexts/CityContext";
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
  metadataBase: new URL('https://rustamgq.github.io'),
  title: "Натяжные потолки в Ростове-на-Дону - Установка от 405₽/м² | ПОТОЛКИ",
  description: "Натяжные потолки в Ростове-на-Дону от профессионалов. Бесплатный замер, монтаж за 1 день, гарантия 15 лет. Цены от 405₽/м². Звоните!",
  keywords: "натяжные потолки ростов, потолки ростов, установка потолков ростов, натяжные потолки батайск, потолки аксай, цены на потолки",
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'ПОТОЛКИ',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${roboto.variable}`}>
      <body className={inter.className}>
        <CityProvider>
          <JsonLdWrapper />
          <DynamicHeader />
          {children}
        </CityProvider>
      </body>
    </html>
  );
}
