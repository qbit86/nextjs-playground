const basePath = process.env.NODE_ENV === 'production' ? '/playground' : '';

module.exports = {
  basePath,
  assetPrefix: `${basePath}/`
};
