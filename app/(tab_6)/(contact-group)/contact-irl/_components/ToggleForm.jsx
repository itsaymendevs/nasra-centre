import React from 'react';

export default function ToggleForm() {
  return (
    <div id="disable--wrap" className="mb-5">
      <div className="row g-0 align-items-end">
        {/* stop service */}
        <div className="col-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Stop service in Ireland
              <br />
            </label>
          </div>
        </div>

        {/* -------------- */}

        {/* currency to sdg */}
        <div className="col-8">
          <div className="d-flex justify-content-end align-items-center">
            <img className="flag--icon" src="/assets/img/Flags/euro.png" />
            <h6 className="mb-0 ms-2 me-3 fw-bold">1 EUR =</h6>
            <input
              type="text"
              className="form--input flag--input text-center fw-bold"
            />
            <h6 className="mb-0 ms-3 me-2 fw-bold">SDG</h6>
            <img className="flag--icon" src="/assets/img/Flags/sd.png" />
          </div>
        </div>
      </div>
    </div>
  );
} // end function
