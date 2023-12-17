import React from 'react';
import NewForm from './NewForm';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent() {
  const response = await fetch(`http://127.0.0.1:8000/api/products/create`, {
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
