import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import CoverForm from './CoverForm';
import NewPortal from './NewPortal';
import EditPortal from './EditPortal';

// ----------------------------------------------------------------------------------------------------

export default function Content() {
  // ------------------------States---------------------
  // ------------------------Functions------------------
  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters totalRows={1} />
      <ContentRows />
      <CoverForm />

      {/* portals */}
      <NewPortal />
      <EditPortal />
    </>
  );
} // end function
