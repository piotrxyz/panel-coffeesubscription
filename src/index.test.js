/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './index';

test('renders subskrypcja link', () => {
  render(<App />);
  const linkElement = screen.getByText(/subskrypcja/i);
  expect(linkElement).toBeInTheDocument();
});
