import Invoice from '../1-models/invoice';
import { InvoiceDTO } from '../1-models/invoice/invoice.schema';
import instance from './http-client';

const endpoints = {
  async listInvoices() {
    const { data = [] } = await instance.get<InvoiceDTO[]>('invoices');

    const invoices = data.reduce(removeUnrecognized, []);

    return invoices;
  },
  async approveInvoice(id: number) {
    const { data } = await instance.post<null>(`invoices/${id}/approval`);

    return data;
  },
  async rejectInvoice(id: number) {
    const { data } = await instance.delete<null>(`invoices/${id}/approval`);

    return data;
  },
};

function removeUnrecognized(acc: Invoice[], dto: InvoiceDTO): Invoice[] {
  try {
    const parsed = Invoice.parse(dto);

    return [...acc, parsed];
  } catch (e) {
    return acc;
  }
}

export default endpoints;
