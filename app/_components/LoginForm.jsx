'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';

// ----------------------------------------------------------------------------------------------------

export default function LoginForm() {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const cookies = useCookies();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';

  // ------------------------States---------------------

  const [formData, setFormData] = useState({
    name: '',
    password: '',
    isIncorrect: false,
  });

  // ------------------------Functions-------------------

  // 1: handle input change
  const handleInputs = (e) => {
    setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  // 2: handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1: check info
    const response = await fetch(`${url}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    // 2.2: check if there is token / or incorrect
    if (data?.token) {
      // set cookies + change state + redirect
      setFormData((state) => ({ ...state, isIncorrect: false }));
      cookies.set('token', data.token);
      router.push('/products');
    } else {
      setFormData((state) => ({ ...state, isIncorrect: true }));
    } // end if
  };

  // ------------------------Page------------------------

  return (
    <form
      className="row justify-content-center align-items-center"
      onSubmit={handleSubmit}>
      {/* heading */}
      <div className="col-12 mb-5">
        <h1
          className="display-5 text-center font--cour mb-0"
          data-aos="fade-down"
          data-aos-duration="600"
          data-aos-delay="150">
          Nasra Centre - Login
        </h1>
        <div className="d-flex align-items-center justify-content-center text-center">
          <hr className="login--hr" />
          <hr className="login--hr" />
          <hr className="login--hr" />
          <hr className="login--hr" />
          <hr className="login--hr" />
          <hr className="login--hr" />
          <hr className="login--hr black" />
          <hr className="login--hr black" />
          <hr className="login--hr black" />
        </div>
      </div>
      {/* end heading */}

      {/* name / password input */}
      <div
        className="col-5 col-xxl-4"
        data-aos="fade-right"
        data-aos-duration="600"
        data-aos-delay="150">
        {/* name */}
        <label className="form-label form--label">Employee Name</label>
        <input
          type="text"
          className="form--input mb-4"
          name="name"
          required
          value={formData.name}
          onChange={handleInputs}
        />

        {/* password */}
        <label className="form-label form--label">Password</label>
        <input
          type="password"
          className="form--input"
          name="password"
          required
          value={formData.password}
          onChange={handleInputs}
        />

        {/* error handling */}
        {formData.isIncorrect && (
          <p
            className="mt-3 fs-12 text-danger d-flex align-baseline justify-content-center"
            style={{ width: '90%' }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-exclamation-circle-fill error--icon me-2">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path>
            </svg>
            Incorrect Username or Password
          </p>
        )}

        {/* submit button */}
        <div className="text-center d-block mt-4" style={{ width: '90%' }}>
          <button
            className="btn btn--theme btn--submit btn--sm rounded-1"
            type="submit">
            Log in
          </button>
        </div>
      </div>
      {/* end col */}

      {/* logo cover */}
      <div className="col-5 col-xxl-4">
        <img
          data-aos="fade-left"
          data-aos-duration="600"
          data-aos-delay="150"
          className="w-100 of-contain"
          src="assets/img/Logo/logo.png"
          style={{ height: '230px' }}
        />
      </div>
      {/* end col */}
    </form>
    // end form / row
  ); // end return
} // end function
