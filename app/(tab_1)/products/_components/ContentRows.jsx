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
        <div className="col-2">
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Size/ M. Weight
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Sell / Offer Price
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Quantity
          </label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label">Favs</label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}
      <div className="row g-0 align-items-center results--item">
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            P-10503
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label me-1">
            Quina Rice Saria
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">500 G</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            130 / -
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">1300</label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label">3</label>
        </div>
        <div className="col-1">
          <div className="dropstart d-flex justify-content-center">
            <button
              className="btn dropdown-toggle results--dropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"></button>
            <div className="dropdown-menu results--dropdown-menu">
              <Link className="dropdown-item" href="/products/1">
                Edit Product
              </Link>
              <Link className="dropdown-item" href="/products/1/hide">
                Hide Product
              </Link>
              <Link className="dropdown-item" href="/products/1/toggle-home">
                Remove From Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); // end return
} // end function
