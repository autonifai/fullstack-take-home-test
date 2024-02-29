import { observer } from 'mobx-react-lite';

import useInvoices from '../../2-stores/use-invoices';
import VendorDetails from './VendorDetails';
import InvoiceDetails from './InvoiceDetails';

const DetailedInvoice = observer(() => {
  const { selected: invoice } = useInvoices();

  if (!invoice) {
    return null;
  }

  return (
    <div data-testid={`detailed-invoice-${invoice.id}`}>
      <header>{invoice.number}</header>
      <VendorDetails invoice={invoice} />
      <InvoiceDetails invoice={invoice} />
    </div>
  );
});

export default DetailedInvoice;
