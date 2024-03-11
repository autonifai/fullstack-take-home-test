import { InvoiceListHeader } from './InvoiceListHeader';
import { LineInvoice } from './LineInvoice';
import './InvoiceList.sass'
import invoiceFixture from '../../tests/Fixtures/invoiceFixture';

export default function InvoiceList({ className }: InvoiceListProps) {
  return (
    <div className={`invoice-list__wrapper ${className}`}>
      <InvoiceListHeader className='invoice-list__header'/>
      <ol className='invoice-list'>
        <LineInvoice className='invoice-list__invoice-list-item' invoice={invoiceFixture} />
        <LineInvoice className='invoice-list__invoice-list-item' invoice={invoiceFixture} />
        <LineInvoice className='invoice-list__invoice-list-item' invoice={invoiceFixture} />
        <LineInvoice className='invoice-list__invoice-list-item' invoice={invoiceFixture} />
      </ol>
    </div>
  )
}

type InvoiceListProps = {
  className?: string,
}
