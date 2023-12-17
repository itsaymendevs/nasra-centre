'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleNewSubCategoryModal } from '@/slices/FirstModalSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Select from 'react-select';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';

export default function NewPortal({ mainCategories }) {
  // ::root
  const options = [];
  mainCategories.map((mainCategory) =>
    options.push({ value: mainCategory.id, label: mainCategory.name })
  );

  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { newSubCategoryModal } = useSelector((state) => state.FirstModalSlice);

  // 2: formData state
  const initialState = { id: '', name: '', nameAr: '', mainCategoryId: '' };

  // 2.1: select states
  const mainCategorySelectedOption = null;

  // initiate
  const [formData, setFormData] = useState(initialState);

  const [mainCategorySelectedOptionState, setMainCategorySelectedOptionState] =
    useState(mainCategorySelectedOption);

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

    const response = await fetch(`${url}/api/sub-categories/store`, {
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
    dispatch(toggleNewSubCategoryModal(false));
  };

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {newSubCategoryModal && (
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
                  <h4 className="modal-title fw-bold">New Sub-Category</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => dispatch(toggleNewSubCategoryModal(false))}
                    aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <div className="row g-0 align-items-end">
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        Main Category
                      </label>
                      <Select
                        className="form--select-container"
                        classNamePrefix="form--select"
                        instanceId="mainCategoryId"
                        name="mainCategoryId"
                        required
                        options={options}
                        value={
                          formData.mainCategoryId
                            ? options.find(
                                (option) =>
                                  option.value == formData?.mainCategoryId
                              )
                            : ''
                        }
                        onChange={(selectedOption) => {
                          setMainCategorySelectedOptionState(selectedOption);
                          setFormData((state) => ({
                            ...state,
                            mainCategoryId: selectedOption?.value,
                          }));
                        }}
                        placeholder={''}
                        isClearable
                      />
                    </div>
                    <div className="col-6 mb-4"></div>
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
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() => dispatch(toggleNewSubCategoryModal(false))}>
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
