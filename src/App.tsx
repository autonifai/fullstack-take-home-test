import React from 'react';
import './App.css';
import InvoicesListing from './3-ui/InvoicesListing';
import DetailedInvoice from './3-ui/DetailedInvoice';

function InvoicePage() {
  return (
    <>
      <DetailedInvoice />
      <InvoicesListing />
    </>
  );
}

/** TESTING NOTE
 * The app could benefit from having routes for each invoice,
 * I only thought about it last second, so I won't implenment
 *
 * But this would allow users to "share" the invoice
 */
function App() {
  return (
    <div className="App">
      <InvoicePage />
    </div>
  );
}

export default App;
