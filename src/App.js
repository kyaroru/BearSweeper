import React from 'react';
import {Platform, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import AppNavigator from './route/Navigator';
import configureStore from './store';

const App = () => {
  const {store} = configureStore();
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'default'}
      />
      <AppNavigator />
    </Provider>
  );
};

export default App;
