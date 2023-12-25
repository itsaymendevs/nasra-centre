'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditPaymentModal } from '@/slices/SeventhModalSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import Select from 'react-select';

export default function EditPortal({ payments }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  const optionsPaymentTypes = [
    { value: 'DIRECTPAYMENT', label: 'Direct Payment' },
    { value: 'ATRECEIVINGPAYMENT', label: 'At Receiving Payment' },
    { value: 'ONLINEBANKINGPAYMENT', label: 'Online Banking Payment' },
  ];

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { editPaymentModal, editPaymentId } = useSelector(
    (state) => state.SeventhModalSlice
  );

  // 2: formData state
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

  // 1: get the item from id
  const payment = payments.find((item) => item.id == editPaymentId);

  // 2: set item to state
  useEffect(() => {
    if (payment) {
      setFormData((state) => ({
        ...state,
        id: payment.id,
        name: payment.name,
        nameAr: payment.nameAr,
        paymentType: payment.paymentType,
        accountName: payment.accountName,
        accountNumber: payment.accountNumber,
        isForDelivery: payment.isForDelivery,
        isForPickup: payment.isForPickup,
        isForRefund: payment.isForRefund,
        isActive: payment.isActive,
      }));
    } // end if
  }, [editPaymentId]);

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

  // 4: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.1: insert new item
    document.querySelectorAll('.modal button[type="submit"]')[0].innerText =
      'Loading ..';

    const response = await fetch(`${url}/api/payments/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });

    // 4.2: hot reload + dispatch
    setFormData(initialState);
    router.refresh();
    dispatch(toggleEditPaymentModal({ status: false }));
  };

  // ---------------------------------- page ----------------------------------

  return (
    <>
      {editPaymentModal && (
        <GlobalPortal>
          {/* modal */}
          <form
            onSubmit={handleSubmit}
            className="modal fade show"
            role="dialog"
            tabIndex="-1"
            aria-modal="true"
            style={{
              display: 'block',
              paddingRight: '8px',
              backgroundColor: '#1111118a',
            }}
            id="edit-modal">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header modal--header">
                  <h4 className="modal-title fw-bold">Edit Payment</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() =>
                      dispatch(toggleEditPaymentModal({ status: false }))
                    }
                    aria-label="Close"></button>
                </div>

                {/* body */}
                <div className="modal-body">
                  <div className="row g-0 align-items-center">
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
                      <label className="form-label form--label">
                        Payment Type
                      </label>
                      <Select
                        className="form--select-container"
                        classNamePrefix="form--select"
                        instanceId="paymentType"
                        value={
                          formData.paymentType
                            ? optionsPaymentTypes.find(
                                (option) =>
                                  option.value == formData?.paymentType
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
                      <label className="form-label form--label">
                        Account Name
                      </label>
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
                      <label className="form-label form--label">
                        Account Number
                      </label>
                      <input
                        name="accountNumber"
                        type="text"
                        required
                        className="form--input"
                        value={formData.accountNumber}
                        onChange={handleInputChange}
                      />
                    </div>

                    {/* empty */}
                    <div className="col-12 mt-4"></div>

                    <div className="offset-1 col-3 mb-4">
                      <div className="form-check mb-2">
                        <input
                          name="isForDelivery"
                          className="form-check-input"
                          type="checkbox"
                          id="formCheck-4"
                          checked={formData.isForDelivery}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label ms-1"
                          htmlFor="formCheck-4">
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
                          id="formCheck-5"
                          checked={formData.isForPickup}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label ms-1"
                          htmlFor="formCheck-5">
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
                          id="formCheck-6"
                          checked={formData.isForRefund}
                          onChange={handleInputChange}
                        />
                        <label
                          className="form-check-label ms-1"
                          htmlFor="formCheck-6">
                          For Refund
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end body */}

                <div className="modal-footer">
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() =>
                      dispatch(toggleEditPaymentModal({ status: false }))
                    }>
                    Close
                  </button>
                  <button
                    className="btn btn--theme btn--sm px-5 rounded-1"
                    type="submit">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
          {/* end modal */}
        </GlobalPortal>
      )}
    </>
  );
} // end function
