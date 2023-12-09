'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function EditForm() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ------------------------Page-----------------------

  return (
    <form className="form--page mb-5">
      <div className="row g-0">
        {/* name */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* name ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name Ar</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* desc */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Description</label>
          <textarea className="form-control form--input form--textarea"></textarea>
        </div>

        {/* desc ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Description Ar</label>
          <textarea className="form-control form--input form--textarea"></textarea>
        </div>

        {/* receiving times  */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Order Receiving Times
            <br />
          </label>
          <textarea className="form-control form--input form--textarea"></textarea>
        </div>

        {/* receiving times ar  */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Order Receiving Times Ar
            <br />
          </label>
          <textarea className="form-control form--input form--textarea"></textarea>
        </div>

        {/* latitude / longitude */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">Latitude</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-3 mb-4">
          <label className="form-label form--label">Longitude</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* main store / stop receiving orders */}
        <div className="col-6 align-self-end mb-4">
          {/* main store */}
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Main store
            </label>
          </div>

          {/* stop receiving */}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-2"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-2">
              Stop receiving orders
            </label>
          </div>
        </div>

        {/* picture */}
        <div className="col-6 align-self-end mb-4 mt-4">
          <label className="form-label form--label">Store Picture</label>
          <div className="img--holder for-store">
            <img loading="lazy" />
          </div>
        </div>

        {/* submit */}
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="button">
            Save item
          </button>
        </div>
      </div>
    </form>
  );
} // end functinon
