'use client';
import Link from 'next/link';
import React from 'react';

import { toggleEditParagraphModal } from '@/slices/SixthModalSlice';
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
            AN-001
          </label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">
            Paragraph Title
          </label>
        </div>
        <div className="col-5">
          <label className="col-form-label form--label row--label">
            Paragraph Content
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
                onClick={() => dispatch(toggleEditParagraphModal(true))}>
                Edit Paragraph
              </Link>
              <Link className="dropdown-item" href="/help/paragraphs/1/remove">
                Remove Paragraph
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* end item */}
    </div>
  ); // end return
} // end function
