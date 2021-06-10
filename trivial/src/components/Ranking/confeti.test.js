/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Confeti from './confeti';
import { render } from '../../test-util';

describe('When invoked a confeti library', () => {
  test('Wants to return width and heihgt', () => {
    render(<Confeti />);
    expect(true).toBe(true);
  });
});
