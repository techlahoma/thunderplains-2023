// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: '',
  images: { unoptimized: true },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
