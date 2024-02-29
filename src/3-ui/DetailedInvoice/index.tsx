import { observer } from 'mobx-react-lite';
import { useCallback } from 'react';

import useInvoices from '../../2-stores/use-invoices';
import VendorDetails from './VendorDetails';
import InvoiceDetails from './InvoiceDetails';

import styles from './DetailedInvoice.module.scss';
import Modal from '../Modal';
import { Invoice, getStatus } from '../../1-models/invoice/invoice.schema';

type Props = {
  invoice: Invoice;
};

function Title({ invoice }: Props) {
  return (
    <div className={styles['title']}>
      <h1>{invoice.number}</h1>
      <span className={styles['badge']} data-type={invoice.status}>
        {getStatus(invoice.status)}
      </span>
    </div>
  );
}

const DetailedInvoice = observer(() => {
  const { selected: invoice, select } = useInvoices();

  const handleClose = useCallback(() => {
    select();
  }, [select]);

  if (!invoice) {
    return null;
  }

  return (
    <Modal title={<Title invoice={invoice} />} onClose={handleClose}>
      <div
        id={styles['detailed-invoice']}
        data-testid={`detailed-invoice-${invoice.id}`}
      >
        <VendorDetails invoice={invoice} />
        <InvoiceDetails invoice={invoice} />
        <div className={styles['button-group']}>
          <button disabled data-testid="approve">
            Validate
          </button>
          <button disabled data-testid="reject">
            Reject
          </button>
        </div>
      </div>
    </Modal>
  );
});

export default DetailedInvoice;
