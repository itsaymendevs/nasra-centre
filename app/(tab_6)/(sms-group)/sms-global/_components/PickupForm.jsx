'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function TermForm() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ------------------------Page-----------------------

  return (
    <div className="accordion" role="tablist" id="results--sms-collection">
      {/* item */}
      <div className="accordion-item results--order results--sms">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-collection .item-1"
            aria-expanded="false"
            aria-controls="results--sms-collection .item-1">
            <span className="fw-semibold" style={{ width: '50%' }}>
              Pickup / Processing
            </span>
            <small className="tag--optional w-100 text-end me-3 d-none">
              optional
            </small>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-1 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-collection">
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
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @receiver
                </label>
                <label className="form-label form--label profile--label">
                  Order Receiver
                  <br />
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @pickupCode
                </label>
                <label className="form-label form--label profile--label">
                  Pickup Code
                  <br />
                </label>
              </div>

              {/* tabs */}
              <div className="col-12">
                <div className="tab--wrap">
                  {/* tab links */}
                  <ul className="nav nav-pills nav-justified" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#user-tab-4">
                        User
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#receiver-tab-4">
                        Receiver
                      </a>
                    </li>
                  </ul>

                  {/* tab content */}
                  <div className="tab-content pb-0">
                    {/* user */}
                    <div
                      className="tab-pane active"
                      role="tabpanel"
                      id="user-tab-4">
                      <div className="row g-0 align-items-center">
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message
                            <small className="tag--optional">0/140</small>
                          </label>
                          <textarea className="form--input form--textarea"></textarea>
                        </div>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message Ar
                            <small className="tag--optional">0/140</small>
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

                    {/* receiver */}
                    <div
                      className="tab-pane"
                      role="tabpanel"
                      id="receiver-tab-4">
                      <div className="row g-0 align-items-center">
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message
                            <small className="tag--optional">0/140</small>
                          </label>
                          <textarea className="form--input form--textarea"></textarea>
                        </div>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message Ar
                            <small className="tag--optional">0/140</small>
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
                  </div>
                  {/* end tab content */}
                </div>
              </div>
              {/* end tabs */}
            </div>
          </div>
        </div>
      </div>
      {/* end item */}

      {/* ------------------------------------------------ */}

      {/* 2: canceled */}
      <div className="accordion-item results--order results--sms">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-collection .item-2"
            aria-expanded="false"
            aria-controls="results--sms-collection .item-2">
            <span className="fw-semibold" style={{ width: '50%' }}>
              Pickup / Canceled
            </span>
            <span className="text-end" style={{ width: '40%' }}>
              <small className="sms--indicator inactive">User</small>
              <small className="sms--indicator">Receiver</small>
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-2 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-collection">
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
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @receiver
                </label>
                <label className="form-label form--label profile--label">
                  Order Receiver
                  <br />
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @pickupCode
                </label>
                <label className="form-label form--label profile--label">
                  Pickup Code
                  <br />
                </label>
              </div>

              {/* tabs */}
              <div className="col-12">
                <div className="tab--wrap">
                  {/* tab links */}
                  <ul className="nav nav-pills nav-justified" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#user-tab-2">
                        User
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#receiver-tab-2">
                        Receiver
                      </a>
                    </li>
                  </ul>

                  {/* tab content */}
                  <div className="tab-content pb-0">
                    {/* user */}
                    <div
                      className="tab-pane active"
                      role="tabpanel"
                      id="user-tab-2">
                      <div className="row g-0 align-items-center">
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message
                            <small className="tag--optional">0/140</small>
                          </label>
                          <textarea className="form--input form--textarea"></textarea>
                        </div>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message Ar
                            <small className="tag--optional">0/140</small>
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

                    {/* receiver */}
                    <div
                      className="tab-pane"
                      role="tabpanel"
                      id="receiver-tab-2">
                      <div className="row g-0 align-items-center">
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message
                            <small className="tag--optional">0/140</small>
                          </label>
                          <textarea className="form--input form--textarea"></textarea>
                        </div>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message Ar
                            <small className="tag--optional">0/140</small>
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
                  </div>
                  {/* end tab content */}
                </div>
              </div>
              {/* end tabs */}
            </div>
          </div>
        </div>
      </div>
      {/* end item */}

      {/* ------------------------------------- */}

      {/* 3: completed */}
      <div className="accordion-item results--order results--sms">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-collection .item-3"
            aria-expanded="false"
            aria-controls="results--sms-collection .item-3">
            <span className="fw-semibold" style={{ width: '50%' }}>
              Pickup / Completed
            </span>
            <span className="text-end" style={{ width: '40%' }}>
              <small className="sms--indicator inactive">User</small>
              <small className="sms--indicator">Receiver</small>
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-3 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-collection">
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
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @receiver
                </label>
                <label className="form-label form--label profile--label">
                  Order Receiver
                  <br />
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @pickupCode
                </label>
                <label className="form-label form--label profile--label">
                  Pickup Code
                  <br />
                </label>
              </div>

              {/* tabs */}
              <div className="col-12">
                <div className="tab--wrap">
                  {/* tab links */}
                  <ul className="nav nav-pills nav-justified" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#user-tab-3">
                        User
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#receiver-tab-3">
                        Receiver
                      </a>
                    </li>
                  </ul>

                  {/* tab content */}
                  <div className="tab-content pb-0">
                    {/* user */}
                    <div
                      className="tab-pane active"
                      role="tabpanel"
                      id="user-tab-3">
                      <div className="row g-0 align-items-center">
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message
                            <small className="tag--optional">0/140</small>
                          </label>
                          <textarea className="form--input form--textarea"></textarea>
                        </div>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message Ar
                            <small className="tag--optional">0/140</small>
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

                    {/* receiver */}
                    <div
                      className="tab-pane"
                      role="tabpanel"
                      id="receiver-tab-3">
                      <div className="row g-0 align-items-center">
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message
                            <small className="tag--optional">0/140</small>
                          </label>
                          <textarea className="form--input form--textarea"></textarea>
                        </div>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message Ar
                            <small className="tag--optional">0/140</small>
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
                  </div>
                  {/* end tab content */}
                </div>
              </div>
              {/* end tabs */}
            </div>
          </div>
        </div>
      </div>
      {/* end item */}

      {/* ------------------------------------------------------- */}

      {/* 4: confirm reception */}
      <div className="accordion-item results--order results--sms">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-collection .item-4"
            aria-expanded="false"
            aria-controls="results--sms-collection .item-4">
            <span className="fw-semibold" style={{ width: '50%' }}>
              Pickup / Confirm Reception
            </span>
            <span className="text-end" style={{ width: '40%' }}>
              <small className="sms--indicator">Receiver</small>
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-4 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-collection">
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
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @receiver
                </label>
                <label className="form-label form--label profile--label">
                  Order Receiver
                  <br />
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @pickupCode
                </label>
                <label className="form-label form--label profile--label">
                  Pickup Code
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

              {/* options */}
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
              {/* end options */}
            </div>
          </div>
          {/* end body */}
        </div>
        {/* end collapse */}
      </div>
      {/* end item */}
    </div>
    // end wrapper
  );
} // end function
