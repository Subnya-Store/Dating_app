/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      {
        source: '/dashboard',
        destination: '/dashboard.html',
      },
      {
        source: '/membership',
        destination: '/membership.html',
      },
      {
        source: '/about_us',
        destination: '/about_us.html',
      },
      {
        source: '/admin',
        destination: '/admin',
      },
    ]
  }
}

module.exports = nextConfig

