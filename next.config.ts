/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.twosome.co.kr"],
  },
  typescript: {
    ignoreBuildErrors: true, // 타입스크립트 오류 무시
  },
  eslint: {
    ignoreDuringBuilds: true, // ESLint 오류/경고 무시
  },
};

module.exports = nextConfig;
