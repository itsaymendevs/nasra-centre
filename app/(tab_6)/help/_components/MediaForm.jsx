'use client';

import React, { useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function MediaForm({ media }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------
  // 1: formData state
  const initialState = {
    websiteURL: media.websiteURL || '',
    facebookID: media.facebookID || '',
    facebookURL: media.facebookURL || '',
    linkedinID: media.linkedinID || '',
    linkedinURL: media.linkedinURL || '',
    twitterID: media.twitterID || '',
    twitterURL: media.twitterURL || '',
    instagramID: media.instagramID || '',
    instagramURL: media.instagramURL || '',
    videoTitle: media.videoTitle || '',
    videoTitleAr: media.videoTitleAr || '',
    videoURL: media.videoURL || '',
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
    const response = await fetch(`${url}/api/help/media/update`, {
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
    <form className="form--page" onSubmit={handleSubmit}>
      <div className="row g-0">
        {/* title */}
        <div className="col-12 mb-3">
          <div className="d-flex align-items-center justify-content-between">
            <label className="form-label hr--label">Media Info</label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* website url */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Website URL</label>
          <input
            name="websiteURL"
            type="text"
            className="form--input"
            value={formData.websiteURL}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-3 mb-4"></div>

        {/* facebook */}
        <div className="col-3 mb-4"></div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Facebook Profile ID</label>
          <input
            name="facebookID"
            type="text"
            className="form--input"
            value={formData.facebookID}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Facebook URL</label>
          <input
            name="facebookURL"
            type="text"
            className="form--input"
            value={formData.facebookURL}
            onChange={handleInputChange}
          />
        </div>

        {/* linkedIn */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">LinkedIn Profile ID</label>
          <input
            name="linkedinID"
            type="text"
            className="form--input"
            value={formData.linkedinID}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">LinkedIn URL</label>
          <input
            name="linkedinURL"
            type="text"
            className="form--input"
            value={formData.linkedinURL}
            onChange={handleInputChange}
          />
        </div>

        {/* twitter */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Twitter Profile ID</label>
          <input
            name="twitterID"
            type="text"
            className="form--input"
            value={formData.twitterID}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Twitter URL</label>
          <input
            name="twitterURL"
            type="text"
            className="form--input"
            value={formData.twitterURL}
            onChange={handleInputChange}
          />
        </div>

        {/* insta */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Instagram Profile ID</label>
          <input
            name="instagramID"
            type="text"
            className="form--input"
            value={formData.instagramID}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Instagram&nbsp; URL</label>
          <input
            name="instagramURL"
            type="text"
            className="form--input"
            value={formData.instagramURL}
            onChange={handleInputChange}
          />
        </div>

        {/* video title / ar */}
        <div className="col-12 mb-5">
          <hr className="visually-hidden" />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Application Video Title
          </label>
          <input
            name="videoTitle"
            type="text"
            className="form--input"
            value={formData.videoTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">
            Application Video Title Ar
          </label>
          <input
            name="videoTitleAr"
            type="text"
            className="form--input"
            value={formData.videoTitleAr}
            onChange={handleInputChange}
          />
        </div>

        {/* youtube url */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Youtube Video URL</label>
          <input
            name="videoURL"
            type="text"
            className="form--input"
            value={formData.videoURL}
            onChange={handleInputChange}
          />
        </div>

        {/* submit */}
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="submit">
            Save Information
          </button>
        </div>
      </div>
    </form>
  );
} // end function
