import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function Wrap() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

describe('<App/>', () => {
  it('renders without crash (smoke test)', () => {
    render(<Wrap />);

    expect(screen).toBeDefined();
  });
});
