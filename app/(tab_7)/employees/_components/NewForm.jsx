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
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name Ar</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Password</label>
          <input className="form-control form--input" type="password" />
        </div>
        <div className="col-6 align-self-end mb-4">
          <div className="form-check mb-2">
            <input className="form-check-input" type="radio" id="formCheck-1" />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Low Permission
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" id="formCheck-2" />
            <label className="form-check-label ms-1" htmlFor="formCheck-2">
              High Permission
            </label>
          </div>
        </div>
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="button">
            Save Employee
          </button>
        </div>
      </div>
    </form>
  );
} // end function
