'use client';

import Link from 'next/link';
import React from 'react';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { toggleConfirmModal } from '@/slices/ConfirmModalSlice';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function ContentRows({ areas }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- function ---------------------------------

  const handleToggleStatus = async (event, id) => {
    event.preventDefault();

    // 4.1: insert new item
    dispatch(IsLoading());
    const response = await fetch(`${url}/api/delivery/${id}/toggle-active`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
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
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-3">
          <label className="col-form-label form--label row--label">
            Name Ar
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">Users</label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label">Price</label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}

      {/* item */}
      {areas.map((item) => (
        <div className="row g-0 align-items-center results--item" key={item.id}>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {item.serial}
            </label>
          </div>
          <div className="col-3">
            <label className="col-form-label form--label row--label">
              {item.name}
            </label>
          </div>
          <div className="col-3">
            <label className="col-form-label form--label row--label">
              {item.nameAr}
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">-</label>
          </div>
          <div className="col-1">
            <label className="col-form-label form--label row--label">
              {item.price}
            </label>
          </div>
          <div className="col-1">
            <div className="dropstart d-flex justify-content-center">
              <button
                className="btn dropdown-toggle results--dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"></button>
              <div className="dropdown-menu results--dropdown-menu">
                {/* edit */}
                <Link className="dropdown-item" href={`/areas/${item.id}`}>
                  Edit Region
                </Link>

                {/* toggle */}
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={(event) => handleToggleStatus(event, item.id)}>
                  {item.isActive ? 'Disable' : 'Enable'} Region
                </Link>

                {/* remove */}
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={() =>
                    dispatch(
                      toggleConfirmModal({
                        status: true,
                        targetURL: `${process.env.domainURL}/api/delivery/${item.id}/delete`,
                        targetName: 'Region',
                      })
                    )
                  }>
                  Remove Region
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* end item */}
    </div>
  ); // end return
} // end function
