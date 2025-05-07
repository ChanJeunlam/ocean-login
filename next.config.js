/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // 启用静态导出
    images: {
      unoptimized: true,  // GitHub Pages 不支持 Next.js 的图像优化
    },
    basePath: process.env.NODE_ENV === 'production' ? '/ocean-login' : '',  // 替换为您的仓库名
    trailingSlash: true,  // 添加尾部斜杠，有助于 GitHub Pages 路由
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
  }
  
  module.exports = nextConfig