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

        {/* Employee */}
        <div className="col-4 mb-4">
          <label className="form-label form--label">Employee</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="employee"
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

        {/* ---------------------------- */}

        {/* order serial */}
        <div className="col-4 mb-2">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: '90%' }}>
            <label className="form-label hr--label">Order Serial</label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* from date */}
        <div className="col-4 mb-2">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: '90%' }}>
            <label className="form-label hr--label">From Period</label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* until date */}
        <div className="col-4 mb-2">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: '90%' }}>
            <label className="form-label hr--label">Until Period</label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* order serial input */}
        <div className="col-4 mb-4">
          <input
            type="search"
            className="form--input"
            placeholder="Order Serial .."
          />
        </div>

        {/* from date input */}
        <div className="col-4 mb-4">
          <input className="form--input" type="date" />
        </div>

        {/* until date input */}
        <div className="col-4 mb-4">
          <input className="form--input" type="date" />
        </div>

        {/* --------------------------- */}

        {/* products total price */}
        <div className="col-4">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span
              className="fw-600 profile--span-title"
              style={{ lineHeight: 'initial' }}>
              Products Total
            </span>
            29,500
          </label>
        </div>

        {/* delivery total (only in delivery mode) */}
        <div className="col-4">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span
              className="fw-600 profile--span-title"
              style={{ lineHeight: 'initial' }}>
              Delivery Total
            </span>
            10,000
          </label>
        </div>

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
