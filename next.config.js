/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blogs',
        destination: '/essays',
        permanent: true,
      },
      {
        source: '/blogs/:slug',
        destination: '/essays/:slug',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

