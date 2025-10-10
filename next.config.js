/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
    domains: [
      "images.unsplash.com",
      "media.istockphoto.com",
      "drive.google.com",
      "lh3.googleusercontent.com", // Google profile pictures
      "lh4.googleusercontent.com", // Google profile pictures
      "lh5.googleusercontent.com", // Google profile pictures
      "lh6.googleusercontent.com", // Google profile pictures
    ],
  },
  basePath: isProd ? "/professional-development-council-new" : "",
  assetPrefix: isProd ? "/professional-development-council-new/" : "",
  env: {
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
  output: "export",
};

module.exports = nextConfig;
