import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: [], // Add any image domains you'll use here
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
};

export default nextConfig;
