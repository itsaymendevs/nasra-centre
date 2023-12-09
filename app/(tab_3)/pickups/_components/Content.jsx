import React from 'react';
import ContentRows from './ContentRows';
import ContentToggles from './ContentToggles';

// ----------------------------------------------------------------------------------------------------

export default function Content() {
  // ------------------------States---------------------
  // ------------------------Functions------------------
  // ------------------------Page-----------------------
  return (
    <>
      <ContentToggles totalRows={1} />
      <ContentRows />
    </>
  );
} // end function
