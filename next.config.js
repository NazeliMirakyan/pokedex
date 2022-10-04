/**
 * @type {import('next').NextConfig}
*/
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  images: {
    domains: ['raw.githubusercontent.com', 'assets.pokemon.com'],
  }
};

module.exports = nextConfig;


