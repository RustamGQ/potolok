import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: 'export', // Отключаем для работы API routes
  trailingSlash: true,
  // basePath: '/potolok', // Временно отключаем для тестирования API
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
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  sassOptions: {
    additionalData: `@use "src/styles/_variables.scss" as *;`,
  },
};

export default nextConfig;
