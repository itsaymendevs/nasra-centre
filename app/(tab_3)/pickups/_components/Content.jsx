import React from 'react';
import ContentRows from './ContentRows';
import ContentToggles from './ContentToggles';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContact() {
  const response = await fetch(`${process.env.domainURL}/api/pickup`, {
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
  const { pickups, stopPickup } = await getContact();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentToggles totalRows={pickups.length} stopPickup={stopPickup} />
      <ContentRows pickups={pickups} />
    </>
  );
} // end function
