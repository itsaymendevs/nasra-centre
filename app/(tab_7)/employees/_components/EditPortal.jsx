'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditEmployeeModal } from '@/slices/FourthModalSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';

export default function EditPortal({ employees }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { editEmployeeModal, editEmployeeId } = useSelector(
    (state) => state.FourthModalSlice
  );

  // 2: formData state
  const initialState = { id: '', name: '', nameAr: '', permission: '' };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

  // 1: get the item from id
  const employee = employees.find((item) => item.id == editEmployeeId);

  // 2: set item to state
  useEffect(() => {
    if (employee) {
      setFormData((state) => ({
        ...state,
        id: employee.id,
        name: employee.name,
        nameAr: employee.nameAr,
        permission: employee.permission,
      }));
    } // end if
  }, [editEmployeeId]);

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
    const response = await fetch(`${url}/api/employees/update`, {
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
    dispatch(toggleEditEmployeeModal({ status: false }));
  };

  // ---------------------------------- page ----------------------------------

  return (
    <>
      {editEmployeeModal && (
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
                <div className="modal-header modal--header">
                  <h4 className="modal-title fw-bold">Edit Employee</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() =>
                      dispatch(toggleEditEmployeeModal({ status: false }))
                    }
                    aria-label="Close"></button>
                </div>

                {/* body */}
                <div className="modal-body">
                  <div className="row g-0 align-items-center">
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">Name</label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="form--input mb-4"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
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
                    <div className="col-6 align-self-end mb-4">
                      <div className="form-check mb-2">
                        <input
                          id="formCheck-3"
                          name="permission"
                          type="radio"
                          className="form-check-input"
                          checked={formData.permission == 'Low'}
                          value="Low"
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label ms-1"
                          htmlFor="formCheck-3">
                          Low Permission
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          id="formCheck-4"
                          name="permission"
                          type="radio"
                          className="form-check-input"
                          checked={formData.permission == 'High'}
                          value="High"
                          onChange={handleInputChange}
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
                    onClick={() =>
                      dispatch(toggleEditEmployeeModal({ status: false }))
                    }>
                    Close
                  </button>
                  <button
                    className="btn btn--theme btn--sm px-5 rounded-1"
                    type="submit">
                    Save
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
