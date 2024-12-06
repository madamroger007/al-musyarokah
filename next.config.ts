import { env } from "process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: env.API_URL,
    NEXT_PUBLIC_BASE_URL: env.NEXT_PUBLIC_BASE_URL,
    INSTAGRAM: env.INSTAGRAM,
    GMAPS: env.GMAPS,
    GMAIL: env.GMAIL,
    PHONE: env.PHONE
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '6ndnl52hy48rrhe4.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
