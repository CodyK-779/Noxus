import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  cacheComponents: true,
  images: {
    domains: ['media.rawg.io'],
  }
};

export default nextConfig;
