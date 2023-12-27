import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent() {
  const response = await fetch(`${process.env.domainURL}/api/orders`, {
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
  const { orders, countries, states, deliveryAreas, stores } =
    await getContent();

  // ------------------------Page-----------------------
  return (
    <>
      <ContentFilters
        totalRows={orders.length}
        orders={orders}
        countries={countries}
        states={states}
        deliveryAreas={deliveryAreas}
        stores={stores}
      />
      <ContentRows orders={orders} />
    </>
  );
} // end function
