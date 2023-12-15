'use client';

import Link from 'next/link';
import React from 'react';

import { toggleEditEmployeeModal } from '@/slices/FourthModalSlice';
import { toggleResetEmployeeModal } from '@/slices/FourthModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';

export default function ContentRows({ employees }) {
  // ::root
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- function ---------------------------------

  const handleToggleStatus = async (event, id) => {
    event.preventDefault();

    // 4.1: insert new item
    const response = await fetch(`${url}/api/employees/${id}/toggle-active`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    console.log(await response.json());

    // 4.2: hot reload + dispatch
    router.refresh();
  }; // end handle
  // ---------------------------------- page ---------------------------------

  return (
    <div id="results--row">
      {/* titles */}
      <div
        className="row g-0 align-items-center results--header mb-2"
        id="results--header">
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Serial
          </label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-5">
          <label className="col-form-label form--label row--label">
            Permission
          </label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}

      {/* item */}
      {employees.map((employee) => (
        <div
          className="row g-0 align-items-center results--item"
          key={employee.id}>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {employee.serial}
            </label>
          </div>
          <div className="col-4">
            <label className="col-form-label form--label row--label">
              {employee.name}
            </label>
          </div>
          <div className="col-5">
            <label className="col-form-label form--label row--label">
              {employee.permission}
            </label>
          </div>

          {/* action menu */}
          <div className="col-1">
            <div className="dropstart d-flex justify-content-center">
              <button
                className="btn dropdown-toggle results--dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"></button>
              <div className="dropdown-menu results--dropdown-menu">
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={() =>
                    dispatch(
                      toggleEditEmployeeModal({
                        status: true,
                        id: employee.id,
                      })
                    )
                  }>
                  Edit Employee
                </Link>
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={() =>
                    dispatch(
                      toggleResetEmployeeModal({
                        status: true,
                        id: employee.id,
                      })
                    )
                  }>
                  Reset Password
                </Link>
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={(event) => handleToggleStatus(event, employee.id)}>
                  {employee.isActive ? 'Deactivate' : 'Activate'} Account
                </Link>
              </div>
            </div>
          </div>
          {/* end action menu */}
        </div>
      ))}
    </div>
  ); // end return
} // end function
