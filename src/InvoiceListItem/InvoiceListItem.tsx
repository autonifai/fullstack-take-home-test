import { TableRow } from '../TableRow';
import './InvoiceListItem.sass'

export default function InvoiceListItem({ className }: InvoiceListItemProps) {
  return (
    <li className={`invoice-list-item ${className}`}>
      <TableRow className='invoice-list-item__wrapper'>
        <p className='invoice-list-item__value'>INV-123</p>
        <p className='invoice-list-item__value'>Apple, Inc.</p>
        <p className='invoice-list-item__value'>2x Macbook Pro</p>
        <p className='invoice-list-item__value'>02/02/24</p>
        <p className='invoice-list-item__value'>€16,000.00</p>
        <button className='invoice-list-item__review'>Review</button>
      </TableRow>
    </li>
  );
}

type InvoiceListItemProps = {
  className?: string
}