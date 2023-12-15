import Link from 'next/link';
import React from 'react';

export default function PhoneRows({ phones }) {
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
      {phones.map((item) => (
        <div className="row g-0 align-items-center results--item" key={item.id}>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {item.serial}
            </label>
          </div>
          <div className="col-9">
            <label className="col-form-label form--label row--label">
              {item.phone}
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
                <Link className="dropdown-item" href="#">
                  Remove Phone
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* end item */}
    </div>
  ); // end return
} // end function
