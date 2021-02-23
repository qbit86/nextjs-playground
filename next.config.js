const isProd = process.env.NODE_ENV === 'production';
const segment = 'nextjs-playground';

module.exports = {
  basePath: isProd ? `/${segment}` : '',
  assetPrefix: isProd ? `/${segment}/` : ''
};
