'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function NewForm() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ------------------------Page-----------------------

  return (
    <form className="form--page mb-5">
      <div className="row g-0">
        {/* serial */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Serial</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* hide / main page checkboxes */}
        <div className="col-6 align-self-end mb-4">
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-3"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-3">
              Hide Product
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-2"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-2">
              Add to main page
            </label>
          </div>
        </div>

        {/* name */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name Ar</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-12 mb-5">
          <hr className="visually-hidden" />
        </div>

        {/* company */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Company</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="company"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>

        {/* main / sub / type  */}
        <div className="col-6 mb-4">
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

        <div className="col-6 mb-4">
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

        <div className="col-6 mb-4">
          <label className="form-label form--label">Inner Type</label>
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

        {/* -------------------------- */}

        {/* buy */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">Buy Price</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* sell */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">Sell Price</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* offer */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Offer Price<small className="tag--optional">optional</small>
          </label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* ------------------------------------ */}

        {/* hr */}
        <div className="col-12 mb-3 mt-5">
          <div className="d-flex align-items-center justify-content-between mt-4">
            <label className="form-label hr--label">Size / Weight</label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* size options / 3 */}
        <div className="col-12">
          {/* 1: name */}
          <div className="filters--radio-wrap mb-5" style={{ width: '95.5%' }}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="formCheck-6"
              />
              <label className="form-check-label" htmlFor="formCheck-6">
                By Name
              </label>
            </div>

            {/* 2: fixed size */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="formCheck-4"
              />
              <label className="form-check-label" htmlFor="formCheck-4">
                Fixed Size / Weight&nbsp;
              </label>
            </div>

            {/* 3: dynamic size */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="formCheck-5"
              />
              <label className="form-check-label" htmlFor="formCheck-5">
                Dynamic Size / Weight
              </label>
            </div>
          </div>
        </div>
        {/* end size options / 3 */}

        {/* ------- => continue */}
        {/* ------- => based on above */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">Size / Weight</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-3 d-none mb-4">
          <label className="form-label form--label">Min. Size / Weight</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="minSizeWeight"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>

        <div className="col-3 mb-4">
          <label className="form-label form--label">Measuring Unit</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="unit"
            options={options}
            onChange={''}
            placeholder={''}
            isClearable
          />
        </div>

        {/* end based on above options */}

        <div className="col-12">
          <hr className="visually-hidden" />
        </div>

        {/* units count */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">
            No. of Units / Packages
          </label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* quantity per unit */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">
            Quantity per Unit / Package
            <br />
          </label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* !!! calculated total quantity */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">Total Quantity</label>
          <input className="form-control form--input" type="text" readOnly />
        </div>

        {/* max quantity per order */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">
            Max Quantity per Order
          </label>
          <input className="form-control form--input" type="text" />
        </div>

        <div className="col-12 mb-5">
          <hr className="visually-hidden" />
        </div>

        {/* ---------------------------- */}

        {/* descriptions / ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Description<small className="tag--optional">optional</small>
          </label>
          <textarea className="form-control form--input form--textarea"></textarea>
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Description Ar<small className="tag--optional">optional</small>
          </label>
          <textarea className="form-control form--input form--textarea"></textarea>
        </div>

        {/* hr */}
        <div className="col-12 mb-5">
          <hr className="visually-hidden" />
        </div>

        {/* ------------------------------- */}

        {/* main picture */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Main Picture</label>
          <div className="img--holder">
            <img loading="lazy" />
          </div>
        </div>

        {/* additional pictures (optionals) */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Extra Pictures<small className="tag--optional">optional</small>
          </label>
          <div className="row g-0">
            <div className="col-6 mb-4">
              <div className="img--holder">
                <img loading="lazy" />
              </div>
            </div>
            <div className="col-6 mb-4">
              <div className="img--holder">
                <img loading="lazy" />
              </div>
            </div>
            <div className="col-6">
              <div className="img--holder">
                <img loading="lazy" />
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------- */}

        {/* submit button */}
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="button">
            Save item
          </button>
        </div>
        {/* end submit button */}
      </div>
    </form>
  );
} // end functino
