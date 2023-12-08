import React from 'react';
import EditForm from './EditForm';
import ContentFilters from './ContentFilters';

// ----------------------------------------------------------------------------------------------------

export default function Content() {
  // ------------------------States---------------------
  // ------------------------Functions------------------
  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters totalRows={1} />
      <EditForm />
    </>
  );
} // end function
