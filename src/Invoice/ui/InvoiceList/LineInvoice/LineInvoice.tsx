import Invoice from '../../../domain/Invoice';
import { ListRow } from '../ListRow';
import { formatAmount } from '../../../../Common';
import './LineInvoice.sass'
import { formatDate } from '../../../../Common';

export default function LineInvoice({ className, invoice }: LineInvoiceProps) {
  return (
    <li className={`line-invoice ${className}`}>
      <ListRow className='line-invoice__wrapper'>
        <p className='line-invoice__value'>{invoice.name}</p>
        <p className='line-invoice__value'>{invoice.vendor}</p>
        <p className='line-invoice__value'>{invoice.description}</p>
        <p className='line-invoice__value'>{formatDate(invoice.dueDate)}</p>
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