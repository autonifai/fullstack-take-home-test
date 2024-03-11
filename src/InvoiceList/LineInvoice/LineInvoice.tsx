import Invoice from '../Invoice';
import { ListRow } from '../ListRow';
import './LineInvoice.sass'

export default function LineInvoice({ className, invoice }: LineInvoiceProps) {
  function formatAmount(amount: number, currencyCode: string) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  
    return formatter.format(amount);
  }

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