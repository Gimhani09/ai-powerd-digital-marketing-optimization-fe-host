/** @type {import('next').NextConfig} */
const CONTENT_API_URL = process.env.NEXT_PUBLIC_CONTENT_API_URL || 'http://localhost:8000';

const nextConfig = {
  // Proxy /api/* requests to the content generator backend
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${CONTENT_API_URL}/api/:path*`,
      },
    ]
  },
}

module.exports = nextConfig