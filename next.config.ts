import type { NextConfig } from "next";

const nextConfig: NextConfig = {
output: 'standalone', // <-- Add this line
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      }    
    ],
  },
}


export default nextConfig;

