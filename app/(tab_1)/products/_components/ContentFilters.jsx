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
      {/* 1: radio types */}
      <div className="filters--radio-wrap">
        <div className="form-check">
          <input className="form-check-input" type="radio" id="formCheck-1" />
          <label className="form-check-label" htmlFor="formCheck-1">
            By General Types
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" id="formCheck-3" />
          <label className="form-check-label" htmlFor="formCheck-3">
            By Product Types
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" id="formCheck-2" />
          <label className="form-check-label" htmlFor="formCheck-2">
            By Company Name
          </label>
        </div>
      </div>

      {/* -------------------------- */}

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
        {/* sort */}
        <div className="col-4">
          <button
            className="btn btn--theme btn--sort scalemix--3 px-4 rounded-1"
            data-bs-toggle="modal"
            data-bss-tooltip=""
            data-bs-placement="right"
            type="button"
            title="Sort Products"
            data-bs-target="#sort-modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-arrow-down-up">
              <path
                fillRule="evenodd"
                d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"></path>
            </svg>
          </button>
        </div>
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
