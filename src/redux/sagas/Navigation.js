import {call, all, takeLatest, fork, put} from 'redux-saga/effects';

import {
  GO_TO_DIFFICULTY,
  GO_TO_GAME,
  GO_TO_LEADERBOARD,
} from 'actions/Navigator';

import {newGame, clearHints} from 'actions/Game';
import {timerReset, timerStop} from 'actions/Timer';

import AppNavigationService from 'navigator/app/navigation-service';

function* goToDifficulty() {
  yield call(AppNavigationService.navigate, 'Difficulty');
}

function* goToGame() {
  yield call(AppNavigationService.navigate, 'Game');
  yield put(newGame());
  yield put(timerStop());
  yield put(timerReset());
  yield put(clearHints());
}

function* goToLeaderboard() {
  yield call(AppNavigationService.navigate, 'Leaderboard');
}

function* watchGoToDifficulty() {
  yield takeLatest(GO_TO_DIFFICULTY, goToDifficulty);
}

function* watchGoToGame() {
  yield takeLatest(GO_TO_GAME, goToGame);
  yield put(timerReset());
}

function* watchGoToLeaderboard() {
  yield takeLatest(GO_TO_LEADERBOARD, goToLeaderboard);
}

export default function* navigation() {
  yield all([
    fork(watchGoToDifficulty),
    fork(watchGoToGame),
    fork(watchGoToLeaderboard),
  ]);
}
