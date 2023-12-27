'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function ToggleForm({ country }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;
  const initialSkip = useRef(false);

  // ---------------------------------- states ----------------------------------

  // 2: formData state
  const initialState = {
    id: country.id,
    isServiceActive: country.isServiceActive,
    toSDG: country.toSDG,
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

  useEffect(() => {
    const handleSubmit = async () => {
      // 1: update services
      dispatch(IsLoading());
      const response = await fetch(
        `${url}/api/contact/${country.id}/update-service`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            Authorization: token,
          },
          body: JSON.stringify(formData),
        }
      );
      dispatch(IsNotLoading());
    }; // end function

    initialSkip.current ? handleSubmit() : (initialSkip.current = true);
  }, [formData]);

  // ---------------------------------- page ----------------------------------

  return (
    <form id="disable--wrap" className="mb-5">
      {/* hidden button */}
      <button className="d-none" type="submit" id="disable--submit"></button>
      <div className="row g-0 align-items-end">
        {/* stop service */}
        <div className="col-4">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
              name="isServiceActive"
              checked={formData.isServiceActive}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              Activate service in {country.name}
              <br />
            </label>
          </div>
        </div>
        {/* -------------- */}
        {/* currency to sdg */}
        {country.currency != 'SDN' && (
          <div className="col-8">
            <div className="d-flex justify-content-end align-items-center">
              <img
                className="flag--icon"
                src={`/assets/img/Flags/${country.currency}.png`}
              />
              <h6 className="mb-0 ms-2 me-3 fw-bold">1 {country.currency} =</h6>
              <input
                name="toSDG"
                type="number"
                step={0.01}
                min={0}
                required
                className="form--input flag--input text-center fw-bold"
                value={formData.toSDG}
                onChange={handleInputChange}
                onKeyUp={handleInputChange}
              />
              <h6 className="mb-0 ms-3 me-2 fw-bold">SDG</h6>
              <img className="flag--icon" src="/assets/img/Flags/SDN.png" />
            </div>
          </div>
        )}
      </div>
    </form>
  );
} // end function
