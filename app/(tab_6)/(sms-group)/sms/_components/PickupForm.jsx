'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { useDispatch } from 'react-redux';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';

export default function PickupForm({ pickupMessages }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;
  const initialSkip = useRef(false);

  // ---------------------------------- states ----------------------------------

  // 1: formData state => Processing
  const initialStateFirst = {
    id: pickupMessages[0].id,
    content: pickupMessages[0].content,
    contentAr: pickupMessages[0].contentAr,
    isActive: pickupMessages[0].isActive,
  };
  const [formDataFirst, setFormDataFirst] = useState(initialStateFirst);

  // 2: formDataSec state => Canceled
  const initialStateSec = {
    id: pickupMessages[1].id,
    content: pickupMessages[1].content,
    contentAr: pickupMessages[1].contentAr,
    isActive: pickupMessages[1].isActive,
  };
  const [formDataSec, setFormDataSec] = useState(initialStateSec);

  // 3: formDataSec state => Completed
  const initialStateThird = {
    id: pickupMessages[2].id,
    content: pickupMessages[2].content,
    contentAr: pickupMessages[2].contentAr,
    isActive: pickupMessages[2].isActive,
  };
  const [formDataThird, setFormDataThird] = useState(initialStateThird);

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event, i) => {
    if (i == 'First') {
      setFormDataFirst((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    } else if (i == 'Sec') {
      setFormDataSec((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    } else if (i == 'Third') {
      setFormDataThird((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    } // end if
  }; // end function

  // 2: handle toggle
  const handleToggleEnable = (event, i) => {
    if (i == 'Sec') {
      setFormDataSec((state) => ({
        ...state,
        isActive: !state.isActive,
      }));
    } else if (i == 'Third') {
      setFormDataThird((state) => ({
        ...state,
        isActive: !state.isActive,
      }));
    } // end if
  }; // end function

  // 3: handle submit
  const handleSubmit = async (event, i) => {
    event.preventDefault();

    // 3.2: get targeted state
    var formData = [];

    if (i == 'First') {
      formData = formDataFirst;
    } else if (i == 'Sec') {
      formData = formDataSec;
    } else if (i == 'Third') {
      formData = formDataThird;
    } // end if

    // 3.2: update message
    dispatch(IsLoading());
    const response = await fetch(`${url}/api/messages/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });
    dispatch(IsNotLoading());

    console.log(await response.json());
  };

  // 4: handle toggle submit
  useEffect(() => {
    const updateToggle = async () => {
      // start: toggle loading
      dispatch(IsLoading());

      await Promise.all([
        fetch(`${url}/api/messages/toggle-active`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(formDataSec),
        }),
        fetch(`${url}/api/messages/toggle-active`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(formDataThird),
        }),
      ]);

      // end: toggle loading
      dispatch(IsNotLoading());
    };

    // 4.2: recall function
    initialSkip.current ? updateToggle() : (initialSkip.current = true);
  }, [formDataSec.isActive, formDataThird.isActive]);

  return (
    <div className="accordion" role="tablist" id="results--sms-collection">
      {/* 1: processing */}
      <div className="accordion-item results--order results--sms">
        {/* title */}
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-collection .item-1"
            aria-expanded="false"
            aria-controls="results--sms-collection .item-1">
            <span
              className={`fw-semibold ${
                !formDataFirst.isActive && 'text-danger'
              }`}
              style={{ width: '50%' }}>
              Pickup / Processing
            </span>
            <small className="tag--optional w-100 text-end me-3 d-none">
              optional
            </small>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-1 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-collection">
          <div className="accordion-body">
            {/* row */}
            <form
              className="row g-0"
              onSubmit={(event) => handleSubmit(event, 'First')}>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @orderNum
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Order Number
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userFN
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  User First-name
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userLN
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  User Last-name
                  <br />
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @pickupCode
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Pickup Code
                  <br />
                </label>
              </div>

              <div className="col-8 text-center mb-4"></div>

              {/* message  */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message
                  <small className="tag--optional">
                    {formDataFirst.content?.length || 0}/140
                  </small>
                </label>
                <textarea
                  name="content"
                  className="form--input form--textarea"
                  value={formDataFirst.content}
                  onChange={(event) =>
                    handleInputChange(event, 'First')
                  }></textarea>
              </div>

              {/* message ar */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message Ar
                  <small className="tag--optional">
                    {formDataFirst.contentAr?.length || 0}/140
                  </small>
                </label>
                <textarea
                  name="contentAr"
                  className="form--input form--textarea"
                  value={formDataFirst.contentAr}
                  onChange={(event) =>
                    handleInputChange(event, 'First')
                  }></textarea>
              </div>

              {/* submit */}
              <div className="col-12 text-center mb-2">
                <button
                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                  type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
          {/* end body */}
        </div>
        {/* end collapse */}
      </div>
      {/* end item */}

      {/* ------------------------------------------ */}

      {/* 2: canceled */}
      <div className="accordion-item results--order results--sms">
        {/* title */}
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-collection .item-2"
            aria-expanded="false"
            aria-controls="results--sms-collection .item-2">
            <span
              className={`fw-semibold ${
                !formDataSec.isActive && 'text-danger'
              }`}
              style={{ width: '50%' }}>
              Pickup / Canceled
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-2 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-collection">
          <div className="accordion-body">
            {/* row */}
            <form
              className="row g-0"
              onSubmit={(event) => handleSubmit(event, 'Sec')}>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @orderNum
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Order Number
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userFN
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  User First-name
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userLN
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  User Last-name
                  <br />
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @pickupCode
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Pickup Code
                  <br />
                </label>
              </div>
              <div className="col-8 text-center mb-4"></div>

              {/* message */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message
                  <small className="tag--optional">
                    {formDataSec.content?.length || 0}/140
                  </small>
                </label>
                <textarea
                  name="content"
                  className="form--input form--textarea"
                  value={formDataSec.content}
                  onChange={(event) =>
                    handleInputChange(event, 'Sec')
                  }></textarea>
              </div>

              {/* message ar */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message Ar
                  <small className="tag--optional">
                    {formDataSec.contentAr?.length || 0}/140
                  </small>
                </label>
                <textarea
                  name="contentAr"
                  className="form--input form--textarea"
                  value={formDataSec.contentAr}
                  onChange={(event) =>
                    handleInputChange(event, 'Sec')
                  }></textarea>
              </div>

              {/* options */}
              <div className="col-12 text-center mb-2">
                {formDataSec.isActive == true ? (
                  <button
                    className="btn btn--outline-theme btn--outline-danger btn--sm fs-12 rounded-1 px-5"
                    type="button"
                    onClick={(event) => handleToggleEnable(event, 'Sec')}>
                    Disable
                  </button>
                ) : (
                  <button
                    className="btn btn--outline-theme btn--outline-theme btn--sm
                    fs-12 rounded-1 px-5"
                    type="button"
                    onClick={(event) => handleToggleEnable(event, 'Sec')}>
                    Enable
                  </button>
                )}
                <button
                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5 ms-2"
                  type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
          {/* end body */}
        </div>
        {/* end collapse */}
      </div>
      {/* end item */}

      {/* --------------------------------------------------- */}

      {/* 3: completed */}
      <div className="accordion-item results--order results--sms">
        {/* title */}
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-collection .item-3"
            aria-expanded="false"
            aria-controls="results--sms-collection .item-3">
            <span
              className={`fw-semibold ${
                !formDataThird.isActive && 'text-danger'
              }`}
              style={{ width: '50%' }}>
              Pickup / Completed
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-3 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-collection">
          <div className="accordion-body">
            {/* row */}
            <form
              className="row g-0"
              onSubmit={(event) => handleSubmit(event, 'Third')}>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @orderNum
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Order Number
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userFN
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  User First-name
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @userLN
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  User Last-name
                  <br />
                </label>
              </div>
              <div className="col-4 text-center mb-4">
                <label className="form-label form--label text-theme fs-12 mb-1">
                  @pickupCode
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Pickup Code
                  <br />
                </label>
              </div>
              <div className="col-8 text-center mb-4"></div>

              {/* message */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message
                  <small className="tag--optional">
                    {formDataThird.content?.length || 0}/140
                  </small>
                </label>
                <textarea
                  name="content"
                  className="form--input form--textarea"
                  value={formDataThird.content}
                  onChange={(event) =>
                    handleInputChange(event, 'Third')
                  }></textarea>
              </div>

              {/* message ar */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message Ar
                  <small className="tag--optional">
                    {formDataThird.contentAr?.length || 0}/140
                  </small>
                </label>
                <textarea
                  name="contentAr"
                  className="form--input form--textarea"
                  value={formDataThird.contentAr}
                  onChange={(event) =>
                    handleInputChange(event, 'Third')
                  }></textarea>
              </div>

              {/* options */}
              <div className="col-12 text-center mb-2">
                {formDataThird.isActive == true ? (
                  <button
                    className="btn btn--outline-theme btn--outline-danger btn--sm fs-12 rounded-1 px-5"
                    type="button"
                    onClick={(event) => handleToggleEnable(event, 'Third')}>
                    Disable
                  </button>
                ) : (
                  <button
                    className="btn btn--outline-theme btn--outline-theme btn--sm
                    fs-12 rounded-1 px-5"
                    type="button"
                    onClick={(event) => handleToggleEnable(event, 'Third')}>
                    Enable
                  </button>
                )}
                <button
                  type="submit"
                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5 ms-2">
                  Save
                </button>
              </div>
            </form>
          </div>
          {/* end body */}
        </div>
        {/* end collapse */}
      </div>
      {/* end item */}
    </div>
    // end wrapper
  );
} // end function
