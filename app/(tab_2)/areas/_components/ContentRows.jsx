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
        <div className="col-3">
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-3">
          <label className="col-form-label form--label row--label">
            Name Ar
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">Users</label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label">Price</label>
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
            DA-001
          </label>
        </div>
        <div className="col-3">
          <label className="col-form-label form--label row--label">
            Khartoum - Mashtal
          </label>
        </div>
        <div className="col-3">
          <label className="col-form-label form--label row--label">
            الخرطوم - المشتل
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">35</label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label">250</label>
        </div>
        <div className="col-1">
          <div className="dropstart d-flex justify-content-center">
            <button
              className="btn dropdown-toggle results--dropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"></button>
            <div className="dropdown-menu results--dropdown-menu">
              <Link className="dropdown-item" href="/areas/1">
                Edit Area
              </Link>
              <Link className="dropdown-item" href="/areas/1/toggle-status">
                Disable Area
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end item */}
    </div>
  ); // end return
} // end function
