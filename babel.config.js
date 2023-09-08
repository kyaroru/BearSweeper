module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            utils: './src/utils',
            themes: './src/themes',
            images: './src/images',
            common: './src/components/common',
          },
        },
      ],
    ],
  };
};
