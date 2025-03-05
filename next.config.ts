import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  swcMinify: true,
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all', // 对所有 chunk 进行分割
      maxSize: 1000000, // 每个 chunk 最大 1MB，强制分割大文件
    };
    return config;
  },
};

export default nextConfig;
