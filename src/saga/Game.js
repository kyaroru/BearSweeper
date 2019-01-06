import {
  takeLatest, all, fork, put, select,
} from 'redux-saga/effects';
import { getRandomNumber } from 'utils/number';

import {
  goToGame,
} from '../action/Navigator';

import {
  setHint,
  CHOOSE_DIFFICULTY,
  GET_HINTS,
} from '../action/Game';


function* chooseDifficulty() {
  yield put(goToGame());
}

function* getHints() {
  const state = yield select();
  const { board } = state.game;
  const hints = [];
  board.forEach((row) => {
    row.forEach((column) => {
      if (!column.isMine && !column.sweeped) {
        hints.push(column.id);
      }
    });
  });
  const randomIndex = getRandomNumber(0, hints.length - 1);
  yield put(setHint(hints[randomIndex]));
}

function* watchChooseDifficulty() {
  yield takeLatest(CHOOSE_DIFFICULTY, chooseDifficulty);
}

function* watchGetHints() {
  yield takeLatest(GET_HINTS, getHints);
}

export default function* game() {
  yield all([
    fork(watchChooseDifficulty),
    fork(watchGetHints),
  ]);
}
