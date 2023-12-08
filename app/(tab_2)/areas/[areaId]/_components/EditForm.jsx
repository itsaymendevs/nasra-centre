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

        {/* state */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">State</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="state"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>

        {/* country */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">County</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="county"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>

        {/* delivery time */}
        <div className="col-12 mb-4">
          <label className="form-label form--label">
            Estimated Time for Delivery
          </label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="deliveryTime"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>

        {/* delivery price */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Delivery Price</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* disable delivery in this area */}
        <div className="col-6 align-self-end mb-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-2"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-2">
              Stop delivery for this area
            </label>
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
