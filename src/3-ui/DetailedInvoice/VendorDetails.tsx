import { Invoice } from '../../1-models/invoice/invoice.schema';

type Props = {
  invoice: Invoice;
};

function VendorDetails({ invoice }: Props) {
  return (
    <section data-testid="vendor-details">
      <header>Vendor Details</header>
      <input disabled value={invoice.vendor} />
      <input disabled value={invoice.vendor_tax_registration_number} />
      <input disabled value={invoice.vendor_bank_details} />
      <input disabled value={invoice.vendor_address} />
      <input disabled value={invoice.billing_address} />
    </section>
  );
}

export default VendorDetails;
