import authReducer from './authReducer';
import actionTypes from '../actions/actionTypes';

describe('when authReducer being called to reduce with a type AUTH_LOGIN:', () => {
  test('return and array', () => {
    const state = [];
    const action = { type: actionTypes.AUTH_LOGIN, user: 'Pepe' };
    const returnFunc = authReducer(state, action);
    const expectTo = { isLoggedIn: true, user: action.user };
    expect(returnFunc).toEqual(expectTo);
  });
});

describe('when authReducer being called to reduce with a type AUTH_LOGOUT:', () => {
  test('return and array', () => {
    const state = [];
    const action = { type: actionTypes.AUTH_LOGOUT, user: 'Pepe' };
    const returnFunc = authReducer(state, action);
    const expectTo = { isLoggedIn: false, user: null };
    expect(returnFunc).toEqual(expectTo);
  });
});
