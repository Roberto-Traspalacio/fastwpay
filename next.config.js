/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es', 'it', 'de', 'fr'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {},
  reactStrictMode: true,
  env: {
    REACT_NEXT_APP_URL_API: process.env.REACT_NEXT_APP_URL_API,
    REACT_NEXT_APP_URL_GD_PLUGIN: process.env.REACT_NEXT_APP_URL_GD_PLUGIN,
  },
  async rewrites() {
    return [
      {
        source: '/drive.google.com/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
