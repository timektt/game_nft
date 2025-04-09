import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com','plus.unsplash.com'], // อนุญาตให้โหลดภาพจาก Unsplash
  },
};

export default nextConfig;
