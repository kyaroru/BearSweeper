import {
  actionChannel,
  delay,
  take,
  put,
  race,
  all,
  fork,
} from 'redux-saga/effects';
import {timerIncrement, TIMER_STOP, TIMER_START} from 'actions/Timer';

function* runTimer() {
  const channel = yield actionChannel(TIMER_START);
  while (yield take(channel)) {
    while (true) {
      // eslint-disable-line
      const winner = yield race({
        stopped: take(TIMER_STOP),
        tick: delay(1000),
      });

      if (!winner.stopped) {
        yield put(timerIncrement());
      } else {
        break;
      }
    }
  }
}

export default function* timer() {
  yield all([fork(runTimer)]);
}
