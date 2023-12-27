import Link from 'next/link';
import React from 'react';

export default function PrintForm({ order }) {
  return (
    <div id="print--wrap">
      <div className="row g-0">
        {/* order no. */}
        <div className="col-3 mb-4">
          <label className="col-form-label form--label profile--label flex-column align-items-start scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Order No.
            </span>
            {order.orderNumber}
          </label>
        </div>

        {/* dateTime */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label flex-column align-items-start scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              DateTime
            </span>
            {order.orderDateTime}
          </label>
        </div>

        {/* print action */}
        <div className="col-5 text-end align-self-end mb-4">
          <Link
            className="btn btn--export scale--3 px-4 me-2"
            role="button"
            href="#">
            Print
          </Link>
          <Link
            className="btn btn--export scale--3 px-4"
            role="button"
            href="#">
            Print for pickup
          </Link>
        </div>
      </div>
    </div>
  );
} // end function
