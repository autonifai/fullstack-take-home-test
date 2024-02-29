import React from 'react';
import { render, screen, within } from '@testing-library/react';
import CUD from '.';
import { InvoicesProvider } from '../../2-stores/use-invoices';
import InvoicesStore from '../../2-stores/use-invoices/invoices.store';
import InvoiceFactory from '../../1-models/invoice/invoice.factory';
import { Invoice } from '../../1-models/invoice/invoice.schema';

type Props = {
  invoice?: Invoice;
};

function Wrap({ invoice }: Props) {
  const store = new InvoicesStore();

  if (invoice) {
    store.setData([invoice]);
    store.select(invoice.id);
  }

  return (
    <InvoicesProvider store={store}>
      <CUD />
    </InvoicesProvider>
  );
}

describe('<DetailedInvoice/>', () => {
  describe('When nothing is selected', () => {
    it('does not render', () => {
      const { container } = render(<Wrap />);
      render(<Wrap />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('When an invoice is selected', () => {
    it('renders the invoice', () => {
      const [selected] = InvoiceFactory.random(1);

      render(<Wrap invoice={selected} />);

      const result = screen.getByTestId(`detailed-invoice-${selected.id}`);

      const vendor = within(result).getByTestId('vendor-details');
      const invoice = within(result).getByTestId('invoice-details');

      expect(vendor).toBeDefined();
      expect(invoice).toBeDefined();
    });
  });
});
