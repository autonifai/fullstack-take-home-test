import { TableHeader } from '../TableHeader';
import './InvoiceList.sass'

export default function InvoiceList({ className }: InvoiceListProps) {
  return (
    <ul className={`invoice-list ${className}`}>
      <TableHeader className='invoice-list__header'/>
      <li className='invoice-list__invoice'>
        <p></p>
      </li>
    </ul>
  )
}

type InvoiceListProps = {
  className?: string,
}