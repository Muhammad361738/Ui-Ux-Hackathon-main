
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"], // Add the domain for Sanity's image CDN
  },
};

module.exports = nextConfig;
