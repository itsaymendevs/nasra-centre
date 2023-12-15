'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleNewTypeModal } from '@/slices/FirstModalSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Select from 'react-select';
import { useCookies } from 'next-client-cookies';

export default function NewPortal({ mainCategories, subCategories }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { newTypeModal } = useSelector((state) => state.FirstModalSlice);

  // 2: formData state
  const initialState = {
    id: '',
    name: '',
    nameAr: '',
    mainCategoryId: null,
    subCategoryId: null,
  };

  // initiate
  const [formData, setFormData] = useState(initialState);

  // 2.1: select states
  const options = [];
  const optionsTwo = [];

  mainCategories.map((mainCategory) =>
    options.push({ value: mainCategory.id, label: mainCategory.name })
  );

  subCategories.map((subCategory) => {
    // 2.1: if there is mainCategory
    formData.mainCategoryId &&
      (formData.mainCategoryId
        ? subCategory.mainCategoryId == formData.mainCategoryId &&
          optionsTwo.push({ value: subCategory.id, label: subCategory.name })
        : optionsTwo.push({ value: subCategory.id, label: subCategory.name }));
  });

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
    const response = await fetch(`${url}/api/inner-types/store`, {
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
    dispatch(toggleNewTypeModal(false));
  };

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {newTypeModal && (
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
                  <h4 className="modal-title fw-bold">New Type</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => {
                      dispatch(toggleNewTypeModal(false));
                      setFormData(initialState);
                    }}
                    aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="row g-0 align-items-center">
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        Main Category
                      </label>
                      <Select
                        className="form--select-container"
                        classNamePrefix="form--select"
                        instanceId="mainCategory"
                        required
                        options={options}
                        onChange={(selectedOption) =>
                          setFormData((state) => ({
                            ...state,
                            mainCategoryId: selectedOption?.value,
                            subCategoryId: null,
                          }))
                        }
                        placeholder={''}
                        isClearable
                      />
                    </div>
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        Sub Category
                      </label>
                      <Select
                        className="form--select-container"
                        classNamePrefix="form--select"
                        instanceId="subCategory"
                        required
                        options={optionsTwo}
                        value={
                          optionsTwo.length > 0 && formData?.subCategoryId
                            ? optionsTwo.find(
                                (option) =>
                                  option.value == formData?.subCategoryId
                              )
                            : ''
                        }
                        onChange={(selectedOption) =>
                          setFormData((state) => ({
                            ...state,
                            subCategoryId: selectedOption?.value,
                          }))
                        }
                        placeholder={''}
                        isClearable
                      />
                    </div>
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
                    onClick={() => {
                      dispatch(toggleNewTypeModal(false));
                      setFormData(initialState);
                    }}>
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
