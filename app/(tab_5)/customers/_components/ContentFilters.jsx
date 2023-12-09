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
      {/* -------------------------- */}

      {/* country */}
      <div className="row g-0 align-items-end general-filters">
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

        {/* state */}
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

        {/* county */}
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
        {/* -------------------------- */}
        {/* -------------------------- */}
        {/* -------------------------- */}
        {/* common part */}
        {/* search input */}
        <div className="col-4">
          <input
            type="search"
            className="form--input"
            placeholder="Search by Name .."
          />
        </div>

        {/* empty */}
        <div className="col-4"></div>

        {/* total rows */}
        <div className="col-4">
          <h3
            className="text-end mb-0 fw-bold text-decoration-underline text-theme"
            style={{ marginRight: '10%' }}>
            {totalRows}
          </h3>
        </div>
      </div>
    </div>
  );
} // end function
