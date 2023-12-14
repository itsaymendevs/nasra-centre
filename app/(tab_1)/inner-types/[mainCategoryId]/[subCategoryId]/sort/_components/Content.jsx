import React from 'react';
import ContentItems from './ContentItems';

// ----------------------------------------------------------------------------------------------------

// 1: fetch data
export async function getTypes(mainCategoryId, subCategoryId) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/inner-types/${mainCategoryId}/${subCategoryId}/sort`,
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

export default async function Content({ mainCategoryId, subCategoryId }) {
  // ------------------------data---------------------
  const types = await getTypes(mainCategoryId, subCategoryId);

  // ------------------------Page-----------------------
  return (
    <>
      <ContentItems
        types={types}
        mainCategoryId={mainCategoryId}
        subCategoryId={subCategoryId}
      />
    </>
  );
} // end function
