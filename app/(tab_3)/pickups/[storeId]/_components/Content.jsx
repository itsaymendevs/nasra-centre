import React from 'react';
import EditForm from './EditForm';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent(storeId) {
  const response = await fetch(
    `${process.env.domainURL}/api/pickup/${storeId}/edit`,
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

export default async function Content({ storeId }) {
  // ------------------------data---------------------
  const pickup = await getContent(storeId);

  // ------------------------Page-----------------------
  return (
    <>
      <EditForm pickup={pickup} />
    </>
  );
} // end function
