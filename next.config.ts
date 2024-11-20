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
  basePath: '/zesp11_page',
};

export default nextConfig;
