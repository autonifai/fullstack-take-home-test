import AsyncComponent from '../AsyncComponent';
import useReadInvoices from '../../2-capabilities/use-read-invoices';
import InvoicesTable from './InvoicesTable';
import AsyncStatuses from '../../2-capabilities/async-statuses.type';

import styles from './InvoicesListing.module.scss';

type Props = {
  read?: () => { status: AsyncStatuses };
};

function Loading() {
  return <div className={styles.centered}>Loading</div>;
}
function Failure() {
  return <div className={styles.centered}>An error has happened =/</div>;
}

function InvoicesListing({ read = useReadInvoices }: Props) {
  return (
    <AsyncComponent
      read={read}
      pending={Loading}
      error={Failure}
      success={InvoicesTable}
    />
  );
}

export default InvoicesListing;
