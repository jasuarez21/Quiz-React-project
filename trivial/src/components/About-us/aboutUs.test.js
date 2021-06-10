/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutUs from './index';

describe('When invoked a aboutUs func', () => {
  const { container } = render(<BrowserRouter><AboutUs /></BrowserRouter>);
  test('Expect to print chema', () => {
    const prueba = container.querySelector('.chema');
    expect(prueba.textContent).toBe('Chema');
  });
});
