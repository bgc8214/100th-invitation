/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/100th-invitation',
  assetPrefix: '/100th-invitation/',
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig

