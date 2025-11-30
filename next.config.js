/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable Turbopack in development (already enabled in build)
  turbopack: {},

  // Optimize images
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Enable experimental features
  experimental: {
    // Optimize package imports for better tree-shaking
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-avatar',
      '@radix-ui/react-dialog',
      '@radix-ui/react-slot',
    ],
  },

  // Configure logging
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

module.exports = nextConfig
