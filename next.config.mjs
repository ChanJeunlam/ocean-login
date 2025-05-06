const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '/ocean-login', // 替换为您的 GitHub 仓库名称
  assetPrefix: isProd ? '/ocean-login/' : '',
};

export default nextConfig;