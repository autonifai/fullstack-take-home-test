import CUD from './invoices.store';
import InvoiceFactory from '../../1-models/invoice/invoice.factory';

describe('InvoicesStore', () => {
  it('sets data', () => {
    const store = new CUD();

    const invoices = InvoiceFactory.random(5);

    store.setData(invoices);

    expect(store.invoices).toStrictEqual(invoices);
  });
});
