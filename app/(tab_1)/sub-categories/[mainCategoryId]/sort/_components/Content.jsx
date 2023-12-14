import React from 'react';
import ContentItems from './ContentItems';

// ----------------------------------------------------------------------------------------------------

// 1: fetch data
export async function getSubCategories(mainCategoryId) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/sub-categories/${mainCategoryId}/sort`,
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

export default async function Content({ mainCategoryId }) {
  // ------------------------data---------------------
  const subCategories = await getSubCategories(mainCategoryId);

  // ------------------------Page-----------------------
  return (
    <>
      <ContentItems
        subCategories={subCategories}
        mainCategoryId={mainCategoryId}
      />
    </>
  );
} // end function
