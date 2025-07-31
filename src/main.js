import {Provider} from 'react-redux';
import configureStore from 'store/configureStore';
import App from './app';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import * as Colors from 'themes/colors';

const onComplete = () => {
  console.log('[Rehydrate] Complete');
};
const {store} = configureStore(onComplete);

const Main = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );
};
export default Main;
