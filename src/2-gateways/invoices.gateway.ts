import Invoice from '../1-models/invoice';
import { InvoiceDTO } from '../1-models/invoice/invoice.schema';
import instance from './http-client';

const endpoints = {
  async listInvoices() {
    const { data } = await instance.get<InvoiceDTO[]>('invoices');

    //TODO: remove(?) invoices that don't parse
    const invoices = data.map(Invoice.parse);

    return invoices;
  },
};

export default endpoints;
