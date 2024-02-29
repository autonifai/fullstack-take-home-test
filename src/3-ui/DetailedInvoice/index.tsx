import { observer } from 'mobx-react-lite';

import useInvoices from '../../2-stores/use-invoices';

const DetailedInvoice = observer(() => {
  const { selected: invoice } = useInvoices();

  if (!invoice) {
    return null;
  }

  return (
    <div data-testid={`detailed-invoice-${invoice.id}`}>{invoice.number}</div>
  );
});

export default DetailedInvoice;
