import InvoiceService from '../application/InvoiceService';
import useInvoices from './useInvoices';
import { InvoiceList } from './InvoiceList';

export default function InvoicesScreen({ invoiceService }: InvoicesScreenProps) {

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

type InvoicesScreenProps = {
  invoiceService: InvoiceService
}