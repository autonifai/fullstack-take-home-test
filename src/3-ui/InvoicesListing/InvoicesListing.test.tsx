import React from 'react';
import { render, screen } from '@testing-library/react';

import CUD from './index';
import AsyncStatuses from '../../2-capabilities/async-statuses.type';

describe('<InvoicesListing/>', () => {
  it.each<[AsyncStatuses, RegExp]>([
    ['pending', /loading/i],
    ['error', /error/i],
    ['success', /no invoices/i],
  ])('shows expected text for %s', (status, text) => {
    const read = jest.fn().mockReturnValue({ status });

    render(<CUD read={read} />);
    const linkElement = screen.getByText(text);
    expect(linkElement).toBeInTheDocument();
  });
});
