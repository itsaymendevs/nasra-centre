import React from 'react';
import ContentItems from './ContentItems';

// ----------------------------------------------------------------------------------------------------

// 1: fetch data
export async function getContent() {
  const response = await fetch(
    `http://127.0.0.1:8000/api/products/main-page/sort`,
    {
      cache: 'no-store',
      method: 'GET',
    }
  );

  return response.json();
} // end function

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

export default async function Content() {
  // ------------------------data---------------------
  const products = await getContent();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentItems products={products} />
    </>
  );
} // end function
