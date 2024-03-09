import CUD from './invoices.store';
import InvoiceFactory from '../../1-models/invoice/invoice.factory';

describe('InvoicesStore', () => {
  describe('#setData', () => {
    it('sets input as data', () => {
      const store = new CUD();

      const invoices = InvoiceFactory.buildList(5);

      store.setData(invoices);

      expect(store.invoices).toStrictEqual(invoices);
    });
  });

  describe('#select', () => {
    it('starts without selected', () => {
      const store = new CUD();

      expect(store.selected).toBeUndefined();
    });

    describe('changes to a valid selected', () => {
      const store = new CUD();
      const invoice = InvoiceFactory.buildSingle();

      beforeAll(() => {
        store.setData([invoice]);
        store.select(invoice.id);
      });

      it('returns the selected invoice', () => {
        expect(store.selected).toStrictEqual(invoice);
      });

      it('protects changes to the selection', () => {
        const expectation = store.selected!.description;

        //@ts-ignore
        store.selected!.description = 'selected cannot change';

        expect(store.selected?.description).toStrictEqual(expectation);
      });
    });

    it('unselects', () => {
      const store = new CUD();
      const invoice = InvoiceFactory.buildSingle();

      store.setData([invoice]);
      store.select(invoice.id);
      store.select();

      expect(store.selected).toBeUndefined();
    });

    it('changes to an invalid selected', () => {
      const store = new CUD();

      const invoice = InvoiceFactory.buildSingle();

      store.setData([invoice]);
      store.select(invoice.id + 1);

      expect(store.selected).toBeUndefined();
    });
  });
  describe('#saveFile', () => {
    it('sets file to the invoice', () => {
      const store = new CUD();

      const invoice = InvoiceFactory.buildSingle();

      store.setData([invoice]);
      store.select(invoice.id);
      store.saveFile(invoice.id, new File([], 'test'));

      store.select(invoice.id);

      expect(store.selected?.file?.name).toEqual('test');
    });
  });
});
