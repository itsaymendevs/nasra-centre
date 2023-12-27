import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import ContentToggles from './ContentToggles';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent() {
  const response = await fetch(`${process.env.domainURL}/api/delivery`, {
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
  const { areas, states, districts, stopDelivery } = await getContent();

  // ------------------------Page-----------------------

  return (
    <>
      <ContentToggles stopDelivery={stopDelivery} totalRows={areas.length} />
      {/* <ContentFilters totalRows={areas.length} states={states} districts={districts} /> */}
      <ContentRows areas={areas} />
    </>
  );
} // end function
