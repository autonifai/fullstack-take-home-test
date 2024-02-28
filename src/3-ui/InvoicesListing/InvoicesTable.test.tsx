import React from 'react';
import { render, screen } from '@testing-library/react';
import CUD from './InvoicesTable';
import { InvoicesProvider } from '../../2-stores/use-invoices';
import InvoicesStore from '../../2-stores/use-invoices/invoices.store';

type Props = {
  store: InvoicesStore;
};

function Wrap({ store }: Props) {
  return (
    <InvoicesProvider store={store}>
      <CUD />
    </InvoicesProvider>
  );
}

describe('<InvoicesTable/>', () => {
  describe('When there are no invoices to review', () => {
    it('Shows a message', () => {
      const store = new InvoicesStore();

      store.setData([]);

      render(<Wrap store={store} />);
      const linkElement = screen.getByText(/there's no invoices to review/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe('When there are some invoices to review', () => {
    it.concurrent.each([
      [/invoice number/i],
      [/Vendor Name/i],
      [/Invoice Description/i],
      [/Due Date/i],
      [/Amount/i],
    ])('Print mandatory column %s', (column) => {
      const store = new InvoicesStore();

      store.setData([1, 2]);

      render(<Wrap store={store} />);
      const linkElement = screen.getByText(column);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
