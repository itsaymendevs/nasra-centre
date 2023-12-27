'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';

export default function PaymentForm({ order, payments }) {
  // ::root
  const options = [];

  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- options ----------------------------------

  payments.map((item) => options.push({ value: item.id, label: item.name }));

  // ---------------------------------- states ----------------------------------

  // 1: formData state
  const initialState = {
    paymentId: order.paymentId || null,
    invoiceNumber: order.invoiceNumber || '',
  };

  const initialStateCancel = {
    paymentNote: order.paymentNote || '',
  };

  const filtersState = {
    toSDG: 1,
  };

  // initiate
  const [formData, setFormData] = useState(initialState);
  const [formDataCancel, setFormDataCancel] = useState(initialStateCancel);
  const [formFilters, setFormFilters] = useState(filtersState);

  // ---------------------------------- functions ----------------------------------

  // 2: handle input change
  const handleFilterChange = (event, toSDG) => {
    setFormFilters((state) => ({
      toSDG: toSDG,
    }));
    console.log(formFilters);
  }; // end function

  // 3: handle change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }; // end function

  // 4: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(IsLoading());
    const response = await fetch(
      `${url}/api/orders/${order.id}/confirm-payment`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(formData),
      }
    );
    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    router.refresh();
  };

  // 5: handle submit for cancel
  const handleSubmitCancel = async (event) => {
    event.preventDefault();

    dispatch(IsLoading());
    const response = await fetch(
      `${url}/api/orders/${order.id}/cancel-payment`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(formDataCancel),
      }
    );
    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    router.refresh();
  };

  // ---------------------------------- page ----------------------------------

  return (
    <div id="payment--wrap" className="mb-5">
      {/* hr - payment employer (can be null too if uk order or e-payment sudan)  */}
      <div className="d-flex align-items-center justify-content-between mb-3 mt-4">
        <label className="form-label hr--label mb-0">Payment</label>
        <hr className="w-100 my-0" />
        <label
          className="form-label text-center hr--label mb-0"
          style={{ minWidth: '160px' }}>
          <span className="d-block mb-1 fw-bold">
            {order.paymentId ? order.payment.name : ''}
          </span>
          <span className="d-block mb-1">
            {order.paymentDateTime ? order.paymentDateTime : ''}
          </span>
        </label>
      </div>

      {/* ------------------------------------------- */}
      <div className="row g-0 justify-content-center" id="payment--overview">
        {/* currency - if uk irl orders */}
        {order.country.code != 'SD' && (
          <div className="col-12 text-center mb-3">
            {/* sd */}
            <button
              className={`btn btn--export btn--currency scale--3 px-4 ${
                formFilters.toSDG === 1 && 'active'
              }`}
              type="button"
              onClick={(event) => handleFilterChange(event, 1)}>
              <img className="me-2" src="/assets/img/Flags/SDN.png" />
              SDN
            </button>

            {/* euro - ire */}
            {order.country.code == 'IRL' && (
              <button
                className={`btn btn--export btn--currency scale--3 px-4 ms-2 ${
                  formFilters.toSDG !== 1 && 'active'
                }`}
                type="button"
                onClick={(event) =>
                  handleFilterChange(event, parseFloat(order.country.toSDG))
                }>
                <img className="me-2" src="/assets/img/Flags/EUR.png" />
                EUR
              </button>
            )}

            {/* gbp - uk */}
            {order.country.code == 'UK' && (
              <button
                className={`btn btn--export btn--currency scale--3 px-4 ms-2 ${
                  formFilters.toSDG !== 1 && 'active'
                }`}
                type="button"
                onClick={(event) =>
                  handleFilterChange(event, parseFloat(order.country.toSDG))
                }>
                <img className="me-2" src="/assets/img/Flags/GBP.png" />
                GBP
              </button>
            )}
          </div>
        )}
        {/* -------------------------- */}
        {/* -------------------------- */}

        {/* products price */}
        <div className="col-2 text-center mb-4">
          <label className="col-form-label form--label flex-column scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Products Price
            </span>
            <span className="fw-bold fs-14">
              {order.productsPrice / parseFloat(formFilters.toSDG)}
            </span>
          </label>
        </div>

        {/* delivery price (dashed if pickup) */}
        {order.receivingOption == 'DELIVERY' && (
          <div className="col-2 text-center mb-4">
            <label className="col-form-label form--label profile--label flex-column scale--3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                Delivery Price
              </span>
              <span className="fw-bold fs-14">
                {order.deliveryPrice / parseFloat(formFilters.toSDG)}
              </span>
            </label>
          </div>
        )}

        {/* total price */}
        <div className="col-2 mb-4">
          <label className="col-form-label text-center form--label profile--label flex-column  scale--3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Total Price
            </span>
            <span className="fw-bold fs-14 text-theme">
              {order.orderTotalPrice / parseFloat(formFilters.toSDG)}
            </span>
          </label>
        </div>
      </div>
      {/* end row */}

      {/* ---------------------------------------------------------- */}
      {/* ---------------------------------------------------------- */}

      {/* local payment */}
      <div className="row g-0 justify-content-center" id="payment--local">
        <div className="col">
          {/* tabs wrap */}
          <div className="tab--wrap">
            {/* tab links */}
            <ul className="nav nav-pills nav-justified" role="tablist">
              {/* 1: paid */}
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${order.isPaymentDone && 'active'} ${
                    (order.orderStatus == 'CANCELED' ||
                      order.orderStatus == 'COMPLETED') &&
                    'disabled'
                  } ${
                    (order.orderStatus == 'CANCELED' ||
                      order.orderStatus == 'COMPLETED') &&
                    !order.isPaymentDone &&
                    'bg-disabled'
                  }`}
                  role="tab"
                  data-bs-toggle="pill"
                  href="#paid-tab">
                  Paid
                </a>
              </li>

              {/* 2: not paid */}
              <li className="nav-item" role="presentation">
                <a
                  className={`nav-link ${!order.isPaymentDone && 'active'} ${
                    (order.orderStatus == 'CANCELED' ||
                      order.orderStatus == 'COMPLETED') &&
                    'disabled'
                  } ${
                    (order.orderStatus == 'CANCELED' ||
                      order.orderStatus == 'COMPLETED') &&
                    order.isPaymentDone &&
                    'bg-disabled'
                  }`}
                  role="tab"
                  data-bs-toggle="pill"
                  href="#unpaid-tab">
                  Not Paid
                </a>
              </li>
            </ul>

            {/* ------------------ */}

            {/* tabs content */}
            <div className="tab-content">
              {/* 1: paid tab */}
              <div
                className={`tab-pane fade ${
                  order.isPaymentDone && 'show active'
                }`}
                role="tabpanel"
                id="paid-tab">
                <form className="row g-0" onSubmit={handleSubmit}>
                  {/* icon */}
                  <div className="col-1">
                    <button
                      className="btn fs-3 btn--raw-icon scale--3"
                      type="button">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-info-circle-fill"
                        data-bs-toggle="tooltip"
                        data-bss-tooltip=""
                        data-bs-placement="bottom"
                        style={{ fill: 'var(--bg-theme-dark)' }}
                        title="Info About Payment">
                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
                      </svg>
                    </button>
                  </div>

                  {/* method */}
                  <div className="col-4">
                    <label className="form-label form--label">
                      Payment Method
                    </label>
                    <Select
                      className="form--select-container"
                      classNamePrefix="form--select"
                      instanceId="paymentId"
                      required
                      options={options}
                      value={
                        formData.paymentId
                          ? options.find(
                              (option) => option.value == formData?.paymentId
                            )
                          : ''
                      }
                      onChange={(selectedOption) =>
                        setFormData((state) => ({
                          ...state,
                          paymentId: selectedOption?.value,
                        }))
                      }
                      placeholder={''}
                      isClearable
                    />
                  </div>

                  {/* bill no */}
                  <div className="col-3">
                    <label className="form-label form--label">Bill No.</label>
                    <input
                      required
                      name="invoiceNumber"
                      type="text"
                      className="form--input"
                      value={formData.invoiceNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* submit */}
                  <div className="col-4 text-end align-self-end">
                    <button
                      className={`btn btn--theme btn--submit rounded-1`}
                      type="submit"
                      style={{ width: '130px' }}>
                      {order.isPaymentDone == 1 ? 'Update' : 'Confirm'}
                    </button>
                  </div>
                </form>
              </div>
              {/* end tab 1 */}

              {/* ------------------------------------ */}
              {/* ------------------------------------ */}
              {/* ------------------------------------ */}
              {/* ------------------------------------ */}

              {/* tab 2 - not paid */}
              <div
                className={`tab-pane fade ${
                  !order.isPaymentDone && 'show active'
                }`}
                role="tabpanel"
                id="unpaid-tab">
                <form className="row g-0" onSubmit={handleSubmitCancel}>
                  {/* note */}
                  <div className="col-9 col-xxl-9">
                    <label className="form-label form--label">
                      Note about action
                    </label>
                    <textarea
                      className="form--input form--textarea w-100"
                      value={formDataCancel.paymentNote}
                      onChange={(event) =>
                        setFormDataCancel({ paymentNote: event.target.value })
                      }></textarea>
                  </div>

                  {/* submit */}
                  <div className="col-3 text-end align-self-end">
                    <button
                      className={`btn btn btn--outline-theme btn--outline-danger rounded-1 px-4 mb-1`}
                      type="submit">
                      {order.isPaymentDone == 0 ? 'Update' : 'Confirm'}
                    </button>
                  </div>
                </form>
              </div>
              {/* end tab 2 */}
            </div>
            {/* end tab content */}
          </div>
          {/* end tab wrap */}
        </div>
      </div>
      {/* end row */}

      {/* --------------------------------------------------- */}
      {/* --------------------------------------------------- */}

      {/* only if irl or uk orders  */}
      <div
        className="row g-0 justify-content-center d-none"
        id="payment--global">
        {/* account owner */}
        <div className="col-6">
          <label className="col-form-label text-center form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Account Owner
            </span>
            Aymen Sami Ahmed
          </label>
        </div>

        {/* bill no. */}
        <div className="col-6">
          <label className="col-form-label text-center form--label profile--label scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Bill No.
            </span>
            95014458192
          </label>
        </div>
      </div>
      {/* end row */}
    </div>
    // end wrapper
  );
} // end function
