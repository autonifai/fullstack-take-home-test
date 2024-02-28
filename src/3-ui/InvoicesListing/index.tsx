const invoices = [1, 2, 3, 4, 5];
const number = 'test';
const vendor_number = 'test';
const description = 'test';
const due_date = 'test';
const amount = 'test';

function InvoicesListing() {
  return (
    <table data-testid="invoices-listing">
      <thead>
        <tr>
          <th>Invoice Number</th>
          <th>Vendor Name</th>
          <th>Invoice Description</th>
          <th>Due Date</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => (
          <tr key={invoice} data-testid={`invoice-${number}`}>
            <td>{number}</td>
            <td>{vendor_number}</td>
            <td>{description}</td>
            <td>{due_date}</td>
            <td>{amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InvoicesListing;
