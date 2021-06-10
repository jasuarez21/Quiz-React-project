import loadGame from './trivialReducer';
import actionTypes from '../actions/actionTypes';

describe('when called to reducer', () => {
  test('return and array', () => {
    const state = [];
    const action = { type: actionTypes.LOAD_GAME, game: 'juego' };
    const returnFunc = loadGame(state, action);
    const expectTo = ['juego'];
    expect(returnFunc).toEqual(expectTo);
  });
});
