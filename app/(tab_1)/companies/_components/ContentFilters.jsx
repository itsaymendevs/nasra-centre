'use client';

import { updateCompanyFilters } from '@/slices/FirstModalSlice';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ----------------------------------------------------------------------------------------------------

export default function ContentFilters({ totalRows }) {
  // 1: use dispatch
  const dispatch = useDispatch();
  const { companyFilters } = useSelector((state) => state.FirstModalSlice);

  // ------------------------Page-----------------------

  return (
    <div id="filters--wrap" className="mb-5">
      {/* -------------------------- */}

      {/* 1: general types */}
      <div className="row g-0 align-items-end general-filters">
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
            value={companyFilters.search}
            onChange={(e) => dispatch(updateCompanyFilters(e.target.value))}
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
