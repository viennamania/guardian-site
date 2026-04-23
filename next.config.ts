import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/",
          destination: "/guardian-home.html",
        },
      ],
    };
  },
};

export default nextConfig;
