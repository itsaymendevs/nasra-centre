'use client';

import Link from 'next/link';
import React from 'react';

import { toggleEditConditionUKModal } from '@/slices/SixthModalSlice';
import { useDispatch } from 'react-redux';

export default function TermRows() {
  // ::dispatch
  const dispatch = useDispatch();

  return (
    <div id="results--row">
      {/* titles */}
      <div
        className="row g-0 align-items-center results--header mb-2"
        id="results--header-1">
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Serial
          </label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">Title</label>
        </div>
        <div className="col-5">
          <label className="col-form-label form--label row--label">
            Content
          </label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}

      {/* item */}
      <div className="row g-0 align-items-center results--item">
        <div className="col-2">
          <label className="col-form-label form--label row--label">T-001</label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">
            Terms Title
          </label>
        </div>
        <div className="col-5">
          <label className="col-form-label form--label row--label">
            Terms Content
          </label>
        </div>
        <div className="col-1">
          <div className="dropstart d-flex justify-content-center">
            <button
              className="btn dropdown-toggle results--dropdown"
              aria-expanded="false"
              data-bs-toggle="dropdown"
              type="button"></button>
            <div className="dropdown-menu results--dropdown-menu">
              <Link
                className="dropdown-item"
                href="#"
                onClick={() => dispatch(toggleEditConditionUKModal(true))}>
                Edit Terms
              </Link>
              <Link className="dropdown-item" href="/contact-uk/terms/1/remove">
                Remove Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end item */}
    </div>
  ); // end return
} // end function
