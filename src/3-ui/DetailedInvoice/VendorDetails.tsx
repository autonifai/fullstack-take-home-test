import { Invoice } from '../../1-models/invoice/invoice.schema';
import Input from '../Input';

type Props = {
  invoice: Invoice;
};

function VendorDetails({ invoice }: Props) {
  return (
    <section data-testid="vendor-details">
      <header>Vendor Details</header>
      <Input label="Name" disabled value={invoice.vendor} />
      <Input
        label="Tax Registration Number"
        disabled
        value={invoice.vendor_tax_registration_number}
      />
      <Input
        label="Bank Details"
        disabled
        value={invoice.vendor_bank_details}
      />
      <Input label="Address" disabled value={invoice.vendor_address} />
      <Input label="Billing Address" disabled value={invoice.billing_address} />
    </section>
  );
}

export default VendorDetails;
