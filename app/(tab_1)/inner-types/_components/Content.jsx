import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import NewPortal from './NewPortal';
import EditPortal from './EditPortal';
import SortPortal from './SortPortal';

// ------------------------------------------------------------------

export async function getTypes() {
  const response = await fetch('http://127.0.0.1:8000/api/inner-types', {
    cache: 'no-store',
    method: 'GET',
  });

  return response.json();
} // end function

// 1: fetch data
export async function getSubCategories() {
  const response = await fetch('http://127.0.0.1:8000/api/sub-categories', {
    cache: 'no-store',
    method: 'GET',
  });

  return response.json();
} // end function

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
  const subCategories = await getSubCategories();
  const types = await getTypes();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters
        totalRows={types.length}
        mainCategories={mainCategories}
        subCategories={subCategories}
      />
      <ContentRows types={types} />

      {/* portals */}
      <NewPortal
        mainCategories={mainCategories}
        subCategories={subCategories}
      />
      <EditPortal
        mainCategories={mainCategories}
        subCategories={subCategories}
        types={types}
      />
      <SortPortal
        mainCategories={mainCategories}
        subCategories={subCategories}
      />
    </>
  );
} // end function
