'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useDispatch } from 'react-redux';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import axios from 'axios';

export default function NewForm() {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url / cookies
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const imageURL = 'http://127.0.0.1:8000/storage/pickups/';
  const defaultURL = '/assets/img/Placeholder/image.png';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: formData state
  const initialState = {
    title: '',
    titleAr: '',
    desc: '',
    descAr: '',
    receivingTimes: '',
    receivingTimesAr: '',
    latitude: '',
    longitude: '',
    isMainStore: 0,
    isActive: 0,
    image: '',
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

    await axios.post(`${url}/api/pickup/store`, requestForm, {
      headers: {
        Authorization: token,
      },
    });

    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    setUploadData(uploadInitialState);
  };

  // ---------------------------------- page ----------------------------------

  return (
    <form className="form--page mb-5" onSubmit={handleSubmit}>
      <div className="row g-0">
        {/* name */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name</label>
          <input
            name="title"
            type="text"
            required
            className="form-control form--input"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        {/* name ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name Ar</label>
          <input
            name="titleAr"
            type="text"
            required
            className="form-control form--input"
            value={formData.titleAr}
            onChange={handleInputChange}
          />
        </div>

        {/* desc */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Description</label>
          <textarea
            className="form-control form--input form--textarea"
            name="desc"
            required
            value={formData.desc}
            onChange={handleInputChange}></textarea>
        </div>

        {/* desc ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Description Ar</label>
          <textarea
            className="form-control form--input form--textarea"
            name="descAr"
            required
            value={formData.descAr}
            onChange={handleInputChange}></textarea>
        </div>

        {/* receiving times  */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Order Receiving Times
            <br />
          </label>
          <textarea
            className="form-control form--input form--textarea"
            name="receivingTimes"
            required
            value={formData.receivingTimes}
            onChange={handleInputChange}></textarea>
        </div>

        {/* receiving times ar  */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Order Receiving Times Ar
            <br />
          </label>
          <textarea
            className="form-control form--input form--textarea"
            name="receivingTimesAr"
            required
            value={formData.receivingTimesAr}
            onChange={handleInputChange}></textarea>
        </div>

        {/* latitude / longitude */}
        <div className="col-3 mb-4">
          <label className="form-label form--label">Latitude</label>
          <input
            name="latitude"
            type="text"
            required
            className="form-control form--input"
            value={formData.latitude}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-3 mb-4">
          <label className="form-label form--label">Longitude</label>
          <input
            name="longitude"
            type="text"
            required
            className="form-control form--input"
            value={formData.longitude}
            onChange={handleInputChange}
          />
        </div>

        {/* main store / stop receiving orders */}
        <div className="col-6 align-self-end mb-4">
          {/* main store */}
          <div className="form-check mb-2">
            <input
              name="isMainStore"
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
              checked={formData.isMainStore}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Main store
            </label>
          </div>

          {/* stop receiving */}
          <div className="form-check">
            <input
              name="isActive"
              className="form-check-input"
              type="checkbox"
              id="formCheck-2"
              checked={formData.isActive}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-2">
              Stop receiving orders
            </label>
          </div>
        </div>

        {/* picture */}
        <div className="col-6 align-self-end mb-4 mt-4">
          <label className="form-label form--label">Store Picture</label>
          <label className="img--holder for-store" htmlFor="image--input">
            <img
              loading="lazy"
              src={
                uploadData.imagePreview ? uploadData.imagePreview : defaultURL
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
        </div>

        {/* submit */}
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="submit">
            Save item
          </button>
        </div>
      </div>
    </form>
  );
} // end function
