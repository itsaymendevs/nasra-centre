import React from 'react';
import PhoneForm from './PhoneForm';
import DeliveryForm from './DeliveryForm';
import PickupForm from './PickupForm';

// ----------------------------------------------------------------------------------------------------

export default function Content() {
  // ------------------------States---------------------
  // ------------------------Functions------------------
  // ------------------------Page-----------------------
  return (
    <div className="row g-0 align-items-center mb-2">
      <div className="col-12">
        <PhoneForm />
        <DeliveryForm />
        <PickupForm />
      </div>
    </div>
  );
} // end function
