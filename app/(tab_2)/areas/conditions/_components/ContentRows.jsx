'use client';

import Link from 'next/link';
import React from 'react';
import { toggleEditConditionModal } from '@/slices/SecModalSlice';
import { useDispatch } from 'react-redux';
import { toggleConfirmModal } from '@/slices/ConfirmModalSlice';

export default function ContentRows({ conditions }) {
  // ---------------------------------- dispatch ----------------------------
  const dispatch = useDispatch();

  // ---------------------------------- page ---------------------------------

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
        <div className="col-4">
          <label className="col-form-label form--label row--label">
            Content
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}

      {/* item */}
      {conditions.map((condition) => (
        <div
          className="row g-0 align-items-center results--item"
          key={condition.id}>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {condition.serial}
            </label>
          </div>
          <div className="col-4">
            <label className="col-form-label form--label row--label">
              {condition.title}
            </label>
          </div>
          <div className="col-4">
            <label className="col-form-label form--label row--label">
              {condition.content}
            </label>
          </div>

          {/* action menu */}
          <div className="col-2">
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
                  onClick={() =>
                    dispatch(
                      toggleEditConditionModal({
                        status: true,
                        id: condition.id,
                      })
                    )
                  }>
                  Edit Condition
                </Link>
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={() =>
                    dispatch(
                      toggleConfirmModal({
                        status: true,
                        targetURL: `${process.env.domainURL}/api/delivery/conditions/${condition.id}/delete`,
                        targetName: 'Condition',
                      })
                    )
                  }>
                  Remove Condition
                </Link>
              </div>
            </div>
          </div>
          {/* end action menu */}
        </div>
      ))}
      {/* end item */}
    </div>
  ); // end return
} // end function
