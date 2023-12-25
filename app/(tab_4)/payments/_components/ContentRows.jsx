'use client';

import Link from 'next/link';
import React from 'react';

import { toggleEditPaymentModal } from '@/slices/SeventhModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';

export default function ContentRows({ payments }) {
  // ::root
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- function ---------------------------------

  // ---------------------------------- function ---------------------------------

  const handleToggleStatus = async (event, id) => {
    event.preventDefault();

    // 4.1: insert new item
    dispatch(IsLoading());
    const response = await fetch(`${url}/api/payments/${id}/toggle-active`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });

    console.log(await response.json());

    dispatch(IsNotLoading());

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
        <div className="col-3">
          <label className="col-form-label form--label row--label">
            Payment Type
          </label>
        </div>
        <div className="col-3">
          <label className="col-form-label form--label row--label">
            Method Name
          </label>
        </div>

        <div className="col-3">
          <label className="col-form-label form--label row--label">
            Account No.
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
      {payments.map((payment) => (
        <div
          className="row g-0 align-items-center results--item"
          key={payment.id}>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {payment.serial}
            </label>
          </div>

          <div className="col-3">
            <label className="col-form-label form--label row--label">
              {payment.paymentType}
            </label>
          </div>

          <div className="col-3">
            <label className="col-form-label form--label row--label">
              {payment.name}
            </label>
          </div>
          <div className="col-3">
            <label className="col-form-label form--label row--label">
              {payment.accountNumber}
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
                      toggleEditPaymentModal({
                        status: true,
                        id: payment.id,
                      })
                    )
                  }>
                  Edit Payment
                </Link>
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={(event) => handleToggleStatus(event, payment.id)}>
                  {payment.isActive ? 'Deactivate' : 'Activate'} Payment
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
