import React from 'react';
import NewForm from './NewForm';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent() {
  const response = await fetch(`${process.env.domainURL}/api/products/create`, {
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
  const { serial, units, companies, mainCategories, subCategories, types } =
    await getContent();

  // ------------------------Page-----------------------

  return (
    <>
      <NewForm
        units={units}
        companies={companies}
        mainCategories={mainCategories}
        subCategories={subCategories}
        types={types}
        serial={serial}
      />
    </>
  );
} // end function
