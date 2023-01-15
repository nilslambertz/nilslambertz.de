/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
  trailingSlash: true,
};

module.exports = nextConfig;
