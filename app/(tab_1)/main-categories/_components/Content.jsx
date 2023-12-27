import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import CoverForm from './CoverForm';
import NewPortal from './NewPortal';
import EditPortal from './EditPortal';

// ------------------------------------------------------------------

// 1: fetch data
export async function getMainCategories() {
  const response = await fetch(`${process.env.domainURL}/api/main-categories`, {
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
  const { mainCategories, category } = await getMainCategories();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters totalRows={mainCategories.length} />
      <ContentRows mainCategories={mainCategories} />
      <CoverForm category={category} />

      {/* portals */}
      <NewPortal />
      <EditPortal mainCategories={mainCategories} />
    </>
  );
} // end function
