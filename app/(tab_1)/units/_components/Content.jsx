import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import NewPortal from './NewPortal';
import EditPortal from './EditPortal';

// ------------------------------------------------------------------

// 1: fetch data
export async function getUnits() {
  const response = await fetch('http://127.0.0.1:8000/api/units', {
    cache: 'no-store',
    method: 'GET',
  });

  return response.json();
} // end function

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

export default async function Content() {
  // ------------------------data---------------------
  const units = await getUnits();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters totalRows={units.length} />
      <ContentRows units={units} />

      {/* portals */}
      <NewPortal />
      <EditPortal units={units} />
    </>
  );
} // end function
