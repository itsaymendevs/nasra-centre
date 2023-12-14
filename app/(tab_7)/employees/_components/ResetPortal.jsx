'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleResetEmployeeModal } from '@/slices/FourthModalSlice';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ResetPortal({ employees }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { resetEmployeeModal, resetEmployeeId } = useSelector(
    (state) => state.FourthModalSlice
  );

  // 2: formData state
  const initialState = { id: '', password: '' };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

  // 1: get the item from id
  const employee = employees.find((item) => item.id == resetEmployeeId);

  // 2: set item to state
  useEffect(() => {
    if (employee) {
      setFormData((state) => ({
        ...state,
        id: employee.id,
        adminPassword: '',
        password: '',
      }));
    } // end if
  }, [resetEmployeeId]);

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

    console.log(formData);
    // 4.1: insert new item
    const response = await fetch(`${url}/api/employees/reset-password`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    console.log(await response.json());

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    router.refresh();
    dispatch(toggleResetEmployeeModal({ status: false }));
  };

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {resetEmployeeModal && (
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
            id="reset-modal">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header modal--header">
                  <h4 className="modal-title fw-bold">Reset Password</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() =>
                      dispatch(toggleResetEmployeeModal({ status: false }))
                    }
                    aria-label="Close"></button>
                </div>

                {/* body */}
                <div className="modal-body">
                  <div className="row g-0 align-items-center">
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        Admin Password
                      </label>
                      <input
                        name="adminPassword"
                        type="password"
                        required
                        className="form--input"
                        value={formData.adminPassword}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        User's New Password
                      </label>
                      <input
                        name="password"
                        type="password"
                        required
                        className="form--input"
                        value={formData.password}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                {/* end body */}

                <div className="modal-footer">
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() =>
                      dispatch(toggleResetEmployeeModal({ status: false }))
                    }>
                    Close
                  </button>
                  <button
                    className="btn btn--theme btn--sm px-5 rounded-1"
                    type="submit">
                    Reset
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
