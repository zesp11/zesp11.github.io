import type { NextConfig } from "next";

/**
 * @type {import('next').NextConfig}
 */
const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true,
  },

  /*
  For Github static page
  basePath: '/zesp11_page',
  assetPrefix: '/zesp11_page',

  For local static page
  basePath: '/pz2024/zesp11',
  assetPrefix: '/pz2024/zesp11',
   */
  basePath: '',
  assetPrefix: '',
};

export default nextConfig;
