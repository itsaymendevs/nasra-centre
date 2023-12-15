import React from 'react';
import PhoneForm from './PhoneForm';
import DeliveryForm from './DeliveryForm';
import PickupForm from './PickupForm';

// ------------------------------------------------------------------

// 1: fetch data
export async function getMessages() {
  const response = await fetch('http://127.0.0.1:8000/api/messages-global', {
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
    phoneMessageCustomer,
    deliveryMessagesCustomer,
    pickupMessagesCustomer,
    deliveryMessagesReceiver,
    pickupMessagesReceiver,
  } = await getMessages();

  // ------------------------Page-----------------------
  return (
    <div className="row g-0 align-items-center mb-2">
      <div className="col-12">
        <PhoneForm phoneMessageCustomer={phoneMessageCustomer} />
        <DeliveryForm
          deliveryMessagesCustomer={deliveryMessagesCustomer}
          deliveryMessagesReceiver={deliveryMessagesReceiver}
        />
        <PickupForm
          pickupMessagesCustomer={pickupMessagesCustomer}
          pickupMessagesReceiver={pickupMessagesReceiver}
        />
      </div>
    </div>
  );
} // end function
