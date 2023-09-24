'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const config_plugins_1 = require('@expo/config-plugins');
const withReleaseCert = (config, props) =>
  (0, config_plugins_1.withAppBuildGradle)(config, async config => {
    config.modResults.contents = config.modResults.contents.replace(
      /signingConfig signingConfigs.debug/,
      'signingConfig signingConfigs.release',
    );
    // need to run twice cause there is 2 signingConfigs.debug
    config.modResults.contents = config.modResults.contents.replace(
      /signingConfig signingConfigs.debug/,
      'signingConfig signingConfigs.release',
    );
    config.modResults.contents = config.modResults.contents.replace(
      /signingConfigs {/,
      `signingConfigs {
        release {
          storeFile file('../../release.keystore')
          storePassword '${props.keystorePassword}'
          keyAlias 'kyaroru'
          keyPassword '${props.keyPassword}'
        }`,
    );
    return config;
  });
const initPlugin = (config, props) => {
  if (
    config.extra.used_ci !== 'expo' && // only run this when not using expo
    typeof props.keystorePassword !== 'undefined' &&
    typeof props.keyPassword !== 'undefined'
  ) {
    config = withReleaseCert(config, {
      keystorePassword: props.keystorePassword,
      keyPassword: props.keyPassword,
    });
  }
  return config;
};
exports.default = initPlugin;
