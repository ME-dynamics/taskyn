module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [["@babel/plugin-proposal-class-properties", { loose: false }]],
    // Babel >= 7.13.0 (https://babeljs.io/docs/en/assumptions)
    assumptions: {
      setPublicClassFields: false,
    },
  };
};
