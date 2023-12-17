'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function NewForm() {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url / cookies
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: formData state
  const initialState = {
    id: '',
    name: '',
    nameAr: '',
    permission: 'Low',
    password: '',
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

    const response = await fetch(`${url}/api/employees/store`, {
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
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name</label>
          <input
            name="name"
            type="text"
            required
            className="form--input"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name Ar</label>
          <input
            name="nameAr"
            type="text"
            required
            className="form--input"
            value={formData.nameAr}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Password</label>
          <input
            name="password"
            type="password"
            required
            className="form--input"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 align-self-end mb-4">
          <div className="form-check mb-2">
            <input
              id="formCheck-1"
              name="permission"
              type="radio"
              className="form-check-input"
              checked={formData.permission == 'Low'}
              value="Low"
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Low Permission
            </label>
          </div>
          <div className="form-check">
            <input
              id="formCheck-2"
              name="permission"
              type="radio"
              checked={formData.permission == 'High'}
              className="form-check-input"
              value="High"
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-2">
              High Permission
            </label>
          </div>
        </div>
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="submit">
            Save Employee
          </button>
        </div>
      </div>
    </form>
  );
} // end function
