import InvoiceService from '../application/InvoiceService';
import useInvoices from './useInvoices';
import { InvoiceList } from './InvoiceList';
import RestInvoiceRepository from '../infrastructure/RestInvoiceRepository';
import { HttpClient } from '../../Common';

export default function InvoicesScreen() {
  const httpClient = new HttpClient('http://localhost:8000')
  const invoiceRepository = new RestInvoiceRepository(httpClient)
  const invoiceService = new InvoiceService(invoiceRepository)

  const { invoices, isLoading } = useInvoices(invoiceService)

  return (
    <div className='invoices'>
      {isLoading
        ?
          <p>Loading...</p>
        :
          <InvoiceList className='invoices__list'
            invoices={invoices}
          />}
    </div>
  )
}