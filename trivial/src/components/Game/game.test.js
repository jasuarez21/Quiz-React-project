/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '../../test-util';
import Game from './index';

describe('When invoked game func', () => {
  test('Wants to contain', () => {
    render(<Game />, {
      initialState: {
        gameData: [[{
          question: '¿Te gusta testear?',
          incorrect_answers: ['No', 'Casi que no',
            'Nada de nada'],
          correct_answer: 'pichipicha'
        }]]
      }
    });
    expect(screen.getByText(/¿Te gusta testear?/i)).toBeInTheDocument();
  });
});
