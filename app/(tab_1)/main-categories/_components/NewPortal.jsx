'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleNewMainCategoryModal } from '@/slices/FirstModalSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';

export default function NewPortal() {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { newMainCategoryModal } = useSelector(
    (state) => state.FirstModalSlice
  );

  // 2: formData state
  const initialState = { id: '', name: '', nameAr: '', image: '' };
  const uploadInitialState = {
    firstImage: '',
  };

  const [formData, setFormData] = useState(initialState);
  const [uploadData, setUploadData] = useState(uploadInitialState);

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }; // end function

  // 3.1: handle image change
  const handleImageChange = (event) => {
    setUploadData((state) => ({
      ...state,
      firstImage: URL.createObjectURL(event.target.files[0]),
    }));
  }; // end function

  // 2: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.1: insert new item
    document.querySelectorAll('.modal button[type="submit"]')[0].innerText =
      'Loading ..';

    const response = await fetch(`${url}/api/main-categories/store`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    setUploadData(uploadInitialState);
    router.refresh();
    dispatch(toggleNewMainCategoryModal(false));
  };

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {newMainCategoryModal && (
        <GlobalPortal>
          {/* modal */}
          <form
            onSubmit={handleSubmit}
            className="modal fade show"
            role="dialog"
            tabIndex="-1"
            aria-modal="true"
            style={{
              display: 'block',
              paddingRight: '8px',
              backgroundColor: '#1111118a',
            }}
            id="add-modal">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header modal--header">
                  <h4 className="modal-title fw-bold">New Main-Category</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => dispatch(toggleNewMainCategoryModal(false))}
                    aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <div className="row g-0 align-items-end">
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        Cover Picture
                      </label>
                      <label className="img--holder" htmlFor="image--input">
                        <img
                          src={
                            uploadData.firstImage
                              ? uploadData.firstImage
                              : '/assets/img/Placeholder/image.png'
                          }
                          loading="lazy"
                          id="image--input-holder"
                        />
                        <input
                          type="file"
                          required
                          name="image"
                          id="image--input"
                          accept="image/*"
                          className="d-none"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="form--input mb-4"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
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
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() => dispatch(toggleNewMainCategoryModal(false))}>
                    Close
                  </button>
                  <button
                    className="btn btn--theme btn--sm px-5 rounded-1"
                    type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* end modal */}
        </GlobalPortal>
      )}
    </>
  );
} // end function
