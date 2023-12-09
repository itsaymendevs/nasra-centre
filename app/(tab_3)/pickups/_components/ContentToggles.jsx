import React from 'react';

export default function ContentToggles({ totalRows }) {
  return (
    <div id="disable--wrap" className="mb-5">
      <div className="row g-0 align-items-end">
        <div className="col-8">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Stop receiving for all stores
              <br />
            </label>
          </div>
        </div>

        {/* total of products */}
        <div className="col-4">
          <h3
            className="text-end mb-0 fw-bold text-decoration-underline text-theme"
            style={{ marginRight: '5%' }}>
            {totalRows}
          </h3>
        </div>
      </div>
    </div>
  );
} // end function
