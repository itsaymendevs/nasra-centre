import Link from 'next/link';
import React from 'react';

export default function ContentRows() {
  return (
    <div id="results--row">
      {/* titles */}
      <div
        className="row g-0 align-items-center results--header mb-2"
        id="results--header">
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Serial
          </label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-5">
          <label className="col-form-label form--label row--label">
            Location
          </label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}

      {/* item */}
      <div className="row g-0 align-items-center results--item">
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            PS-001
          </label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">
            Nasra Centre Omdurman
          </label>
        </div>
        <div className="col-5">
          <label className="col-form-label form--label row--label">
            Osman Zubair St. - Near Nile Store
          </label>
        </div>

        <div className="col-1">
          <div className="dropstart d-flex justify-content-center">
            <button
              className="btn dropdown-toggle results--dropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"></button>
            <div className="dropdown-menu results--dropdown-menu">
              <Link className="dropdown-item" href="/pickups/1">
                Edit Store
              </Link>
              <Link className="dropdown-item" href="/pickups/1/toggle-status">
                Disable Store
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end item */}
    </div>
  ); // end return
} // end function
