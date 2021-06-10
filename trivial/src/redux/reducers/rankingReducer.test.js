import actionTypes from '../actions/actionTypes';
import loadRanking from './rankingReducer';

describe(' when call to reducer ', () => {
  test('return and array', () => {
    const empytState = [];
    const action = { type: actionTypes.LOAD_RANKING, score: 2 };
    const expectTo = loadRanking(empytState, action);
    const equalTo = [2];
    expect(expectTo).toEqual(equalTo);
  });
});
