import { InvoiceList } from './InvoiceList';
import useInvoices from './useInvoices';

export default function InvoicesScreen() {
  const { invoices, isLoading } = useInvoices()

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