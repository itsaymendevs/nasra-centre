'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function NewForm() {
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
    id: '',
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
    document.querySelectorAll('.modal button[type="submit"]')[0].innerText =
      'Loading ..';

    const response = await fetch(`${url}/api/pickup/conditions/store`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    router.refresh();
  };

  // ---------------------------------- page ----------------------------------

  return (
    <form className="form--page mb-5" onSubmit={handleSubmit}>
      <div className="row g-0">
        {/* title / ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Title</label>
          <input
            name="title"
            type="text"
            required
            className="form-control form--input"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-6 mb-4">
          <label className="form-label form--label">Title Ar</label>
          <input
            name="titleAr"
            type="text"
            required
            className="form-control form--input"
            value={formData.titleAr}
            onChange={handleInputChange}
          />
        </div>

        {/* content / ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Content</label>
          <textarea
            className="form-control form--input form--textarea"
            name="content"
            required
            value={formData.content}
            onChange={handleInputChange}></textarea>
        </div>

        <div className="col-6 mb-4">
          <label className="form-label form--label">Content Ar</label>
          <textarea
            className="form-control form--input form--textarea"
            name="contentAr"
            required
            value={formData.contentAr}
            onChange={handleInputChange}></textarea>
        </div>

        {/* submit button */}
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="submit">
            Save item
          </button>
        </div>
        {/* end submit */}
      </div>
    </form>
  );
} // end functinon
