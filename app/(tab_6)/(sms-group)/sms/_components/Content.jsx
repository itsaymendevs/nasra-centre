import React from 'react';
import PhoneForm from './PhoneForm';
import DeliveryForm from './DeliveryForm';
import PickupForm from './PickupForm';

// ------------------------------------------------------------------

// 1: fetch data
export async function getMessages() {
  const response = await fetch(`${process.env.domainURL}/api/messages`, {
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
  const { phoneMessage, deliveryMessages, pickupMessages } =
    await getMessages();

  // ------------------------Page-----------------------

  return (
    <div className="row g-0 align-items-center mb-2">
      <div className="col-12">
        <PhoneForm phoneMessage={phoneMessage} />
        <DeliveryForm deliveryMessages={deliveryMessages} />
        <PickupForm pickupMessages={pickupMessages} />
      </div>
    </div>
  );
} // end function
