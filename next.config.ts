import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',               // 👈 Allow Cloudinary
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'bua-backend.onrender.com',         // 👈 Allow your Render Backend
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;