import { ListRow } from '../ListRow';
import './InvoiceListHeader.sass'

export default function InvoiceListHeader({ className }: InvoiceListHeaderPros) {
  return (
    <ListRow className={`invoice-list-header ${className}`}>
      <p className='invoice-list-header__column-label'>Invoice name</p>
      <p className='invoice-list-header__column-label'>Vendor name</p>
      <p className='invoice-list-header__column-label'>Invoice description</p>
      <p className='invoice-list-header__column-label'>Due date</p>
      <p className='invoice-list-header__column-label'>Amount</p>
    </ListRow>
  )
}

type InvoiceListHeaderPros = {
  className?: string,
}