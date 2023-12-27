'use client';

import Link from 'next/link';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

export default function ContentRows({ users }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  const { userFilters } = useSelector((state) => state.FifthModalSlice);

  // ---------------------------------- filters ----------------------------------

  // 1: filter users (country - state - deliveryArea - search)
  useEffect(() => {
    users = users.filter((item) =>
      userFilters.countryId ? item.countryId == userFilters.countryId : true
    );

    users = users.filter((item) =>
      userFilters.stateId ? item.stateId == userFilters.stateId : true
    );

    users = users.filter((item) =>
      userFilters.deliveryAreaId
        ? item.deliveryAreaId == userFilters.deliveryAreaId
        : true
    );

    // 1.2: search filter
    users = users.filter((item) => {
      // ::concat firstName / lastName
      const fullName =
        item.firstName.toLowerCase() + ' ' + item.lastName.toLowerCase();

      return fullName.indexOf(userFilters.search) > -1;
    });

    // :1.3: update state
    setState(users);
  }, [userFilters]);

  // ---------------------------------- States ----------------------------------

  const [state, setState] = useState(users);

  // ---------------------------------- function ---------------------------------

  function handleInputChange(event, id, name, currentValue) {
    const replacingState = state.map((item) => {
      if (item.id == id) {
        return { ...item, [name]: !currentValue };
      }
      return item;
    });

    setState(replacingState);
  } // end function

  const handleToggleStatus = async (event, id) => {
    event.preventDefault();

    // 4.1: insert new item
    dispatch(IsLoading());
    const response = await fetch(`${url}/api/users/${id}/toggle-active`, {
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
        <div className="col-3">
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">Phone</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Completed
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Canceled
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Favorites
          </label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}
      {state.map((user) => (
        <div className="row g-0 align-items-center results--item">
          <div className="col-3">
            <label className="col-form-label form--label row--label">
              {`${user.firstName} ${user.lastName}`}
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label me-1">
              {user.phone}
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">-</label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">-</label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">-</label>
          </div>
          <div className="col-1">
            <div className="dropstart d-flex justify-content-center">
              <button
                className="btn dropdown-toggle results--dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"></button>
              <div className="dropdown-menu results--dropdown-menu">
                <Link className="dropdown-item" href={`/customers/${user.id}`}>
                  Previous Orders
                </Link>
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={(event) => {
                    handleInputChange(
                      event,
                      user.id,
                      'isActive',
                      user.isActive
                    );
                    handleToggleStatus(event, user.id);
                  }}>
                  {user.isActive ? 'Deactivate' : 'Activate'} Account
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ); // end return
} // end function
