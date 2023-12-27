import React from 'react';
import StatusForm from './StatusForm';
import PaymentForm from './PaymentForm';
import PrintForm from './PrintForm';
import AddressInfo from './AddressInfo';
import ContentRows from './ContentRows';
import ConfirmPortal from './ConfirmPortal';

// ------------------------------------------------------------------

// 1: fetch data
export async function getContent(orderId) {
  const response = await fetch(
    `${process.env.domainURL}/api/orders/${orderId}`,
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

export default async function Content({ orderId }) {
  // ------------------------data---------------------
  const { order, messages, payments } = await getContent(orderId);

  console.log(messages);
  // ------------------------Page-----------------------
  return (
    <>
      <PrintForm order={order} />
      <StatusForm order={order} messages={messages} />
      <PaymentForm order={order} payments={payments} />
      <AddressInfo order={order} />
      <ContentRows totalRows={order.products.length} order={order} />

      {/* portals */}
      <ConfirmPortal />
    </>
  );
} // end function
