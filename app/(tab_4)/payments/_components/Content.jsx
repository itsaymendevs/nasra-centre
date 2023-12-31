import React from 'react';
import ContentRows from './ContentRows';
import NewForm from './NewForm';
import EditPortal from './EditPortal';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent() {
  const response = await fetch(`${process.env.domainURL}/api/payments`, {
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
  const payments = await getContent();

  // ------------------------Page-----------------------
  return (
    <>
      <NewForm />
      <ContentRows payments={payments} />

      {/* portals */}
      <EditPortal payments={payments} />
    </>
  );
} // end function
