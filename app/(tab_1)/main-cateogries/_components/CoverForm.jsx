'use client';

import React from 'react';

// ----------------------------------------------------------------------------------------------------

export default function CoverForm() {
  // ------------------------Page-----------------------

  return (
    <form>
      <div className="row g-0">
        <div className="col-12 mb-3 mt-5">
          <div className="d-flex align-items-center justify-content-between">
            <label
              className="form-label hr--label"
              style={{ minWidth: '125px' }}>
              Category Pictures
            </label>
            <hr className="w-100 my-0" />
          </div>
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">English Version</label>
          <div className="img--holder for-category">
            <img loading="lazy" />
          </div>
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Arabic Version</label>
          <div className="img--holder for-category">
            <img loading="lazy" />
          </div>
        </div>
        <div className="col-12 mb-5">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="button">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
} // end functino
