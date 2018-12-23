// @flow

import {
  SHOW_MODAL,
  HIDE_MODAL,
} from '../action/Modal'

const initialState = {
  visible: false,
}

const timerReducer = (state: Object = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { visible: true }
    case HIDE_MODAL:
      return { visible: false }
    default:
      return state
  }
}

export default timerReducer
