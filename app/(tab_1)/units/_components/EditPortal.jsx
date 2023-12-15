'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditUnitModal } from '@/slices/FirstModalSlice';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';

export default function EditPortal({ units }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { editUnitModal, editUnitId } = useSelector(
    (state) => state.FirstModalSlice
  );

  // 2: formData state
  const initialState = { id: '', name: '', nameAr: '', abbr: '', abbrAr: '' };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

  // 1: get the item from id
  const unit = units.find((item) => item.id == editUnitId);

  // 2: set item to state
  useEffect(() => {
    if (unit) {
      setFormData((state) => ({
        ...state,
        id: unit.id,
        name: unit.name,
        nameAr: unit.nameAr,
        abbr: unit.abbr,
        abbrAr: unit.abbrAr,
      }));
    } // end if
  }, [editUnitId]);

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
    const response = await fetch(`${url}/api/units/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    router.refresh();
    dispatch(toggleEditUnitModal({ status: false }));
  };

  // ---------------------------------- page ----------------------------------

  return (
    <>
      {editUnitModal && (
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
            id="edit-modal">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                {/* header */}
                <div className="modal-header modal--header">
                  <h4 className="modal-title fw-bold">Edit Unit</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() =>
                      dispatch(toggleEditUnitModal({ status: false }))
                    }
                    aria-label="Close"></button>
                </div>

                {/* ---------------------- */}
                {/* ---------------------- */}

                {/* body */}
                <div className="modal-body">
                  <div className="row g-0 align-items-center">
                    <input type="hidden" name="id" value={formData.id} />

                    <div className="col-7 mb-4">
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
                    <div className="col-5 mb-4">
                      <label className="form-label form--label">Abbr</label>
                      <input
                        name="abbr"
                        type="text"
                        required
                        className="form--input"
                        value={formData.abbr}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-7 mb-4">
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
                    <div className="col-5 mb-4">
                      <label className="form-label form--label">Abbr</label>
                      <input
                        name="abbrAr"
                        type="text"
                        required
                        className="form--input"
                        value={formData.abbrAr}
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
                      dispatch(toggleEditUnitModal({ status: false }))
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
