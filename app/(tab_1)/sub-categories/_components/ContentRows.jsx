'use client';

import Link from 'next/link';
import React from 'react';

import { toggleEditSubCategoryModal } from '@/slices/FirstModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleConfirmModal } from '@/slices/ConfirmModalSlice';

export default function ContentRows({ subCategories }) {
  // ---------------------------------- dispatch ----------------------------
  const dispatch = useDispatch();
  const { subCategoryFilters } = useSelector((state) => state.FirstModalSlice);
  const filterSubCategories = subCategories;

  // * ::filter subCategories
  subCategories = filterSubCategories.filter((subCategory) =>
    subCategoryFilters.mainCategoryId
      ? subCategory.mainCategoryId == subCategoryFilters.mainCategoryId
      : true
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
        <div className="col-4">
          <label className="col-form-label form--label row--label">
            Name Ar
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}
      {subCategories.map((subCategory) => (
        <div
          className="row g-0 align-items-center results--item"
          key={subCategory.id}>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {subCategory.serial}
            </label>
          </div>
          <div className="col-4">
            <label className="col-form-label form--label row--label">
              {subCategory.name}
            </label>
          </div>
          <div className="col-4">
            <label className="col-form-label form--label row--label">
              {subCategory.nameAr}
            </label>
          </div>
          <div className="col-2 text-center">
            <button
              className="btn btn--raw-icon edit scale--3 same--line"
              type="button"
              onClick={() =>
                dispatch(
                  toggleEditSubCategoryModal({
                    status: true,
                    id: subCategory.id,
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

            {/* delete */}
            <button
              className="btn btn--raw-icon edit scale--3 same--line"
              type="button"
              onClick={() =>
                dispatch(
                  toggleConfirmModal({
                    status: true,
                    targetURL: `${process.env.domainURL}/api/sub-categories/${subCategory.id}/delete`,
                    targetName: 'Sub-Category',
                  })
                )
              }>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-trash-fill trash--icon"
                viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  ); // end return
} // end function
