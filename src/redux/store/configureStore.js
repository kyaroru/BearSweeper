import {createLogger} from 'redux-logger';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistCombineReducers} from 'redux-persist';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducers from 'reducers';
import sagas from 'sagas';
import AsyncStorage from '@react-native-async-storage/async-storage';

let middlewares;
let store;
const sagaMiddleware = createSagaMiddleware();

const config = {
  key: 'root',
  storage: AsyncStorage,
  // whitelist: ['PERSIST'],
};

const reducer = persistCombineReducers(config, reducers);

/* global __DEV__ */
if (__DEV__) {
  const excludedActions = [];
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => excludedActions.indexOf(action.type) < 0,
  });
  middlewares = composeWithDevTools(applyMiddleware(sagaMiddleware, logger));
} else {
  middlewares = applyMiddleware(sagaMiddleware);
}

export const getStore = () => store;

const configureStore = onComplete => {
  store = createStore(reducer, middlewares);
  sagaMiddleware.run(sagas);
  const persistor = persistStore(store, null, onComplete);
  return {persistor, store};
};

export default configureStore;
