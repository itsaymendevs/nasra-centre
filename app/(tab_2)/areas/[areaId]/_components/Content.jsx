import React from 'react';
import EditForm from './EditForm';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent(areaId) {
  const response = await fetch(
    `${process.env.domainURL}/api/delivery/${areaId}/edit`,
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

export default async function Content({ areaId }) {
  // ------------------------data---------------------
  const { area, states, districts, deliveryTimes } = await getContent(areaId);

  // ------------------------Page-----------------------
  return (
    <>
      <EditForm
        area={area}
        states={states}
        districts={districts}
        deliveryTimes={deliveryTimes}
      />
    </>
  );
} // end function
