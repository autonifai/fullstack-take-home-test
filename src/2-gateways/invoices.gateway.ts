import { InvoiceDTO } from '../1-models/invoice/invoice.schema';
import schema from '../1-models/invoice/invoice.schema';
import instance from './http-client';

const endpoints = {
  async listInvoices() {
    const { data } = await instance.get<InvoiceDTO[]>('invoices');

    const invoices = data.map((i) => schema.parse(i));

    return invoices;
  },
};

export default endpoints;
