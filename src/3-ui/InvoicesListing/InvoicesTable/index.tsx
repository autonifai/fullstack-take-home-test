import { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import useInvoices from '../../../2-stores/use-invoices';
import { Invoice } from '../../../1-models/invoice/invoice.schema';

import styles from './InvoicesTable.module.scss';
import useFormatting from '../../useFormatting';

type Props = {
  invoices: Invoice[];
};

type InformationProps = {
  invoice: Invoice;
};

function Information({ invoice }: InformationProps) {
  const { select } = useInvoices();
  const { getDate, getMoney } = useFormatting();

  const handleOpen = useCallback(() => {
    select(invoice.id);
  }, [invoice.id, select]);

  return (
    <tr data-testid={`invoice-row-${invoice.id}`}>
      <td>{invoice.number}</td>
      <td>{invoice.vendor}</td>
      <td>{invoice.description}</td>
      <td>{getDate(invoice.due_date)}</td>
      <td className={styles.number}>
        {getMoney(invoice.total_amount, invoice.currency)}
      </td>
      <td>
        <button
          className={styles['review-btn']}
          data-testid="review-btn"
          onClick={handleOpen}
        >
          Review
        </button>
      </td>
    </tr>
  );
}

function Content({ invoices }: Props) {
  if (!invoices.length) {
    return <>There are no invoices to review</>;
  }

  return (
    <table className={styles.table} data-testid="invoices-listing">
      <thead>
        <tr>
          <th>Invoice Number</th>
          <th>Vendor Name</th>
          <th>Invoice Description</th>
          <th>Due Date</th>
          <th>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <Information key={invoice.id} invoice={invoice} />
        ))}
      </tbody>
    </table>
  );
}

/** TEST NOTE
 * Despite being used as "InvoiceListing" externally,
 * you'll notice that the inner implementation is a table
 *
 * No problem in this because the internal components should be able to have any implementation that satisfies their purpose,
 * in this case, showing a list of invoices
 */
const InvoicesTable = observer(() => {
  const { invoices } = useInvoices();

  return <Content invoices={invoices} />;
});

export default InvoicesTable;
