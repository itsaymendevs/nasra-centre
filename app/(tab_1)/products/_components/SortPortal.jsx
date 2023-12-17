'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleSortProductModal } from '@/slices/FirstModalSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';

export default function SortPortal({ mainCategories, subCategories, types }) {
  // ::root
  const options = [];
  const optionsTwo = [];
  const optionsThree = [];

  const optionsTypes = [
    { value: 'Main Page', label: 'Main Page' },
    { value: 'Category', label: 'Category' },
  ];

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
    sortType: null,
    mainCategoryId: null,
    subCategoryId: null,
    typeId: null,
  };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- dispatch ----------------------------------

  const { sortProductModal } = useSelector((state) => state.FirstModalSlice);

  // ---------------------------------- options ----------------------------------

  mainCategories.map((item) =>
    options.push({ value: item.id, label: item.name })
  );

  subCategories.map((subCategory) => {
    // 2.1: if there is mainCategory
    formData.mainCategoryId &&
      (formData.mainCategoryId
        ? subCategory.mainCategoryId == formData.mainCategoryId &&
          optionsTwo.push({ value: subCategory.id, label: subCategory.name })
        : optionsTwo.push({ value: subCategory.id, label: subCategory.name }));
  });

  types.map((type) => {
    // 2.1: if there is subCategory
    formData.subCategoryId &&
      (formData.subCategoryId
        ? type.subCategoryId == formData.subCategoryId &&
          optionsThree.push({ value: type.id, label: type.name })
        : optionsThree.push({ value: type.id, label: type.name }));
  });

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

  // 2: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log(formData);

    // 4.2: redirect
    if (formData.sortType == 'Category') {
      router.push(`/products/sort/${formData.typeId}`);
    }
  };

  // ---------------------------------- page ----------------------------------

  return (
    <>
      {sortProductModal && (
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
            id="sort-modal">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header modal--header">
                  <h4 className="modal-title fw-bold">Sorting</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => dispatch(toggleSortProductModal(false))}
                    aria-label="Close"></button>
                </div>

                {/* body */}
                <div className="modal-body">
                  <div className="row g-0 align-items-end">
                    <div className="col-6 mb-5">
                      <label className="form-label form--label">
                        Sorting Target
                      </label>
                      <Select
                        className="form--select-container"
                        classNamePrefix="form--select"
                        instanceId="target"
                        required
                        options={optionsTypes}
                        value={
                          formData.sortType
                            ? options.find(
                                (option) => option.value == formData?.sortType
                              )
                            : ''
                        }
                        onChange={(selectedOption) =>
                          setFormData((state) => ({
                            ...state,
                            sortType: selectedOption?.value,
                          }))
                        }
                        placeholder={''}
                        isClearable
                      />
                    </div>
                    <div className="col-6 mb-5"></div>

                    {formData.sortType == 'Category' && (
                      <>
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
                            value={
                              formData.mainCategoryId
                                ? options.find(
                                    (option) =>
                                      option.value == formData?.mainCategoryId
                                  )
                                : ''
                            }
                            onChange={(selectedOption) =>
                              setFormData((state) => ({
                                ...state,
                                mainCategoryId: selectedOption?.value,
                                subCategoryId: null,
                                typeId: null,
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
                              formData.subCategoryId
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
                                typeId: null,
                              }))
                            }
                            placeholder={''}
                            isClearable
                          />
                        </div>
                        <div className="col-6 mb-4">
                          <label className="form-label form--label">
                            Inner-Types
                          </label>
                          <Select
                            className="form--select-container"
                            classNamePrefix="form--select"
                            instanceId="type"
                            required
                            options={optionsThree}
                            value={
                              formData.typeId
                                ? optionsThree.find(
                                    (option) => option.value == formData?.typeId
                                  )
                                : ''
                            }
                            onChange={(selectedOption) =>
                              setFormData((state) => ({
                                ...state,
                                typeId: selectedOption?.value,
                              }))
                            }
                            placeholder={''}
                            isClearable
                          />
                        </div>
                      </>
                    )}
                  </div>
                </div>
                {/* end body */}

                <div className="modal-footer">
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() => dispatch(toggleSortProductModal(false))}>
                    Close
                  </button>
                  <button
                    className="btn btn--theme btn--sm px-5 rounded-1"
                    type="submit">
                    Sort
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
