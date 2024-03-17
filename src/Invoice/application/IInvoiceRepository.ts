import Invoice from '../domain/Invoice';

export default interface IInvoiceRepository {
  getAll(): Promise<Invoice[]>
  
  getById(invoiceId: string): Promise<Invoice>
  
  aproveById(invoiceId: string): PromiseLike<void>;
  
  rejectById(invoiceId: string): PromiseLike<void>;

  getInvoicePdf(invoiceNumber: string): Promise<Blob>;
}