import Invoice from '../Invoice';
import { ListRow } from '../ListRow';
import formatAmount from '../formatAmount';
import './LineInvoice.sass'

export default function LineInvoice({ className, invoice }: LineInvoiceProps) {
  return (
    <li className={`line-invoice ${className}`}>
      <ListRow className='line-invoice__wrapper'>
        <p className='line-invoice__value'>{invoice.name}</p>
        <p className='line-invoice__value'>{invoice.vendor}</p>
        <p className='line-invoice__value'>{invoice.description}</p>
        <p className='line-invoice__value'>{invoice.dueDate.format('DD/MM/YY')}</p>
        <p className='line-invoice__value'>{formatAmount(invoice.totalAmount, invoice.currency)}</p>
        <button className='line-invoice__review'>Review</button>
      </ListRow>
    </li>
  );
}

type LineInvoiceProps = {
  className?: string,
  invoice: Invoice,
}