import React from 'react';

export default function ToggleForm() {
  return (
    <div id="disable--wrap" className="mb-5">
      <div className="row g-0 align-items-end">
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Stop service in Sudan
              <br />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
} // end function
