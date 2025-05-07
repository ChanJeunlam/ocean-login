/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // 启用静态导出
    images: {
      unoptimized: true,  // GitHub Pages 不支持 Next.js 的图像优化
    },
    basePath: process.env.NODE_ENV === 'production' ? '/ocean-login' : '',  // 仓库名
    trailingSlash: true,  // 添加尾部斜杠
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    // 重要：添加这个配置以处理静态资源
    assetPrefix: process.env.NODE_ENV === 'production' ? '/ocean-login' : '',
  }
  
  module.exports = nextConfig