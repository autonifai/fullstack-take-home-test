import React from 'react';
import { render, screen } from '@testing-library/react';
import CUD from './index';

describe('<InvoicesListing/>', () => {
  it('starts in a loading state', () => {
    render(<CUD />);
    const message = screen.getByText(/loading/i);
    expect(message).toBeInTheDocument();
  });
});
