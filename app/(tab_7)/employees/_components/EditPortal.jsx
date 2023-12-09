'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditEmployeeModal } from '@/slices/FourthModalSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

export default function EditPortal() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ---------------------------------- dispatch ----------------------------------
  const dispatch = useDispatch();

  // ---------------------------------- states ----------------------------------
  const { editEmployeeModal } = useSelector((state) => state.FourthModalSlice);

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {editEmployeeModal && (
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
            id="edit-modal">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header modal--header">
                  <h4 className="modal-title fw-bold">Edit Employee</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => dispatch(toggleEditEmployeeModal(false))}
                    aria-label="Close"></button>
                </div>

                {/* body */}
                <div className="modal-body">
                  <div className="row g-0 align-items-center">
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">Name</label>
                      <input type="text" className="form--input mb-4" />
                      <label className="form-label form--label">Name Ar</label>
                      <input type="text" className="form--input" />
                    </div>
                    <div className="col-6 align-self-end mb-4">
                      <div className="form-check mb-2">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="formCheck-3"
                        />
                        <label
                          className="form-check-label ms-1"
                          htmlFor="formCheck-3">
                          Low Permission
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          id="formCheck-4"
                        />
                        <label
                          className="form-check-label ms-1"
                          htmlFor="formCheck-4">
                          High Permission
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end body */}

                <div className="modal-footer">
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() => dispatch(toggleEditEmployeeModal(false))}>
                    Close
                  </button>
                  <button
                    className="btn btn--theme btn--sm px-5 rounded-1"
                    type="button">
                    Save
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
