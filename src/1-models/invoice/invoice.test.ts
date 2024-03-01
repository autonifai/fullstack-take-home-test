import InvoiceFactory from '../../1-models/invoice/invoice.factory';

describe('Invoice', () => {
  describe('#statusName', () => {
    it.each([
      [InvoiceFactory.withPendingApproval().buildSingle(), 'Validation'],
      [InvoiceFactory.withRejection().buildSingle(), 'Rejected'],
      [InvoiceFactory.withApproval().buildSingle(), 'Approved'],
      [InvoiceFactory.withUnknownStatus().buildSingle(), 'Unknown'],
    ])('shows the correct name', (instance, text) => {
      expect(instance.statusName).toBe(text);
    });
  });
});
