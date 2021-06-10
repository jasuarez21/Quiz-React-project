import store from './index';

describe('When invoked a store of redux ', () => {
  test('Wants to return a rootReducer', () => {
    expect(store).toBeTruthy();
  });
});
