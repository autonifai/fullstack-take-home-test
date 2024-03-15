import { HttpClient } from '../../../Common'
import RestInvoiceRepository from '../../../Invoice/infrastructure/RestInvoiceRepository'

describe('RestInvoiceRepository', () => {
  describe('on getAll', () => {
    it('should call the http client with the "/invoices" path', async () => {
      const mockHttpClient = {
        get: jest.fn(async () => ({ data: [] }))
      } as Partial<HttpClient> as HttpClient

      const repository = new RestInvoiceRepository(mockHttpClient)

      await repository.getAll()

      expect(mockHttpClient.get).toHaveBeenCalledWith('/invoices')
    })
  })
})