/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/dashboardx',
        destination: '/dashboard',
      },
      {
        source: '/admin',
        destination: '/admin',
      },
    ]
  }
}

module.exports = nextConfig

