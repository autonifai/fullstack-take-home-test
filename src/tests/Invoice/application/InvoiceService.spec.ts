import { InvoiceService } from '@src/Invoice/application'
import IInvoiceRepository from '@src/Invoice/application/IInvoiceRepository'

describe('InvoiceService', () => {
  let mockInvoiceRepository: Partial<IInvoiceRepository>

  beforeEach(() => {
    mockInvoiceRepository = {
      getAll: jest.fn(),
      getById: jest.fn(),
      aproveById: jest.fn(),
      rejectById: jest.fn(),
      getInvoicePdf: jest.fn(),
    }
  })

  it('should ask the repository for all the invoices', async () => {
    const invoiceService = new InvoiceService(mockInvoiceRepository as IInvoiceRepository)

    await invoiceService.getAll()

    expect(mockInvoiceRepository.getAll).toHaveBeenCalledTimes(1)
  })

  it('should ask the repository for an invoice by ID', async () => {
    const invoiceService = new InvoiceService(mockInvoiceRepository as IInvoiceRepository)
    const invoiceId = 'some-invoice-id'

    await invoiceService.getById(invoiceId)

    expect(mockInvoiceRepository.getById).toHaveBeenCalledWith(invoiceId)
    expect(mockInvoiceRepository.getById).toHaveBeenCalledTimes(1)
  })

  it('should ask the repository to approve an invoice by ID', async () => {
    const invoiceService = new InvoiceService(mockInvoiceRepository as IInvoiceRepository)
    const invoiceId = 'some-invoice-id'

    await invoiceService.aproveById(invoiceId)

    expect(mockInvoiceRepository.aproveById).toHaveBeenCalledWith(invoiceId)
    expect(mockInvoiceRepository.aproveById).toHaveBeenCalledTimes(1)
  })

  it('should ask the repository to reject an invoice by ID', async () => {
    const invoiceService = new InvoiceService(mockInvoiceRepository as IInvoiceRepository)
    const invoiceId = 'some-invoice-id'

    await invoiceService.rejectById(invoiceId)

    expect(mockInvoiceRepository.rejectById).toHaveBeenCalledWith(invoiceId)
    expect(mockInvoiceRepository.rejectById).toHaveBeenCalledTimes(1)
  })

  it('should ask the repository for an invoice PDF and create a blob URL', async () => {
    global.URL.createObjectURL = jest.fn()

    const fakePdfBlob = new Blob()
    mockInvoiceRepository.getInvoicePdf = jest.fn().mockResolvedValue(fakePdfBlob)
    const invoiceService = new InvoiceService(mockInvoiceRepository as IInvoiceRepository)
    const invoiceNumber = 'some-invoice-number'

    await invoiceService.getInvoicePdf(invoiceNumber)

    expect(mockInvoiceRepository.getInvoicePdf).toHaveBeenCalledWith(invoiceNumber)
    expect(mockInvoiceRepository.getInvoicePdf).toHaveBeenCalledTimes(1)
    expect(URL.createObjectURL).toHaveBeenCalledWith(fakePdfBlob)
  })
})
