const basePath = process.env.NODE_ENV === 'production' ? '/nextjs-playground' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};
