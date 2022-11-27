/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL_ENV: process.env.URL_ENV,
    URL_API_DEV: process.env.URL_API_DEV,
    URL_API_STAGING: process.env.URL_API_STAGING,
    URL_API_PRODUCTION: process.env.URL_API_PRODUCTION,
  },
}

module.exports = nextConfig
