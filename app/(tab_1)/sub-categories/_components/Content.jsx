import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import NewPortal from './NewPortal';
import EditPortal from './EditPortal';
import SortPortal from './SortPortal';

// ------------------------------------------------------------------

// 1: fetch data
export async function getSubCategories() {
  const response = await fetch(`${process.env.domainURL}/api/sub-categories`, {
    cache: 'no-store',
    method: 'GET',
  });

  return response.json();
} // end function

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
  /// ------------------------data---------------------
  const mainCategories = await getMainCategories();
  const subCategories = await getSubCategories();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters
        totalRows={subCategories.length}
        mainCategories={mainCategories}
      />
      <ContentRows subCategories={subCategories} />

      {/* portals */}
      <NewPortal mainCategories={mainCategories} />
      <EditPortal
        mainCategories={mainCategories}
        subCategories={subCategories}
      />
      <SortPortal mainCategories={mainCategories} />
    </>
  );
} // end function
