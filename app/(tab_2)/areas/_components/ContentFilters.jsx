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
      {/* state */}
      <div className="row g-0 align-items-end">
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

        {/* empty */}
        <div className="col-4 mb-4"></div>

        {/* -------------------------- */}
        {/* -------------------------- */}
        {/* -------------------------- */}

        {/* common part */}
        {/* search input */}
        <div className="col-4">
          <input
            type="search"
            className="form--input"
            placeholder="Search .."
          />
        </div>

        {/* empty */}
        <div className="col-4"></div>

        {/* total of products */}
        <div className="col-4">
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
