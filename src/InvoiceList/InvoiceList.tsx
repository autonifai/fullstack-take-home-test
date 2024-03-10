import { InvoiceListHeader } from './InvoiceListHeader';
import { InvoiceListItem } from './InvoiceListItem';
import './InvoiceList.sass'

export default function InvoiceList({ className }: InvoiceListProps) {
  return (
    <div className={`invoice-list__wrapper ${className}`}>
      <InvoiceListHeader className='invoice-list__header'/>
      <ol className='invoice-list'>
        <InvoiceListItem className='invoice-list__invoice-list-item' />
        <InvoiceListItem className='invoice-list__invoice-list-item' />
        <InvoiceListItem className='invoice-list__invoice-list-item' />
        <InvoiceListItem className='invoice-list__invoice-list-item' />
      </ol>
    </div>
  )
}

type InvoiceListProps = {
  className?: string,
}
