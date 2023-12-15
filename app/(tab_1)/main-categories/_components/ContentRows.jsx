'use client';

import Link from 'next/link';
import React from 'react';
import { toggleEditMainCategoryModal } from '@/slices/FirstModalSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function ContentRows({ mainCategories }) {
  // ---------------------------------- dispatch ----------------------------
  const dispatch = useDispatch();
  const { mainCategoryFilters } = useSelector((state) => state.FirstModalSlice);
  const filterMainCategories = mainCategories;

  // * ::filter mainCategories
  mainCategories = filterMainCategories.filter(
    (mainCategory) =>
      mainCategory.name.toLowerCase().indexOf(mainCategoryFilters.search) > -1
  );

  // -------------------------------- data ---------------------------------

  return (
    <div id="results--row">
      {/* titles */}
      <div
        className="row g-0 align-items-center results--header mb-2"
        id="results--header">
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Serial
          </label>
        </div>
        <div className="col-4">
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-5">
          <label className="col-form-label form--label row--label">
            Name Ar
          </label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}
      {mainCategories.map((mainCategory) => (
        <div
          className="row g-0 align-items-center results--item"
          key={mainCategory.id}>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {mainCategory.serial}
            </label>
          </div>
          <div className="col-4">
            <label className="col-form-label form--label row--label">
              {mainCategory.name}
            </label>
          </div>
          <div className="col-5">
            <label className="col-form-label form--label row--label">
              {mainCategory.nameAr}
            </label>
          </div>
          <div className="col-1">
            <button
              className="btn btn--raw-icon edit scale--3"
              type="button"
              onClick={() =>
                dispatch(
                  toggleEditMainCategoryModal({
                    status: true,
                    id: mainCategory.id,
                  })
                )
              }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-pencil-square">
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                <path
                  fillRule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  ); // end return
} // end function