/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "img.icons8.com"],
  },
};

module.exports = nextConfig;
