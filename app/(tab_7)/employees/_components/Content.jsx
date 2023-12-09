import React from 'react';
import ContentRows from './ContentRows';
import NewForm from './NewForm';
import EditPortal from './EditPortal';
import ResetPortal from './ResetPortal';

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
      <ResetPortal />
    </>
  );
} // end function
