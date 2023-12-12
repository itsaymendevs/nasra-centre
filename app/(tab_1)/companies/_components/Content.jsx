import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import NewPortal from './NewPortal';
import EditPortal from './EditPortal';

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

export async function getCompanies() {
  const response = await fetch('http://127.0.0.1:8000/api/companies', {
    cache: 'no-store',
    method: 'GET',
  });

  return response.json();
} // end function

// ------------------------------------------------------------------
// ------------------------------------------------------------------

export default async function Content() {
  // ------------------------data---------------------
  const companies = await getCompanies();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters totalRows={companies.length} />
      <ContentRows companies={companies} />

      <NewPortal />
      <EditPortal companies={companies} />
    </>
  );
} // end function
