'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Select from 'react-select';

export default function ContentRows({ receiver }) {
  // ---------------------------------- options ----------------------------------

  const options = [
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'canceled', label: 'Canceled' },
    { value: 'completed', label: 'Completed' },
  ];

  // ---------------------------------- states ----------------------------------

  const filtersState = {
    toSDG: 1,
    status: null,
  };
  const [formFilters, setFormFilters] = useState(filtersState);

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event, toSDG) => {
    setFormFilters((state) => ({
      ...state,
      toSDG: toSDG,
    }));
  }; // end function

  // ---------------------------------- page ----------------------------------

  return (
    <>
      {/* filters */}
      <div id="filters--wrap">
        <div className="row g-0 align-items-end">
          {/* status */}
          <div className="col-4 mb-4 pb-3">
            <label className="form-label form--label">Order Status</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="status"
              options={options}
              onChange={(selectedOption) =>
                setFormFilters((state) => ({
                  ...state,
                  status: selectedOption?.value || null,
                }))
              }
              placeholder={''}
              isClearable
            />
          </div>

          {/* currency */}
          <div className="col-8 text-end mb-4 pb-3">
            {/* sd */}
            <button
              className={`btn btn--export btn--currency scale--3 px-4 ${
                formFilters.toSDG === 1 && 'active'
              }`}
              type="button"
              onClick={(event) => handleInputChange(event, 1)}>
              <img className="me-2" src="/assets/img/Flags/SDN.png" alt="" />
              SDN
            </button>

            {/* euro - ire */}
            {receiver.user.country.code == 'IRL' && (
              <button
                className={`btn btn--export btn--currency scale--3 px-4 ms-2 ${
                  formFilters.toSDG !== 1 && 'active'
                }`}
                type="button"
                onClick={(event) =>
                  handleInputChange(
                    event,
                    parseFloat(receiver.user.country.toSDG)
                  )
                }>
                <img className="me-2" src="/assets/img/Flags/EUR.png" alt="" />
                EUR
              </button>
            )}

            {/* gbp - uk */}
            {receiver.user.country.code == 'UK' && (
              <button
                className={`btn btn--export btn--currency scale--3 px-4 ms-2 ${
                  formFilters.toSDG !== 1 && 'active'
                }`}
                type="button"
                onClick={(event) =>
                  handleInputChange(
                    event,
                    parseFloat(receiver.user.country.toSDG)
                  )
                }>
                <img className="me-2" src="/assets/img/Flags/GBP.png" alt="" />
                GBP
              </button>
            )}

            {/* egp - eg */}
            {receiver.user.country.code == 'EG' && (
              <button
                className={`btn btn--export btn--currency scale--3 px-4 ms-2 ${
                  formFilters.toSDG !== 1 && 'active'
                }`}
                type="button"
                onClick={(event) =>
                  handleInputChange(
                    event,
                    parseFloat(receiver.user.country.toSDG)
                  )
                }>
                <img className="me-2" src="/assets/img/Flags/EGP.png" alt="" />
                EGP
              </button>
            )}
          </div>
        </div>
      </div>
      {/* end filters */}

      {/* ------------------------------------------------------- */}

      {/* rows */}
      <div id="results--row">
        {/* titles */}
        <div
          className="row g-0 align-items-center results--header mb-2 active"
          id="results--header">
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              Serial
            </label>
          </div>
          <div className="col-3">
            <label className="col-form-label form--label row--label">
              Receiving Method
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              Products
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              Status
            </label>
          </div>
          <div className="col-1">
            <label className="col-form-label form--label row--label">
              Price
            </label>
          </div>
          <div className="col-1">
            <label className="col-form-label form--label row--label">
              Payment
            </label>
          </div>
          <div className="col-1">
            <label className="col-form-label form--label row--label"></label>
          </div>
        </div>

        {/* item */}
        <div className="row g-0 align-items-center results--item">
          {/* order serial */}
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              OR-10503
            </label>
          </div>

          {/* method - place */}
          <div className="col-3">
            <label className="col-form-label form--label row--label">
              Delivery - Ebaid Khatm
            </label>
          </div>

          {/* products count */}
          <div className="col-2">
            <label className="col-form-label form--label row--label">12</label>
          </div>

          {/* status */}
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              Completed
            </label>
          </div>

          {/* total price */}
          <div className="col-1">
            <label className="col-form-label form--label row--label">
              12,580
            </label>
          </div>

          {/* payment method */}
          <div className="col-1">
            <label className="col-form-label form--label row--label">
              CyberPay
            </label>
          </div>

          {/* options */}
          <div className="col-1">
            <div className="dropstart d-flex justify-content-center">
              <button
                className="btn dropdown-toggle results--dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"></button>
              <div className="dropdown-menu results--dropdown-menu">
                <Link className="dropdown-item" href="/customers/1/orders/1">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ); // end return
} // end function
