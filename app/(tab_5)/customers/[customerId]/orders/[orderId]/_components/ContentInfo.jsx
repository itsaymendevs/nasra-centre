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
        {/* customer */}
        <div className="col-5 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Customer
            </span>
            <Link
              className="text-decoration-none text-primary"
              href="/customers/1">
              Ahmed Samir Husam
            </Link>
          </label>
        </div>

        {/* currency switch - ire uk */}
        <div className="col-7 col-xl-4 offset-xl-3 text-center align-self-end mb-4">
          {/* sd */}
          <button
            className="btn btn--export btn--currency scale--3 px-4 active"
            type="button">
            <img className="me-2" src="/assets/img/Flags/sd.png" />
            SDN
          </button>

          {/* ire */}
          <button
            className="btn btn--export btn--currency scale--3 px-4 ms-2 d-none"
            type="button">
            <img className="me-2" src="/assets/img/Flags/euro.png" />
            EUR
          </button>

          {/* uk */}
          <button
            className="btn btn--export btn--currency scale--3 px-4 ms-2"
            type="button">
            <img className="me-2" src="/assets/img/Flags/uk.png" />
            GBP
          </button>
        </div>

        {/* receiver */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Receiver
            </span>
            <Link
              className="text-decoration-none text-primary"
              href="/customers/1/receivers/1">
              Yasir Ahmed Elyas
            </Link>
          </label>
        </div>

        {/* order no. */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Order No.
            </span>
            125855
          </label>
        </div>

        {/* datetime */}
        <div className="col-4 text-center mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              DateTime
            </span>
            05 Sep 2023 - 10:00 PM
          </label>
        </div>

        {/* method / place or receiption */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Method and place of receipt
            </span>
            Collection - Nasra Omdurman in ocobus
          </label>
        </div>

        {/* receipt */}
        <div className="col-2 mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Receipt
            </span>
            924D19885
          </label>
        </div>

        {/* delivery price */}
        <div className="col-2 mb-4 d-none">
          <label className="col-form-label form--label profile--label scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Delivery Price
            </span>
            180
          </label>
        </div>

        {/* status */}
        <div className="col-2 mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Status
            </span>
            Completed
          </label>
        </div>

        {/* status changer - employee  */}
        <div className="col-4 text-center mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Ahmed Omar
            </span>
            05 Sep 2023 - 10:10 PM
          </label>
        </div>

        {/* payment method */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Payment Method
            </span>
            CyberPay
          </label>
        </div>

        {/* bill no */}
        <div className="col-2 mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Bill No.
            </span>
            23944312
          </label>
        </div>

        {/* payment status */}
        <div className="col-2 mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Status
            </span>
            Paid
          </label>
        </div>

        {/* payment doer (nullable cause e-payment) - employee */}
        <div className="col-4 text-center mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              ----
            </span>
            05 Sep 2023 - 10:03 PM
          </label>
        </div>

        {/* refund payment method  */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Refund Payment Method
            </span>
            ----
          </label>
        </div>

        {/* status of refund */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Status
            </span>
            ----
          </label>
        </div>

        {/* refund doer (not nullable no e-refundable) - employee */}
        <div className="col-4 text-center mb-4">
          <label className="col-form-label form--label profile--label scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              ----
            </span>
            ----
          </label>
        </div>

        {/* eircode - hidden for some reason idk yet */}
        <div className="col-4 mb-4 ire--info d-none">
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

        {/* -------------------------------------- */}

        <div className="col-12 mb-4"></div>

        {/* total products */}
        <div className="col-4 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Total Products
          </label>
          <h4 className="mt-2 mb-0 fw-bold">112</h4>
        </div>

        {/* products price */}
        <div className="col-3 offset-1 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Products Price
          </label>
          <h4 className="mt-2 mb-0 fw-bold text-theme">24,500</h4>
        </div>

        {/* total price */}
        <div className="col-3 text-center mb-4">
          <label className="form-label form--label profile--label scale--3">
            Total Price
          </label>
          <h4 className="mt-2 mb-0 fw-bold text-theme">100,000</h4>
        </div>
      </div>
    </div>
  );
} // end function
