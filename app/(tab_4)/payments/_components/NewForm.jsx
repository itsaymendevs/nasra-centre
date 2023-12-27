'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';
import Select from 'react-select';

export default function NewForm() {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url / cookies
  const dispatch = useDispatch();
  const router = useRouter();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  const optionsPaymentTypes = [
    { value: 'DIRECTPAYMENT', label: 'Direct Payment' },
    { value: 'ATRECEIVINGPAYMENT', label: 'At Receiving Payment' },
    { value: 'ONLINEBANKINGPAYMENT', label: 'Online Banking Payment' },
  ];

  // ---------------------------------- states ----------------------------------

  // 1: formData state
  const initialState = {
    paymentType: '',
    name: '',
    nameAr: '',
    accountName: '',
    accountNumber: '',
    isForDelivery: false,
    isForPickup: false,
    isForRefund: false,
    isActive: true,
  };
  const [formData, setFormData] = useState(initialState);

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
    const response = await fetch(`${url}/api/payments/store`, {
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
      <div className="row g-0 align-items-end">
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name</label>
          <input
            name="name"
            type="text"
            required
            className="form--input"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-6 mb-4">
          <label className="form-label form--label">Name Ar</label>
          <input
            name="nameAr"
            type="text"
            required
            className="form--input"
            value={formData.nameAr}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-4 mb-4">
          <label className="form-label form--label">Payment Type</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="paymentType"
            value={
              formData.paymentType
                ? optionsPaymentTypes.find(
                    (option) => option.value == formData?.paymentType
                  )
                : ''
            }
            options={optionsPaymentTypes}
            onChange={(selectedOption) =>
              setFormData((state) => ({
                ...state,
                paymentType: selectedOption?.value,
              }))
            }
            placeholder={''}
            isClearable
          />
        </div>

        <div className="col-4 mb-4">
          <label className="form-label form--label">Account Name</label>
          <input
            name="accountName"
            type="text"
            required
            className="form--input"
            value={formData.accountName}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-4 mb-4">
          <label className="form-label form--label">Account Number</label>
          <input
            name="accountNumber"
            type="text"
            required
            className="form--input"
            value={formData.accountNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className="col-12 mt-4"></div>

        <div className="offset-1 col-3 mb-4">
          <div className="form-check mb-2">
            <input
              name="isForDelivery"
              className="form-check-input"
              type="checkbox"
              id="formCheck-1"
              checked={formData.isForDelivery}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-1">
              For Delivery
            </label>
          </div>
        </div>

        <div className="offset-1 col-3 mb-4">
          <div className="form-check mb-2">
            <input
              name="isForPickup"
              className="form-check-input"
              type="checkbox"
              id="formCheck-2"
              checked={formData.isForPickup}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-2">
              For Pickup
            </label>
          </div>
        </div>

        <div className="offset-1 col-3 mb-4">
          <div className="form-check mb-2">
            <input
              name="isForRefund"
              className="form-check-input"
              type="checkbox"
              id="formCheck-3"
              checked={formData.isForRefund}
              onChange={handleInputChange}
            />
            <label className="form-check-label ms-1" htmlFor="formCheck-3">
              For Refund
            </label>
          </div>
        </div>

        <div className="col-12 text-center form--footer">
          <button
            className="btn btn--theme btn--submit rounded-1"
            type="submit">
            Save Method
          </button>
        </div>
      </div>
    </form>
  );
} // end function
