import React from 'react';
import ContentFilters from './ContentFilters';
import ContentRows from './ContentRows';
import ToggleForm from './ToggleForm';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent() {
  const response = await fetch(`http://127.0.0.1:8000/api/previousOrders`, {
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
  const {
    orders,
    countries,
    states,
    deliveryAreas,
    stores,
    employees,
    productsTotalPrice,
    deliveryTotalPrice,
    generalBlock,
  } = await getContent();

  // ------------------------Page-----------------------

  return (
    <>
      <ToggleForm countries={countries} generalBlock={generalBlock} />
      <ContentFilters
        totalRows={orders.length}
        orders={orders}
        countries={countries}
        states={states}
        deliveryAreas={deliveryAreas}
        stores={stores}
        employees={employees}
        productsTotalPrice={productsTotalPrice}
        deliveryTotalPrice={deliveryTotalPrice}
      />
      <ContentRows orders={orders} />
    </>
  );
} // end function
