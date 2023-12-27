import React from 'react';
import ContentItems from './ContentItems';

// ----------------------------------------------------------------------------------------------------

// 1: fetch data
export async function getMainCategories() {
  const response = await fetch(
    `${process.env.domainURL}/api/main-categories/sort`,
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
  const mainCategories = await getMainCategories();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentItems mainCategories={mainCategories} />
    </>
  );
} // end function
