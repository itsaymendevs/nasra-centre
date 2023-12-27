'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function PhoneForm({ phoneMessageCustomer }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: formData state
  const initialState = {
    id: phoneMessageCustomer.id,
    content: phoneMessageCustomer.content,
    contentAr: phoneMessageCustomer.contentAr,
    isActive: phoneMessageCustomer.isActive,
  };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }; // end function

  // 2: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.1: insert new item
    dispatch(IsLoading());
    const response = await fetch(`${url}/api/messages-global/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });
    dispatch(IsNotLoading());
  };

  // ---------------------------------- functions ----------------------------------

  return (
    <div className="accordion mb-5" role="tablist" id="results--sms-phone">
      <div className="accordion-item results--order results--sms">
        {/* outer heading */}
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-phone .item-1"
            aria-expanded="false"
            aria-controls="results--sms-phone .item-1">
            <span className="fw-semibold">Phone Confirmation</span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-1 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-phone">
          <div className="accordion-body">
            <form className="row g-0" onSubmit={handleSubmit}>
              {/* shortcuts */}
              <div className="col-12 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @verCode
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Verification Code
                </label>
              </div>

              {/* message */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message
                  <small className="tag--optional">
                    {formData.content?.length || 0}/140
                  </small>
                </label>
                <textarea
                  name="content"
                  className="form--input form--textarea"
                  value={formData.content}
                  onChange={handleInputChange}></textarea>
              </div>

              {/* message ar */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message Ar
                  <small className="tag--optional">
                    {formData.contentAr?.length || 0}/140
                  </small>
                </label>
                <textarea
                  name="contentAr"
                  className="form--input form--textarea"
                  value={formData.contentAr}
                  onChange={handleInputChange}></textarea>
              </div>

              {/* submit */}
              <div className="col-12 text-center mb-2">
                <button
                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                  type="submit">
                  Save
                </button>
              </div>
              {/* end submit */}
            </form>
          </div>
        </div>
        {/* end collapse */}
      </div>
    </div>
  );
} // end function
