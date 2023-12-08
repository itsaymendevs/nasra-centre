import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import ContentToggles from './ContentToggles';

// ----------------------------------------------------------------------------------------------------

export default function Content() {
  // ------------------------States---------------------
  // ------------------------Functions------------------
  // ------------------------Page-----------------------
  return (
    <>
      <ContentToggles />
      <ContentFilters totalRows={1} />
      <ContentRows />
    </>
  );
} // end function
