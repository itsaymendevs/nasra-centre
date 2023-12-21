'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function ContentToggles({ totalRows, stopPickup }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;
  const initialSkip = useRef(false);

  // ---------------------------------- states ----------------------------------

  // 2: formData state
  const initialState = {
    stopPickup: stopPickup,
  };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

  // 1: handle submit

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

  useEffect(() => {
    const handleSubmit = async () => {
      // 1: update services
      dispatch(IsLoading());
      const response = await fetch(`${url}/api/pickup/toggle-receiving`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify(formData),
      });
      dispatch(IsNotLoading());
    }; // end function

    initialSkip.current ? handleSubmit() : (initialSkip.current = true);
  }, [formData]);

  // ---------------------------------- page ----------------------------------

  return (
    <div id="disable--wrap" className="mb-5">
      <div className="row g-0 align-items-end">
        <div className="col-8">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
              name="stopPickup"
              checked={formData.stopPickup}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Stop receiving for all stores
              <br />
            </label>
          </div>
        </div>

        {/* total of products */}
        <div className="col-4">
          <h3
            className="text-end mb-0 fw-bold text-decoration-underline text-theme"
            style={{ marginRight: '5%' }}>
            {totalRows}
          </h3>
        </div>
      </div>
    </div>
  );
} // end function
