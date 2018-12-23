import { actionChannel, call, take, put, race } from 'redux-saga/effects'

import { timerIncrement, TIMER_STOP, TIMER_START } from '../action/Timer'

// wait :: Number -> Promise
const wait = ms => (
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms)
  })
)

function* runTimer() {
  const channel = yield actionChannel(TIMER_START)

  while (yield take(channel)) {
    while (true) { // eslint-disable-line
      const winner = yield race({
        stopped: take(TIMER_STOP),
        tick: call(wait, 1000),
      })

      if (!winner.stopped) {
        yield put(timerIncrement())
      } else {
        break
      }
    }
  }
}

export default runTimer
