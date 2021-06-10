import { logout } from './actionCreators';
import actionTypes from './actionTypes';

describe('When invoked a function logout', () => {
  test('should return an object with type AUTH_LOGOUT ', () => {
    const result = logout();
    const logotype = { type: actionTypes.AUTH_LOGOUT };
    expect(result).toEqual(logotype);
  });
});
