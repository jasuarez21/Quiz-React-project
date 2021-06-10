/* eslint-disable no-debugger */
import actionTypes from '../actions/actionTypes';

export default function loadRanking(ranking = [], action) {
  debugger;
  switch (action.type) {
    case actionTypes.LOAD_RANKING:
      return [...ranking,
        action.score];
    default:
      break;
  }
  return ranking;
}
