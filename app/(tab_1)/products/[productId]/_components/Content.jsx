import React from 'react';
import EditForm from './EditForm';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent(productId) {
  const response = await fetch(
    `${process.env.domainURL}/api/products/${productId}/edit`,
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

export default async function Content({ productId }) {
  // ------------------------data---------------------
  const { product, units, companies, mainCategories, subCategories, types } =
    await getContent(productId);

  // ------------------------Page-----------------------
  return (
    <>
      <EditForm
        product={product}
        units={units}
        companies={companies}
        mainCategories={mainCategories}
        subCategories={subCategories}
        types={types}
      />
    </>
  );
} // end function
