import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Check if a word is present', () => {
render(<App />);
  const linkElement = screen.getByText(/profe mariano/i);
  expect(linkElement).toBeInTheDocument();
});
