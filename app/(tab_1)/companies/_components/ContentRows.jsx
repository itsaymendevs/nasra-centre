'use client';

import { toggleConfirmModal } from '@/slices/ConfirmModalSlice';
import { toggleEditCompanyModal } from '@/slices/FirstModalSlice';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function ContentRows({ companies }) {
  // ---------------------------------- dispatch ----------------------------
  const dispatch = useDispatch();
  const { companyFilters } = useSelector((state) => state.FirstModalSlice);
  const filterCompanies = companies;

  // * ::filter companies
  companies = filterCompanies.filter(
    (company) => company.name.toLowerCase().indexOf(companyFilters.search) > -1
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
        <div className="col-3">
          <label className="col-form-label form--label row--label">Name</label>
        </div>
        <div className="col-3">
          <label className="col-form-label form--label row--label">
            Name Ar
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Products
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>
      {/* ------------------------ */}
      {/* ------------------------ */}
      {/* content rows */}
      {companies.map((company) => {
        return (
          <div
            className="row g-0 align-items-center results--item"
            key={company.id}>
            <div className="col-2">
              <label className="col-form-label form--label row--label">
                {company.serial}
              </label>
            </div>
            <div className="col-3">
              <label className="col-form-label form--label row--label">
                {company.name}
              </label>
            </div>
            <div className="col-3">
              <label className="col-form-label form--label row--label">
                {company.nameAr}
              </label>
            </div>
            <div className="col-2">
              <label className="col-form-label form--label row--label">-</label>
            </div>
            <div className="col-2 text-center">
              {/* edit */}
              <button
                className="btn btn--raw-icon edit scale--3 same--line"
                type="button"
                onClick={() =>
                  dispatch(
                    toggleEditCompanyModal({ status: true, id: company.id })
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
                      targetURL: `${process.env.domainURL}/api/companies/${company.id}/delete`,
                      targetName: 'Company',
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
        );
      })}{' '}
      {/* end map  */}
    </div>
  ); // end return
} // end function
