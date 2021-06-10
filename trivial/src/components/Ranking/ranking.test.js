/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../test-util';
import Ranking from './index';

jest.mock('./confeti.jsx');

describe('When invoked Ranking func', () => {
  test('Wants to contain', () => {
    render(<Ranking />, {
      initialState: {
        auth: {
          user: { name: 'Josep' }
        },
        ranking: [{ correctAnswers: 0, incorrectAnswers: 2 }]
      }
    });
    expect(screen.getByText(/Has acertado/i)).toBeInTheDocument();
  });
});
