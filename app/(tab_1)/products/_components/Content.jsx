import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import SortPortal from './SortPortal';

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
      <SortPortal />
    </>
  );
} // end function
