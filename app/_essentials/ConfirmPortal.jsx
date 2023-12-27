'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleConfirmModal } from '@/slices/ConfirmModalSlice';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'next-client-cookies';

export default function ConfirmPortal() {
  // ---------------------------------- dispatch ----------------------------------
  const dispatch = useDispatch();
  const router = useRouter();
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------
  const { status, targetId, targetURL, targetName } = useSelector(
    (state) => state.ConfirmModalSlice
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(targetURL, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    router.refresh();
    dispatch(toggleConfirmModal({ status: false }));
  }; // end function

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {status && (
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
                        Sure about deleting this {targetName}?
                        <span className="d-block text-danger mt-1 fs-12">
                          Related Information will be removed as well
                          <br />
                        </span>
                      </label>

                      {/* cancel / confirm */}
                      <div>
                        <button
                          className="btn border-0 rounded-1 mt-3 me-3"
                          type="button"
                          onClick={() =>
                            dispatch(toggleConfirmModal({ status: false }))
                          }>
                          Close
                        </button>
                        <button
                          className="btn btn--theme btn--outline-danger btn--sm px-4 rounded-1 fs-13 mt-3 text-capitalize submit--modal"
                          type="button"
                          onClick={handleSubmit}>
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
