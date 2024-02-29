import { Invoice } from '../../1-models/invoice/invoice.schema';
import Input from '../Input';

import styles from './DetailedInvoice.module.scss';

type Props = {
  invoice: Invoice;
};

function InvoiceDetails({ invoice }: Props) {
  return (
    <section id={styles['invoice-details']} data-testid="invoice-details">
      <header>
        <h2>Invoice Details</h2>
      </header>
      <div>
        <Input
          label="Number"
          disabled
          value={invoice.number}
          style={{ gridArea: 'number' }}
        />
        <Input
          label="PO Number"
          disabled
          value={invoice.po_number}
          style={{ gridArea: 'po_number' }}
        />
        <Input
          label="Date of Issue"
          disabled
          value={invoice.date_of_issue.toDateString()}
          style={{ gridArea: 'date_of_issue' }}
        />
        <Input
          label="Payment Terms"
          disabled
          value={invoice.payment_terms}
          style={{ gridArea: 'payment_terms' }}
        />
        <Input
          label="Due Date"
          disabled
          value={invoice.due_date.toDateString()}
          style={{ gridArea: 'due_date' }}
        />
        <Input
          label="Description"
          disabled
          value={invoice.description}
          style={{ gridArea: 'description' }}
        />
        <Input
          label="Line Item Details"
          disabled
          value={invoice.line_item_details}
          style={{ gridArea: 'line_item_details' }}
        />
        <Input
          label="Pre-Tax Amount"
          disabled
          value={invoice.pre_tax_amount}
          style={{ gridArea: 'pre_tax_amount' }}
        />
        <Input
          label="Discount"
          disabled
          value={invoice.discount}
          style={{ gridArea: 'discount' }}
        />
        <Input
          label="Tax Amount"
          disabled
          value={invoice.tax_amount}
          style={{ gridArea: 'tax_amount' }}
        />
        <Input
          label="Total Amount"
          disabled
          value={invoice.total_amount}
          style={{ gridArea: 'total_amount' }}
        />
        <Input
          label="Currency"
          disabled
          value={invoice.currency}
          style={{ gridArea: 'currency' }}
        />
        <Input
          label="GL Code"
          disabled
          value={invoice.gl_code}
          style={{ gridArea: 'gl_code' }}
        />
        <Input
          label="Cost Centre"
          disabled
          value={invoice.cost_centre}
          style={{ gridArea: 'cost_centre' }}
        />
      </div>
    </section>
  );
}

export default InvoiceDetails;
