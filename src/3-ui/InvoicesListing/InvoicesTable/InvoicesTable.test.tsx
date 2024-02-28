import React from 'react';
import { render, screen } from '@testing-library/react';
import CUD from '.';
import { InvoicesProvider } from '../../../2-stores/use-invoices';
import InvoicesStore from '../../../2-stores/use-invoices/invoices.store';
import InvoiceFactory from '../../../1-models/invoice/invoice.factory';

type Props = {
  size: number;
};

function Wrap({ size }: Props) {
  const store = new InvoicesStore();
  const array = InvoiceFactory.random(size);

  store.setData(array);

  return (
    <InvoicesProvider store={store}>
      <CUD />
    </InvoicesProvider>
  );
}

describe('<InvoicesTable/>', () => {
  describe('When there are no invoices to review', () => {
    it('Shows a message', () => {
      render(<Wrap size={0} />);
      const linkElement = screen.getByText(/there are no invoices to review/i);
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
      render(<Wrap size={3} />);
      const linkElement = screen.getByText(column);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
