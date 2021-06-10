/* eslint-disable no-debugger */
/* eslint-disable no-console */
import axios from 'axios';
import actionTypes from './actionTypes';

export function loadGame(difficultySelection, typeSelection) {
  const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficultySelection}&type=${typeSelection}`;
  return async (dispatch) => {
    const { data } = await axios.get(url);
    dispatch({
      type: actionTypes.LOAD_GAME,
      game: data.results
    });
  };
}
export function login(user) {
  return {
    type: actionTypes.AUTH_LOGIN,
    user
  };
}
export function logout() {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
}
export function loadRanking(correct, incorrect) {
  return {
    type: actionTypes.LOAD_RANKING,
    score: {
      correctAnswers: correct,
      incorrectAnswers: incorrect
    }
  };
}
