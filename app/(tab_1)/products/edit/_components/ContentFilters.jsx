'use client';

import { updateProductFilters } from '@/slices/FirstModalSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

export default function ContentFilters({
  totalRows,
  mainCategories,
  subCategories,
  types,
}) {
  // ::root
  const options = [];
  const optionsTwo = [];
  const optionsThree = [];

  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url / cookies
  const dispatch = useDispatch();

  const { productFilters } = useSelector((state) => state.FirstModalSlice);

  // ---------------------------------- options ----------------------------------

  mainCategories.map((item) =>
    options.push({ value: item.id, label: item.name })
  );

  subCategories.map((subCategory) => {
    // 2.1: if there is mainCategory
    productFilters.mainCategoryId &&
      (productFilters.mainCategoryId
        ? subCategory.mainCategoryId == productFilters.mainCategoryId &&
          optionsTwo.push({ value: subCategory.id, label: subCategory.name })
        : optionsTwo.push({ value: subCategory.id, label: subCategory.name }));
  });

  types.map((type) => {
    // 2.1: if there is subCategory
    productFilters.subCategoryId &&
      (productFilters.subCategoryId
        ? type.subCategoryId == productFilters.subCategoryId &&
          optionsThree.push({ value: type.id, label: type.name })
        : optionsThree.push({ value: type.id, label: type.name }));
  });

  // ---------------------------------- page ----------------------------------

  return (
    <div id="filters--wrap" className="mb-5">
      {/* 1: general types */}
      <div className="row g-0 align-items-end general-filters">
        <div className="col-4 mb-4">
          <label className="form-label form--label">Main Category</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="mainCategory"
            options={options}
            value={
              productFilters.mainCategoryId
                ? options.find(
                    (option) => option.value == productFilters?.mainCategoryId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updateProductFilters({
                  mainCategoryId: selectedOption?.value,
                  subCategoryId: null,
                  typeId: null,
                  search: productFilters?.search,
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
              productFilters.subCategoryId
                ? optionsTwo.find(
                    (option) => option.value == productFilters?.subCategoryId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updateProductFilters({
                  subCategoryId: selectedOption?.value,
                  typeId: null,
                  mainCategoryId: productFilters?.mainCategoryId,
                  search: productFilters?.search,
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
              productFilters.typeId
                ? optionsThree.find(
                    (option) => option.value == productFilters?.typeId
                  )
                : ''
            }
            onChange={(selectedOption) =>
              dispatch(
                updateProductFilters({
                  typeId: selectedOption?.value,
                  mainCategoryId: productFilters?.mainCategoryId,
                  subCategoryId: productFilters?.subCategoryId,
                  search: productFilters?.search,
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
            type="search"
            className="form--input"
            placeholder="Search .."
            value={productFilters?.search || ''}
            onChange={(event) =>
              dispatch(
                updateProductFilters({
                  search: event.target.value,
                  mainCategoryId: productFilters?.mainCategoryId || null,
                  subCategoryId: productFilters?.subCategoryId || null,
                  typeId: productFilters?.typeId || null,
                })
              )
            }
          />
        </div>

        {/* empty */}
        <div className="col-4"></div>

        {/* total of products */}
        <div className="col-4">
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
