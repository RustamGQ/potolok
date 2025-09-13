import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Отключаем для работы API routes
  trailingSlash: false,
  // basePath: '/potolok', // Временно отключаем для тестирования API

  // 🚀 Оптимизация производительности
  experimental: {
    optimizePackageImports: ['@next/font'],
  },

  // Сжатие и оптимизация
  compress: true,

  // Оптимизация изображений
  images: {
    unoptimized: false, // Включаем оптимизацию изображений
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Кэширование
  generateEtags: false,

  // Настройка кэширования сборки
  onDemandEntries: {
    // период (в мс), в течение которого сервер будет ждать перед выгрузкой неактивных страниц
    maxInactiveAge: 25 * 1000,
    // количество страниц, которые должны быть одновременно загружены в памяти
    pagesBufferLength: 2,
  },

  // Оптимизация webpack для CSS
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Оптимизация CSS для production
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css|scss)$/,
        chunks: 'all',
        enforce: true,
        priority: 20,
      };
      
      // Оптимизация для уменьшения количества CSS файлов
      config.optimization.splitChunks.cacheGroups.vendor = {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all',
        priority: 10,
      };

      // Минификация CSS
      config.optimization.minimize = true;
    }
    return config;
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/rostov',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://potolkivip-rnd.ru/:path*',
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
      {
        source: '/potolok/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },

  sassOptions: {
    additionalData: `@use "src/styles/_variables.scss" as *;`,
  },

  // Заголовки для кэширования и безопасности
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/img/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
