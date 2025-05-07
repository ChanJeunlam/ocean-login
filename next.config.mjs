const isProd = process.env.NODE_ENV === 'production';
const repoName = 'ocean-login';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}` : '',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;