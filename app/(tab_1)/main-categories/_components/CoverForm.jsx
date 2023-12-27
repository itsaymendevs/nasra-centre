'use client';

import axios from 'axios';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { useDispatch } from 'react-redux';

export default function CoverForm({ category }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = process.env.domainURL;
  const imageURL = `${process.env.domainURL}/storage/categories/`;
  const defaultURL = '/assets/img/Placeholder/image.png';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: formData state
  const initialState = {
    image: category.image ? imageURL + category.image : '',
    imageAr: category.imageAr ? imageURL + category.imageAr : '',
  };
  const uploadInitialState = {
    image: '',
    imageAr: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [uploadData, setUploadData] = useState(uploadInitialState);

  // ---------------------------------- functions ----------------------------------

  // 1.2: handle image change
  const handleImageChange = (event) => {
    if (event.target.files.length !== 0) {
      setUploadData((state) => ({
        ...state,
        [event.target.name]: event.target.files[0]
          ? URL.createObjectURL(event.target.files[0])
          : '',
      }));

      setFormData((state) => ({
        ...state,
        [event.target.name]: event.target.files[0] ? event.target.files[0] : '',
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

    await axios.post(`${url}/api/categories/update`, requestForm, {
      headers: {
        Authorization: token,
      },
    });

    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    router.refresh();
  };

  // ---------------------------------- page ----------------------------------

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-0">
        <div className="col-12 mb-3 mt-5">
          <div className="d-flex align-items-center justify-content-between">
            <label
              className="form-label hr--label"
              style={{ minWidth: '125px' }}>
              Category Pictures
            </label>
            <hr className="w-100 my-0" />
          </div>
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">English Version</label>
          <label className="img--holder for-category" htmlFor="image--input">
            <img
              loading="lazy"
              src={
                uploadData.image
                  ? uploadData.image
                  : formData.image || defaultURL
              }
              id="image--input-holder"
            />
            <input
              name="image"
              type="file"
              id="image--input"
              accept="image/*"
              className="d-none"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Arabic Version</label>
          <label className="img--holder for-category" htmlFor="image--input-2">
            <img
              loading="lazy"
              src={
                uploadData.imageAr
                  ? uploadData.imageAr
                  : formData.imageAr || defaultURL
              }
              id="image--input-holder"
            />
            <input
              name="imageAr"
              type="file"
              id="image--input-2"
              accept="image/*"
              className="d-none"
              onChange={handleImageChange}
            />
          </label>
        </div>
        <div className="col-12 mb-5">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="submit">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
} // end functino
