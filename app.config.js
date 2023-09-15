module.exports = ({config}) => {
  const IS_DEV = process.env.APP_VARIANT === 'development';
  const IS_STAGING = process.env.APP_VARIANT === 'staging';
  return {
    name: IS_DEV || IS_STAGING ? 'BearSweeper (Fluffy)' : 'BearSweeper',
    owner: 'kyaroru',
    slug: 'bearsweeper',
    version: config.version,
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      resizeMode: 'contain',
      backgroundColor: '#FFFFFF',
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      buildNumber: config.ios.buildNumber,
      supportsTablet: true,
      bundleIdentifier:
        IS_DEV || IS_STAGING
          ? 'com.kyaroru.bearsweeper.dev'
          : 'com.kyaroru.BearSweeper',
    },
    android: {
      versionCode: parseInt(config.android.versionCode, 10),
      icon: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
      splash: {
        resizeMode: 'contain',
        backgroundColor: '#FFFFFF',
      },
      permissions: ['android.permission.ACCESS_NETWORK_STATE'],
      package:
        IS_DEV || IS_STAGING
          ? 'com.kyaroru.bearsweeper.dev'
          : 'com.bearsweeper',
    },
    plugins: [
      [
        './plugins/with-release-cert',
        {
          keystorePassword: process.env.KEYSTORE_PASSWORD,
          keyPassword: process.env.KEY_PASSWORD,
        },
      ],
    ],
    extra: {
      eas: {
        projectId: 'dfc51e92-18bd-46d5-9345-3f75f71ed965',
      },
      // used_ci is used to determine which CI is used to build the app
      // if it is expo, then let eas handle the keystore injection, otherwise use the with-release-cert plugin
      used_ci: process.env.USED_CI || 'expo',
    },
    updates: {
      url: 'https://u.expo.dev/dfc51e92-18bd-46d5-9345-3f75f71ed965',
      requestHeaders: {
        'expo-channel-name':
          IS_DEV || IS_STAGING ? 'development' : 'production',
      },
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
  };
};
