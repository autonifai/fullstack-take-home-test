import { observer } from 'mobx-react-lite';

import useInvoices from '../../2-stores/use-invoices';
import VendorDetails from './VendorDetails';
import InvoiceDetails from './InvoiceDetails';

import styles from './DetailedInvoice.module.scss';

const DetailedInvoice = observer(() => {
  const { selected: invoice } = useInvoices();

  if (!invoice) {
    return null;
  }

  return (
    <div
      id={styles['detailed-invoice']}
      data-testid={`detailed-invoice-${invoice.id}`}
    >
      <header>
        <h1>{invoice.number}</h1>
        <span>{invoice.status}</span>
      </header>
      <VendorDetails invoice={invoice} />
      <InvoiceDetails invoice={invoice} />
    </div>
  );
});

export default DetailedInvoice;
