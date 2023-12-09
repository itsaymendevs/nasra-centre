import Link from 'next/link';
import React from 'react';

export default function PhoneRows() {
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
        <div className="col-9">
          <label className="col-form-label form--label row--label">Phone</label>
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
            PH-001
          </label>
        </div>
        <div className="col-9">
          <label className="col-form-label form--label row--label">
            66 905611
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
              <Link
                className="dropdown-item"
                href="/contact-uk/phones/1/remove">
                Remove Phone
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end item */}
    </div>
  ); // end return
} // end function
