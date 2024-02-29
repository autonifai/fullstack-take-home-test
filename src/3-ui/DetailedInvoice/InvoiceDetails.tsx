import Invoice from '../../1-models/invoice';
import Input from '../Input';
import useFormatting from '../useFormatting';

import styles from './DetailedInvoice.module.scss';

type Props = {
  invoice: Invoice;
};

function InvoiceDetails({ invoice }: Props) {
  const { getDate, getNumber } = useFormatting();

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
          value={getDate(invoice.date_of_issue)}
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
          value={getDate(invoice.due_date)}
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
          value={getNumber(invoice.pre_tax_amount)}
          style={{ gridArea: 'pre_tax_amount' }}
        />
        <Input
          label="Discount"
          disabled
          value={getNumber(invoice.discount)}
          style={{ gridArea: 'discount' }}
        />
        <Input
          label="Tax Amount"
          disabled
          value={getNumber(invoice.tax_amount)}
          style={{ gridArea: 'tax_amount' }}
        />
        <Input
          label="Total Amount"
          disabled
          value={getNumber(invoice.total_amount)}
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
