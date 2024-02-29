import { act, render, screen, within } from '@testing-library/react';
import CUD from '.';
import { InvoicesProvider } from '../../2-stores/use-invoices';
import InvoicesStore from '../../2-stores/use-invoices/invoices.store';
import InvoiceFactory from '../../1-models/invoice/invoice.factory';

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

describe('<DetailedInvoice/>', () => {
  describe('When nothing is selected', () => {
    it('does not render', () => {
      const store = createStore(3);

      const { container } = render(<Wrap store={store} />);

      expect(container).toBeEmptyDOMElement();
    });
  });

  describe('When an invoice is selected', () => {
    it('renders the invoice', () => {
      const store = createStore(1);
      const [invoice] = store.invoices;

      render(<Wrap store={store} />);

      act(() => {
        store.select(invoice.id);
      });

      const result = screen.getByTestId(`detailed-invoice-${invoice.id}`);

      const vendor = within(result).getByTestId('vendor-details');
      const invoiceDetails = within(result).getByTestId('invoice-details');
      const approve = within(result).getByTestId('approve');
      const reject = within(result).getByTestId('reject');

      expect(vendor).toBeDefined();
      expect(invoiceDetails).toBeDefined();
      expect(approve).toBeDefined();
      expect(reject).toBeDefined();
    });

    it('allows "unselecting" the invoice', () => {
      const store = createStore(1);

      const invoice = InvoiceFactory.buildSingle();

      const { container } = render(<Wrap store={store} />);

      act(() => {
        store.select(invoice.id);
        store.select();
      });

      expect(container).toBeEmptyDOMElement();
    });
  });
});
