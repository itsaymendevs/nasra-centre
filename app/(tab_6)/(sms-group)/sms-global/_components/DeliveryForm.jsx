'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { useDispatch } from 'react-redux';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';

export default function DeliveryForm({
  deliveryMessagesCustomer,
  deliveryMessagesReceiver,
}) {
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
    id: deliveryMessagesCustomer[0].id,
    content: deliveryMessagesCustomer[0].content,
    contentAr: deliveryMessagesCustomer[0].contentAr,
    isActive: deliveryMessagesCustomer[0].isActive,
  };
  const [formDataFirst, setFormDataFirst] = useState(initialStateFirst);

  // 2: formDataSec state => Canceled
  const initialStateSec = {
    id: deliveryMessagesCustomer[1].id,
    content: deliveryMessagesCustomer[1].content,
    contentAr: deliveryMessagesCustomer[1].contentAr,
    isActive: deliveryMessagesCustomer[1].isActive,
  };
  const [formDataSec, setFormDataSec] = useState(initialStateSec);

  // 3: formDataSec state => Completed
  const initialStateThird = {
    id: deliveryMessagesCustomer[2].id,
    content: deliveryMessagesCustomer[2].content,
    contentAr: deliveryMessagesCustomer[2].contentAr,
    isActive: deliveryMessagesCustomer[2].isActive,
  };
  const [formDataThird, setFormDataThird] = useState(initialStateThird);

  // ---------------------------------
  // ---------------------------------

  // 1: formData state => canceled
  const initialStateSecRec = {
    id: deliveryMessagesReceiver[0].id,
    content: deliveryMessagesReceiver[0].content,
    contentAr: deliveryMessagesReceiver[0].contentAr,
    isActive: deliveryMessagesReceiver[0].isActive,
  };
  const [formDataSecRec, setFormDataSecRec] = useState(initialStateSecRec);

  // 2: formDataSec state => completed
  const initialStateThirdRec = {
    id: deliveryMessagesReceiver[1].id,
    content: deliveryMessagesReceiver[1].content,
    contentAr: deliveryMessagesReceiver[1].contentAr,
    isActive: deliveryMessagesReceiver[1].isActive,
  };
  const [formDataThirdRec, setFormDataThirdRec] =
    useState(initialStateThirdRec);

  // 3: formDataSec state => receiption
  const initialStateFourthRec = {
    id: deliveryMessagesReceiver[2].id,
    content: deliveryMessagesReceiver[2].content,
    contentAr: deliveryMessagesReceiver[2].contentAr,
    isActive: deliveryMessagesReceiver[2].isActive,
  };
  const [formDataFourthRec, setFormDataFourthRec] = useState(
    initialStateFourthRec
  );
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

    // ---------------------------------
    // ---------------------------------

    if (i == 'SecRec') {
      setFormDataSecRec((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    } else if (i == 'ThirdRec') {
      setFormDataThirdRec((state) => ({
        ...state,
        [event.target.name]: event.target.value,
      }));
    } else if (i == 'FourthRec') {
      setFormDataFourthRec((state) => ({
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

    // ---------------------------------
    // ---------------------------------

    if (i == 'SecRec') {
      setFormDataSecRec((state) => ({
        ...state,
        isActive: !state.isActive,
      }));
    } else if (i == 'ThirdRec') {
      setFormDataThirdRec((state) => ({
        ...state,
        isActive: !state.isActive,
      }));
    } else if (i == 'FourthRec') {
      setFormDataFourthRec((state) => ({
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

    // ---------------------------------
    // ---------------------------------

    if (i == 'SecRec') {
      formData = formDataSecRec;
    } else if (i == 'ThirdRec') {
      formData = formDataThirdRec;
    } else if (i == 'FourthRec') {
      formData = formDataFourthRec;
    } // end if

    // 3.2: update message
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

  // 4: handle toggle submit
  useEffect(() => {
    const updateToggle = async () => {
      dispatch(IsLoading());

      const response = await Promise.all([
        fetch(`${url}/api/messages-global/toggle-active`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(formDataSec),
        }),
        fetch(`${url}/api/messages-global/toggle-active`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(formDataThird),
        }),
        fetch(`${url}/api/messages-global/toggle-active`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(formDataSecRec),
        }),
        fetch(`${url}/api/messages-global/toggle-active`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(formDataThirdRec),
        }),
        fetch(`${url}/api/messages-global/toggle-active`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(formDataFourthRec),
        }),
      ]);

      dispatch(IsNotLoading());
    };

    // 4.2: recall function
    updateToggle();
  }, [
    formDataSec.isActive,
    formDataThird.isActive,
    formDataSecRec.isActive,
    formDataThirdRec.isActive,
    formDataFourthRec.isActive,
  ]);

  // ---------------------------------- page ----------------------------------

  return (
    <div className="accordion mb-5" role="tablist" id="results--sms-delivery">
      {/* 1: processing */}
      <div className="accordion-item results--order results--sms">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-delivery .item-1"
            aria-expanded="false"
            aria-controls="results--sms-delivery .item-1">
            <span className="fw-semibold" style={{ width: '50%' }}>
              Delivery / Processing
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-1 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-delivery">
          <div className="accordion-body">
            {/* row */}
            <div className="row g-0">
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
                  @receiver
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Order Receiver
                </label>
              </div>

              {/* tabs */}
              <div className="col-12">
                <div className="tab--wrap">
                  {/* tab links */}
                  <ul className="nav nav-pills nav-justified" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#user-tab-5">
                        User
                      </a>
                    </li>
                    <li
                      className="nav-item d-none"
                      role="presentation"
                      style={{
                        cursor: 'not-allowed !important',
                      }}>
                      <a
                        className="nav-link disabled"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#receiver-tab-5">
                        Receiver
                      </a>
                    </li>
                  </ul>

                  {/* tab content */}
                  <div className="tab-content pb-0">
                    {/* user */}
                    <div
                      className="tab-pane active"
                      role="tabpanel"
                      id="user-tab-5">
                      <form
                        className="row g-0 align-items-center"
                        onSubmit={(event) => handleSubmit(event, 'First')}>
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
                  </div>
                  {/* end tab content */}
                </div>
              </div>
              {/* end tab */}
            </div>
          </div>
        </div>
      </div>
      {/* end item */}

      {/* --------------------------------------------------- */}

      {/* 2: canceled */}
      <div className="accordion-item results--order results--sms">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-delivery .item-2"
            aria-expanded="false"
            aria-controls="results--sms-delivery .item-2">
            <span className="fw-semibold" style={{ width: '50%' }}>
              Delivery / Canceled
            </span>
            <span className="text-end" style={{ width: '40%' }}>
              <small
                className={`sms--indicator ${
                  !formDataSec.isActive && 'inactive'
                }`}>
                User
              </small>
              <small
                className={`sms--indicator ${
                  !formDataSecRec.isActive && 'inactive'
                }`}>
                Receiver
              </small>
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-2 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-delivery">
          <div className="accordion-body">
            <div className="row g-0">
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
                  @receiver
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Order Receiver
                  <br />
                </label>
              </div>

              {/* tabs */}
              <div className="col-12">
                <div className="tab--wrap">
                  {/* tab links */}
                  <ul className="nav nav-pills nav-justified" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#user-tab-1">
                        User
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#receiver-tab-1">
                        Receiver
                      </a>
                    </li>
                  </ul>

                  {/* tab content */}
                  <div className="tab-content pb-0">
                    {/* user */}
                    <div
                      className="tab-pane active"
                      role="tabpanel"
                      id="user-tab-1">
                      <form
                        className="row g-0 align-items-center"
                        onSubmit={(event) => handleSubmit(event, 'Sec')}>
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
                              onClick={(event) =>
                                handleToggleEnable(event, 'Sec')
                              }>
                              Disable
                            </button>
                          ) : (
                            <button
                              className="btn btn--outline-theme btn--outline-theme btn--sm
                    fs-12 rounded-1 px-5"
                              type="button"
                              onClick={(event) =>
                                handleToggleEnable(event, 'Sec')
                              }>
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

                    {/* receiver */}
                    <div
                      className="tab-pane"
                      role="tabpanel"
                      id="receiver-tab-1">
                      <form
                        className="row g-0 align-items-center"
                        onSubmit={(event) => handleSubmit(event, 'SecRec')}>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message
                            <small className="tag--optional">
                              {formDataSecRec.content?.length || 0}/140
                            </small>
                          </label>
                          <textarea
                            name="content"
                            className="form--input form--textarea"
                            value={formDataSecRec.content}
                            onChange={(event) =>
                              handleInputChange(event, 'SecRec')
                            }></textarea>
                        </div>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message Ar
                            <small className="tag--optional">
                              {formDataSecRec.contentAr?.length || 0}/140
                            </small>
                          </label>
                          <textarea
                            name="contentAr"
                            className="form--input form--textarea"
                            value={formDataSecRec.contentAr}
                            onChange={(event) =>
                              handleInputChange(event, 'SecRec')
                            }></textarea>
                        </div>
                        <div className="col-12 text-center mb-2">
                          {formDataSecRec.isActive == true ? (
                            <button
                              className="btn btn--outline-theme btn--outline-danger btn--sm fs-12 rounded-1 px-5"
                              type="button"
                              onClick={(event) =>
                                handleToggleEnable(event, 'SecRec')
                              }>
                              Disable
                            </button>
                          ) : (
                            <button
                              className="btn btn--outline-theme btn--outline-theme btn--sm
                    fs-12 rounded-1 px-5"
                              type="button"
                              onClick={(event) =>
                                handleToggleEnable(event, 'SecRec')
                              }>
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
                  </div>
                  {/* end tab content */}
                </div>
              </div>
              {/* end tabs */}
            </div>
          </div>
        </div>
      </div>
      {/* end item */}

      {/* ------------------------------------------ */}

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
            <span className="fw-semibold" style={{ width: '50%' }}>
              Delivery / Completed
            </span>
            <span className="text-end" style={{ width: '40%' }}>
              <small
                className={`sms--indicator ${
                  !formDataThird.isActive && 'inactive'
                }`}>
                User
              </small>
              <small
                className={`sms--indicator ${
                  !formDataThirdRec.isActive && 'inactive'
                }`}>
                Receiver
              </small>
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-3 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-delivery">
          <div className="accordion-body">
            <div className="row g-0">
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
                  @receiver
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Order Receiver
                  <br />
                </label>
              </div>

              {/* tabs */}
              <div className="col-12">
                <div className="tab--wrap">
                  {/* tab links */}
                  <ul className="nav nav-pills nav-justified" role="tablist">
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link active"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#user-tab">
                        User
                      </a>
                    </li>
                    <li className="nav-item" role="presentation">
                      <a
                        className="nav-link"
                        role="tab"
                        data-bs-toggle="pill"
                        href="#receiver-tab">
                        Receiver
                      </a>
                    </li>
                  </ul>

                  {/* tab content */}
                  <div className="tab-content pb-0">
                    {/* user */}
                    <div
                      className="tab-pane active"
                      role="tabpanel"
                      id="user-tab">
                      <form
                        className="row g-0 align-items-center"
                        onSubmit={(event) => handleSubmit(event, 'Third')}>
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
                        <div className="col-12 text-center mb-2">
                          {formDataThird.isActive == true ? (
                            <button
                              className="btn btn--outline-theme btn--outline-danger btn--sm fs-12 rounded-1 px-5"
                              type="button"
                              onClick={(event) =>
                                handleToggleEnable(event, 'Third')
                              }>
                              Disable
                            </button>
                          ) : (
                            <button
                              className="btn btn--outline-theme btn--outline-theme btn--sm
                    fs-12 rounded-1 px-5"
                              type="button"
                              onClick={(event) =>
                                handleToggleEnable(event, 'Third')
                              }>
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

                    {/* receiver */}
                    <div className="tab-pane" role="tabpanel" id="receiver-tab">
                      <form
                        className="row g-0 align-items-center"
                        onSubmit={(event) => handleSubmit(event, 'ThirdRec')}>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message
                            <small className="tag--optional">
                              {formDataThirdRec.content?.length || 0}/140
                            </small>
                          </label>
                          <textarea
                            name="content"
                            className="form--input form--textarea"
                            value={formDataThirdRec.content}
                            onChange={(event) =>
                              handleInputChange(event, 'ThirdRec')
                            }></textarea>
                        </div>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label with-counter">
                            Message Ar
                            <small className="tag--optional">
                              {formDataThirdRec.contentAr?.length || 0}/140
                            </small>
                          </label>
                          <textarea
                            name="contentAr"
                            className="form--input form--textarea"
                            value={formDataThirdRec.contentAr}
                            onChange={(event) =>
                              handleInputChange(event, 'ThirdRec')
                            }></textarea>
                        </div>
                        <div className="col-12 text-center mb-2">
                          {formDataThirdRec.isActive == true ? (
                            <button
                              className="btn btn--outline-theme btn--outline-danger btn--sm fs-12 rounded-1 px-5"
                              type="button"
                              onClick={(event) =>
                                handleToggleEnable(event, 'ThirdRec')
                              }>
                              Disable
                            </button>
                          ) : (
                            <button
                              className="btn btn--outline-theme btn--outline-theme btn--sm
                    fs-12 rounded-1 px-5"
                              type="button"
                              onClick={(event) =>
                                handleToggleEnable(event, 'ThirdRec')
                              }>
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
                  </div>
                  {/* end tab content */}
                </div>
              </div>
              {/* end tabs */}
            </div>
          </div>
        </div>
      </div>
      {/* end item */}

      {/* -------------------------------------- */}

      {/* 4: confirm reception */}
      <div className="accordion-item results--order results--sms">
        <h2 className="accordion-header" role="tab">
          <button
            className="accordion-button collapsed results--order-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#results--sms-delivery .item-4"
            aria-expanded="false"
            aria-controls="results--sms-delivery .item-4">
            <span className="fw-semibold" style={{ width: '50%' }}>
              Delivery / Confirm Reception
            </span>
            <span className="text-end" style={{ width: '40%' }}>
              <small
                className={`sms--indicator ${
                  !formDataFourthRec.isActive && 'inactive'
                }`}>
                Receiver
              </small>
            </span>
          </button>
        </h2>

        {/* collapse */}
        <div
          className="accordion-collapse collapse item-4 pt-2"
          role="tabpanel"
          data-bs-parent="#results--sms-delivery">
          <div className="accordion-body">
            <form
              className="row g-0"
              onSubmit={(event) => handleSubmit(event, 'FourthRec')}>
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
                  @receiver
                </label>
                <label className="form-label form--label profile--label justify-content-center">
                  Order Receiver
                  <br />
                </label>
              </div>
              <div className="col-8 text-center mb-4"></div>

              {/* message */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message
                  <small className="tag--optional">
                    {formDataFourthRec.content?.length || 0}/140
                  </small>
                </label>
                <textarea
                  name="content"
                  className="form--input form--textarea"
                  value={formDataFourthRec.content}
                  onChange={(event) =>
                    handleInputChange(event, 'FourthRec')
                  }></textarea>
              </div>

              {/* message ar */}
              <div className="col-6 mb-4">
                <label className="form-label form--label with-counter">
                  Message Ar
                  <small className="tag--optional">
                    {formDataFourthRec.contentAr?.length || 0}/140
                  </small>
                </label>
                <textarea
                  name="contentAr"
                  className="form--input form--textarea"
                  value={formDataFourthRec.contentAr}
                  onChange={(event) =>
                    handleInputChange(event, 'FourthRec')
                  }></textarea>
              </div>

              {/* options */}
              <div className="col-12 text-center mb-2">
                {formDataFourthRec.isActive == true ? (
                  <button
                    className="btn btn--outline-theme btn--outline-danger btn--sm fs-12 rounded-1 px-5"
                    type="button"
                    onClick={(event) => handleToggleEnable(event, 'FourthRec')}>
                    Disable
                  </button>
                ) : (
                  <button
                    className="btn btn--outline-theme btn--outline-theme btn--sm
                    fs-12 rounded-1 px-5"
                    type="button"
                    onClick={(event) => handleToggleEnable(event, 'FourthRec')}>
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
