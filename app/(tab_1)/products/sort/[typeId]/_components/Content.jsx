import React from 'react';
import ContentItems from './ContentItems';

// ----------------------------------------------------------------------------------------------------

// 1: fetch data
export async function getContent(typeId) {
  const response = await fetch(
    `${process.env.domainURL}/api/products/${typeId}/sort`,
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

export default async function Content({ typeId }) {
  // ------------------------data---------------------
  const products = await getContent(typeId);

  // ------------------------Page-----------------------
  return (
    <>
      <ContentItems typeId={typeId} products={products} />
    </>
  );
} // end function
