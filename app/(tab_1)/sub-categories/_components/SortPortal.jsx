'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleSortSubCategoryModal } from '@/slices/FirstModalSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { useRouter } from 'next/navigation';

export default function SortPortal({ mainCategories }) {
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

  // ---------------------------------- states ----------------------------------

  // 2: modal states
  const { sortSubCategoryModal } = useSelector(
    (state) => state.FirstModalSlice
  );

  // 2.1: select states
  const mainCategorySelectedOption = null;
  const [mainCategorySelectedOptionState, setMainCategorySelectedOptionState] =
    useState(mainCategorySelectedOption);

  // ---------------------------------- functions ----------------------------------

  // 2: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // close modal
    dispatch(toggleSortSubCategoryModal(false));

    router.push(
      `/sub-categories/${mainCategorySelectedOptionState.value}/sort`
    );
  };
  // ---------------------------------- page ----------------------------------
  return (
    <>
      {sortSubCategoryModal && (
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
                    onClick={() => dispatch(toggleSortSubCategoryModal(false))}
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
                        instanceId="mainCategoryId"
                        name="mainCategoryId"
                        required
                        value={mainCategorySelectedOptionState}
                        options={options}
                        onChange={(selectedOption) => {
                          setMainCategorySelectedOptionState(selectedOption);
                        }}
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
                    onClick={() => dispatch(toggleSortSubCategoryModal(false))}>
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
