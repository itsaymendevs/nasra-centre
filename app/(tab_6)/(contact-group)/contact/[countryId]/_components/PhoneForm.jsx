'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useCookies } from 'next-client-cookies';

export default function PhoneForm({ country }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------
  // 1: formData state
  const initialState = {
    phone: '',
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
    const response = await fetch(
      `${url}/api/contact/${country.id}/phones/store`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(formData),
      }
    );

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    router.refresh();
  };

  // ------------------------Page-----------------------

  return (
    <form className="form--page mb-5" onSubmit={handleSubmit}>
      <div className="row g-0">
        <div className="col-6 mb-4">
          <label className="form-label form--label">Phone Number</label>
          <input
            name="phone"
            className="form-control form--input"
            type="text"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 align-self-end mb-4">
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
