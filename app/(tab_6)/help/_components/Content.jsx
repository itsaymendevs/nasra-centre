import React from 'react';
import ContentRows from './ContentRows';
import NewForm from './NewForm';
import MediaForm from './MediaForm';
import AddressForm from './AddressForm';

// ----------------------------------------------------------------------------------------------------

export default function Content() {
  // ------------------------States---------------------
  // ------------------------Functions------------------
  // ------------------------Page-----------------------
  return (
    <>
      <MediaForm />
      <AddressForm />
      <NewForm />
      <ContentRows />
    </>
  );
} // end function
