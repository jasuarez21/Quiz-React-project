/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Dashboard from './index';
import { render, screen } from '../../test-util';
import '@testing-library/jest-dom';

describe('WelcomeRules, Component', () => {
  test('should contain 4 img tags"', () => {
    render(<Dashboard />);
    expect(screen.getByAltText('play-icon')).toBeInTheDocument();
    expect(screen.getByAltText('rules-icon')).toBeInTheDocument();
    expect(screen.getByAltText('ranking-icon')).toBeInTheDocument();
    expect(screen.getByAltText('info-icon')).toBeInTheDocument();
  });
});
