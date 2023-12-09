'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function GeneralForm() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ------------------------Page-----------------------

  return (
    <div className="accordion mb-5" role="tablist" id="results--sms-delivery">
      {/* 1: processing */}
      <div className="accordion-item results--order results--sms">
        {/* title */}
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-delivery .item-1"
            aria-expanded="false"
            aria-controls="results--sms-delivery .item-1">
            <span className="fw-semibold" style={{ width: '50%' }}>
              Delivery / Processing
            </span>
            <small
              className="tag--optional w-100 text-end me-3"
              style={{ color: 'var(--bg-theme-dark)' }}>
              optional
            </small>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-1 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-delivery">
          {/* collapse body */}
          <div className="accordion-body">
            <div className="row g-0">
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @orderNum
                </label>
                <label className="form-label form--label profile--label">
                  Order Number
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userFN
                </label>
                <label className="form-label form--label profile--label">
                  User First-name
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userLN
                </label>
                <label className="form-label form--label profile--label">
                  User Last-name
                  <br />
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
              <div className="col-12 text-center mb-2">
                <a
                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                  role="button"
                  href="#">
                  Save
                </a>
              </div>
            </div>
          </div>
          {/* end collapse body */}
        </div>
        {/* end collapse */}
      </div>
      {/* end processing */}

      {/* --------------------------------------------------------- */}

      {/* 2: canceled */}
      <div className="accordion-item results--order results--sms">
        {/* title */}
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-delivery .item-2"
            aria-expanded="false"
            aria-controls="results--sms-delivery .item-2">
            <span className="fw-semibold" style={{ width: '50%' }}>
              Delivery / Canceled
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-2 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-delivery">
          {/* collapse body */}
          <div className="accordion-body">
            <div className="row g-0">
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @orderNum
                </label>
                <label className="form-label form--label profile--label">
                  Order Number
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userFN
                </label>
                <label className="form-label form--label profile--label">
                  User First-name
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userLN
                </label>
                <label className="form-label form--label profile--label">
                  User Last-name
                  <br />
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
              <div className="col-12 text-center mb-2">
                <a
                  className="btn btn--outline-theme btn--outline-danger btn--sm fs-12 rounded-1 px-5"
                  role="button"
                  href="#">
                  Disable
                </a>
                <a
                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5 ms-2"
                  role="button"
                  href="#">
                  Save
                </a>
              </div>
            </div>
          </div>
          {/* end body */}
        </div>
        {/* end collapse */}
      </div>
      {/* end item */}

      {/* -------------------------------------------------- */}

      {/* 3: completed */}
      <div className="accordion-item results--order results--sms">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-delivery .item-3"
            aria-expanded="false"
            aria-controls="results--sms-delivery .item-3">
            <span className="fw-semibold" style={{ width: '50%' }}>
              Delivery / Completed
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-3 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-delivery">
          <div className="accordion-body">
            <div className="row g-0">
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @orderNum
                </label>
                <label className="form-label form--label profile--label">
                  Order Number
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userFN
                </label>
                <label className="form-label form--label profile--label">
                  User First-name
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userLN
                </label>
                <label className="form-label form--label profile--label">
                  User Last-name
                  <br />
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

              {/* actions */}
              <div className="col-12 text-center mb-2">
                <a
                  className="btn btn--outline-theme btn--outline-danger btn--sm fs-12 rounded-1 px-5"
                  role="button"
                  href="#">
                  Disable
                </a>
                <a
                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5 ms-2"
                  role="button"
                  href="#">
                  Save
                </a>
              </div>
            </div>
          </div>
          {/* end body */}
        </div>
        {/* end collapse */}
      </div>
      {/* end item */}
    </div>
    // end according wrapper
  );
} // end function
