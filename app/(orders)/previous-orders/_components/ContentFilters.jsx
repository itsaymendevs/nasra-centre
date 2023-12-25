'use client';

import React from 'react';
import Select from 'react-select';
import { updatePreviousOrderFilters } from '@/slices/OrderSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ContentFilters({
  totalRows,
  countries,
  states,
  deliveryAreas,
  stores,
  employees,
  productsTotalPrice,
  deliveryTotalPrice,
}) {
  // ::root
  const options = [];
  const optionsTwo = [];
  const optionsThree = [];
  const optionsStores = [];
  const optionsEmployees = [];

  const optionsOrderStatus = [
    { value: 'CANCELED', label: 'Canceled' },
    { value: 'COMPLETED', label: 'Completed' },
  ];

  const optionsSort = [
    { value: 'NewestToOldest', label: 'Newest To Oldest' },
    { value: 'OldestToNewest', label: 'Oldest To Newest' },
  ];

  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url / cookies
  const dispatch = useDispatch();

  const { previousOrderFilters } = useSelector((state) => state.OrderSlice);

  // ---------------------------------- options ----------------------------------

  employees.map((item) =>
    optionsEmployees.push({ value: item.id, label: item.name })
  );

  stores.map((item) =>
    optionsStores.push({ value: item.id, label: item.title })
  );

  countries.map((item) => options.push({ value: item.id, label: item.name }));

  states.map((state) => {
    // 2.1: if there is countryId
    previousOrderFilters.countryId &&
      (previousOrderFilters.countryId
        ? state.countryId == previousOrderFilters.countryId &&
          optionsTwo.push({ value: state.id, label: state.name })
        : optionsTwo.push({ value: state.id, label: state.name }));
  });

  deliveryAreas.map((deliveryArea) => {
    // 2.1: if there is stateId
    previousOrderFilters.stateId &&
      (previousOrderFilters.stateId
        ? deliveryArea.stateId == previousOrderFilters.stateId &&
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
        updatePreviousOrderFilters({
          countryId: previousOrderFilters?.countryId,
          stateId: null,
          deliveryAreaId: null,
          search: previousOrderFilters?.search,
          receivingOption: receivingOption,
          orderStatus: previousOrderFilters?.orderStatus,
          sortType: previousOrderFilters?.sortType,
          fromDate: previousOrderFilters?.fromDate,
          untilDate: previousOrderFilters?.untilDate,
          employeeId: previousOrderFilters?.employeeId,
          storeId: null,
        })
      );
    } else if (receivingOption == 'DELIVERY') {
      dispatch(
        updatePreviousOrderFilters({
          countryId: previousOrderFilters?.countryId,
          stateId: previousOrderFilters?.stateId,
          deliveryAreaId: previousOrderFilters?.deliveryAreaId,
          search: previousOrderFilters?.search,
          receivingOption: receivingOption,
          orderStatus: previousOrderFilters?.orderStatus,
          sortType: previousOrderFilters?.sortType,
          fromDate: previousOrderFilters?.fromDate,
          untilDate: previousOrderFilters?.untilDate,
          employeeId: previousOrderFilters?.employeeId,
          storeId: null,
        })
      );
    } else if (receivingOption == 'PICKUP') {
      dispatch(
        updatePreviousOrderFilters({
          countryId: previousOrderFilters?.countryId,
          stateId: null,
          deliveryAreaId: null,
          search: previousOrderFilters?.search,
          receivingOption: receivingOption,
          orderStatus: previousOrderFilters?.orderStatus,
          sortType: previousOrderFilters?.sortType,
          fromDate: previousOrderFilters?.fromDate,
          untilDate: previousOrderFilters?.untilDate,
          employeeId: previousOrderFilters?.employeeId,
          storeId: previousOrderFilters?.storeId,
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
            checked={previousOrderFilters.receivingOption == 'BOTH'}
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
            checked={previousOrderFilters.receivingOption == 'DELIVERY'}
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
            checked={previousOrderFilters.receivingOption == 'PICKUP'}
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
              previousOrderFilters.countryId
                ? options.find(
                    (option) => option.value == previousOrderFilters?.countryId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updatePreviousOrderFilters({
                  countryId: selectedOption?.value,
                  stateId: null,
                  deliveryAreaId: null,
                  search: previousOrderFilters?.search,
                  receivingOption: previousOrderFilters?.receivingOption,
                  orderStatus: previousOrderFilters?.orderStatus,
                  sortType: previousOrderFilters?.sortType,
                  fromDate: previousOrderFilters?.fromDate,
                  untilDate: previousOrderFilters?.untilDate,
                  employeeId: previousOrderFilters?.employeeId,
                  storeId: previousOrderFilters?.storeId,
                })
              )
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* DELIVERY ONLY */}
        {previousOrderFilters.receivingOption == 'DELIVERY' && (
          <div className="col-4 mb-4">
            <label className="form-label form--label">State</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="state"
              options={optionsTwo}
              value={
                previousOrderFilters.stateId
                  ? optionsTwo.find(
                      (option) => option.value == previousOrderFilters?.stateId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                dispatch(
                  updatePreviousOrderFilters({
                    countryId: previousOrderFilters?.countryId,
                    stateId: selectedOption?.value,
                    deliveryAreaId: null,
                    search: previousOrderFilters?.search,
                    receivingOption: previousOrderFilters?.receivingOption,
                    orderStatus: previousOrderFilters?.orderStatus,
                    sortType: previousOrderFilters?.sortType,
                    fromDate: previousOrderFilters?.fromDate,
                    untilDate: previousOrderFilters?.untilDate,
                    employeeId: previousOrderFilters?.employeeId,
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
        {previousOrderFilters.receivingOption == 'DELIVERY' && (
          <div className="col-4 mb-4">
            <label className="form-label form--label">Region</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="county"
              options={optionsThree}
              value={
                previousOrderFilters.deliveryAreaId
                  ? optionsThree.find(
                      (option) =>
                        option.value == previousOrderFilters?.deliveryAreaId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                dispatch(
                  updatePreviousOrderFilters({
                    countryId: previousOrderFilters?.countryId,
                    stateId: previousOrderFilters?.stateId,
                    deliveryAreaId: selectedOption?.value,
                    search: previousOrderFilters?.search,
                    receivingOption: previousOrderFilters?.receivingOption,
                    orderStatus: previousOrderFilters?.orderStatus,
                    sortType: previousOrderFilters?.sortType,
                    fromDate: previousOrderFilters?.fromDate,
                    untilDate: previousOrderFilters?.untilDate,
                    employeeId: previousOrderFilters?.employeeId,
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
        {previousOrderFilters.receivingOption == 'PICKUP' && (
          <div className="col-4 mb-4">
            <label className="form-label form--label">Store</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="pickupStoreId"
              options={optionsStores}
              value={
                previousOrderFilters.storeId
                  ? optionsStores.find(
                      (option) => option.value == previousOrderFilters?.storeId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                dispatch(
                  updatePreviousOrderFilters({
                    countryId: previousOrderFilters?.countryId,
                    stateId: null,
                    deliveryAreaId: null,
                    search: previousOrderFilters?.search,
                    receivingOption: previousOrderFilters?.receivingOption,
                    orderStatus: previousOrderFilters?.orderStatus,
                    sortType: previousOrderFilters?.sortType,
                    fromDate: previousOrderFilters?.fromDate,
                    untilDate: previousOrderFilters?.untilDate,
                    employeeId: previousOrderFilters?.employeeId,
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
              previousOrderFilters.orderStatus
                ? optionsOrderStatus.find(
                    (option) =>
                      option.value == previousOrderFilters?.orderStatus
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updatePreviousOrderFilters({
                  countryId: previousOrderFilters?.countryId,
                  stateId: previousOrderFilters?.stateId,
                  deliveryAreaId: previousOrderFilters?.deliveryAreaId,
                  search: previousOrderFilters?.search,
                  receivingOption: previousOrderFilters?.receivingOption,
                  orderStatus: selectedOption?.value,
                  sortType: previousOrderFilters?.sortType,
                  fromDate: previousOrderFilters?.fromDate,
                  untilDate: previousOrderFilters?.untilDate,
                  employeeId: previousOrderFilters?.employeeId,
                  storeId: previousOrderFilters?.storeId,
                })
              )
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* Employee */}
        <div className="col-4 mb-4">
          <label className="form-label form--label">Employee</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="employee"
            options={optionsEmployees}
            value={
              previousOrderFilters.employeeId
                ? optionsEmployees.find(
                    (option) => option.value == previousOrderFilters?.employeeId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updatePreviousOrderFilters({
                  countryId: previousOrderFilters?.countryId,
                  stateId: previousOrderFilters?.stateId,
                  deliveryAreaId: previousOrderFilters?.deliveryAreaId,
                  search: previousOrderFilters?.search,
                  receivingOption: previousOrderFilters?.receivingOption,
                  orderStatus: previousOrderFilters?.orderStatus,
                  sortType: previousOrderFilters?.sortType,
                  fromDate: previousOrderFilters?.fromDate,
                  untilDate: previousOrderFilters?.untilDate,
                  employeeId: selectedOption?.value,
                  storeId: previousOrderFilters?.storeId,
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
            instanceId="sort"
            options={optionsSort}
            value={
              previousOrderFilters.sortType
                ? optionsSort.find(
                    (option) => option.value == previousOrderFilters?.sortType
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updatePreviousOrderFilters({
                  countryId: previousOrderFilters?.countryId,
                  stateId: previousOrderFilters?.stateId,
                  deliveryAreaId: previousOrderFilters?.deliveryAreaId,
                  search: previousOrderFilters?.search,
                  receivingOption: previousOrderFilters?.receivingOption,
                  orderStatus: previousOrderFilters?.orderStatus,
                  sortType: selectedOption?.value,
                  fromDate: previousOrderFilters?.fromDate,
                  untilDate: previousOrderFilters?.untilDate,
                  employeeId: previousOrderFilters?.employeeId,
                  storeId: previousOrderFilters?.storeId,
                })
              )
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* ---------------------------- */}

        {/* order serial */}
        <div className="col-4 mb-2">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: '90%' }}>
            <label className="form-label hr--label">Order Serial</label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* from date */}
        <div className="col-4 mb-2">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: '90%' }}>
            <label className="form-label hr--label">From Period</label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* until date */}
        <div className="col-4 mb-2">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: '90%' }}>
            <label className="form-label hr--label">Until Period</label>
            <hr className="w-100 my-0" />
          </div>
        </div>

        {/* order serial input */}
        <div className="col-4 mb-4">
          <input
            type="search"
            className="form--input"
            placeholder="Order Serial .."
            value={previousOrderFilters?.search || ''}
            onChange={(event) =>
              dispatch(
                updatePreviousOrderFilters({
                  countryId: previousOrderFilters?.countryId,
                  stateId: previousOrderFilters?.stateId,
                  deliveryAreaId: previousOrderFilters?.deliveryAreaId,
                  search: event.target.value,
                  receivingOption: previousOrderFilters?.receivingOption,
                  orderStatus: previousOrderFilters?.orderStatus,
                  sortType: previousOrderFilters?.sortType,
                  fromDate: previousOrderFilters?.fromDate,
                  untilDate: previousOrderFilters?.untilDate,
                  employeeId: previousOrderFilters?.employeeId,
                  storeId: previousOrderFilters?.storeId,
                })
              )
            }
          />
        </div>

        {/* from date input */}
        <div className="col-4 mb-4">
          <input
            className="form--input"
            type="date"
            readOnly
            value={previousOrderFilters?.fromDate || ''}
            onChange={(event) =>
              dispatch(
                updatePreviousOrderFilters({
                  countryId: previousOrderFilters?.countryId,
                  stateId: previousOrderFilters?.stateId,
                  deliveryAreaId: previousOrderFilters?.deliveryAreaId,
                  search: previousOrderFilters?.search,
                  receivingOption: previousOrderFilters?.receivingOption,
                  orderStatus: previousOrderFilters?.orderStatus,
                  sortType: previousOrderFilters?.sortType,
                  fromDate: event.target.value,
                  untilDate: previousOrderFilters?.untilDate,
                  employeeId: previousOrderFilters?.employeeId,
                  storeId: previousOrderFilters?.storeId,
                })
              )
            }
          />
        </div>

        {/* until date input */}
        <div className="col-4 mb-4">
          <input
            className="form--input"
            type="date"
            readOnly
            value={previousOrderFilters?.untilDate || ''}
            onChange={(event) =>
              dispatch(
                updatePreviousOrderFilters({
                  countryId: previousOrderFilters?.countryId,
                  stateId: previousOrderFilters?.stateId,
                  deliveryAreaId: previousOrderFilters?.deliveryAreaId,
                  search: previousOrderFilters?.search,
                  receivingOption: previousOrderFilters?.receivingOption,
                  orderStatus: previousOrderFilters?.orderStatus,
                  sortType: previousOrderFilters?.sortType,
                  fromDate: previousOrderFilters?.fromDate,
                  untilDate: event.target.value,
                  employeeId: previousOrderFilters?.employeeId,
                  storeId: previousOrderFilters?.storeId,
                })
              )
            }
          />
        </div>

        {/* --------------------------- */}

        {/* products total price */}
        <div className="col-4">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span
              className="fw-600 profile--span-title"
              style={{ lineHeight: 'initial' }}>
              Products Total
            </span>
            {productsTotalPrice} SDG
          </label>
        </div>

        {/* delivery total (only in delivery mode) */}
        <div className="col-4">
          <label className="col-form-label form--label profile--label scale--3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-chevron-double-right">
              <path
                fillRule="evenodd"
                d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"></path>
              <path
                fillRule="evenodd"
                d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
            <span
              className="fw-600 profile--span-title"
              style={{ lineHeight: 'initial' }}>
              Delivery Total
            </span>
            {deliveryTotalPrice} SDG
          </label>
        </div>

        {/* total rows */}
        <div className="col-4">
          <h3
            className="text-end mb-0 fw-bold text-decoration-underline text-theme"
            style={{ marginRight: '10%' }}>
            {totalRows}
          </h3>
        </div>
      </div>
    </div>
  );
} // end function
