import AsyncComponent from '../AsyncComponent';
import useReadInvoices from '../../2-capabilities/use-read-invoices';
import InvoicesTable from './InvoicesTable';

function Loading() {
  return <>Loading</>;
}
function Failure() {
  return <>An error has happened =/</>;
}

function InvoicesListing() {
  return (
    <AsyncComponent
      read={useReadInvoices}
      pending={Loading}
      error={Failure}
      success={InvoicesTable}
    />
  );
}

export default InvoicesListing;
