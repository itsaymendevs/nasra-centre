'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';

export default function NewForm({ states, districts, deliveryTimes }) {
  // ::root
  const options = [];
  const optionsTwo = [];
  const optionsThree = [];

  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url / cookies
  const dispatch = useDispatch();
  const router = useRouter();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: formData state
  const initialState = {
    name: '',
    nameAr: '',
    stateId: null,
    districtId: null,
    deliveryTimeId: null,
    price: '',
    isActive: 0,
  };
  const [formData, setFormData] = useState(initialState);

  // ---------------------------------- states ----------------------------------

  states.map((state) => options.push({ value: state.id, label: state.name }));

  districts.map((district) => {
    // 2.1: if there is mainCategory
    formData.stateId &&
      (formData.stateId
        ? district.stateId == formData.stateId &&
          optionsTwo.push({ value: district.id, label: district.name })
        : optionsTwo.push({ value: district.id, label: district.name }));
  });

  deliveryTimes.map((deliveryTime) =>
    optionsThree.push({ value: deliveryTime.id, label: deliveryTime.title })
  );

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]:
        event.target.type == 'checkbox'
          ? event.target.checked
          : event.target.value,
    }));
  }; // end function

  // 2: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.1: insert new item
    dispatch(IsLoading());
    const response = await fetch(`${url}/api/delivery/store`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });
    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    router.refresh();
  };

  // ---------------------------------- page ----------------------------------

  return (
    <form className="form--page mb-5" onSubmit={handleSubmit}>
      <div className="row g-0">
        {/* name */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name</label>
          <input
            name="name"
            type="text"
            required
            className="form-control form--input"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>

        {/* name ar */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name Ar</label>
          <input
            name="nameAr"
            type="text"
            required
            className="form-control form--input"
            value={formData.nameAr}
            onChange={handleInputChange}
          />
        </div>

        {/* state */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">State</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="state"
            options={options}
            required
            value={
              formData.stateId
                ? options.find((option) => option.value == formData?.stateId)
                : ''
            }
            onChange={(selectedOption) =>
              setFormData((state) => ({
                ...state,
                stateId: selectedOption?.value,
                districtId: null,
              }))
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* country */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">District</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="county"
            options={optionsTwo}
            value={
              optionsTwo.length > 0 && formData.districtId
                ? optionsTwo.find(
                    (option) => option.value == formData?.districtId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              setFormData((state) => ({
                ...state,
                districtId: selectedOption?.value,
              }))
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* delivery time */}
        <div className="col-12 mb-4">
          <label className="form-label form--label">
            Estimated Time for Delivery
          </label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="deliveryTime"
            options={optionsThree}
            value={
              formData.deliveryTimeId
                ? optionsThree.find(
                    (option) => option.value == formData?.deliveryTimeId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              setFormData((state) => ({
                ...state,
                deliveryTimeId: selectedOption?.value,
              }))
            }
            placeholder={''}
            isClearable
          />
        </div>

        {/* delivery price */}
        <div className="col-6 mb-4">
          <label className="form-label form--label">Delivery Price</label>
          <input
            name="price"
            type="number"
            step={0.01}
            min={0}
            required
            className="form-control form--input"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>

        {/* disable delivery in this area */}
        <div className="col-6 align-self-end mb-4">
          <div className="form-check">
            <input
              name="isActive"
              className="form-check-input"
              type="checkbox"
              id="formCheck-2"
              checked={formData.isActive}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-2">
              Stop delivery for this area
            </label>
          </div>
        </div>

        {/* submit */}
        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="submit">
            Save item
          </button>
        </div>
      </div>
    </form>
  );
} // end functinon
