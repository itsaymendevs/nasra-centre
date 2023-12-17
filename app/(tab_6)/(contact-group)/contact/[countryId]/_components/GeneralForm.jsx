'use client';

import React, { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function GeneralForm({ country, contact }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------
  // 1: formData state
  const initialState = {
    email: contact.email || '',
    whatsapp: contact.whatsapp || '',
    whatsappURL: contact.whatsappURL || '',
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
    const response = await fetch(`${url}/api/contact/${country.id}/update`, {
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
    <form className="form--page mb-5" onSubmit={handleSubmit}>
      <div className="row g-0">
        <div className="col-8 mb-4">
          <label className="form-label form--label">Email Address</label>
          <input
            name="email"
            className="form-control form--input"
            type="email"
            style={{ width: '95%' }}
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-4 mb-4"></div>
        <div className="col-4 mb-4">
          <label className="form-label form--label">Whatsapp</label>
          <input
            name="whatsapp"
            className="form-control form--input"
            type="text"
            value={formData.whatsapp}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-4 mb-4">
          <label className="form-label form--label">Whatsapp URL</label>
          <input
            name="whatsappURL"
            className="form-control form--input"
            type="text"
            value={formData.whatsappURL}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-4 align-self-end mb-4">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="submit">
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
} // end function
