import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
      {
        protocol: "https",
        hostname: "energized-boot-835e2d9474.strapiapp.com",
      },
      {
        protocol: "https",
        hostname: "energized-boot-835e2d9474.media.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
