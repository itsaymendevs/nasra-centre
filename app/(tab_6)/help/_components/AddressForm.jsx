'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function AddressForm() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ------------------------Page-----------------------

  return (
    <form className="mb-5">
      <div className="row g-0">
        {/* title */}
        <div className="col-12 mb-3 mt-5">
          <div className="d-flex align-items-center justify-content-between mt-5">
            <label
              className="form-label hr--label"
              style={{ minWidth: '150px' }}>
              Nasra Global Address
            </label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* picture */}
        <div className="col-6 mb-5">
          <label className="form-label form--label">Picture</label>
          <div className="img--holder for-store">
            <img loading="lazy" src="../assets/img/Logo/logo.png" />
          </div>

          {/* hide from app */}
          <div className="form-check mt-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Hide global address from app
            </label>
          </div>
        </div>

        {/* address : latitude + longitude */}
        <div className="col-6 mb-4">
          <div className="row g-0">
            <div className="col-12 mb-4">
              <label className="form-label form--label">Address</label>
              <textarea
                className="form-control form--input form--textarea"
                style={{ width: '95%' }}></textarea>
            </div>
            <div className="col-6 mb-4">
              <label className="form-label form--label">Latitude</label>
              <input className="form-control form--input" type="text" />
            </div>
            <div className="col-6 mb-4">
              <label className="form-label form--label">Longitude</label>
              <input className="form-control form--input" type="text" />
            </div>
          </div>
        </div>

        {/* submit */}
        <div className="col-12 text-end">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="button"
            style={{ marginRight: '2%' }}>
            Save item
          </button>
        </div>
      </div>
    </form>
  );
} // end function
