'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleSortTypeModal } from '@/slices/FirstModalSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Select from 'react-select';

export default function SortPortal({ mainCategories, subCategories }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { sortTypeModal } = useSelector((state) => state.FirstModalSlice);

  // 2: formData state
  const initialState = {
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

  // 2: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.2: hot reload + dispatch
    dispatch(toggleSortTypeModal(false));
    router.push(
      `/inner-types/${formData.mainCategoryId}/${formData.subCategoryId}/sort`
    );
  };

  // ---------------------------------- page ----------------------------------

  return (
    <>
      {sortTypeModal && (
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
                    onClick={() => {
                      dispatch(toggleSortTypeModal(false));
                      setFormData(initialState);
                    }}
                    aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="row g-0 align-items-end">
                    <div className="col-12 mb-4">
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
                    <div className="col-12 mb-4">
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
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() => {
                      dispatch(toggleSortTypeModal(false));
                      setFormData(initialState);
                    }}>
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
