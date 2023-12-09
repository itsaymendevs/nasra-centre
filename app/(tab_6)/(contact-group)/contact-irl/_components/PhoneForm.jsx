'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function PhoneForm() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ------------------------Page-----------------------

  return (
    <form className="form--page mb-5">
      <div className="row g-0">
        <div className="col-6 mb-4">
          <label className="form-label form--label">Phone Number</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-6 align-self-end mb-4">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="button">
            Save item
          </button>
        </div>
      </div>
    </form>
  );
} // end function
