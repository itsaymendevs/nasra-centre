'use client';

import React from 'react';
import Select from 'react-select';
import { toggleSortProductModal } from '@/slices/FirstModalSlice';
import { updateProductHomeFilters } from '@/slices/FirstModalSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ContentFilters({
  totalRows,
  mainCategories,
  subCategories,
  types,
  companies,
}) {
  // ::root
  const options = [];
  const optionsTwo = [];
  const optionsThree = [];
  const optionsCompanies = [];

  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url / cookies
  const dispatch = useDispatch();

  const { productHomeFilters } = useSelector((state) => state.FirstModalSlice);

  // ---------------------------------- options ----------------------------------

  companies.map((item) =>
    optionsCompanies.push({ value: item.id, label: item.name })
  );

  mainCategories.map((item) =>
    options.push({ value: item.id, label: item.name })
  );

  subCategories.map((subCategory) => {
    // 2.1: if there is mainCategory
    productHomeFilters.mainCategoryId &&
      (productHomeFilters.mainCategoryId
        ? subCategory.mainCategoryId == productHomeFilters.mainCategoryId &&
          optionsTwo.push({ value: subCategory.id, label: subCategory.name })
        : optionsTwo.push({ value: subCategory.id, label: subCategory.name }));
  });

  types.map((type) => {
    // 2.1: if there is subCategory
    productHomeFilters.subCategoryId &&
      (productHomeFilters.subCategoryId
        ? type.subCategoryId == productHomeFilters.subCategoryId &&
          optionsThree.push({ value: type.id, label: type.name })
        : optionsThree.push({ value: type.id, label: type.name }));
  });

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event) => {
    const filterType = event.target.value;

    if (filterType == 'generalTypes') {
      dispatch(
        updateProductHomeFilters({
          filterType: 'generalTypes',
          mainCategoryId: productHomeFilters?.mainCategoryId || null,
          subCategoryId: productHomeFilters?.subCategoryId || null,
          typeId: productHomeFilters?.typeId || null,
          search: productHomeFilters?.search || '',
          companyId: null,
          productType: null,
        })
      );
    } else if (filterType == 'companyNames') {
      dispatch(
        updateProductHomeFilters({
          filterType: 'companyNames',
          mainCategoryId: null,
          subCategoryId: null,
          typeId: null,
          search: productHomeFilters?.search || '',
          companyId: productHomeFilters?.companyId || null,
          productType: null,
        })
      );
    }
  }; // end function

  // ---------------------------------- page ----------------------------------

  return (
    <div id="filters--wrap" className="mb-5">
      {/* 1: radio types */}
      <div className="filters--radio-wrap">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="formCheck-1"
            name="filterType"
            value="generalTypes"
            checked={productHomeFilters.filterType == 'generalTypes'}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="formCheck-1">
            By General Types
          </label>
        </div>
        {/* <div className="form-check">
          <input className="form-check-input" type="radio" id="formCheck-3" />
          <label className="form-check-label" htmlFor="formCheck-3">
            By Product Types
          </label>
        </div> */}
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            id="formCheck-2"
            name="filterType"
            value="companyNames"
            checked={productHomeFilters.filterType == 'companyNames'}
            onChange={handleInputChange}
          />
          <label className="form-check-label" htmlFor="formCheck-2">
            By Company Name
          </label>
        </div>
      </div>

      {/* -------------------------- */}

      {/* 1: general types */}
      {productHomeFilters.filterType == 'generalTypes' && (
        <div className="row g-0 align-items-end general-filters">
          <div className="col-4 mb-4">
            <label className="form-label form--label">Main Category</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="mainCategory"
              options={options}
              value={
                productHomeFilters.mainCategoryId
                  ? options.find(
                      (option) =>
                        option.value == productHomeFilters?.mainCategoryId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                dispatch(
                  updateProductHomeFilters({
                    mainCategoryId: selectedOption?.value,
                    subCategoryId: null,
                    typeId: null,
                    search: productHomeFilters?.search,
                    companyId: null,
                    productType: null,
                    filterType: productHomeFilters?.filterType,
                  })
                )
              }
              placeholder={''}
              isClearable
            />
          </div>
          <div className="col-4 mb-4">
            <label className="form-label form--label">Sub Category</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="subCategory"
              options={optionsTwo}
              value={
                productHomeFilters.subCategoryId
                  ? optionsTwo.find(
                      (option) =>
                        option.value == productHomeFilters?.subCategoryId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                dispatch(
                  updateProductHomeFilters({
                    subCategoryId: selectedOption?.value,
                    typeId: null,
                    mainCategoryId: productHomeFilters?.mainCategoryId,
                    search: productHomeFilters?.search,
                    companyId: null,
                    productType: null,
                    filterType: productHomeFilters?.filterType,
                  })
                )
              }
              placeholder={''}
              isClearable
            />
          </div>
          <div className="col-4 mb-4">
            <label className="form-label form--label">Type</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="innerType"
              options={optionsThree}
              value={
                productHomeFilters.typeId
                  ? optionsThree.find(
                      (option) => option.value == productHomeFilters?.typeId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                dispatch(
                  updateProductHomeFilters({
                    typeId: selectedOption?.value,
                    mainCategoryId: productHomeFilters?.mainCategoryId,
                    subCategoryId: productHomeFilters?.subCategoryId,
                    search: productHomeFilters?.search,
                    companyId: null,
                    productType: null,
                    filterType: productHomeFilters?.filterType,
                  })
                )
              }
              placeholder={''}
              isClearable
            />
          </div>
          {/* end general types */}
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
              placeholder="Search By Name .."
              value={productHomeFilters?.search || ''}
              onChange={(event) =>
                dispatch(
                  updateProductHomeFilters({
                    mainCategoryId: productHomeFilters?.mainCategoryId,
                    subCategoryId: productHomeFilters?.subCategoryId,
                    typeId: productHomeFilters?.typeId,
                    search: event.target.value,
                    companyId: null,
                    productType: null,
                    filterType: productHomeFilters?.filterType,
                  })
                )
              }
            />
          </div>
          {/* sort */}
          <div className="col-4">
            <button
              className="btn btn--theme btn--sort scalemix--3 px-4 rounded-1"
              data-bss-tooltip=""
              data-bs-placement="right"
              type="button"
              onClick={() => dispatch(toggleSortProductModal(true))}
              title="Sort Products">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-arrow-down-up">
                <path
                  fillRule="evenodd"
                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"></path>
              </svg>
            </button>
          </div>
          {/* total of products */}
          <div className="col-4">
            <h3
              className="text-end mb-0 fw-bold text-decoration-underline text-theme"
              style={{ marginRight: '5%' }}>
              {totalRows}
            </h3>
          </div>
        </div>
      )}

      {/* 2: companyNames */}
      {productHomeFilters.filterType == 'companyNames' && (
        <div className="row g-0 align-items-end general-filters">
          <div className="col-4 mb-4">
            <label className="form-label form--label">Company</label>
            <Select
              className="form--select-container"
              classNamePrefix="form--select"
              instanceId="mainCategory"
              options={optionsCompanies}
              value={
                productHomeFilters.companyId
                  ? optionsCompanies.find(
                      (option) => option.value == productHomeFilters?.companyId
                    )
                  : ''
              }
              onChange={(selectedOption) =>
                dispatch(
                  updateProductHomeFilters({
                    mainCategoryId: null,
                    subCategoryId: null,
                    typeId: null,
                    search: productHomeFilters?.search,
                    companyId: selectedOption?.value,
                    productType: null,
                    filterType: productHomeFilters?.filterType,
                  })
                )
              }
              placeholder={''}
              isClearable
            />
          </div>

          {/* empty */}
          <div className="col-8 mb-4"></div>

          {/* end companyNames */}
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
              placeholder="Search By Name .."
              value={productHomeFilters?.search || ''}
              onChange={(event) =>
                dispatch(
                  updateProductHomeFilters({
                    mainCategoryId: null,
                    subCategoryId: null,
                    typeId: null,
                    search: event.target.value,
                    companyId: productHomeFilters?.companyId,
                    productType: null,
                    filterType: productHomeFilters?.filterType,
                  })
                )
              }
            />
          </div>
          {/* sort */}
          <div className="col-4">
            <button
              className="btn btn--theme btn--sort scalemix--3 px-4 rounded-1"
              data-bss-tooltip=""
              data-bs-placement="right"
              type="button"
              onClick={() => dispatch(toggleSortProductModal(true))}
              title="Sort Products">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-arrow-down-up">
                <path
                  fillRule="evenodd"
                  d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"></path>
              </svg>
            </button>
          </div>
          {/* total of products */}
          <div className="col-4">
            <h3
              className="text-end mb-0 fw-bold text-decoration-underline text-theme"
              style={{ marginRight: '5%' }}>
              {totalRows}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
} // end function
