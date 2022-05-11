// eslint-disable-next-line no-undef
module.exports = function (api) {
  api.cache(true);
  return {
    // eslint-disable-next-line quotes
    presets: ["babel-preset-expo"],
  };
};
