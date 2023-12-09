'use client';

import Link from 'next/link';
import React from 'react';

import { toggleEditEmployeeModal } from '@/slices/FourthModalSlice';
import { toggleResetEmployeeModal } from '@/slices/FourthModalSlice';
import { useDispatch } from 'react-redux';

export default function ContentRows() {
  // ::root
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
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-5">
          <label className="col-form-label form--label row--label">
            Permission
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
            EM-001
          </label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">
            Ahmed Ismail
          </label>
        </div>
        <div className="col-5">
          <label className="col-form-label form--label row--label">High</label>
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
                onClick={() => dispatch(toggleEditEmployeeModal(true))}>
                Edit Employee
              </Link>
              <Link
                className="dropdown-item"
                href="#"
                onClick={() => dispatch(toggleResetEmployeeModal(true))}>
                Reset Password
              </Link>
              <Link className="dropdown-item" href="/employees/1/toggle-status">
                Deactivate Account
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
