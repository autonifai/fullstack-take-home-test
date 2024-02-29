import { Invoice } from '../../1-models/invoice/invoice.schema';

type Props = {
  invoice: Invoice;
};

function InvoiceDetails({ invoice }: Props) {
  return (
    <section data-testid="invoice-details">
      <header>Invoice Details</header>
      <input disabled value={invoice.number} />
      <input disabled value={invoice.po_number} />
      <input disabled value={invoice.date_of_issue.toDateString()} />
      <input disabled value={invoice.payment_terms} />
      <input disabled value={invoice.due_date.toDateString()} />
      <input disabled value={invoice.description} />
      <input disabled value={invoice.line_item_details} />
      <input disabled value={invoice.pre_tax_amount} />
      <input disabled value={invoice.discount} />
      <input disabled value={invoice.tax_amount} />
      <input disabled value={invoice.total_amount} />
      <input disabled value={invoice.currency} />
      <input disabled value={invoice.gl_code} />
      <input disabled value={invoice.cost_centre} />
    </section>
  );
}

export default InvoiceDetails;
