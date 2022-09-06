/** @type {import('next').NextConfig} */
const allowBackendDomain = new URL(process.env.NEXT_PUBLIC_BACKEND).hostname;
// const { i18n } = require("./next-i18next.config");

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [allowBackendDomain, "localhost"],
  },
  // i18n,
};

module.exports = nextConfig;
