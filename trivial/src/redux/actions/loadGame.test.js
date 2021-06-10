import axios from 'axios';
import { loadGame } from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('When invoked a loadGame function', () => {
  test('Should return a object with type and data', () => {
    const result = loadGame;
    expect(result.type).toBe(actionTypes.loadGame);
  });
  test('loadGameAxios async function ', async () => {
    axios.get.mockResolvedValue({ data: ['Testeando bajo el sol'] });
    const diff = 'easy';
    const type = 'boolean';
    const dispatch = jest.fn();
    const testFn = loadGame(diff, type);
    await testFn(dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
