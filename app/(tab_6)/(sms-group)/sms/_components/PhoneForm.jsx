'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function PhoneForm() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ------------------------Page-----------------------

  return (
    <div className="accordion mb-5" role="tablist" id="results--sms-phone">
      <div className="accordion-item results--order results--sms">
        {/* outer heading */}
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-phone .item-1"
            aria-expanded="false"
            aria-controls="results--sms-phone .item-1">
            <span className="fw-semibold">Phone Confirmation</span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-1 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-phone">
          <div className="accordion-body">
            <div className="row g-0">
              {/* shortcuts */}
              <div className="col-12 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @verCode
                </label>
                <label className="form-label form--label profile--label">
                  Verification Code
                </label>
              </div>

              {/* message */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message<small className="tag--optional">0/140</small>
                </label>
                <textarea className="form--input form--textarea"></textarea>
              </div>

              {/* message ar */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message Ar<small className="tag--optional">0/140</small>
                </label>
                <textarea className="form--input form--textarea"></textarea>
              </div>

              {/* submit */}
              <div className="col-12 text-center mb-2">
                <a
                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                  role="button"
                  href="#">
                  Save
                </a>
              </div>
              {/* end submit */}
            </div>
          </div>
        </div>
        {/* end collapse */}
      </div>
    </div>
  );
} // end function
