import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main component', () => {
  render(<App />);
  const component = screen.getByTestId(/invoices-listing/);
  expect(component).toBeInTheDocument();
});
