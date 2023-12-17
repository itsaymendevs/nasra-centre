'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function TermForm({ country }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------
  // 1: formData state
  const initialState = {
    title: '',
    titleAr: '',
    content: '',
    contentAr: '',
  };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }; // end function

  // 2: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.1: insert new item
    dispatch(IsLoading());
    const response = await fetch(
      `${url}/api/contact/${country.id}/terms/store`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(formData),
      }
    );
    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    router.refresh();
  };

  // ---------------------------------- page ----------------------------------

  return (
    <form className="form--page mb-5" onSubmit={handleSubmit}>
      <div className="row g-0">
        <div className="col-12 mb-3 mt-5">
          <div className="d-flex align-items-center justify-content-between mt-5">
            <label
              className="form-label hr--label"
              style={{ minWidth: '145px' }}>
              Terms &amp; Conditions
            </label>
            <hr className="w-100 my-0" />
          </div>
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Title</label>
          <input
            name="title"
            className="form-control form--input"
            type="text"
            required
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Title Ar</label>
          <input
            name="titleAr"
            className="form-control form--input"
            type="text"
            required
            value={formData.titleAr}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Content</label>
          <textarea
            name="content"
            className="form-control form--input form--textarea"
            value={formData.content}
            required
            onChange={handleInputChange}></textarea>
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Content Ar</label>
          <textarea
            name="contentAr"
            className="form-control form--input form--textarea"
            value={formData.contentAr}
            required
            onChange={handleInputChange}></textarea>
        </div>
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
