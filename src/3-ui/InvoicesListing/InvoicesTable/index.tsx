import { observer } from 'mobx-react-lite';
import useInvoices from '../../../2-stores/use-invoices';
import { Invoice } from '../../../1-models/invoice/invoice.schema';

import styles from './InvoicesTable.module.scss';

type Props = {
  invoices: Invoice[];
};

type InformationProps = {
  invoice: Invoice;
};

function Information({ invoice }: InformationProps) {
  return (
    <tr data-testid={`invoice-${invoice.id}`}>
      <td>{invoice.number}</td>
      <td>{invoice.vendor}</td>
      <td>{invoice.description}</td>
      <td>{invoice.due_date.toLocaleString()}</td>
      <td className={styles.number}>{invoice.total_amount}</td>
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
