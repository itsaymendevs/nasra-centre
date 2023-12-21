'use client';

import { useDispatch, useSelector } from 'react-redux';
import { updateUserFilters } from '@/slices/FifthModalSlice';
import React from 'react';
import Link from 'next/link';
import Select from 'react-select';

export default function ContentFilters({
  totalRows,
  countries,
  states,
  deliveryAreas,
}) {
  // ::root
  const options = [];
  const optionsTwo = [];
  const optionsThree = [];
  const optionsCompanies = [];

  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url / cookies
  const dispatch = useDispatch();

  const { userFilters } = useSelector((state) => state.FifthModalSlice);

  // ---------------------------------- options ----------------------------------

  countries.map((item) => options.push({ value: item.id, label: item.name }));

  states.map((singleState) => {
    // 2.1: if there is countryId
    userFilters.countryId &&
      (userFilters.countryId
        ? singleState.countryId == userFilters.countryId &&
          optionsTwo.push({ value: singleState.id, label: singleState.name })
        : optionsTwo.push({ value: singleState.id, label: singleState.name }));
  });

  deliveryAreas.map((deliveryArea) => {
    // 2.1: if there is stateId
    userFilters.stateId &&
      (userFilters.stateId
        ? deliveryArea.stateId == userFilters.stateId &&
          optionsThree.push({
            value: deliveryArea.id,
            label: deliveryArea.name,
          })
        : optionsThree.push({
            value: deliveryArea.id,
            label: deliveryArea.name,
          }));
  });

  // ---------------------------------- page ----------------------------------

  return (
    <div id="filters--wrap" className="mb-5">
      {/* -------------------------- */}

      {/* country */}
      <div className="row g-0 align-items-end general-filters">
        <div className="col-4 mb-4">
          <label className="form-label form--label">Country</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="country"
            options={options}
            onChange={(selectedOption) =>
              dispatch(
                updateUserFilters({
                  countryId: selectedOption?.value,
                  search: userFilters?.search,
                })
              )
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* state */}
        <div className="col-4 mb-4">
          <label className="form-label form--label">State</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="state"
            options={optionsTwo}
            value={
              optionsTwo.length > 0 && userFilters.stateId
                ? optionsTwo.find(
                    (option) => option.value == userFilters?.stateId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updateUserFilters({
                  stateId: selectedOption?.value,
                  countryId: userFilters?.countryId,
                  search: userFilters?.search,
                })
              )
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* region */}
        <div className="col-4 mb-4">
          <label className="form-label form--label">Region</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="region"
            options={optionsThree}
            value={
              optionsThree.length > 0 && userFilters.deliveryAreaId
                ? optionsThree.find(
                    (option) => option.value == userFilters?.deliveryAreaId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updateUserFilters({
                  deliveryAreaId: selectedOption?.value,
                  stateId: userFilters?.stateId,
                  countryId: userFilters?.countryId,
                  search: userFilters?.search,
                })
              )
            }
            placeholder={''}
            isClearable
          />
        </div>
        {/* -------------------------- */}
        {/* -------------------------- */}
        {/* -------------------------- */}
        {/* common part */}
        {/* search input */}
        <div className="col-4">
          <input
            name="search"
            type="search"
            className="form--input"
            placeholder="Search by Name .."
            value={userFilters?.search || ''}
            onChange={(event) =>
              dispatch(
                updateUserFilters({
                  search: event.target.value,
                  countryId: userFilters?.countryId,
                  stateId: userFilters?.stateId,
                  deliveryAreaId: userFilters?.deliveryAreaId,
                })
              )
            }
          />
        </div>

        {/* empty */}
        <div className="col-4"></div>

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
