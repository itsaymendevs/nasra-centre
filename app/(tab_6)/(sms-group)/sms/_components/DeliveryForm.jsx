'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { useDispatch } from 'react-redux';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';

export default function DeliveryForm({ deliveryMessages }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: formData state => Processing
  const initialStateFirst = {
    id: deliveryMessages[0].id,
    content: deliveryMessages[0].content,
    contentAr: deliveryMessages[0].contentAr,
    isActive: deliveryMessages[0].isActive,
  };
  const [formDataFirst, setFormDataFirst] = useState(initialStateFirst);

  // 2: formDataSec state => Canceled
  const initialStateSec = {
    id: deliveryMessages[1].id,
    content: deliveryMessages[1].content,
    contentAr: deliveryMessages[1].contentAr,
    isActive: deliveryMessages[1].isActive,
  };
  const [formDataSec, setFormDataSec] = useState(initialStateSec);

  // 3: formDataSec state => Completed
  const initialStateThird = {
    id: deliveryMessages[2].id,
    content: deliveryMessages[2].content,
    contentAr: deliveryMessages[2].contentAr,
    isActive: deliveryMessages[2].isActive,
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
    updateToggle();
  }, [formDataSec.isActive, formDataThird.isActive]);

  // ---------------------------------- page ----------------------------------

  return (
    <div className="accordion mb-5" role="tablist" id="results--sms-delivery">
      {/* 1: processing */}
      <div className="accordion-item results--order results--sms">
        {/* title */}
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-delivery .item-1"
            aria-expanded="false"
            aria-controls="results--sms-delivery .item-1">
            <span
              className={`fw-semibold ${
                !formDataFirst.isActive && 'text-danger'
              }`}
              style={{ width: '50%' }}>
              Delivery / Processing
            </span>
            <small
              className="tag--optional w-100 text-end me-3"
              style={{ color: 'var(--bg-theme-dark)' }}>
              optional
            </small>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-1 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-delivery">
          {/* collapse body */}
          <div className="accordion-body">
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

              {/* message */}
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
              <div className="col-12 text-center mb-2">
                <button
                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                  type="submit">
                  Save
                </button>
              </div>
            </form>
          </div>
          {/* end collapse body */}
        </div>
        {/* end collapse */}
      </div>
      {/* end processing */}

      {/* --------------------------------------------------------- */}

      {/* 2: canceled */}
      <div className="accordion-item results--order results--sms">
        {/* title */}
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-delivery .item-2"
            aria-expanded="false"
            aria-controls="results--sms-delivery .item-2">
            <span
              className={`fw-semibold ${
                !formDataSec.isActive && 'text-danger'
              }`}
              style={{ width: '50%' }}>
              Delivery / Canceled
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-2 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-delivery">
          {/* collapse body */}
          <div className="accordion-body">
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

      {/* -------------------------------------------------- */}

      {/* 3: completed */}
      <div className="accordion-item results--order results--sms">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-delivery .item-3"
            aria-expanded="false"
            aria-controls="results--sms-delivery .item-3">
            <span
              className={`fw-semibold ${
                !formDataThird.isActive && 'text-danger'
              }`}
              style={{ width: '50%' }}>
              Delivery / Completed
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-3 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-delivery">
          <div className="accordion-body">
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

              {/* actions */}
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
    // end according wrapper
  );
} // end function
