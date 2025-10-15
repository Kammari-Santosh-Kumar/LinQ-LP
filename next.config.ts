import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* other config options here */

  async redirects() {
    return [
      {
        source: '/(.*)',
        destination: 'https://www.linqrides.com/', // replace with your actual domain
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
