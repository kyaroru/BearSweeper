import {
  takeLatest, all, fork, put, select, call,
} from 'redux-saga/effects';
import { Vibration } from 'react-native';

import {
  showModal,
} from '../action/Modal';

import {
  timerStart,
  timerStop,
  timerReset,
} from '../action/Timer';

import {
  SWEEP,
  check,
  clearHints,
} from '../action/Game';

import {
  getIsLose,
  getIsWon,
  getTimerStarted,
} from '../reducer';

function* sweep() {
  yield put(check());
  yield put(clearHints());
  const state = yield select();
  if (getIsWon(state)) {
    yield put(showModal());
  }
  if (getIsLose(state)) {
    yield call(Vibration.vibrate, 200);
  }
  if (getIsLose(state) || getIsWon(state)) {
    yield put(timerStop());
  } else if (!getTimerStarted(state)) {
    yield put(timerReset());
    yield put(timerStart());
  }
}

function* watchSweep() {
  yield takeLatest(SWEEP, sweep);
}

export default function* game() {
  yield all([
    fork(watchSweep),
  ]);
}
