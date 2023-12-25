'use client';

import React from 'react';
import Select from 'react-select';
import { updateOrderFilters } from '@/slices/OrderSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ContentFilters({
  totalRows,
  countries,
  states,
  deliveryAreas,
  stores,
}) {
  // ::root
  const options = [];
  const optionsTwo = [];
  const optionsThree = [];
  const optionsStores = [];

  const optionsOrderStatus = [
    { value: 'PENDING', label: 'Pending' },
    { value: 'PROCESSING', label: 'Processing' },
  ];

  const optionsPaymentStatus = [
    { value: true, label: 'Paid' },
    { value: false, label: 'Not Paid' },
  ];
  const optionsSort = [
    { value: 'NewestToOldest', label: 'Newest To Oldest' },
    { value: 'OldestToNewest', label: 'Oldest To Newest' },
  ];

  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url / cookies
  const dispatch = useDispatch();

  const { orderFilters } = useSelector((state) => state.OrderSlice);

  // ---------------------------------- options ----------------------------------

  stores.map((item) =>
    optionsStores.push({ value: item.id, label: item.title })
  );

  countries.map((item) => options.push({ value: item.id, label: item.name }));

  states.map((state) => {
    // 2.1: if there is countryId
    orderFilters.countryId &&
      (orderFilters.countryId
        ? state.countryId == orderFilters.countryId &&
          optionsTwo.push({ value: state.id, label: state.name })
        : optionsTwo.push({ value: state.id, label: state.name }));
  });

  deliveryAreas.map((deliveryArea) => {
    // 2.1: if there is stateId
    orderFilters.stateId &&
      (orderFilters.stateId
        ? deliveryArea.stateId == orderFilters.stateId &&
          optionsThree.push({
            value: deliveryArea.id,
            label: deliveryArea.name,
          })
        : optionsThree.push({
            value: deliveryArea.id,
            label: deliveryArea.name,
          }));
  });

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event) => {
    const receivingOption = event.target.value;

    console.log(receivingOption);
    if (receivingOption == 'BOTH') {
      dispatch(
        updateOrderFilters({
          countryId: orderFilters?.countryId,
          stateId: null,
          deliveryAreaId: null,
          search: orderFilters?.search,
          receivingOption: receivingOption,
          orderStatus: orderFilters?.orderStatus,
          paymentStatus: orderFilters?.paymentStatus,
          sortType: orderFilters?.sortType,
          storeId: null,
        })
      );
    } else if (receivingOption == 'DELIVERY') {
      dispatch(
        updateOrderFilters({
          countryId: orderFilters?.countryId,
          stateId: orderFilters?.stateId,
          deliveryAreaId: orderFilters?.deliveryAreaId,
          search: orderFilters?.search,
          receivingOption: receivingOption,
          orderStatus: orderFilters?.orderStatus,
          paymentStatus: orderFilters?.paymentStatus,
          sortType: orderFilters?.sortType,
          storeId: null,
        })
      );
    } else if (receivingOption == 'PICKUP') {
      dispatch(
        updateOrderFilters({
          countryId: orderFilters?.countryId,
          stateId: null,
          deliveryAreaId: null,
          search: orderFilters?.search,
          receivingOption: receivingOption,
          orderStatus: orderFilters?.orderStatus,
          paymentStatus: orderFilters?.paymentStatus,
          sortType: orderFilters?.sortType,
          storeId: orderFilters?.storeId,
        })
      );
    }
  }; // end function

  // ---------------------------------- page ----------------------------------

  return (
    <div id="filters--wrap" className="mb-5">
      {/* radio buttons */}
      <div className="filters--radio-wrap">
        <div className="form-check">
          <label className="form-check-label" htmlFor="formCheck-3">
            All Orders
          </label>
          <input
            className="form-check-input"
            type="radio"
            id="formCheck-3"
            name="receivingOption"
            value="BOTH"
            checked={orderFilters.receivingOption == 'BOTH'}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="formCheck-1">
            Delivery Orders
          </label>
          <input
            className="form-check-input"
            type="radio"
            id="formCheck-1"
            name="receivingOption"
            value="DELIVERY"
            checked={orderFilters.receivingOption == 'DELIVERY'}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-check">
          <label className="form-check-label" htmlFor="formCheck-2">
            Pickup Orders
          </label>
          <input
            className="form-check-input"
            type="radio"
            id="formCheck-2"
            name="receivingOption"
            value="PICKUP"
            checked={orderFilters.receivingOption == 'PICKUP'}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* ----------------------------- */}
      {/* ----------------------------- */}
      {/* ----------------------------- */}

      <div className="row g-0 align-items-end">
        <div className="col-4 mb-4">
          <label className="form-label form--label">Country</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="country"
            options={options}
            value={
              orderFilters.countryId
                ? options.find(
                    (option) => option.value == orderFilters?.countryId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updateOrderFilters({
                  countryId: selectedOption?.value,
                  stateId: null,
                  deliveryAreaId: null,
                  search: orderFilters?.search,
                  receivingOption: orderFilters?.receivingOption,
                  orderStatus: orderFilters?.orderStatus,
                  paymentStatus: orderFilters?.paymentStatus,
                  sortType: orderFilters?.sortType,
                  storeId: orderFilters?.storeId,
                })
              )
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* DELIVERY ONLY */}
        {orderFilters.receivingOption == 'DELIVERY' && (
          <div className="col-4 mb-4">
            <label className="form-label form--label">State</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="state"
              options={optionsTwo}
              value={
                orderFilters.stateId
                  ? optionsTwo.find(
                      (option) => option.value == orderFilters?.stateId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                dispatch(
                  updateOrderFilters({
                    countryId: orderFilters?.countryId,
                    stateId: selectedOption?.value,
                    deliveryAreaId: null,
                    search: orderFilters?.search,
                    receivingOption: orderFilters?.receivingOption,
                    orderStatus: orderFilters?.orderStatus,
                    paymentStatus: orderFilters?.paymentStatus,
                    sortType: orderFilters?.sortType,
                    storeId: null,
                  })
                )
              }
              placeholder={''}
              isClearable
            />
          </div>
        )}

        {/* DELIVERY ONLY */}
        {orderFilters.receivingOption == 'DELIVERY' && (
          <div className="col-4 mb-4">
            <label className="form-label form--label">Region</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="county"
              options={optionsThree}
              value={
                orderFilters.deliveryAreaId
                  ? optionsThree.find(
                      (option) => option.value == orderFilters?.deliveryAreaId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                dispatch(
                  updateOrderFilters({
                    countryId: orderFilters?.countryId,
                    stateId: orderFilters?.stateId,
                    deliveryAreaId: selectedOption?.value,
                    search: orderFilters?.search,
                    receivingOption: orderFilters?.receivingOption,
                    orderStatus: orderFilters?.orderStatus,
                    paymentStatus: orderFilters?.paymentStatus,
                    sortType: orderFilters?.sortType,
                    storeId: null,
                  })
                )
              }
              placeholder={''}
              isClearable
            />
          </div>
        )}

        {/* PICKUP ONLY */}
        {orderFilters.receivingOption == 'PICKUP' && (
          <div className="col-4 mb-4">
            <label className="form-label form--label">Store</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="pickupStoreId"
              options={optionsStores}
              value={
                orderFilters.storeId
                  ? optionsStores.find(
                      (option) => option.value == orderFilters?.storeId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                dispatch(
                  updateOrderFilters({
                    countryId: orderFilters?.countryId,
                    stateId: null,
                    deliveryAreaId: null,
                    search: orderFilters?.search,
                    receivingOption: orderFilters?.receivingOption,
                    orderStatus: orderFilters?.orderStatus,
                    paymentStatus: orderFilters?.paymentStatus,
                    sortType: orderFilters?.sortType,
                    storeId: selectedOption?.value,
                  })
                )
              }
              placeholder={''}
              isClearable
            />
          </div>
        )}

        {/* empty */}
        <div className="col-12"></div>

        {/* ---------------------- */}

        {/* status */}
        <div className="col-4 mb-4">
          <label className="form-label form--label">Status</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="status"
            options={optionsOrderStatus}
            value={
              orderFilters.orderStatus
                ? optionsOrderStatus.find(
                    (option) => option.value == orderFilters?.orderStatus
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updateOrderFilters({
                  countryId: orderFilters?.countryId,
                  stateId: orderFilters?.stateId,
                  deliveryAreaId: orderFilters?.deliveryAreaId,
                  search: orderFilters?.search,
                  receivingOption: orderFilters?.receivingOption,
                  orderStatus: selectedOption?.value,
                  paymentStatus: orderFilters?.paymentStatus,
                  sortType: orderFilters?.sortType,
                  storeId: orderFilters?.storeId,
                })
              )
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* payment */}
        <div className="col-4 mb-4">
          <label className="form-label form--label">Payment</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="payment"
            options={optionsPaymentStatus}
            value={
              orderFilters.paymentStatus || orderFilters.paymentStatus === false
                ? optionsPaymentStatus.find(
                    (option) => option.value == orderFilters?.paymentStatus
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updateOrderFilters({
                  countryId: orderFilters?.countryId,
                  stateId: orderFilters?.stateId,
                  deliveryAreaId: orderFilters?.deliveryAreaId,
                  search: orderFilters?.search,
                  receivingOption: orderFilters?.receivingOption,
                  orderStatus: orderFilters?.orderStatus,
                  paymentStatus: selectedOption?.value,
                  sortType: orderFilters?.sortType,
                  storeId: orderFilters?.storeId,
                })
              )
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* sort */}
        <div className="col-4 mb-4">
          <label className="form-label form--label">Sorting</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="sorting"
            options={optionsSort}
            value={
              orderFilters.sortType
                ? optionsSort.find(
                    (option) => option.value == orderFilters?.sortType
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updateOrderFilters({
                  countryId: orderFilters?.countryId,
                  stateId: orderFilters?.stateId,
                  deliveryAreaId: orderFilters?.deliveryAreaId,
                  search: orderFilters?.search,
                  receivingOption: orderFilters?.receivingOption,
                  orderStatus: orderFilters?.orderStatus,
                  paymentStatus: orderFilters?.paymentStatus,
                  sortType: selectedOption?.value,
                  storeId: orderFilters?.storeId,
                })
              )
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* --------------------------- */}

        {/* search */}
        <div className="col-4">
          <input
            type="search"
            className="form--input"
            placeholder="Order Serial .."
            value={orderFilters?.search || ''}
            onChange={(event) =>
              dispatch(
                updateOrderFilters({
                  countryId: orderFilters?.countryId,
                  stateId: orderFilters?.stateId,
                  deliveryAreaId: orderFilters?.deliveryAreaId,
                  search: event.target.value,
                  receivingOption: orderFilters?.receivingOption,
                  orderStatus: orderFilters?.orderStatus,
                  paymentStatus: orderFilters?.paymentStatus,
                  sortType: orderFilters?.sortType,
                  storeId: orderFilters?.storeId,
                })
              )
            }
          />
        </div>

        {/* total */}
        <div className="col-8">
          <h3
            className="text-end mb-0 fw-bold text-decoration-underline text-theme"
            style={{ marginRight: '5%' }}>
            {totalRows}
          </h3>
        </div>
      </div>
    </div>
  );
} // end function
