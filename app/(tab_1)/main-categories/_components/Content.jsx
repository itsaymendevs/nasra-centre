import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import CoverForm from './CoverForm';
import NewPortal from './NewPortal';
import EditPortal from './EditPortal';

// ------------------------------------------------------------------

// 1: fetch data
export async function getMainCategories() {
  const response = await fetch('http://127.0.0.1:8000/api/main-categories', {
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
  const mainCategories = await getMainCategories();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters totalRows={mainCategories.length} />
      <ContentRows mainCategories={mainCategories} />
      <CoverForm />

      {/* portals */}
      <NewPortal />
      <EditPortal mainCategories={mainCategories} />
    </>
  );
} // end function
