import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import ToggleForm from './ToggleForm';

// ----------------------------------------------------------------------------------------------------

export default function Content() {
  // ------------------------States---------------------
  // ------------------------Functions------------------
  // ------------------------Page-----------------------
  return (
    <>
      <ToggleForm />
      <ContentFilters totalRows={1} />
      <ContentRows />
    </>
  );
} // end function
