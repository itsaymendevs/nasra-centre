import Link from 'next/link';
import React from 'react';

export default function EditForm() {
  return (
    <div id="results--row">
      {/* submit button */}
      <div className="row g-0 align-items-center">
        <div className="col-12">
          <div className="text-center d-block mb-4">
            <button
              className="btn btn--theme btn--submit btn--sm rounded-1"
              type="button">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------- */}

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
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Selling Price
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Offer Price
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Quantity
          </label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ---------------------------- */}

      {/* item */}
      <div className="row g-0 align-items-center results--item">
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            P-10503
          </label>
        </div>
        <div className="col-3">
          <label className="col-form-label form--label row--label me-1">
            Quina Rice Saria
          </label>
        </div>

        {/* sell price */}
        <div className="col-2">
          <input
            type="number"
            className="form--input in-row"
            value="120"
            min="1"
            step="0.01"
          />
        </div>

        {/* offer price */}
        <div className="col-2">
          <input type="number" className="form--input in-row" />
        </div>

        {/* quantity */}
        <div className="col-2">
          <input type="number" className="form--input in-row" value="900" />
        </div>

        {/* edit product */}
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
            </div>
          </div>
        </div>
      </div>
      {/* end edit button */}

      {/* item (shortage) */}
      <div className="row g-0 align-items-center results--item">
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            P-10504
          </label>
        </div>
        <div className="col-3">
          <label className="col-form-label form--label row--label me-1 text-danger">
            Quina Rice Saria
          </label>
        </div>
        <div className="col-2">
          <input type="number" className="form--input in-row" value="90" />
        </div>
        <div className="col-2">
          <input type="number" className="form--input in-row" value="70" />
        </div>
        <div className="col-2">
          <input type="number" className="form--input in-row" value="0" />
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
            </div>
          </div>
        </div>
      </div>
      {/* end item */}
    </div>
  ); // end return
} // end function
