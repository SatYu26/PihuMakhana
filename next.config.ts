import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Lets phones and other devices on the local network use the dev server.
  allowedDevOrigins: [ "10.252.3.79", "192.168.*.*", "10.*.*.*" ],
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: [ "@tailwindcss/turbopack" ],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
