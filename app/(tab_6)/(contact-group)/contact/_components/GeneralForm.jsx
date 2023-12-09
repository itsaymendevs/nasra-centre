'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function GeneralForm() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ------------------------Page-----------------------

  return (
    <form className="form--page mb-5">
      <div className="row g-0">
        <div className="col-8 mb-4">
          <label className="form-label form--label">Email Address</label>
          <input
            className="form-control form--input"
            type="text"
            style={{ width: '95%' }}
          />
        </div>
        <div className="col-4 mb-4"></div>
        <div className="col-4 mb-4">
          <label className="form-label form--label">Whatsapp</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-4 mb-4">
          <label className="form-label form--label">Whatsapp URL</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-4 align-self-end mb-4">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="button">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
} // end function
