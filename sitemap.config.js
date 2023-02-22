/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https:fastwpay.com',
  generateIndexSitemap: false,
  // optional
};

module.exports = config;
