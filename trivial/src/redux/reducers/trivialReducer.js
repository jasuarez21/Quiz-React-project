/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function loadGame(state = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_GAME:
      return [action.game];
    default:
      break;
  }
  return state;
}
