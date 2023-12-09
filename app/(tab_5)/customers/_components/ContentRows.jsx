import Link from 'next/link';
import React from 'react';

export default function ContentRows() {
  return (
    <div id="results--row">
      {/* titles */}
      <div
        className="row g-0 align-items-center results--header mb-2"
        id="results--header">
        <div className="col-3">
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">Phone</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Completed
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Canceled
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Favorites
          </label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}
      <div className="row g-0 align-items-center results--item">
        <div className="col-3">
          <label className="col-form-label form--label row--label">
            Yasir Ahmed
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label me-1">
            66 503421
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">10</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">1</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">0</label>
        </div>
        <div className="col-1">
          <div className="dropstart d-flex justify-content-center">
            <button
              className="btn dropdown-toggle results--dropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"></button>
            <div className="dropdown-menu results--dropdown-menu">
              <Link className="dropdown-item" href="/customers/1">
                Previous Orders
              </Link>
              <Link className="dropdown-item" href="/customers/1/toggle-status">
                Deactivate Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); // end return
} // end function
