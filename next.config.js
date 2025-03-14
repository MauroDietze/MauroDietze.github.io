/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: "export",
  basePath: process.env.NODE_ENV === 'production' ? '/MauroDietze.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MauroDietze.github.io/' : ''
}

module.exports = nextConfig
