import React from 'react';
import NewForm from './NewForm';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent() {
  const response = await fetch(`http://127.0.0.1:8000/api/delivery`, {
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
  const { states, districts, deliveryTimes } = await getContent();

  // ------------------------Page-----------------------
  return (
    <>
      <NewForm
        states={states}
        districts={districts}
        deliveryTimes={deliveryTimes}
      />
    </>
  );
} // end function
