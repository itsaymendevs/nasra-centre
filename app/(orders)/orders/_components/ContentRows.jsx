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

  const { orderFilters } = useSelector((state) => state.OrderSlice);

  // ---------------------------------- filters ----------------------------------

  // 1: filter orders (receivingOption - country - state - deliveryArea - store - orderPayment - orderStatus - sort - search)
  useEffect(() => {
    orders = orders.filter((item) =>
      orderFilters.receivingOption
        ? orderFilters.receivingOption == 'BOTH'
          ? true
          : item.receivingOption == orderFilters.receivingOption
        : true
    );

    orders = orders.filter((item) =>
      orderFilters.countryId ? item.countryId == orderFilters.countryId : true
    );

    orders = orders.filter((item) =>
      orderFilters.stateId ? item.stateId == orderFilters.stateId : true
    );

    orders = orders.filter((item) =>
      orderFilters.deliveryAreaId
        ? item.deliveryAreaId == orderFilters.deliveryAreaId
        : true
    );

    orders = orders.filter((item) =>
      orderFilters.storeId ? item.storeId == orderFilters.storeId : true
    );

    orders = orders.filter((item) =>
      orderFilters.orderStatus
        ? item.orderStatus == orderFilters.orderStatus
        : true
    );

    orders = orders.filter((item) => {
      if (orderFilters.paymentStatus === false) {
        return item.isPaymentDone == orderFilters.paymentStatus;
      } else {
        if (orderFilters.paymentStatus)
          return item.isPaymentDone == orderFilters.paymentStatus;
        else return true;
      }
    });

    // 1.2: search filter

    orders = orders.filter(
      (item) =>
        item.orderNumber.toString().indexOf(orderFilters.search.toString()) > -1
    );

    // :1.3: update state
    setState(orders);
  }, [orderFilters]);

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
      <div className="row g-0 align-items-center mb-2">
        <div className="col-12">
          {/* wrapper */}
          <div className="accordion" role="tablist" id="results--orders">
            {/* item */}

            {state.map((order) => (
              <div className="accordion-item results--order" key={order.id}>
                {/* titles */}
                <h2 className="accordion-header" role="tab">
                  <button
                    className="accordion-button collapsed results--order-button current"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#results--orders .item-1"
                    aria-expanded="false"
                    aria-controls="results--orders .item-1">
                    {/* user */}
                    <span>
                      {order.user.firstName} {order.user.lastName}
                    </span>

                    {/* payment */}
                    <span
                      className={`fw-bold ${
                        !order.isPaymentDone ? 'text-danger' : 'text-success'
                      } fs-14`}>
                      {order.isPaymentDone ? 'Paid' : 'Not Paid'}
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
                        order.orderStatus == 'PROCESSING' && 'text-primary'
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

                      {/* phone / alternative  */}
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

                      {/* rough address */}
                      <div className="col-12 mb-4">
                        <label className="form-label form--label text-theme fs-12 mb-1">
                          Rough Address
                        </label>
                        <label className="form-label form--label profile--label">
                          {order.user.address}
                          <br />
                        </label>
                      </div>

                      {/* status / changer of status */}
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

                      {/* actions */}
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
            ))}
            {/* end item */}
          </div>
          {/* end according wrapper */}
        </div>
      </div>
    </div>
    // end outer wrapper
  ); // end return
} // end function
