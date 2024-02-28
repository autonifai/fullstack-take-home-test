import { observer } from 'mobx-react-lite';
import useInvoices from '../../2-stores/use-invoices';

const number = 'test';
const vendor_number = 'test';
const description = 'test';
const due_date = 'test';
const amount = 'test';

type Props = {
  invoices: number[];
};

/** TEST NOTE
 * Despite being used as "InvoiceListing" externally,
 * you'll notice that the inner implementation is a table
 *
 * No problem in this because the internal components should be able to have any implementation that satisfies their purpose,
 * in this case, showing a list of invoices
 */
function Content({ invoices }: Props) {
  if (!invoices.length) {
    return <>There's no invoices to review</>;
  }

  return (
    <table data-testid="invoices-listing">
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
          <tr key={invoice} data-testid={`invoice-${number}`}>
            <td>{number}</td>
            <td>{vendor_number}</td>
            <td>{description}</td>
            <td>{due_date}</td>
            <td>{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const InvoicesTable = observer(() => {
  const { invoices } = useInvoices();

  return <Content invoices={invoices} />;
});

export default InvoicesTable;
