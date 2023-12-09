import Link from 'next/link';
import React from 'react';

export default function AddressInfo() {
  return (
    <div id="address--wrap">
      <hr className="mb-4" />
      <div className="row g-0">
        {/* customer */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Customer
            </span>
            <Link
              className="text-decoration-none text-primary"
              href="/customers/1">
              Khalid Omar Hassan
            </Link>
          </label>
        </div>

        {/* phone */}
        <div className="col-5 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Phone
            </span>
            +44 608 888 3500
          </label>
        </div>

        {/* country of uk or irl */}
        <div className="col-3 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Country
            </span>
            United Kingdom
          </label>
        </div>

        {/* ---------------------------- */}

        {/* receiver (if found) */}
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
              Yasir Ahmed Kamal
            </Link>
          </label>
        </div>

        {/* receiver phones + alternative */}
        <div className="col-5 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Phone / Alternatives
            </span>
            092296110 / 092555042
          </label>
        </div>

        {/* country of receiver */}
        <div className="col-3 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Country
            </span>
            Khartoum / Ebbaid Khatim
          </label>
        </div>

        {/* address of receiver */}
        <div className="col-12 mb-4">
          <label className="col-form-label form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Rough Address
            </span>
            loerm ipsum yusa repos tentaion herakulaniya fentaniya osuymana hesu
            desu kupartik uyal niesaan kailabia yestradustp mentaub subarp
            fatniyan stweeb to kusative comperhensatniation funcatisant meusap
            <br />
          </label>
        </div>
      </div>
      {/* end row */}
    </div>
  );
} // end function
