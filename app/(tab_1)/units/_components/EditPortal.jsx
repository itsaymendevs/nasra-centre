'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditUnitModal } from '@/slices/FirstModalSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function EditPortal() {
  // ---------------------------------- dispatch ----------------------------------
  const dispatch = useDispatch();

  // ---------------------------------- states ----------------------------------
  const { editUnitModal } = useSelector((state) => state.FirstModalSlice);

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {editUnitModal && (
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
                {/* header */}
                <div className="modal-header modal--header">
                  <h4 className="modal-title fw-bold">Edit Unit</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => dispatch(toggleEditUnitModal(false))}
                    aria-label="Close"></button>
                </div>

                {/* ---------------------- */}
                {/* ---------------------- */}

                {/* body */}
                <div className="modal-body">
                  <div className="row g-0 align-items-center">
                    <div className="col-7 mb-4">
                      <label className="form-label form--label">Name</label>
                      <input type="text" className="form--input" />
                    </div>
                    <div className="col-5 mb-4">
                      <label className="form-label form--label">Abbr</label>
                      <input type="text" className="form--input w-100" />
                    </div>
                    <div className="col-7 mb-4">
                      <label className="form-label form--label">Name Ar</label>
                      <input type="text" className="form--input" />
                    </div>
                    <div className="col-5 mb-4">
                      <label className="form-label form--label">Abbr</label>
                      <input type="text" className="form--input w-100" />
                    </div>
                  </div>
                </div>
                {/* end body */}

                {/* ---------------------- */}
                {/* ---------------------- */}

                <div className="modal-footer">
                  {/* close */}
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() => dispatch(toggleEditUnitModal(false))}>
                    Close
                  </button>

                  {/* submit */}
                  <button
                    className="btn btn--theme btn--sm px-5 rounded-1"
                    type="button">
                    Save
                  </button>
                </div>
                {/* end footer */}
              </div>
            </div>
          </div>
          {/* end modal */}
        </GlobalPortal>
      )}
    </>
  );
} // end function
