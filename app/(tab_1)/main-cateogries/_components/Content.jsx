import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import CoverForm from './CoverForm';

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
    </>
  );
} // end function
