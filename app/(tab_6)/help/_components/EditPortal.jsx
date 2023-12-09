'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditParagraphModal } from '@/slices/SixthModalSlice';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

export default function EditPortal() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ---------------------------------- dispatch ----------------------------------
  const dispatch = useDispatch();

  // ---------------------------------- states ----------------------------------
  const { editParagraphModal } = useSelector((state) => state.SixthModalSlice);

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {editParagraphModal && (
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
                  <h4 className="modal-title fw-bold">Edit Paragraph</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() => dispatch(toggleEditParagraphModal(false))}
                    aria-label="Close"></button>
                </div>

                {/* body */}
                <div className="modal-body">
                  <div className="row g-0 align-items-center">
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">Title</label>
                      <input type="text" className="form--input" />
                    </div>
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        Title Ar
                        <br />
                      </label>
                      <input type="text" className="form--input w-100" />
                    </div>
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">Content</label>
                      <textarea
                        className="form-control form--input form--textarea"
                        style={{ width: '95%' }}></textarea>
                    </div>
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        Content Ar
                      </label>
                      <textarea
                        className="form-control form--input form--textarea"
                        style={{ width: '95%' }}></textarea>
                    </div>
                  </div>
                </div>
                {/* end body */}

                <div className="modal-footer">
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() => dispatch(toggleEditParagraphModal(false))}>
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
