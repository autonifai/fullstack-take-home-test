import Invoice from '../domain/Invoice';
import IInvoiceRepository from './IInvoiceRepository';

export default class InvoiceService {
  constructor(
    private repository: IInvoiceRepository
  ) {

  }
  
  public async getAll(): Promise<Invoice[]> {
    return this.repository.getAll()
  }

  public async getById(invoiceId: string): Promise<Invoice> {
    return this.repository.getById(invoiceId)
  }

  public async aproveById(invoiceId: string): Promise<void> {
    return this.repository.aproveById(invoiceId)
  }

  public async rejectById(invoiceId: string): Promise<void> {
    return this.repository.rejectById(invoiceId)
  }

  public async getInvoicePdf(invoiceNumber: string): Promise<string> {
    const invoicePdf = await this.repository.getInvoicePdf(invoiceNumber)

    return URL.createObjectURL(invoicePdf)
  }
}