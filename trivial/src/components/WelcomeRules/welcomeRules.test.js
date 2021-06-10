/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import WelcomeRules from './index';
import { render, screen } from '../../test-util';
import '@testing-library/jest-dom';

describe('WelcomeRules, Component', () => {
  test('should contain "Bienvenidos al Trivial..."', () => {
    render(<WelcomeRules />);
    expect(screen.getByText(/Bienvenidos/i)).toBeInTheDocument();
  });
});
