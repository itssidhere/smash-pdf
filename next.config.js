/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://itssidhere.github.io/smash-pdf/' : ''
}

module.exports = nextConfig
