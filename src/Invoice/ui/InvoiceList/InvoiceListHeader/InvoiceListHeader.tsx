import { ListRow } from '../ListRow';
import './InvoiceListHeader.sass'

export default function InvoiceListHeader({ className }: InvoiceListHeaderPros) {
  return (
    <ListRow className={`invoice-list-header ${className}`}>
      <p className='invoice-list-header__column-label'>Invoice Number</p>
      <p className='invoice-list-header__column-label'>Vendor Name</p>
      <p className='invoice-list-header__column-label'>Invoice Description</p>
      <p className='invoice-list-header__column-label'>Due Date</p>
      <p className='invoice-list-header__column-label'>Amount</p>
    </ListRow>
  )
}

type InvoiceListHeaderPros = {
  className?: string,
}