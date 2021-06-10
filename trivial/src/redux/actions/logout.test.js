import { login } from './actionCreators';
import actionTypes from './actionTypes';

describe('When invoked a login function', () => {
  test('should return and object with tyoe AUTH_LOGIN and data of user', () => {
    const user = 'josep';
    const result = login(user);
    const resultFunc = {
      type: actionTypes.AUTH_LOGIN,
      user
    };
    expect(result).toEqual(resultFunc);
  });
});
