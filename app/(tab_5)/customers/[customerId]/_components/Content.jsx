import React from 'react';
import ContentInfo from './ContentInfo';
import ContentTabs from './ContentTabs';

// ------------------------------------------------------------------

export async function getContent(customerId) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/users/${customerId}`,
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

export default async function Content({ customerId }) {
  // ------------------------data---------------------
  const { user, countries } = await getContent(customerId);

  console.log(user);
  // ------------------------Page-----------------------
  return (
    <>
      <ContentInfo user={user} countries={countries} />
      <ContentTabs user={user} countries={countries} />
    </>
  );
} // end function
