'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditCompanyModal } from '@/slices/FirstModalSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function EditPortal({ companies }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { editCompanyModal, editCompanyId } = useSelector(
    (state) => state.FirstModalSlice
  );

  // 2: formData state
  const initialState = { id: '', name: '', nameAr: '' };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

  // 1: get the item from id
  const company = companies.find((item) => item.id == editCompanyId);

  // 2: set item to state
  useEffect(() => {
    if (company) {
      setFormData((state) => ({
        ...state,
        id: company.id,
        name: company.name,
        nameAr: company.nameAr,
      }));
    } // end if
  }, [editCompanyId]);

  // 3: handle input change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }; // end function

  // 4: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.1: insert new item
    const response = await fetch(`${url}/api/companies/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    router.refresh();
    dispatch(toggleEditCompanyModal({ status: false }));
  };

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {editCompanyModal && (
        <GlobalPortal>
          {/* modal */}
          <form
            onSubmit={handleSubmit}
            method="post"
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
                  <h4 className="modal-title fw-bold">Edit Company</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() =>
                      dispatch(toggleEditCompanyModal({ status: false }))
                    }
                    aria-label="Close"></button>
                </div>

                {/* ---------------------- */}
                {/* ---------------------- */}

                {/* body */}
                <div className="modal-body">
                  {/* name / ar */}
                  <div className="row g-0 align-items-center">
                    <div className="col-6 mb-4">
                      <input type="hidden" name="id" value={formData.id} />
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
                {/* end body */}

                {/* ---------------------- */}
                {/* ---------------------- */}

                <div className="modal-footer">
                  {/* close */}
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() =>
                      dispatch(toggleEditCompanyModal({ status: false }))
                    }>
                    Close
                  </button>

                  {/* submit */}
                  <button
                    className="btn btn--theme btn--sm px-5 rounded-1"
                    type="submit">
                    Save
                  </button>
                </div>
                {/* end footer */}
              </div>
            </div>
          </form>
          {/* end modal */}
        </GlobalPortal>
      )}
    </>
  );
} // end function
