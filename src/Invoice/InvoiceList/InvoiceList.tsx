import { InvoiceListHeader } from './InvoiceListHeader';
import { LineInvoice } from './LineInvoice';
import './InvoiceList.sass'
import Invoice from '../Invoice';

export default function InvoiceList({ className, invoices }: InvoiceListProps) {

  return (
    <div className={`invoice-list__wrapper ${className}`}>
      <InvoiceListHeader className='invoice-list__header'/>
      <ol className='invoice-list'>
        {invoices.map(invoice => <LineInvoice className='invoice-list__item' key={invoice.id} invoice={invoice} />)}
      </ol>
    </div>
  )
}

type InvoiceListProps = {
  className?: string,
  invoices: Invoice[]
}
