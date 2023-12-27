'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { toggleConfirmModal } from '@/slices/ConfirmModalSlice';
import { useDispatch } from 'react-redux';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useRouter } from 'next/navigation';

export default function ToggleForm({ order, messages }) {
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
    paymentId: order.paymentId || null,
    invoiceNumber: order.invoiceNumber || '',
  };

  const initialStateCancellationNote = {
    orderCancellationNote: order.orderCancellationNote || '',
    refundInvoiceNumber: order.refundInvoiceNumber || '',
  };

  const initialStateNote = {
    orderNote: order.orderNote || '',
  };

  const initialStateOTP = {
    userOTP: messages[0] ? messages[0]['content'] : '',
    receiverOTP: messages[1] ? messages[1]['content'] : '',
  };

  // initiate
  const [formData, setFormData] = useState(initialState);
  const [formDataNote, setFormDataNote] = useState(initialStateNote);
  const [formDataCancellationNote, setFormDataCancellationNote] = useState(
    initialStateCancellationNote
  );
  const [formDataOTP, setFormDataOTP] = useState(initialStateOTP);

  // ---------------------------------- functions ----------------------------------

  // 3: handle change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }; // end function

  // 4: handle submit for OrderNote
  const handleSubmitNote = async (event) => {
    event.preventDefault();

    dispatch(IsLoading());
    const response = await fetch(`${url}/api/orders/${order.id}/update-note`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formDataNote),
    });
    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    router.refresh();
  };

  // 5: handle submit for cancellingOrder
  const handleSubmitCancelOrder = async (event) => {
    event.preventDefault();

    dispatch(IsLoading());
    const response = await fetch(`${url}/api/orders/${order.id}/cancel-order`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formDataCancellationNote),
    });
    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    router.refresh();
  };

  // 6: handle submit for processingOrder
  const handleSubmitProcessOrder = async (event, action) => {
    event.preventDefault();

    dispatch(IsLoading());
    const response = await fetch(
      `${url}/api/orders/${order.id}/process-order`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ action: action }),
      }
    );
    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    router.refresh();
  };

  // 7: handle submit for OTP
  const handleSubmitOTP = async (event, target) => {
    event.preventDefault();

    dispatch(IsLoading());
    const response = await fetch(`${url}/api/orders/${order.id}/send-otp`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ ...formDataOTP, target: target }),
    });
    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    router.refresh();
  };

  // --------------------------------- page ---------------------------------------
  return (
    <div id="order--wrap">
      {/* hr - status changer + timing */}
      <div className="d-flex align-items-center justify-content-between mb-3 mt-4">
        <label className="form-label hr--label mb-0">Order Status</label>
        <hr className="w-100 my-0" />
        <label
          className="form-label text-center hr--label mb-0"
          style={{ minWidth: '160px' }}>
          <span className="d-block mb-1 fw-bold">
            {/* refund / regular order employee */}
            {order.orderStatus != 'CANCELED'
              ? order.orderEmployeeId && order.order_employee.name
              : order.refundEmployeeId && order.refund_employee.name}
          </span>
          <span className="d-block mb-1">
            {/* refund / regular order dateTime */}
            {order.orderStatus != 'CANCELED'
              ? order.orderStatusDateTime
              : order.refundDateTime}
          </span>
        </label>
      </div>

      {/* ---------------------- */}

      <div className="row g-0 mb-5 pb-4">
        <div className="col-12">
          {/* tabs */}
          <div className="tab--wrap">
            {/* tabs link */}
            <ul className="nav nav-pills nav-justified" role="tablist">
              {/* 1: processing */}
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${
                    order.orderStatus != 'CANCELED'
                      ? 'active'
                      : 'disabled bg-disabled'
                  }`}
                  role="tab"
                  data-bs-toggle="pill"
                  href="#processing-tab">
                  Processing Order
                </a>
              </li>

              {/* cancelling order */}
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${
                    order.orderStatus == 'CANCELED' && 'active'
                  } ${
                    order.orderStatus == 'COMPLETED' && 'disabled bg-disabled'
                  }`}
                  role="tab"
                  data-bs-toggle="pill"
                  href="#cancelling-tab">
                  Cancelling Order
                </a>
              </li>
            </ul>

            {/* -------------------- */}

            {/* tabs content */}
            <div className="tab-content">
              {/* 1: processing tab */}
              <div
                className={`tab-pane fade ${
                  order.orderStatus != 'CANCELED' && 'show active'
                }`}
                role="tabpanel"
                id="processing-tab">
                <div className="row g-0">
                  <div className="col" id="processing-extras">
                    {/* inner tabs (sms / note) */}
                    <div className="tab--wrap">
                      <ul
                        className="nav nav-tabs justify-content-center border-0 mb-4"
                        role="tablist">
                        {/* 1.1: sms */}
                        <li className="nav-item" role="presentation">
                          {/* disable in PENDING */}
                          <a
                            className={`nav-link btn--theme btn--sm rounded-1 fs-13 text-capitalize me-2 border-0 ${
                              order.orderStatus == 'PENDING' && 'disabled'
                            }`}
                            role="tab"
                            data-bs-toggle="tab"
                            href="#message-tab">
                            Message
                          </a>
                        </li>

                        {/* note */}
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link btn--theme btn--sm px-4 rounded-1 fs-13 text-capitalize border-0"
                            role="tab"
                            data-bs-toggle="tab"
                            href="#note-tab">
                            Order Note
                          </a>
                        </li>
                      </ul>

                      {/* inner tab content */}
                      <div className="tab-content py-0">
                        {/* 1.1: sms */}
                        <div
                          className="tab-pane fade"
                          role="tabpanel"
                          id="message-tab">
                          <div className="row g-0 px-4 py-4 bg-white rounded-1 shadow-sm">
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
                            {order.receivingOption == 'PICKUP' && (
                              <>
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
                              </>
                            )}

                            {/* customer message form */}
                            <div
                              className={`${
                                order.receiverId ? 'col-6' : 'offset-3 col-6'
                              } mb-4`}>
                              <label className="form-label form--label with-counter">
                                Customer Message
                                <small className="tag--optional">
                                  {formDataOTP.userOTP.length}/140
                                </small>
                              </label>
                              <form
                                onSubmit={(event) =>
                                  handleSubmitOTP(event, 'customer')
                                }>
                                <textarea
                                  name="userOTP"
                                  className="form--input form--textarea"
                                  required
                                  onChange={(event) =>
                                    setFormDataOTP((state) => ({
                                      ...state,
                                      [event.target.name]: event.target.value,
                                    }))
                                  }
                                  value={formDataOTP.userOTP}></textarea>
                                <div className="text-center me-4 mt-2">
                                  <button
                                    className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                                    type="submit">
                                    Send
                                  </button>
                                </div>
                              </form>
                            </div>

                            {/* receiver message form */}
                            {order.receiverId && (
                              <div className="col-6 mb-4">
                                <label className="form-label form--label with-counter">
                                  Receiver Message
                                  <small className="tag--optional">
                                    {formDataOTP.receiverOTP.length}/140
                                  </small>
                                </label>
                                <form
                                  onSubmit={(event) =>
                                    handleSubmitOTP(event, 'receiver')
                                  }>
                                  <textarea
                                    name="receiverOTP"
                                    className="form--input form--textarea"
                                    required
                                    onChange={(event) =>
                                      setFormDataOTP((state) => ({
                                        ...state,
                                        [event.target.name]: event.target.value,
                                      }))
                                    }
                                    value={formDataOTP.receiverOTP}></textarea>
                                  <div className="text-center me-4 mt-2">
                                    <button
                                      className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                                      type="submit">
                                      Send
                                    </button>
                                  </div>
                                </form>
                              </div>
                            )}
                          </div>
                        </div>
                        {/* end 1.1 sms tab */}

                        {/* ---------------------- */}

                        {/* 1.2: note content + form */}
                        <div
                          className="tab-pane fade"
                          role="tabpanel"
                          id="note-tab">
                          <form
                            onSubmit={handleSubmitNote}
                            className="row g-0 px-4 py-4 bg-white rounded-1 shadow-sm">
                            <div className="col-9">
                              <label className="form-label form--label">
                                Note Content
                              </label>
                              <textarea
                                name="orderNote"
                                className="form--input form--textarea w-100"
                                onChange={(event) =>
                                  setFormDataNote({
                                    [event.target.name]: event.target.value,
                                  })
                                }
                                value={formDataNote.orderNote || ''}></textarea>
                            </div>
                            <div className="col-3 text-end align-self-end">
                              <button
                                className="btn btn btn--outline-theme rounded-1 px-4 mb-1"
                                type="submit">
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                        {/* end note tab */}
                      </div>
                    </div>
                    {/* end inner tabs wrap */}
                  </div>
                  {/* end col */}

                  {/* --------------------------------- */}

                  {/* continue tab 1 */}
                  <div className="col-12 text-end align-self-end">
                    <hr className="mb-4" />
                  </div>

                  {/* change status */}
                  <div
                    className="col-12 text-center mb-4"
                    id="processing-buttons">
                    {/* previous -> step back */}
                    <button
                      className={`btn border-0 rounded-1 me-2 ${
                        (order.orderStatus == 'PENDING' ||
                          order.orderStatus == 'COMPLETED' ||
                          order.orderStatus == 'CANCELED') &&
                        'disabled'
                      }`}
                      type="button"
                      onClick={(event) =>
                        handleSubmitProcessOrder(event, 'PREVIOUS')
                      }>
                      Previous
                    </button>

                    {/* next -> step forward */}
                    <button
                      className={`btn btn--theme btn--sm px-4 rounded-1 fs-13 text-capitalize ${
                        (order.orderStatus == 'COMPLETED' ||
                          order.orderStatus == 'CANCELED' ||
                          (order.orderStatus == 'PROCESSING' &&
                            order.isPaymentDone === 0)) &&
                        'disabled'
                      } `}
                      type="button"
                      onClick={(event) =>
                        handleSubmitProcessOrder(event, 'NEXT')
                      }>
                      Next Process
                    </button>
                  </div>
                  {/* end change status wrap */}

                  {/* -------------------------- */}

                  {/* steps display column */}
                  <div className="col-12" id="processing-steps">
                    <div className="processing-steps rounded-1">
                      {/* pending */}
                      <button
                        className={`btn btn--sm px-4 rounded-1 fs-13 text-capitalize scale--3 ${
                          order.orderStatus != 'CANCELED' && 'active'
                        }`}
                        type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-info-circle me-2"
                          data-bs-toggle="tooltip"
                          data-bss-tooltip=""
                          data-bs-placement="bottom"
                          title="Order is in pending state">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                        Pending
                      </button>
                      <hr style={{ width: '10%' }} />

                      {/* processing */}
                      <button
                        className={`btn btn--sm px-4 rounded-1 fs-13 text-capitalize scale--3 ${
                          (order.orderStatus == 'PROCESSING' ||
                            order.orderStatus == 'COMPLETED') &&
                          'active'
                        }`}
                        type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-info-circle me-2"
                          data-bs-toggle="tooltip"
                          data-bss-tooltip=""
                          data-bs-placement="bottom"
                          title="Order is in processing state">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                        Processing
                      </button>
                      <hr style={{ width: '10%' }} />

                      {/* delivered */}
                      <button
                        className={`btn btn--sm px-4 rounded-1 fs-13 text-capitalize scale--3 ${
                          order.orderStatus == 'COMPLETED' && 'active'
                        } `}
                        type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-info-circle me-2"
                          data-bs-toggle="tooltip"
                          data-bss-tooltip=""
                          data-bs-placement="bottom"
                          title="Order has been delivered">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                        COMPLETED
                      </button>
                    </div>
                  </div>
                  {/* end column */}
                </div>
              </div>
              {/* end tab */}

              {/* ------------------------------------- */}
              {/* ------------------------------------- */}
              {/* ------------------------------------- */}

              {/* 2: cancelling tab + form */}
              {/*  */}
              <div
                className={`tab-pane fade ${
                  order.orderStatus == 'CANCELED' && 'show active'
                }`}
                role="tabpanel"
                id="cancelling-tab">
                <form
                  id="handleSubmitCancelOrderForm"
                  className="row g-0"
                  onSubmit={handleSubmitCancelOrder}>
                  {/* refund bill input (only appear if payment is done) */}
                  {order.isPaymentDone == true && (
                    <div className="col-4 mb-4">
                      <label className="form-label form--label">
                        Refund Bill No.
                      </label>
                      <input
                        name="refundInvoiceNumber"
                        type="text"
                        required
                        className="form--input"
                        value={formDataCancellationNote.refundInvoiceNumber}
                        onChange={(event) =>
                          setFormDataCancellationNote((state) => ({
                            ...state,
                            [event.target.name]: event.target.value,
                          }))
                        }
                      />
                    </div>
                  )}

                  {/* cancellation note */}
                  <div className="col-9">
                    <label className="form-label form--label">
                      Note about cancellation
                    </label>
                    <textarea
                      name="orderCancellationNote"
                      className="form--input form--textarea w-100"
                      required
                      value={formDataCancellationNote.orderCancellationNote}
                      onChange={(event) =>
                        setFormDataCancellationNote((state) => ({
                          ...state,
                          [event.target.name]: event.target.value,
                        }))
                      }></textarea>
                  </div>

                  {/* submit button -> toggle modal for confirm */}
                  <div className="col-3 text-end align-self-end">
                    <Link
                      className="btn btn btn--outline-theme btn--outline-danger rounded-1 px-4 mb-1"
                      type="button"
                      href="#"
                      onClick={() => {
                        formDataCancellationNote.orderCancellationNote &&
                        (order.isPaymentDone
                          ? formDataCancellationNote.refundInvoiceNumber
                          : true)
                          ? dispatch(
                              toggleConfirmModal({
                                status: true,
                                targetId: 'handleSubmitCancelOrderForm',
                              })
                            )
                          : null;
                      }}>
                      {order.orderStatus == 'CANCELED' ? 'Update' : 'Confirm'}
                    </Link>
                  </div>
                </form>
              </div>
              {/* end tab 2: cancellation */}
            </div>
            {/* end tabs content */}
          </div>
        </div>
      </div>
    </div>
  );
} // end function
