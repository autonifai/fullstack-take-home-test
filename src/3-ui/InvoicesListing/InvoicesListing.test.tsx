import React from 'react';
import { render, screen } from '@testing-library/react';
import CUD from './index';

it.concurrent.each([
  [/invoice number/i],
  [/Vendor Name/i],
  [/Invoice Description/i],
  [/Due Date/i],
  [/Amount/i],
])('Print mandatory column %s', (column) => {
  render(<CUD />);
  const linkElement = screen.getByText(column);
  expect(linkElement).toBeInTheDocument();
});
