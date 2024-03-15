import Invoice from '../domain/Invoice';

export default interface IInvoiceRepository {
  getAll(): Promise<Invoice[]>
}