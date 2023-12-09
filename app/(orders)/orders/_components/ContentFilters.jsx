'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function ContentFilters({ totalRows }) {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ------------------------Page-----------------------

  return (
    <div id="filters--wrap" className="mb-5">
      {/* radio buttons */}
      <div className="filters--radio-wrap">
        <div className="form-check">
          <input className="form-check-input" type="radio" id="formCheck-3" />
          <label className="form-check-label" htmlFor="formCheck-3">
            All Orders
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" id="formCheck-1" />
          <label className="form-check-label" htmlFor="formCheck-1">
            Delivery Orders
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" id="formCheck-2" />
          <label className="form-check-label" htmlFor="formCheck-2">
            Pickup Orders
          </label>
        </div>
      </div>

      {/* ----------------------------- */}
      {/* ----------------------------- */}
      {/* ----------------------------- */}

      <div className="row g-0 align-items-end">
        <div className="col-4 mb-4">
          <label className="form-label form--label">Country</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="country"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>
        <div className="col-4 mb-4">
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
        <div className="col-4 mb-4">
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

        {/* empty */}
        <div className="col-12"></div>

        {/* ---------------------- */}

        {/* status */}
        <div className="col-4 mb-4">
          <label className="form-label form--label">Status</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="status"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>

        {/* payment */}
        <div className="col-4 mb-4">
          <label className="form-label form--label">Payment</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="payment"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>

        {/* sort */}
        <div className="col-4 mb-4">
          <label className="form-label form--label">Sorting</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="sorting"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>

        {/* --------------------------- */}

        {/* search */}
        <div className="col-4">
          <input
            type="search"
            className="form--input"
            placeholder="Order Serial .."
          />
        </div>

        {/* total */}
        <div className="col-8">
          <h3
            className="text-end mb-0 fw-bold text-decoration-underline text-theme"
            style={{ marginRight: '5%' }}>
            {totalRows}
          </h3>
        </div>
      </div>
    </div>
  );
} // end function
