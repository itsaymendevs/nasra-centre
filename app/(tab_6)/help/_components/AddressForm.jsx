'use client';

import React, { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function AddressForm({ address }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------
  // 1: formData state
  const initialState = {
    address: address.address || '',
    latitude: address.latitude || '',
    longitude: address.longitude || '',
    image: address.image || '',
    isHidden: address.isHidden,
  };
  const [formData, setFormData] = useState(initialState);

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

  // 2: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.1: insert new item
    dispatch(IsLoading());
    const response = await fetch(`${url}/api/help/address/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });
    dispatch(IsNotLoading());
  };

  // ---------------------------------- page ----------------------------------

  return (
    <form className="mb-5" onSubmit={handleSubmit}>
      <div className="row g-0">
        {/* title */}
        <div className="col-12 mb-3 mt-5">
          <div className="d-flex align-items-center justify-content-between mt-5">
            <label
              className="form-label hr--label"
              style={{ minWidth: '150px' }}>
              Nasra Global Address
            </label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* picture */}
        <div className="col-6 mb-5">
          <label className="form-label form--label">Picture</label>
          <div className="img--holder for-store">
            <img loading="lazy" src="/assets/img/Logo/logo.png" />
          </div>

          {/* hide from app */}
          <div className="form-check mt-4">
            <input
              id="isHiddenCheckbox"
              name="isHidden"
              className="form-check-input"
              type="checkbox"
              checked={formData.isHidden == true}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="isHiddenCheckbox">
              Hide global address from app
            </label>
          </div>
        </div>

        {/* address : latitude + longitude */}
        <div className="col-6 mb-4">
          <div className="row g-0">
            <div className="col-12 mb-4">
              <label className="form-label form--label">Address</label>
              <textarea
                name="address"
                className="form-control form--input form--textarea"
                style={{ width: '95%' }}
                value={formData.address}
                onChange={handleInputChange}></textarea>
            </div>
            <div className="col-6 mb-4">
              <label className="form-label form--label">Latitude</label>
              <input
                name="latitude"
                className="form-control form--input"
                type="text"
                value={formData.latitude}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-6 mb-4">
              <label className="form-label form--label">Longitude</label>
              <input
                name="longitude"
                className="form-control form--input"
                type="text"
                value={formData.longitude}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        {/* submit */}
        <div className="col-12 text-end">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="submit"
            style={{ marginRight: '2%' }}>
            Save item
          </button>
        </div>
      </div>
    </form>
  );
} // end function
