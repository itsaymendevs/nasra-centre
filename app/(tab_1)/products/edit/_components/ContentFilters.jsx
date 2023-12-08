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
      {/* 1: general types */}
      <div className="row g-0 align-items-end general-filters">
        <div className="col-4 mb-4">
          <label className="form-label form--label">Main Category</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="mainCategory"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>
        <div className="col-4 mb-4">
          <label className="form-label form--label">Sub Category</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="subCategory"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>
        <div className="col-4 mb-4">
          <label className="form-label form--label">Type</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="innerType"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>
        {/* end general types */}
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
