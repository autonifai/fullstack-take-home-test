import { InvoiceList } from './InvoiceList';

export default function InvoicesScreen() {
  return (
    <div className='invoices'>
      <InvoiceList className='invoices__list' />
    </div>
  )
}