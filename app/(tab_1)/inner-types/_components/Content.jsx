import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import NewPortal from './NewPortal';
import EditPortal from './EditPortal';
import SortPortal from './SortPortal';

// ------------------------------------------------------------------

export async function getTypes() {
  const response = await fetch(`${process.env.domainURL}/api/inner-types`, {
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
  const { types, subCategories, mainCategories } = await getTypes();

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
