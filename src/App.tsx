import React from 'react';
import './App.css';
import InvoicesListing from './3-ui/InvoicesListing';
import DetailedInvoice from './3-ui/DetailedInvoice';

function App() {
  return (
    <div className="App">
      <DetailedInvoice />
      <InvoicesListing />
    </div>
  );
}

export default App;
