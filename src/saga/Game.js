import { take, put } from 'redux-saga/effects';

import {
  goToGame,
} from '../action/Navigator';

import {
  CHOOSE_DIFFICULTY,
} from '../action/Game';

function* game() {
  while (yield take(CHOOSE_DIFFICULTY)) {
    yield put(goToGame());
  }
}

export default game;
