import IInvoiceRepository from '../../../Invoice/application/IInvoiceRepository'
import InvoiceService from '../../../Invoice/application/InvoiceService'

describe('InvoiceService', () => {
  describe('on getAll', () => {
    it('should ask the repository for all the invoices', async () => {
      const mockInvoiceRepository = {
        getAll: jest.fn()
      } as IInvoiceRepository

      const invoiceService = new InvoiceService(mockInvoiceRepository)

      await invoiceService.getAll()

      expect(mockInvoiceRepository.getAll).toHaveBeenCalledTimes(1)
    })
  })
})