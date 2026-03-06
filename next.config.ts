import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Unsplash placeholders (used in project cards)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // GitHub readme stats
      {
        protocol: "https",
        hostname: "github-readme-stats.vercel.app",
      },
      // GitHub streak stats
      {
        protocol: "https",
        hostname: "streak-stats.demolab.com",
      },
    ],
  },
};

export default nextConfig;
