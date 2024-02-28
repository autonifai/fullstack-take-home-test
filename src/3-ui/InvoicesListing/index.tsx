import AsyncComponent from '../AsyncComponent';
import useReadInvoices from '../../2-capabilities/use-read-invoices';
import InvoicesTable from './InvoicesTable';
import AsyncStatuses from '../../2-capabilities/async-statuses.type';

type Props = {
  read?: () => { status: AsyncStatuses };
};

function Loading() {
  return <>Loading</>;
}
function Failure() {
  return <>An error has happened =/</>;
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
