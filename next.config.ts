import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  swcMinify: true,
  webpack(config) {
    config.optimization.splitChunks = {
      chunks: 'all',
      maxSize: 500000, // 减小到 500KB，进一步强制分割
      minSize: 100000, // 最小 100KB，避免生成过小文件
      cacheGroups: {
        default: false, // 禁用默认分组
        vendors: {
          test: /[\\/]node_modules[\\/]/, // 单独打包 node_modules 的依赖
          name: 'vendors',
          chunks: 'all',
        },
      },
    };
    return config;
  },
};

export default nextConfig;
