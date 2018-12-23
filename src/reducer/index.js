// @flow

import game from './gameReducer'
import timer from './timerReducer'
import modal from './modalReducer'

export const getIsWon = (state: Object) => state.game.isWon
export const getIsLose = (state: Object) => state.game.isLose
export const getTimerStarted = (state: Object) => state.timer.isStarted

export default { game, timer, modal }
