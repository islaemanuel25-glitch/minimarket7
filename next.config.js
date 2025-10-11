/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
