/**
 * @flow
 */

import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import AppNavigator from './route/Navigator'
import AppNavigationService from './route/AppNavigationService';

const { store } = configureStore();

const App = () =>
  <Provider store={store}>
    <AppNavigator
      ref={(navigatorRef) => {
        AppNavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>

export default App
