import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducer';
import sagas from './saga';

let middlewares;
let store;
const sagaMiddleware = createSagaMiddleware();

const config = {
  key: 'main',
  storage: AsyncStorage,
};

const { game, ...otherReducers } = reducers;
const reducer = combineReducers({
  // game: persistReducer(config, game),
  game,
  ...otherReducers,
});

/* global __DEV__ */
if (__DEV__) {
  const excludedActions = [];
  const logger = createLogger({
    collapsed: true,
    predicate: (getState, action) => excludedActions.indexOf(action.type) < 0,
  });
  middlewares = applyMiddleware(sagaMiddleware, logger);
} else {
  middlewares = applyMiddleware(sagaMiddleware);
}

export const getStore = () => store;

const configureStore = () => {
  store = createStore(reducer, middlewares);
  sagaMiddleware.run(sagas);
  const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;
