import { TableHeader } from '../TableHeader';
import { InvoiceListItem } from '../InvoiceListItem';
import './InvoiceList.sass'

export default function InvoiceList({ className }: InvoiceListProps) {
  return (
    <>
      <TableHeader className='invoice-list__header'/>
      <ul className={`invoice-list ${className}`}>
        <InvoiceListItem className='invoicelist__invoice-list-item' />
        <InvoiceListItem className='invoicelist__invoice-list-item' />
        <InvoiceListItem className='invoicelist__invoice-list-item' />
        <InvoiceListItem className='invoicelist__invoice-list-item' />
      </ul>
    </>
  )
}

type InvoiceListProps = {
  className?: string,
}
