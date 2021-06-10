import { loadRanking } from './actionCreators';
import actionTypes from './actionTypes';

describe('When invoked loadRanking func', () => {
  test('with correct and incorrect parameters', () => {
    const correct = 2;
    const incorrect = 3;
    const result = loadRanking(correct, incorrect);
    expect(result).toEqual({
      type: actionTypes.LOAD_RANKING,
      score: {
        correctAnswers: correct,
        incorrectAnswers: incorrect
      }
    });
  });
});
