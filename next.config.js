const isProd = process.env.NODE_ENV === 'production';
const basePath = isProd ? '/nextjs-playground' : '';

module.exports = {
  basePath,
  assetPrefix: isProd ? `${basePath}/` : ''
};
