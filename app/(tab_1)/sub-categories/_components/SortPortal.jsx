'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleSortSubCategoryModal } from '@/slices/FirstModalSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

export default function SortPortal() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ---------------------------------- dispatch ----------------------------------
  const dispatch = useDispatch();

  // ---------------------------------- states ----------------------------------
  const { sortSubCategoryModal } = useSelector(
    (state) => state.FirstModalSlice
  );

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {sortSubCategoryModal && (
        <GlobalPortal>
          {/* modal */}
          <div
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
                        instanceId="mainCategory"
                        options={options}
                        onChange={''}
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
                    type="button">
                    Sort
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* end modal */}
        </GlobalPortal>
      )}
    </>
  );
} // end function
