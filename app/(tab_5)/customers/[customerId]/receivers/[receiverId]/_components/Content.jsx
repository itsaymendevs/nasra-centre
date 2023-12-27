import React from 'react';
import ContentInfo from './ContentInfo';
import ContentRows from './ContentRows';

// ------------------------------------------------------------------

export async function getContent(customerId, receiverId) {
  const response = await fetch(
    `${process.env.domainURL}/api/users/${customerId}/receivers/${receiverId}`,
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

export default async function Content({ customerId, receiverId }) {
  // ------------------------data---------------------
  const receiver = await getContent(customerId, receiverId);

  console.log(receiver);
  // ------------------------Page-----------------------
  return (
    <>
      <ContentInfo receiver={receiver} />
      <ContentRows receiver={receiver} />
    </>
  );
} // end function
