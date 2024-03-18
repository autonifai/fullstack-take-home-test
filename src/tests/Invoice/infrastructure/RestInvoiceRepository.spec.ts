import { HttpClient } from '@src/Common'
import { RestInvoiceRepository } from '@src/Invoice/infrastructure'

describe('RestInvoiceRepository', () => {
  let mockHttpClient: any

  beforeEach(() => {
    mockHttpClient = {
      get: jest.fn(),
      post: jest.fn(),
      delete: jest.fn(),
    } as jest.Mocked<Partial<HttpClient>>
  })

  describe('on getAll', () => {
    it('should call the http client with the "/invoices" path', async () => {
      mockHttpClient.get.mockResolvedValueOnce({ data: [] })
      const repository = new RestInvoiceRepository(mockHttpClient as HttpClient)

      await repository.getAll()

      expect(mockHttpClient.get).toHaveBeenCalledWith('/invoices')
    })
  })

  describe('on getById', () => {
    it('should call the http client with the "/invoices?invoice_id={invoiceId}" path', async () => {
      const invoiceId = 'test-invoice-id'
      mockHttpClient.get.mockResolvedValueOnce({ data: {} })
      const repository = new RestInvoiceRepository(mockHttpClient as HttpClient)

      repository.getById(invoiceId)

      expect(mockHttpClient.get).toHaveBeenCalledWith(`/invoices?invoice_id=${invoiceId}`)
    })
  })

  describe('on aproveById', () => {
    it('should call the http client with the "/invoices/{invoiceId}/approval" path for POST request', async () => {
      const invoiceId = 'test-invoice-id'
      const repository = new RestInvoiceRepository(mockHttpClient as HttpClient)

      await repository.aproveById(invoiceId)

      expect(mockHttpClient.post).toHaveBeenCalledWith(`/invoices/${invoiceId}/approval`)
    })
  })

  describe('on rejectById', () => {
    it('should call the http client with the "/invoices/{invoiceId}/approval" path for DELETE request', async () => {
      const invoiceId = 'test-invoice-id'
      const repository = new RestInvoiceRepository(mockHttpClient as HttpClient)

      await repository.rejectById(invoiceId)

      expect(mockHttpClient.delete).toHaveBeenCalledWith(`/invoices/${invoiceId}/approval`)
    })
  })

  describe('on getInvoicePdf', () => {
    it('should call the http client with the "/invoices/{invoiceNumber}/pdf" path and responseType blob', async () => {
      const invoiceNumber = 'test-invoice-number'
      const fakeBlob = new Blob()
      mockHttpClient.get.mockResolvedValueOnce({ data: fakeBlob })
      const repository = new RestInvoiceRepository(mockHttpClient as HttpClient)

      const result = await repository.getInvoicePdf(invoiceNumber)

      expect(mockHttpClient.get).toHaveBeenCalledWith(`/invoices/${invoiceNumber}/pdf`, { responseType: 'blob' })
      expect(result).toBe(fakeBlob)
    })
  })
})
