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
}