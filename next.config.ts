import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cazareturda.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/ap-maysa',
        destination: '/apartamente/ap-maysa',
        permanent: true,
      },
      {
        source: '/ap-lapale',
        destination: '/apartamente/ap-lapale',
        permanent: true,
      },
      {
        source: '/ap-salingold',
        destination: '/apartamente/ap-salin-gold',
        permanent: true,
      },
      {
        source: '/salin-gold',
        destination: '/apartamente/ap-salin-gold',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
