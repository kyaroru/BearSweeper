import {spawn, all, fork} from 'redux-saga/effects';
import codePushSaga from 'react-native-code-push-saga';
import timerSaga from './Timer';
import sweepSaga from './Sweep';
import gameSaga from './Game';
import navigationSaga from './Navigation';

export default function* rootSaga() {
  yield all([
    fork(gameSaga),
    fork(timerSaga),
    fork(sweepSaga),
    fork(navigationSaga),
    yield spawn(codePushSaga),
  ]);
}
