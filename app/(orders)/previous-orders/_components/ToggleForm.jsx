'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

export default function ToggleForm({ countries, generalBlock }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;
  const initialSkip = useRef(false);
  const initialSkipTwo = useRef(false);

  // ---------------------------------- states ----------------------------------
  const SudanOrdering = countries.filter((item) => item.code == 'SD');
  const UKOrdering = countries.filter((item) => item.code == 'UK');
  const IRLOrdering = countries.filter((item) => item.code == 'IRL');

  // 2: formData state
  const initialState = {
    orderingSD: SudanOrdering[0]['isOrderingActive'] == 0 ? true : false,
    orderingUK: UKOrdering[0]['isOrderingActive'] == 0 ? true : false,
    orderingIRL: IRLOrdering[0]['isOrderingActive'] == 0 ? true : false,
    countryId: null,
  };

  const initialStateTwo = {
    stopOrders: generalBlock.stopOrders,
  };

  const [formData, setFormData] = useState(initialState);
  const [formDataTwo, setFormDataTwo] = useState(initialStateTwo);

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]:
        event.target.type == 'checkbox'
          ? event.target.checked
          : event.target.value,
    }));
  }; // end function

  const handleInputChangeTwo = (event) => {
    setFormDataTwo((state) => ({
      ...state,
      [event.target.name]:
        event.target.type == 'checkbox'
          ? event.target.checked
          : event.target.value,
    }));
  }; // end function

  useEffect(() => {
    const handleSubmit = async () => {
      // 1: update ordering
      dispatch(IsLoading());
      const response = await fetch(
        `${url}/api/previousOrders/toggle-ordering`,
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
    }; // end function

    initialSkip.current ? handleSubmit() : (initialSkip.current = true);
  }, [formData]);

  useEffect(() => {
    const handleSubmit = async () => {
      // 2: update global-ordering
      dispatch(IsLoading());
      const response = await fetch(
        `${url}/api/previousOrders/toggle-global-ordering`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(formDataTwo),
        }
      );
      dispatch(IsNotLoading());
    }; // end function

    initialSkipTwo.current ? handleSubmit() : (initialSkipTwo.current = true);
  }, [formDataTwo]);

  // ---------------------------------- page ----------------------------------

  return (
    <div id="disable--wrap" className="mb-5">
      <div className="row g-0 align-items-end">
        {/* toggle boxes */}
        <div className="col-7 align-self-end mb-3">
          {/* title */}
          <label className="form-label form--label">
            - Stop Receiving Orders
          </label>
          <div className="d-flex align-items-center justify-content-start">
            {/* sudan orders */}
            <div className="form-check me-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-5"
                name="orderingSD"
                checked={formData.orderingSD}
                onChange={handleInputChange}
              />
              <label className="form-check-label ms-1" htmlFor="formCheck-5">
                Sudan
                <br />
              </label>
            </div>

            {/* uk orders */}
            <div className="form-check me-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-7"
                name="orderingUK"
                checked={formData.orderingUK}
                onChange={handleInputChange}
              />
              <label className="form-check-label ms-1" htmlFor="formCheck-7">
                United Kingdom
                <br />
              </label>
            </div>

            {/* ireland orders */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="formCheck-6"
                name="orderingIRL"
                checked={formData.orderingIRL}
                onChange={handleInputChange}
              />
              <label className="form-check-label ms-1" htmlFor="formCheck-6">
                Ireland
                <br />
              </label>
            </div>
          </div>
        </div>
        {/* end left column */}

        {/* ------------------------------- */}
        {/* ------------------------------- */}

        {/* export buttons */}
        <div className="col-5 text-end mb-3">
          {/* orders export english */}
          <Link
            className="btn btn--export scale--3 px-4"
            role="button"
            href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-box-arrow-up-left me-2">
              <path
                fillRule="evenodd"
                d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"></path>
              <path
                fillRule="evenodd"
                d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"></path>
            </svg>
            Excel
          </Link>

          {/* orders export arabic */}
          <Link
            className="btn btn--export scale--3 px-4 ms-2"
            role="button"
            href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-box-arrow-up-left me-2">
              <path
                fillRule="evenodd"
                d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"></path>
              <path
                fillRule="evenodd"
                d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"></path>
            </svg>
            Excel Ar
          </Link>
        </div>
        {/* end right column */}

        {/* --------------------------------- */}
        {/* --------------------------------- */}

        {/* stop global receiving orders */}
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-4"
              name="stopOrders"
              checked={formDataTwo.stopOrders}
              onChange={handleInputChangeTwo}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-4">
              Stop receiving orders globally
              <br />
            </label>
          </div>
        </div>
        {/* end column */}
      </div>
    </div>
  );
} // end function
