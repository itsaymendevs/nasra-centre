'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function MediaForm() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ------------------------Page-----------------------

  return (
    <form className="form--page">
      <div className="row g-0">
        {/* title */}
        <div className="col-12 mb-3">
          <div className="d-flex align-items-center justify-content-between">
            <label className="form-label hr--label">Media Info</label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* website url */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Website URL</label>
          <input className="form-control form--input" type="text" />
        </div>

        <div className="col-3 mb-4"></div>

        {/* facebook */}
        <div className="col-3 mb-4"></div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Facebook Profile ID</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Facebook URL</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* linkedIn */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">LinkedIn Profile ID</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">LinkedIn URL</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* twitter */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Twitter Profile ID</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Twitter URL</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* insta */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Instagram Profile ID</label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Instagram&nbsp; URL</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* video title / ar */}
        <div className="col-12 mb-5">
          <hr className="visually-hidden" />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Application Video Title
          </label>
          <input className="form-control form--input" type="text" />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Application Video Title Ar
          </label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* youtube url */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Youtube Video URL</label>
          <input className="form-control form--input" type="text" />
        </div>

        {/* submit */}
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="button">
            Save Information
          </button>
        </div>
      </div>
    </form>
  );
} // end function
