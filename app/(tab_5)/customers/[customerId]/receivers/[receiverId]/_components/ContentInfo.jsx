'use client';

import Link from 'next/link';
import React from 'react';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function ContentInfo() {
  // ------------------------Page-----------------------

  return (
    <div id="information--row" className="mb-5">
      <div className="row g-0 align-items-start">
        {/* receiver name */}
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
            Ahmed Samir Husam
          </label>
        </div>

        {/* phone */}
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
            +249 999590002
          </label>
        </div>

        {/* alternative phone */}
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
              Alternative
            </span>
            +249 12250244
          </label>
        </div>

        {/* customer */}
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
              User
            </span>
            <Link
              className="text-decoration-none text-primary"
              href="/customers/1">
              Yasir Ahmed Kamal
            </Link>
          </label>
        </div>

        {/* country / state */}
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

        {/* ----------------------------------- */}
        <div className="col-12 mb-4"></div>

        {/* total orders */}
        <div className="col-2 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Total Orders
          </label>
          <h4 className="mt-2 mb-0 fw-bold">4</h4>
        </div>

        {/* completed */}
        <div className="col-2 offset-1 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Completed
          </label>
          <h4 className="mt-2 mb-0 fw-bold text-theme">2</h4>
        </div>

        {/* canceled */}
        <div className="col-2 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Canceled
          </label>
          <h4 className="mt-2 mb-0 fw-bold text-danger">1</h4>
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
