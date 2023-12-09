import React from 'react';
import StatusForm from './StatusForm';
import PaymentForm from './PaymentForm';
import PrintForm from './PrintForm';
import AddressInfo from './AddressInfo';
import ContentRows from './ContentRows';

// ----------------------------------------------------------------------------------------------------

export default function Content() {
  // ------------------------States---------------------
  // ------------------------Functions------------------
  // ------------------------Page-----------------------
  return (
    <>
      <PrintForm />
      <StatusForm />
      <PaymentForm />
      <AddressInfo />
      <ContentRows totalRows={1} />
    </>
  );
} // end function
