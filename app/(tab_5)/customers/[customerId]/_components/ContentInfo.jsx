'use client';

import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function ContentInfo() {
  // ------------------------Page-----------------------

  return (
    <div id="information--row" className="mb-5">
      <div className="row g-0 align-items-start">
        {/* full name */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            Yasir Ahmed Kamal
          </label>
        </div>

        {/* phone / alternative */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span
              className="fw-600 profile--span-title"
              style={{ lineHeight: 'initial' }}>
              Phone
            </span>
            66 503421 / 66 553134
          </label>
        </div>

        {/* deactivate account */}
        <div className="col-4 align-self-end mb-4">
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Deactivate Account
            </label>
          </div>
        </div>

        {/* email */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            yasirkamal@outlook.com
          </label>
        </div>

        {/* eircode - ire */}
        <div className="col-4 mb-4 ire--info d-none" s="">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span className="fw-600 profile--span-title">Eircode</span>D21 5501
          </label>
        </div>

        {/* country - state */}
        <div className="col-4 align-self-end mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            Sudan / Khartoum
          </label>
        </div>

        {/* county */}
        <div className="col-4 align-self-end mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            Alriyad
          </label>
        </div>

        {/* address */}
        <div className="col-12 mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span className="fw-600 profile--span-title">Rough Location</span>
            loerm ipsum yusa repos tentaion herakulaniya fentaniya osuymana hesu
            desu kupartik uyal niesaan kailabia yestradustp mentaub subarp
            fatniyan stweeb to kusative comperhensatniation funcatisant meusap
          </label>
        </div>

        {/* address fl - uk ire */}
        <div className="col-6 mb-4 ire--info uk--info d-none">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span className="fw-600 profile--span-title">
              Address First Line
            </span>
            loerm ipsum yusa repos tentaion herakulaniya fentaniya osuymana hesu
            desu kupartik uyal niesaan kailabia yestradust
          </label>
        </div>

        {/* address sl - uk ire */}
        <div className="col-6 mb-4 ire--info uk--info d-none">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span className="fw-600 profile--span-title">
              Address Second Line
            </span>
            loerm ipsum yusa repos tentaion herakulaniya fentaniya osuymana hesu
            desu kupartik uyal niesaan kailabia yestradust
          </label>
        </div>

        {/* address tl - uk ire */}
        <div className="col-6 mb-4 ire--info uk--info d-none">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span className="fw-600 profile--span-title">
              Address Third Line
            </span>
            Not Available
          </label>
        </div>

        {/* post town - ire */}
        <div className="col-6 mb-4 ire--info d-none">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span className="fw-600 profile--span-title">Post Town</span>Dublin
          </label>
        </div>

        {/* county - uk ire */}
        <div className="col-6 mb-4 ire--info uk--info d-none">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span className="fw-600 profile--span-title">County</span>Co.Dublin
          </label>
        </div>

        {/* mail code - uk ire */}
        <div className="col-6 mb-4 ire--info uk--info d-none">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span className="fw-600 profile--span-title">Mail Code</span>5025
            5PY
          </label>
        </div>

        {/* -------------------------------- */}

        <div className="col-12 mb-4"></div>

        {/* total orders */}
        <div className="col-2 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Total Orders
          </label>
          <h4 className="mt-2 mb-0 fw-bold">105</h4>
        </div>

        {/* completed */}
        <div className="col-2 offset-1 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Completed
          </label>
          <h4 className="mt-2 mb-0 fw-bold text-theme">101</h4>
        </div>

        {/* canceled */}
        <div className="col-2 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Canceled
          </label>
          <h4 className="mt-2 mb-0 fw-bold text-danger">3</h4>
        </div>

        {/* processing */}
        <div className="col-2 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Processing
          </label>
          <h4 className="mt-2 mb-0 fw-bold">1</h4>
        </div>

        {/* pending */}
        <div className="col-2 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Pending
          </label>
          <h4 className="mt-2 mb-0 fw-bold">0</h4>
        </div>
      </div>
    </div>
  );
} // end function
