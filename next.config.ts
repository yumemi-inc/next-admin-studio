import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // see: https://mantine.dev/guides/next/#app-router-tree-shaking
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
  },
};

export default nextConfig;
