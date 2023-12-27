import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import SortPortal from './SortPortal';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent() {
  const response = await fetch(`${process.env.domainURL}/api/products`, {
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
  const { products, mainCategories, subCategories, types, companies } =
    await getContent();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters
        totalRows={products.length}
        products={products}
        mainCategories={mainCategories}
        subCategories={subCategories}
        types={types}
        companies={companies}
      />
      <ContentRows products={products} />

      {/* portals */}
      <SortPortal
        mainCategories={mainCategories}
        subCategories={subCategories}
        types={types}
      />
    </>
  );
} // end function
