import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';

// ------------------------------------------------------------------

export async function getContent() {
  const response = await fetch('http://127.0.0.1:8000/api/users', {
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
  const { users, countries, states, deliveryAreas } = await getContent();

  // ------------------------Page-----------------------

  return (
    <>
      <ContentFilters
        totalRows={users.length}
        countries={countries}
        states={states}
        deliveryAreas={deliveryAreas}
      />
      <ContentRows users={users} />
    </>
  );
} // end function
