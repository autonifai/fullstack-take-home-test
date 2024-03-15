import { renderHook } from '@testing-library/react'
import useInvoices from '../../../Invoice/ui/useInvoices'
import InvoiceService from '../../../Invoice/application/InvoiceService'

describe('useInvoice', () => {
  describe('on mount', () => {
    it('should ask the invoice service to retrieve all invoices', async () => {
      const mockInvoiceService = {
        getAll: jest.fn()
      } as Partial<InvoiceService> as InvoiceService

      renderHook(() => useInvoices(mockInvoiceService))

      expect(mockInvoiceService.getAll).toHaveBeenCalledTimes(1)
    })
  })
})