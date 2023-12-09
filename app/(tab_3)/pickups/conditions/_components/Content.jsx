import React from 'react';
import ContentRows from './ContentRows';
import NewForm from './NewForm';
import EditPortal from './EditPortal';

// ----------------------------------------------------------------------------------------------------

export default function Content() {
  // ------------------------States---------------------
  // ------------------------Functions------------------
  // ------------------------Page-----------------------
  return (
    <>
      <NewForm />
      <ContentRows />

      {/* portals */}
      <EditPortal />
    </>
  );
} // end function
