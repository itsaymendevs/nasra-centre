import Link from 'next/link';
import React from 'react';

export default function AddressInfo({ order }) {
  return (
    <div id="address--wrap">
      <hr className="mb-4" />
      <div className="row g-0">
        {/* customer */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label flex-column align-items-start scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Customer
            </span>
            <Link
              className="text-decoration-none text-primary"
              href={`/customers/${order.user.id}`}>
              {order.user.firstName} {order.user.lastName}
            </Link>
          </label>
        </div>

        {/* phone */}
        <div className="col-5 mb-4">
          <label className="col-form-label form--label profile--label flex-column align-items-start scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Phone
            </span>
            {order.country.code == 'SD'
              ? order.user.phone.replace('249', '0')
              : order.user.phone}
            {/* Print if order is local */}
            {order.country.code == 'SD'
              ? order.orderSecondPhone &&
                ' / ' + order.orderSecondPhone.replace('249', '0')
              : ''}
          </label>
        </div>

        {/* country of uk or irl */}
        <div className="col-3 mb-4">
          <label className="col-form-label form--label profile--label flex-column align-items-start scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Country
            </span>
            {order.country.code == 'SD'
              ? order.receivingOption == 'DELIVERY'
                ? order.state.name + ' / ' + order.delivery_area.name
                : order.country.name
              : order.country.name}
          </label>
        </div>

        {/* ---------------------------- */}

        {/* receiver (if found) */}
        {order.receiver && (
          <>
            <div className="col-4 mb-4">
              <label className="col-form-label form--label profile--label flex-column align-items-start scale--3 me-3">
                <span
                  className="fw-600 profile--span-title one-line"
                  style={{ lineHeight: 'initial' }}>
                  Receiver
                </span>
                <Link
                  className="text-decoration-none text-primary"
                  href={`/customers/${order.user.id}/receivers/${order.receiver.id}`}>
                  {order.receiverName}
                </Link>
              </label>
            </div>

            {/* receiver phones + alternative */}
            <div className="col-5 mb-4">
              <label className="col-form-label form--label profile--label flex-column align-items-start scale--3 me-3">
                <span
                  className="fw-600 profile--span-title one-line"
                  style={{ lineHeight: 'initial' }}>
                  Phone - Alternatives
                </span>
                {order.receiverPhone.replace('249', '0')}
                {/* Print if order is foreign */}
                {order.country.code != 'SD'
                  ? order.orderSecondPhone &&
                    ' / ' + order.orderSecondPhone.replace('249', '0')
                  : ''}
              </label>
            </div>

            {/* country of receiver */}
            <div className="col-3 mb-4">
              <label className="col-form-label form--label profile--label flex-column align-items-start scale--3 me-3">
                <span
                  className="fw-600 profile--span-title one-line"
                  style={{ lineHeight: 'initial' }}>
                  Country
                </span>
                {order.state.name} / {order.delivery_area.name}
              </label>
            </div>
          </>
        )}

        {/* address of receiver / user */}
        <div className="col-12 mb-4">
          <label className="col-form-label form--label profile--label flex-column align-items-start scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Rough Address
            </span>
            {order.country.code == 'SD'
              ? order.receivingOption == 'DELIVERY'
                ? order.user.address
                : 'Unavailable'
              : order.receiver.address}
            <br />
          </label>
        </div>
      </div>
      {/* end row */}
    </div>
  );
} // end function
