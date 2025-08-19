import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ignore ESLint errors during production builds to prevent unrelated content issues from blocking deploys
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: false,
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
};

export default nextConfig;
