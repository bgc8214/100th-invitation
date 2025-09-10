/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages용 설정 (프로덕션에서만 적용)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/100th-invitation',
    assetPrefix: '/100th-invitation/',
  }),
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig

