import React from 'react';
import EditForm from './EditForm';
import ContentFilters from './ContentFilters';

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
  const { products, mainCategories, subCategories, types } = await getContent();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters
        totalRows={products.length}
        mainCategories={mainCategories}
        subCategories={subCategories}
        types={types}
      />
      <EditForm products={products} />
    </>
  );
} // end function
