import Link from 'next/link';
import React from 'react';

export default function ToggleForm() {
  return (
    <div id="disable--wrap" className="mb-5">
      <div className="row g-0 align-items-end">
        {/* toggle boxes */}
        <div className="col-7 align-self-end mb-3">
          {/* title */}
          <label className="form-label form--label">
            - Stop Receiving Orders
          </label>
          <div className="d-flex align-items-center justify-content-start">
            {/* sudan orders */}
            <div className="form-check me-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-5"
              />
              <label className="form-check-label ms-1" htmlFor="formCheck-5">
                Sudan
                <br />
              </label>
            </div>

            {/* uk orders */}
            <div className="form-check me-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-7"
              />
              <label className="form-check-label ms-1" htmlFor="formCheck-7">
                United Kingdom
                <br />
              </label>
            </div>

            {/* ireland orders */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-6"
              />
              <label className="form-check-label ms-1" htmlFor="formCheck-6">
                Ireland
                <br />
              </label>
            </div>
          </div>
        </div>
        {/* end left column */}

        {/* ------------------------------- */}
        {/* ------------------------------- */}

        {/* export buttons */}
        <div className="col-5 text-end mb-3">
          {/* orders export english */}
          <Link
            className="btn btn--export scale--3 px-4"
            role="button"
            href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-box-arrow-up-left me-2">
              <path
                fillRule="evenodd"
                d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"></path>
              <path
                fillRule="evenodd"
                d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"></path>
            </svg>
            Excel
          </Link>

          {/* orders export arabic */}
          <Link
            className="btn btn--export scale--3 px-4 ms-2"
            role="button"
            href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-box-arrow-up-left me-2">
              <path
                fillRule="evenodd"
                d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"></path>
              <path
                fillRule="evenodd"
                d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"></path>
            </svg>
            Excel Ar
          </Link>
        </div>
        {/* end right column */}

        {/* --------------------------------- */}
        {/* --------------------------------- */}

        {/* stop global receiving orders */}
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-4"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-4">
              Stop receiving orders globally
              <br />
            </label>
          </div>
        </div>
        {/* end column */}
      </div>
    </div>
  );
} // end function
