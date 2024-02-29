import { observer } from 'mobx-react-lite';
import { useCallback, useEffect, useState } from 'react';

import useInvoices from '../../2-stores/use-invoices';
import VendorDetails from './VendorDetails';
import InvoiceDetails from './InvoiceDetails';

import styles from './DetailedInvoice.module.scss';
import Modal from '../Modal';
import Invoice from '../../1-models/invoice';
import useApproveInvoice from '../../2-capabilities/use-approve-invoice';

type Props = {
  invoice: Invoice;
};

function Title({ invoice }: Props) {
  return (
    <div className={styles['title']}>
      <h1>{invoice.number}</h1>
      <span className={styles['badge']} data-type={invoice.status}>
        {invoice.statusName}
      </span>
    </div>
  );
}

const DetailedInvoice = observer(() => {
  const { selected: invoice, select, reject } = useInvoices();
  const { approve, loading } = useApproveInvoice();
  const [isWaiting, setWaiting] = useState(false);

  useEffect(() => {
    setWaiting(loading);
  }, [loading]);

  const handleClose = useCallback(() => {
    select();
  }, [select]);

  const handleApprove = useCallback(() => {
    approve({ invoice: invoice! });
  }, [approve, invoice]);

  const handleReject = useCallback(() => {
    reject(invoice!);
  }, [reject, invoice]);

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
          <button
            disabled={isWaiting}
            data-testid="approve"
            onClick={handleApprove}
          >
            Validate
          </button>
          <button
            disabled={isWaiting}
            data-testid="reject"
            onClick={handleReject}
          >
            Reject
          </button>
        </div>
      </div>
    </Modal>
  );
});

export default DetailedInvoice;
