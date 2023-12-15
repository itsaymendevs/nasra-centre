import React from 'react';
import ContentRows from './ContentRows';
import NewForm from './NewForm';
import MediaForm from './MediaForm';
import AddressForm from './AddressForm';
import EditPortal from './EditPortal';

// ------------------------------------------------------------------

// 1: fetch data
export async function getHelpInfo() {
  const response = await fetch('http://127.0.0.1:8000/api/help', {
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
  const combine = await getHelpInfo();

  // ------------------------Page-----------------------
  return (
    <>
      <MediaForm media={combine.media} />
      <AddressForm address={combine.address} />
      <NewForm />
      <ContentRows aboutParagraphs={combine.aboutParagraphs} />

      {/* portals */}
      <EditPortal aboutParagraphs={combine.aboutParagraphs} />
    </>
  );
} // end function
