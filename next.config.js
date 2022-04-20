/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
