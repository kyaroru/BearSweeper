import {takeLatest, all, fork, put, select, call} from 'redux-saga/effects';
import {Vibration} from 'react-native';

import {showModal} from 'actions/Modal';

import {timerStart, timerStop, timerReset} from 'actions/Timer';

import {SWEEP, check, clearHints} from 'actions/Game';

import {getIsLose, getIsWon, getTimerStarted} from 'reducers';

function* sweepTile() {
  yield put(check());
  yield put(clearHints());
  const state = yield select();
  if (getIsWon(state)) {
    yield put(showModal());
  }
  if (getIsLose(state)) {
    if (Vibration?.vibrate) {
      yield call(Vibration.vibrate, 200);
    }
  }
  if (getIsLose(state) || getIsWon(state)) {
    yield put(timerStop());
  } else if (!getTimerStarted(state)) {
    yield put(timerReset());
    yield put(timerStart());
  }
}

function* watchSweep() {
  yield takeLatest(SWEEP, sweepTile);
}

export default function* sweep() {
  yield all([fork(watchSweep)]);
}
