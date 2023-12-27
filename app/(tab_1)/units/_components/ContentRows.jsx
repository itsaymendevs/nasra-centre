'use client';

import { toggleConfirmModal } from '@/slices/ConfirmModalSlice';
import { toggleEditUnitModal } from '@/slices/FirstModalSlice';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// ---------------------------------------------------------------------------------------------

export default function ContentRows({ units }) {
  // ---------------------------------- dispatch ----------------------------
  const dispatch = useDispatch();
  const { unitFilters } = useSelector((state) => state.FirstModalSlice);
  const filterUnits = units;

  // * ::filter companies
  units = filterUnits.filter(
    (unit) => unit.name.toLowerCase().indexOf(unitFilters.search) > -1
  );

  // ---------------------------------- page ---------------------------------

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
        <div className="col-2">
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">Abbr</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Name Ar
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">Abbr</label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}
      {units.map((unit) => (
        <div className="row g-0 align-items-center results--item" key={unit.id}>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {unit.serial}
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {unit.name}
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {unit.abbr}
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {unit.nameAr}
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {unit.abbrAr}
            </label>
          </div>
          <div className="col-2 text-center">
            {/* edit */}
            <button
              className="btn btn--raw-icon edit scale--3 same--line"
              type="button"
              onClick={() =>
                dispatch(toggleEditUnitModal({ status: true, id: unit.id }))
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
                    targetURL: `${process.env.domainURL}/api/units/${unit.id}/delete`,
                    targetName: 'Unit',
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
