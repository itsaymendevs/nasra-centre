'use client';

import {
  toggleSortSubCategoryModal,
  updateSubCategoryFilters,
} from '@/slices/FirstModalSlice';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
// ----------------------------------------------------------------------------------------------------

export default function ContentFilters({ totalRows, mainCategories }) {
  // ::root
  const options = [];
  mainCategories.map((mainCategory) =>
    options.push({ value: mainCategory.id, label: mainCategory.name })
  );

  // 1: use dispatch
  const dispatch = useDispatch();
  const { subCategoryFilters } = useSelector((state) => state.FirstModalSlice);

  // ------------------------Page-----------------------

  return (
    <div id="filters--wrap" className="mb-5">
      {/* -------------------------- */}

      {/* 1: general types */}
      <div className="row g-0 align-items-end general-filters">
        <div className="col-4 ">
          <label className="form-label form--label">Main Category</label>
          <Select
            className="form--select-container"
            classNamePrefix="form--select"
            instanceId="mainCategory"
            options={options}
            onChange={(selectedOption) =>
              dispatch(
                updateSubCategoryFilters({
                  mainCategoryId: selectedOption?.value,
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

        {/* sort */}
        <div className="col-4">
          <Link
            className="btn btn--theme btn--sort scalemix--3 px-4 rounded-1"
            role="button"
            data-bs-toggle="tooltip"
            data-bss-tooltip=""
            data-bs-placement="right"
            title="Sort Sub-Categories"
            onClick={() => dispatch(toggleSortSubCategoryModal(true))}
            href="#">
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
          </Link>
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
    </div>
  );
} // end function
