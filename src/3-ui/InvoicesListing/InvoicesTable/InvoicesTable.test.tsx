import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import CUD from '.';
import { InvoicesProvider } from '../../../2-stores/use-invoices';
import InvoicesStore from '../../../2-stores/use-invoices/invoices.store';
import InvoiceFactory from '../../../1-models/invoice/invoice.factory';

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

function createStore(size: number) {
  const invoices = InvoiceFactory.buildList(size);
  const store = new InvoicesStore();

  store.setData(invoices);

  return store;
}

describe('<InvoicesTable/>', () => {
  describe('When there are no invoices to review', () => {
    it('Shows a message', () => {
      const store = createStore(0);

      render(<Wrap store={store} />);

      const linkElement = screen.getByText(/there are no invoices to review/i);

      expect(linkElement).toBeInTheDocument();
    });
  });

  describe('When there are some invoices to review', () => {
    it.each([
      [/invoice number/i],
      [/Vendor Name/i],
      [/Invoice Description/i],
      [/Due Date/i],
      [/Amount/i],
    ])('prints mandatory column %s', (column) => {
      const store = createStore(3);

      render(<Wrap store={store} />);

      const linkElement = screen.getByText(column);

      expect(linkElement).toBeInTheDocument();
    });

    it('allows reviwing an invoice', () => {
      const select = jest.fn();

      const store = createStore(1);

      store.select = select;
      const [selection] = store.invoices;

      render(<Wrap store={store} />);

      const row = screen.getByTestId(`invoice-row-${selection.id}`);

      const button = within(row).getByTestId('review-btn');

      fireEvent.click(button);

      expect(button).toBeDefined();
      expect(select).toHaveBeenCalledWith(selection.id);
    });
  });
});
