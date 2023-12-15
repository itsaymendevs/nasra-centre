'use client';

import GlobalPortal from '@/portals/GlobalPortal';
import { toggleEditSubCategoryModal } from '@/slices/FirstModalSlice';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Select from 'react-select';
import { useCookies } from 'next-client-cookies';

export default function EditPortal({ mainCategories, subCategories }) {
  // ::root
  const options = [];
  mainCategories.map((mainCategory) => {
    options.push({ value: mainCategory.id, label: mainCategory.name });
  });

  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- states ----------------------------------

  // 1: modal states
  const { editSubCategoryModal, editSubCategoryId } = useSelector(
    (state) => state.FirstModalSlice
  );

  // 2: formData state
  const initialState = {
    id: '',
    name: '',
    nameAr: '',
    mainCategoryId: '',
  };

  // 2.1: select states
  const mainCategorySelectedOption = null;

  // initiate
  const [formData, setFormData] = useState(initialState);

  // initiate select
  const [mainCategorySelectedOptionState, setMainCategorySelectedOptionState] =
    useState(mainCategorySelectedOption);

  // ---------------------------------- functions ----------------------------------

  // 1: get the item from id
  const subCategory = subCategories.find(
    (item) => item.id == editSubCategoryId
  );

  // 2: set item to state + select options
  useEffect(() => {
    if (subCategory) {
      setFormData((state) => ({
        ...state,
        id: subCategory.id,
        name: subCategory.name,
        nameAr: subCategory.nameAr,
        mainCategoryId: subCategory.mainCategoryId,
      }));

      setMainCategorySelectedOptionState((state) =>
        options.find((item) => item.value == subCategory.mainCategoryId)
      );
    } // end if
  }, [editSubCategoryId]);

  // 3: handle input change
  const handleInputChange = (event) => {
    setFormData((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  }; // end function

  // 4: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 4.1: insert new item
    const response = await fetch(`${url}/api/sub-categories/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(formData),
    });

    setFormData(initialState);
    router.refresh();
    dispatch(toggleEditSubCategoryModal({ status: false }));
  };

  // ---------------------------------- page ----------------------------------
  return (
    <>
      {editSubCategoryModal && (
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
                  <h4 className="modal-title fw-bold">Edit Sub-Category</h4>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={() =>
                      dispatch(toggleEditSubCategoryModal({ status: false }))
                    }
                    aria-label="Close"></button>
                </div>

                <div className="modal-body">
                  <div className="row g-0 align-items-end">
                    <div className="col-6 mb-4">
                      <label className="form-label form--label">
                        Main Category
                      </label>
                      <Select
                        className="form--select-container"
                        classNamePrefix="form--select"
                        instanceId="mainCategoryId"
                        name="mainCategoryId"
                        value={mainCategorySelectedOptionState}
                        options={options}
                        required
                        onChange={(selectedOption) => {
                          setMainCategorySelectedOptionState(selectedOption);
                          setFormData((state) => ({
                            ...state,
                            mainCategoryId: selectedOption?.value,
                          }));
                        }}
                        placeholder={''}
                        isClearable
                      />
                    </div>
                    <div className="col-6 mb-4"></div>
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
                  </div>
                </div>

                <div className="modal-footer">
                  <button
                    className="btn border-0 rounded-1"
                    type="button"
                    onClick={() =>
                      dispatch(toggleEditSubCategoryModal({ status: false }))
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
