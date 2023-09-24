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
            navigator: './src/navigator',
            themes: './src/themes',
            images: './src/images',
            components: './src/components',
            containers: './src/containers',
            sagas: './src/redux/sagas',
            store: './src/redux/store',
            actions: './src/redux/actions',
            reducers: './src/redux/reducers',
          },
        },
      ],
    ],
  };
};
