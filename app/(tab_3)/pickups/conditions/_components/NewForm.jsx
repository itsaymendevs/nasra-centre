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
        {/* title / ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Title</label>
          <input className="form-control form--input" type="text" />
        </div>

        <div className="col-6 mb-4">
          <label className="form-label form--label">Title Ar</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* content / ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Content</label>
          <textarea className="form-control form--input form--textarea"></textarea>
        </div>

        <div className="col-6 mb-4">
          <label className="form-label form--label">Content Ar</label>
          <textarea className="form-control form--input form--textarea"></textarea>
        </div>

        {/* submit button */}
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="button">
            Save item
          </button>
        </div>
        {/* end submit */}
      </div>
    </form>
  );
} // end functinon
