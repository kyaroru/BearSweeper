import { spawn } from 'redux-saga/effects';
import codePushSaga from 'react-native-code-push-saga';
import timerSaga from './Timer';
import sweepSaga from './Sweep';
import gameSaga from './Game';
import navigationSaga from './Navigation';

export default function* rootSaga() {
  yield [
    gameSaga(),
    timerSaga(),
    sweepSaga(),
    navigationSaga(),
    yield spawn(codePushSaga),
  ];
}
