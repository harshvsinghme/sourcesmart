import { DEVELOPMENT, PRODUCTION } from '@/utils/enum/standard.enum';
import withPWA from 'next-pwa';
import { RemotePattern } from 'next/dist/shared/lib/image-config';

const nextConfig = {
  distDir: 'build',
  reactStrictMode: false,
  compiler: {
    removeConsole: [PRODUCTION].includes(process.env.NODE_ENV)
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `www.thesunflowerlab.com`,
        pathname: '/wp-content/**'
      }
    ] as RemotePattern[]
  }
};

export default withPWA({
  dest: 'public',
  disable: [DEVELOPMENT].includes(process.env.NODE_ENV),
  register: true,
  skipWaiting: true,
  cacheOnFrontEndNav: false
})(nextConfig);
