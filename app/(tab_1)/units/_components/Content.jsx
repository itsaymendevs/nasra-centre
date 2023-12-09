import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
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

      {/* portals */}
      <NewPortal />
      <EditPortal />
    </>
  );
} // end function
