'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { toggleEditConditionModal } from '@/slices/ThirdModalSlice';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useDispatch } from 'react-redux';

export default function ContentRows({ conditions }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const router = useRouter();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;
  const dispatch = useDispatch();

  // ---------------------------------- states ----------------------------------

  // 1: formData state
  const initialState = {
    id: '',
    title: '',
    titleAr: '',
    content: '',
    contentAr: '',
  };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

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
          <div className="col-5">
            <label className="col-form-label form--label row--label">
              {condition.content}
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
                <Link className="dropdown-item" href="#">
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
