'use client';

import React, { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';

export default function AddressForm({ address }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const url = process.env.domainURL;
  const imageURL = `${process.env.domainURL}/storage/interAddress/`;
  const defaultURL = '/assets/img/Placeholder/image.png';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------
  // 1: formData state
  const initialState = {
    address: address.address || '',
    latitude: address.latitude || '',
    longitude: address.longitude || '',
    image: address.image ? imageURL + address.image : '',
    isHidden: address.isHidden,
  };

  const uploadInitialState = {
    imagePreview: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [uploadData, setUploadData] = useState(uploadInitialState);

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

  // 1.2: handle image change
  const handleImageChange = (event) => {
    if (event.target.files.length !== 0) {
      setUploadData((state) => ({
        ...state,
        imagePreview: URL.createObjectURL(event.target.files[0]),
      }));

      setFormData((state) => ({
        ...state,
        image: event.target.files[0],
      }));
    } // end if
  }; // end function

  // 2: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.1: insert new item
    dispatch(IsLoading());

    // 4.2: axios - send data
    const requestForm = new FormData();

    for (const [key, value] of Object.entries(formData))
      requestForm.append(key, value);

    await axios.post(`${url}/api/help/address/update`, requestForm, {
      headers: {
        Authorization: token,
      },
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
          <label className="img--holder for-store" htmlFor="image--input">
            <img
              loading="lazy"
              src={
                uploadData.imagePreview
                  ? uploadData.imagePreview
                  : formData.image || defaultURL
              }
              id="image--input-holder"
            />

            <input
              type="file"
              name="image"
              id="image--input"
              accept="image/*"
              required
              className="d-none"
              onChange={handleImageChange}
            />
          </label>

          {/* hide from app */}
          <div className="form-check mt-4">
            <input
              id="isHiddenCheckbox"
              name="isHidden"
              className="form-check-input"
              type="checkbox"
              checked={formData.isHidden}
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
