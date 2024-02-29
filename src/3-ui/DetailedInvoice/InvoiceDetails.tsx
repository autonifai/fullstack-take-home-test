import { Invoice } from '../../1-models/invoice/invoice.schema';
import Input from '../Input';

type Props = {
  invoice: Invoice;
};

function InvoiceDetails({ invoice }: Props) {
  return (
    <section data-testid="invoice-details">
      <header>Invoice Details</header>
      <Input label="Number" disabled value={invoice.number} />
      <Input label="PO Number" disabled value={invoice.po_number} />
      <Input
        label="Date of Issue"
        disabled
        value={invoice.date_of_issue.toDateString()}
      />
      <Input label="Payment Terms" disabled value={invoice.payment_terms} />
      <Input
        label="Due Date"
        disabled
        value={invoice.due_date.toDateString()}
      />
      <Input label="Description" disabled value={invoice.description} />
      <Input
        label="Line Item Details"
        disabled
        value={invoice.line_item_details}
      />
      <Input label="Pre-Tax Amount" disabled value={invoice.pre_tax_amount} />
      <Input label="Discount" disabled value={invoice.discount} />
      <Input label="Tax Amount" disabled value={invoice.tax_amount} />
      <Input label="Total Amount" disabled value={invoice.total_amount} />
      <Input label="Currency" disabled value={invoice.currency} />
      <Input label="GL Code" disabled value={invoice.gl_code} />
      <Input label="Cost Centre" disabled value={invoice.cost_centre} />
    </section>
  );
}

export default InvoiceDetails;
