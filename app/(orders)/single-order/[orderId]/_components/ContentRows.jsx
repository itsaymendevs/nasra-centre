import Link from 'next/link';
import React from 'react';

export default function ContentRows({ totalRows }) {
  return (
    <div id="results--row">
      {/* hr */}
      <div className="d-flex align-items-center justify-content-between mb-3 mt-4">
        <label className="form-label hr--label mb-0">Products</label>
        <hr className="w-100 my-0" />
        <label className="form-label fs-5 text-center hr--label text-theme fw-bold mb-0">
          {totalRows}
        </label>
      </div>

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

      {/* ----------------------- */}
      {/* ----------------------- */}
      {/* ----------------------- */}

      {/* item */}
      <div className="row g-0 align-items-center results--item">
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            P-10503
          </label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">
            Watermellon
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">2</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">10</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">20</label>
        </div>
      </div>
      {/* end item */}
    </div>
    // end outer wrapper
  ); // end return
} // end function
