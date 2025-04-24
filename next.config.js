/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos', 'res.cloudinary.com', 'admin.mobrilz.com'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Improve HMR stability
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        ignored: ['**/.git/**', '**/node_modules/**'],
        aggregateTimeout: 300,
        poll: false, // Use native file system events instead of polling
      };
    }
    return config;
  },
  // Optimize development experience
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig;