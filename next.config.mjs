/** @type {import('next').NextConfig} */
const nextConfig = {
  // output:"export",
  // Ignore TypeScript and ESLint errors during build
  typescript: {
    ignoreBuildErrors: true, // Ignores TypeScript errors during the build process
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignores ESLint errors during the build process
  },
};
