'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleConfirmModal } from '@/slices/ConfirmModalSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ConfirmPortal() {
  // ::root
  const options = [{ value: '1', label: 'option' }];

  // ---------------------------------- dispatch ----------------------------------
  const dispatch = useDispatch();

  // ---------------------------------- states ----------------------------------
  const { confirmModal } = useSelector((state) => state.ConfirmModalSlice);

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {confirmModal && (
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
                {/* body */}
                <div className="modal-body py-4">
                  <div className="row g-0 align-items-end">
                    <div className="col-12 text-center">
                      {/* label */}
                      <label className="form-label fs-5 text-center form--label">
                        Sure about cancelling the order?
                        <span className="d-block text-danger mt-1 fs-12">
                          Order cancellation can not be undone
                          <br />
                        </span>
                      </label>

                      {/* cancel / confirm */}
                      <div>
                        <button
                          className="btn border-0 rounded-1 mt-3 me-3"
                          type="button"
                          onClick={() => dispatch(toggleConfirmModal(false))}>
                          Close
                        </button>
                        <button
                          className="btn btn--theme btn--outline-danger btn--sm px-4 rounded-1 fs-13 mt-3 text-capitalize"
                          type="button">
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end body */}
              </div>
            </div>
          </div>
          {/* end modal */}
        </GlobalPortal>
      )}
    </>
  );
} // end function
