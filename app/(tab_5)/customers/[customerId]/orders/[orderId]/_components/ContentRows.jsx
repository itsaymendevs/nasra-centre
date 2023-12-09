'use client';

import Link from 'next/link';
import React from 'react';
import Select from 'react-select';

// -----------------------------------------------------------------------------

export default function ContentRows() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // --------------------------------------------
  return (
    <div id="results--row">
      {/* titles */}
      <div
        className="row g-0 align-items-center results--header mb-2 active"
        id="results--header">
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Serial
          </label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Quantity
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Price / one
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Total Price
          </label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* items */}
      <div className="row g-0 align-items-center results--item">
        {/* serial product */}
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            P-10503
          </label>
        </div>

        {/* name */}
        <div className="col-4">
          <label className="col-form-label form--label row--label">
            Watermellon
          </label>
        </div>

        {/* quantity */}
        <div className="col-2">
          <label className="col-form-label form--label row--label">2</label>
        </div>

        {/* price per one */}
        <div className="col-2">
          <label className="col-form-label form--label row--label">10</label>
        </div>

        {/* total price */}
        <div className="col-2">
          <label className="col-form-label form--label row--label">20</label>
        </div>
      </div>
    </div>
  ); // end return
} // end function
