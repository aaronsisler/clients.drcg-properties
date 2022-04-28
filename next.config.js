/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@square/web-sdk",
  "react-square-web-payments-sdk",
]);

const nextConfig = {
  distDir: "../build",
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    loader: "imgix",
    path: "/",
    domains: [
      "cdn-e-and-b-solutions.s3.amazonaws.com",
      "cdn-e-and-b-solutions.s3.amazonaws.com/e-and-b-solutions",
      "beta.drcgproperties.com",
      "drcgproperties.com",
    ],
  },
  experimental: {
    esmExternals: "loose",
  },
};

module.exports = withTM({ ...nextConfig });
// module.exports = nextConfig;
