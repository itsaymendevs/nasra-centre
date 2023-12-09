'use client';

import Link from 'next/link';
import React from 'react';
import { toggleEditConditionModal } from '@/slices/ThirdModalSlice';
import { useDispatch } from 'react-redux';

export default function ContentRows() {
  // ::dispatch
  const dispatch = useDispatch();

  return (
    <div id="results--row">
      {/* titles */}
      <div
        className="row g-0 align-items-center results--header mb-2"
        id="results--header">
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
          <label className="col-form-label form--label row--label">
            PC-001
          </label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">
            Condition Title
          </label>
        </div>
        <div className="col-5">
          <label className="col-form-label form--label row--label">
            Condition Content
          </label>
        </div>

        {/* action menu */}
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
                onClick={() => dispatch(toggleEditConditionModal(true))}>
                Edit Condition
              </Link>
              <Link
                className="dropdown-item"
                href="/pickups/conditions/1/remove">
                Remove Condition
              </Link>
            </div>
          </div>
        </div>
        {/* end action menu */}
      </div>
      {/* end item */}
    </div>
  ); // end return
} // end function
