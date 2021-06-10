/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import GameMode from './index';
import {
  render, fireEvent
} from '../../test-util.js';

describe('GameMode Component', () => {
  test('should contain GAME MODE', () => {
    const { container } = render(<GameMode />);
    const prueba = container.querySelector('.title');
    expect(prueba.textContent).toBe('GAME MODE');
  });
});

test('should a button click to call function with dispatch', () => {
  const dispatch = jest.fn();
  const { getAllByRole } = render((<GameMode />, dispatch));
  const button = getAllByRole('button')[0];
  fireEvent.click(button);
  expect(dispatch).toHaveBeenCalled();
});
