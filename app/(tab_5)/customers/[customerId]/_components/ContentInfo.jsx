'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';
import Link from 'next/link';

export default function ContentInfo({ user, countries }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;
  const initialSkip = useRef(false);

  // ---------------------------------- states ----------------------------------

  // 2: formData state
  const initialState = {
    isActive: user.isActive == 1 ? 0 : 1,
  };

  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event) => {
    console.log(event.target.checked);
    setFormData((state) => ({
      ...state,
      [event.target.name]:
        event.target.type == 'checkbox'
          ? event.target.checked
          : event.target.value,
    }));
  }; // end function

  useEffect(() => {
    const handleSubmit = async () => {
      // 1: update services
      dispatch(IsLoading());
      const response = await fetch(
        `${url}/api/users/${user.id}/toggle-active`,
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

  // ---------------------------------- page ----------------------------------

  return (
    <div id="information--row" className="mb-5">
      <div className="row g-0 align-items-start">
        {/* full name */}
        <div className="col-4 mb-4 ">
          <label className="col-form-label form--label profile--label in-start scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Customer
            </span>
            <Link
              className="text-decoration-none text-primary"
              href={`/customers/${user.id}`}>
              {user.firstName + ' ' + user.lastName}
            </Link>
          </label>
        </div>

        {/* phone / alternative */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label in-start scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Phone
            </span>
            {user.phone.replace('249', '0')}
            {user.phoneAlt && ` / ${user.phoneAlt.replace('249', '0')}`}
          </label>
        </div>

        {/* deactivate account */}
        <div className="col-4 mb-4 align-self-end">
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
              name="isActive"
              checked={formData.isActive}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Deactivate Account
            </label>
          </div>
        </div>

        {/* postcode - uk */}
        {user.country.code == 'UK' && (
          <div className="col-4 mb-4 ire--info">
            <label className="col-form-label form--label profile--label in-start scale--3 me-3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                Postcode
              </span>
              {user.postcode || 'Unavailable'}
            </label>
          </div>
        )}

        {/* eircode - ire */}
        {user.country.code == 'IRL' && (
          <div className="col-4 mb-4 ire--info">
            <label className="col-form-label form--label profile--label in-start scale--3 me-3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                Eircode
              </span>
              {user.eircode || 'Unavailable'}
            </label>
          </div>
        )}

        {/* email */}
        <div className="col-4 mb-4">
          <label className="col-form-label form--label profile--label in-start scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Email Address
            </span>
            {user.email}
          </label>
        </div>

        {/* country - state */}
        <div className="col-4 align-self-end mb-4">
          <label className="col-form-label form--label profile--label in-start scale--3 me-3">
            <span
              className="fw-600 profile--span-title one-line"
              style={{ lineHeight: 'initial' }}>
              Country
            </span>
            {user.country.name} {user.state?.name && `/ ${user.state.name}`}
          </label>
        </div>

        {/* deliveryArea - region */}
        {user.country.code == 'SD' && (
          <div className="col-4 align-self-end mb-4">
            <label className="col-form-label form--label profile--label in-start scale--3 me-3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                Region
              </span>
              {user.delivery_area.name}
            </label>
          </div>
        )}

        {/* address */}
        {user.country.code == 'SD' && (
          <div className="col-12 mb-4">
            <label className="col-form-label form--label profile--label in-start scale--3 me-3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                Rough Location
              </span>
              {user.address}
            </label>
          </div>
        )}

        {/* address fl - uk ire */}
        {user.country.code != 'SD' && (
          <div className="col-6 mb-4 ire--info uk--info">
            <label className="col-form-label form--label profile--label in-start scale--3 me-3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                Address First Line
              </span>
              {user.firstAddressLine || 'Unavailable'}
            </label>
          </div>
        )}

        {/* address sl - uk ire */}
        {user.country.code != 'SD' && (
          <div className="col-6 mb-4 ire--info uk--info">
            <label className="col-form-label form--label profile--label in-start scale--3 me-3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                Address Second Line
              </span>
              {user.secAddressLine || 'Unavailable'}
            </label>
          </div>
        )}

        {/* address tl - uk */}
        {user.country.code == 'UK' && (
          <div className="col-6 mb-4 uk--info">
            <label className="col-form-label form--label profile--label in-start scale--3 me-3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                Address Third Line
              </span>
              {user.thirdAddressLine || 'Unavailable'}
            </label>
          </div>
        )}

        {/* post town - ire */}
        {user.country.code == 'IRL' && (
          <div className="col-6 mb-4 ire--info">
            <label className="col-form-label form--label profile--label in-start scale--3 me-3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                Post Town
              </span>
              {user.postTown || 'Unavailable'}
            </label>
          </div>
        )}

        {/* county - ire */}
        {user.country.code == 'IRL' && (
          <div className="col-6 mb-4 ire--info">
            <label className="col-form-label form--label profile--label in-start scale--3 me-3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                County
              </span>
              {user.county || 'Unavailable'}
            </label>
          </div>
        )}

        {/* Town City - uk */}
        {user.country.code == 'UK' && (
          <div className="col-6 mb-4 uk--info">
            <label className="col-form-label form--label profile--label in-start scale--3 me-3">
              <span
                className="fw-600 profile--span-title one-line"
                style={{ lineHeight: 'initial' }}>
                Town City
              </span>
              {user.townCity || 'Unavailable'}
            </label>
          </div>
        )}

        {/* -------------------------------- */}

        <div className="col-12 mb-4"></div>

        {/* total orders */}
        <div className="col-2 text-center mb-4">
          <label className="form-label form--label profile--label  scale--3">
            Total Orders
          </label>
          <h4 className="mt-2 mb-0 fw-bold">0</h4>
        </div>

        {/* completed */}
        <div className="col-2 offset-1 text-center mb-4">
          <label className="form-label form--label profile--label justify-content-center scale--3">
            Completed
          </label>
          <h4 className="mt-2 mb-0 fw-bold text-theme">0</h4>
        </div>

        {/* canceled */}
        <div className="col-2 text-center mb-4">
          <label className="form-label form--label profile--label justify-content-center scale--3">
            Canceled
          </label>
          <h4 className="mt-2 mb-0 fw-bold text-danger">0</h4>
        </div>

        {/* processing */}
        <div className="col-2 text-center mb-4">
          <label className="form-label form--label profile--label justify-content-center scale--3">
            Processing
          </label>
          <h4 className="mt-2 mb-0 fw-bold">0</h4>
        </div>

        {/* pending */}
        <div className="col-2 text-center mb-4">
          <label className="form-label form--label profile--label justify-content-center scale--3">
            Pending
          </label>
          <h4 className="mt-2 mb-0 fw-bold">0</h4>
        </div>
      </div>
    </div>
  );
} // end function
