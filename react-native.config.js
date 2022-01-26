module.exports = {
  project: {
    ios: {},
    android: {},
  },
  dependencies: {
    'react-native-code-push': {
      // this is here so that android will not auto link codepush, but we link it manually ourselves thus we can pass in CODEPUSH_KEY in MainApplication.java
      platforms: {
        android: null,
      },
    },
  },
};
