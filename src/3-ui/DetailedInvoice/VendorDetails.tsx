import { Invoice } from '../../1-models/invoice/invoice.schema';
import Input from '../Input';

import styles from './DetailedInvoice.module.scss';

type Props = {
  invoice: Invoice;
};

function VendorDetails({ invoice }: Props) {
  return (
    <section id={styles['vendor-details']} data-testid="vendor-details">
      <header>
        <h2>Vendor Details</h2>
      </header>
      <div>
        <Input
          label="Name"
          disabled
          value={invoice.vendor}
          style={{ gridArea: 'name' }}
        />
        <Input
          label="Tax Registration Number"
          disabled
          value={invoice.vendor_tax_registration_number}
          style={{ gridArea: 'tax' }}
        />
        <Input
          label="Bank Details"
          disabled
          value={invoice.vendor_bank_details}
          style={{ gridArea: 'bank' }}
        />
        <Input
          label="Address"
          disabled
          value={invoice.vendor_address}
          style={{ gridArea: 'address' }}
        />
        <Input
          label="Billing Address"
          disabled
          value={invoice.billing_address}
          style={{ gridArea: 'billing' }}
        />
      </div>
    </section>
  );
}

export default VendorDetails;
