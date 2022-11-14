module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // NOTE: `expo-router/babel` is a temporary extension to `babel-preset-expo`.
      require.resolve("expo-router/babel"),
      ["@babel/plugin-transform-flow-strip-types"],
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      ["@babel/plugin-proposal-class-properties", { loose: true }],
      [
        "module-resolver",
        {
          alias: {
            "@Components": "./src/components",
            "@Screens": "./src/screens",
            "@Assets": "./assets",
            "@Themes": "./src/theming",
          },
          extensions: [".js", ".jsx", ".ts", ".tsx", ".ttf"],
        },
      ],
    ],
  };
};
