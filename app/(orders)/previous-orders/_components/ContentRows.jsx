'use client';

import Link from 'next/link';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

export default function ContentRows({ orders }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  const { previousOrderFilters } = useSelector((state) => state.OrderSlice);

  // 1: filter orders (receivingOption - country - state - deliveryArea - store  - orderStatus - employeeId - sort fromDate - untilDate - search)
  useEffect(() => {
    orders = orders.filter((item) =>
      previousOrderFilters.receivingOption
        ? previousOrderFilters.receivingOption == 'BOTH'
          ? true
          : item.receivingOption == previousOrderFilters.receivingOption
        : true
    );

    orders = orders.filter((item) =>
      previousOrderFilters.countryId
        ? item.countryId == previousOrderFilters.countryId
        : true
    );

    orders = orders.filter((item) =>
      previousOrderFilters.stateId
        ? item.stateId == previousOrderFilters.stateId
        : true
    );

    orders = orders.filter((item) =>
      previousOrderFilters.deliveryAreaId
        ? item.deliveryAreaId == previousOrderFilters.deliveryAreaId
        : true
    );

    orders = orders.filter((item) =>
      previousOrderFilters.storeId
        ? item.storeId == previousOrderFilters.storeId
        : true
    );

    orders = orders.filter((item) =>
      previousOrderFilters.orderStatus
        ? item.orderStatus == previousOrderFilters.orderStatus
        : true
    );

    orders = orders.filter((item) =>
      previousOrderFilters.employeeId
        ? item.orderEmployeeId == previousOrderFilters.employeeId
        : true
    );

    // 1.2: Dates Filter

    // 1.3: search filter

    orders = orders.filter(
      (item) =>
        item.orderNumber
          .toString()
          .indexOf(previousOrderFilters.search.toString()) > -1
    );

    // :1.3: update state
    setState(orders);
  }, [previousOrderFilters]);

  // ---------------------------------- States ----------------------------------

  const [state, setState] = useState(orders);

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

  // ---------------------------------- page ---------------------------------

  return (
    <div id="results--row">
      {/* row */}
      <div className="row g-0 align-items-center mb-2">
        <div className="col-12">
          {/* item */}
          {state.map((order) => (
            <div
              className="accordion"
              role="tablist"
              id="results--orders"
              key={order.id}>
              <div className="accordion-item results--order">
                {/* titles */}
                <h2 className="accordion-header" role="tab">
                  <button
                    className="accordion-button collapsed results--order-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#results--orders .item-1"
                    aria-expanded="false"
                    aria-controls="results--orders .item-1">
                    {/* user */}
                    <span>
                      {order.user.firstName} {order.user.lastName}
                    </span>

                    {/* total price */}
                    <span className="text-decoration-underline">
                      SN. {order.orderNumber}
                    </span>

                    {/* delivery / pickup */}
                    {order.receivingOption == 'DELIVERY' ? (
                      <span>
                        {order.state.name} / {order.delivery_area.name}
                      </span>
                    ) : (
                      <span>{order.store.title}</span>
                    )}

                    {/* status */}
                    <span
                      className={`${
                        order.orderStatus == 'CANCELED'
                          ? 'text-danger'
                          : 'text-theme'
                      }`}>
                      {order.orderStatus}
                    </span>
                  </button>
                </h2>

                {/* collapse */}
                <div
                  className="accordion-collapse collapse item-1 pt-2"
                  role="tabpanel"
                  data-bs-parent="#results--orders">
                  <div className="accordion-body">
                    <div className="row g-0">
                      {/* customer */}
                      <div className="col-4 mb-4">
                        <label className="form-label form--label text-theme fs-12 mb-1">
                          Customer
                        </label>
                        <label className="form-label form--label profile--label">
                          {order.user.firstName} {order.user.lastName}
                        </label>
                      </div>

                      {/* phone */}
                      <div className="col-4 mb-4">
                        <label className="form-label form--label text-theme fs-12 mb-1">
                          Phone
                        </label>
                        <label className="form-label form--label profile--label">
                          {order.user.phone.replace('249', '0')}{' '}
                          {order.secondPhoneNumber &&
                            `/ ${order.secondPhoneNumber.replace('249', '0')}`}
                        </label>
                      </div>

                      {/* payment */}
                      <div className="col-4 mb-4">
                        <label className="form-label form--label text-theme fs-12 mb-1">
                          Payment
                        </label>
                        <label className="form-label form--label profile--label">
                          {order.paymentId ? order.payment.name : 'Unavailable'}
                        </label>
                      </div>

                      {/* address */}
                      <div className="col-12 mb-4">
                        <label className="form-label form--label text-theme fs-12 mb-1">
                          Rough Address
                        </label>
                        <label className="form-label form--label profile--label">
                          {order.user.address}
                          <br />
                        </label>
                      </div>

                      {/* status / employee changed status */}
                      <div className="col-6 mb-4">
                        <label className="col-form-label form--label profile--label">
                          {order.orderStatus}{' '}
                          {order.orderEmployeeId &&
                            `/ ${order.order_employee.name}`}{' '}
                        </label>
                      </div>
                      <div className="col-6 text-end mb-4">
                        <label className="col-form-label form--label text-theme fs-12">
                          {order.orderDateTime}
                        </label>
                      </div>

                      {/* notes */}
                      <div className="col-12 mb-3">
                        <label className="form-label form--label text-theme fs-12 mb-1">
                          Additional Notes
                        </label>
                        <label className="form-label form--label profile--label">
                          {order.orderNote || 'Unavailable'}
                          <br />
                        </label>
                      </div>

                      {/* view order button */}
                      <div className="col-12 text-end mb-2">
                        <Link
                          className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                          href={`/single-order/${order.id}`}>
                          View Order
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end collapse */}
              </div>
              {/* end item */}
            </div>
          ))}
          {/* end wrapper according */}
        </div>
      </div>
    </div>
    // end outer wrapper
  ); // end return
} // end function
