'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Select from 'react-select';

export default function ContentTabs({ user, countries }) {
  // ---------------------------------- options ----------------------------------

  const options = [
    { value: 'pending', label: 'Pending' },
    { value: 'processing', label: 'Processing' },
    { value: 'canceled', label: 'Canceled' },
    { value: 'completed', label: 'Completed' },
  ];

  // ---------------------------------- states ----------------------------------

  const filtersState = {
    toSDG: 1,
    status: null,
  };
  const [formFilters, setFormFilters] = useState(filtersState);

  // ---------------------------------- functions ----------------------------------

  // 1: handle input change
  const handleInputChange = (event, toSDG) => {
    setFormFilters((state) => ({
      ...state,
      toSDG: toSDG,
    }));
  }; // end function

  // ---------------------------------- page ----------------------------------

  return (
    <div className="tab--wrap">
      {/* nav tabs */}
      <ul className="nav nav-pills nav-justified" role="tablist">
        {/* orders */}
        <li className="nav-item" role="presentation">
          <a
            className="nav-link active"
            role="tab"
            data-bs-toggle="pill"
            href="#orders-tab">
            Orders
          </a>
        </li>

        {/* favs */}
        <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            role="tab"
            data-bs-toggle="pill"
            href="#favs-tab">
            Favorites
          </a>
        </li>

        {/* receivers */}

        {user.country.code != 'SD' && (
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              role="tab"
              data-bs-toggle="pill"
              href="#receivers-tab">
              Receivers
            </a>
          </li>
        )}
      </ul>
      {/* end tabs */}

      {/* ---------------------------------------------- */}

      {/* tabs content */}
      <div className="tab-content">
        {/* orders tab */}
        <div
          className="tab-pane fade show active"
          role="tabpanel"
          id="orders-tab">
          <div id="filters--wrap">
            <div className="row g-0 align-items-end">
              {/* status filter */}
              <div className="col-4 mb-4 pb-3">
                <label className="form-label form--label">Order Status</label>
                <Select
                  className="form--select-container"
                  classNamePrefix="form--select"
                  instanceId="status"
                  options={options}
                  onChange={(selectedOption) =>
                    setFormFilters((state) => ({
                      ...state,
                      status: selectedOption?.value || null,
                    }))
                  }
                  placeholder={''}
                  isClearable
                />
              </div>

              {/* currency - uk ire */}
              {user.country.code != 'SD' && (
                <div className="col-8 text-end mb-4 pb-3">
                  {/* sd */}
                  <button
                    className={`btn btn--export btn--currency scale--3 px-4 ${
                      formFilters.toSDG === 1 && 'active'
                    }`}
                    type="button"
                    onClick={(event) => handleInputChange(event, 1)}>
                    <img className="me-2" src="/assets/img/Flags/SDN.png" />
                    SDN
                  </button>

                  {/* euro - ire */}
                  {user.country.code == 'IRL' && (
                    <button
                      className={`btn btn--export btn--currency scale--3 px-4 ms-2 ${
                        formFilters.toSDG !== 1 && 'active'
                      }`}
                      type="button"
                      onClick={(event) =>
                        handleInputChange(event, parseFloat(user.country.toSDG))
                      }>
                      <img className="me-2" src="/assets/img/Flags/EUR.png" />
                      EUR
                    </button>
                  )}

                  {/* gbp - uk */}
                  {user.country.code == 'UK' && (
                    <button
                      className={`btn btn--export btn--currency scale--3 px-4 ms-2 ${
                        formFilters.toSDG !== 1 && 'active'
                      }`}
                      type="button"
                      onClick={(event) =>
                        handleInputChange(event, parseFloat(user.country.toSDG))
                      }>
                      <img className="me-2" src="/assets/img/Flags/GBP.png" />
                      GBP
                    </button>
                  )}
                </div>
              )}
              {/* end currency */}
            </div>
          </div>
          {/* end filters wrap */}

          {/* ------------------------------------------ */}

          <div id="results--row">
            {/* titles */}
            <div
              className="row g-0 align-items-center results--header mb-2 active"
              id="results--header">
              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  Serial
                </label>
              </div>
              <div className="col-3">
                <label className="col-form-label form--label row--label">
                  Receiving Method
                </label>
              </div>
              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  Products
                </label>
              </div>
              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  Status
                </label>
              </div>
              <div className="col-1">
                <label className="col-form-label form--label row--label">
                  Price
                </label>
              </div>
              <div className="col-1">
                <label className="col-form-label form--label row--label">
                  Payment
                </label>
              </div>
              <div className="col-1">
                <label className="col-form-label form--label row--label"></label>
              </div>
            </div>

            {/* items */}
            <div className="row g-0 align-items-center results--item d-none">
              {/* serial */}
              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  OR-10503
                </label>
              </div>

              {/* methods */}
              <div className="col-3">
                <label className="col-form-label form--label row--label">
                  Delivery - Ebaid Khatm
                </label>
              </div>

              {/* total products */}
              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  12
                </label>
              </div>

              {/* status */}
              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  Completed
                </label>
              </div>

              {/* total price */}
              <div className="col-1">
                <label className="col-form-label form--label row--label">
                  12,580
                </label>
              </div>

              {/* payment method */}
              <div className="col-1">
                <label className="col-form-label form--label row--label">
                  CyberPay
                </label>
              </div>

              {/* options */}
              <div className="col-1">
                <div className="dropstart d-flex justify-content-center">
                  <button
                    className="btn dropdown-toggle results--dropdown"
                    aria-expanded="false"
                    data-bs-toggle="dropdown"
                    type="button"></button>
                  <div className="dropdown-menu results--dropdown-menu">
                    <Link
                      className="dropdown-item"
                      href="/customers/1/orders/1">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* end item */}
          </div>
          {/* end rows */}
        </div>
        {/* end orders tab */}

        {/* ------------------------------------------- */}

        {/* favs tab */}
        <div className="tab-pane fade" role="tabpanel" id="favs-tab">
          <div id="results--row-1">
            {/* titles */}
            <div
              className="row g-0 align-items-center results--header mb-2"
              id="results--header-1">
              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  Serial
                </label>
              </div>
              <div className="col-3">
                <label className="col-form-label form--label row--label">
                  Name
                </label>
              </div>
              <div className="col-3">
                <label className="col-form-label form--label row--label">
                  Sell / Offer Price
                </label>
              </div>
              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  Quantity
                </label>
              </div>
              <div className="col-1">
                <label className="col-form-label form--label row--label">
                  Favs
                </label>
              </div>
              <div className="col-1">
                <label className="col-form-label form--label row--label"></label>
              </div>
            </div>

            {/* item */}
            {user.favorites?.map((favorite) => (
              <div
                className="row g-0 align-items-center results--item"
                key={favorite.id}>
                {/* serial */}
                <div className="col-2">
                  <label className="col-form-label form--label row--label">
                    {favorite.product.serial}
                  </label>
                </div>

                {/* product name */}
                <div className="col-3">
                  <label className="col-form-label form--label row--label me-1">
                    {favorite.product.name}
                  </label>
                </div>

                {/* sell / offer */}
                <div className="col-3">
                  <label className="col-form-label form--label row--label">
                    {favorite.product.sellPrice / parseFloat(formFilters.toSDG)}{' '}
                    /{' '}
                    {favorite.product.offerPrice
                      ? favorite.product.offerPrice /
                        parseFloat(formFilters.toSDG)
                      : '-'}
                  </label>
                </div>

                {/* quantity */}
                <div className="col-2">
                  <label className="col-form-label form--label row--label">
                    {favorite.product.quantity}
                  </label>
                </div>

                {/* favs count */}
                <div className="col-1">
                  <label className="col-form-label form--label row--label">
                    -
                  </label>
                </div>

                {/* options */}
                <div className="col-1">
                  <div className="dropstart d-flex justify-content-center">
                    <button
                      className="btn dropdown-toggle results--dropdown"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      type="button"></button>
                    <div className="dropdown-menu results--dropdown-menu">
                      <Link
                        className="dropdown-item"
                        href={`/products/${favorite.product.id}`}>
                        Edit Product
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* end item */}
          </div>
          {/* end row */}
        </div>
        {/* end favs tab */}

        {/* ------------------------------------------- */}

        {/* receivers tab */}
        <div className="tab-pane fade " role="tabpanel" id="receivers-tab">
          <div id="results--row-2">
            {/* titles */}
            <div
              className="row g-0 align-items-center results--header mb-2"
              id="results--header-2">
              <div className="col-4">
                <label className="col-form-label form--label row--label">
                  Receiver
                </label>
              </div>
              <div className="col-3">
                <label className="col-form-label form--label row--label">
                  Phone
                </label>
              </div>
              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  Completed
                </label>
              </div>
              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  Canceled
                </label>
              </div>
              <div className="col-1">
                <label className="col-form-label form--label row--label"></label>
              </div>
            </div>

            {/* items */}
            {user.receivers?.map((receiver) => (
              <div
                className="row g-0 align-items-center results--item"
                key={receiver.id}>
                {/* receiver name */}
                <div className="col-4">
                  <label className="col-form-label form--label row--label">
                    {receiver.name}
                  </label>
                </div>

                {/* phone */}
                <div className="col-3">
                  <label className="col-form-label form--label row--label me-1">
                    {receiver.phone?.replace('249', '0')}
                  </label>
                </div>

                {/* completed orders */}
                <div className="col-2">
                  <label className="col-form-label form--label row--label">
                    -
                  </label>
                </div>

                {/* canceled orders */}
                <div className="col-2">
                  <label className="col-form-label form--label row--label">
                    -
                  </label>
                </div>

                {/* options */}
                <div className="col-1">
                  <div className="dropstart d-flex justify-content-center">
                    <button
                      className="btn dropdown-toggle results--dropdown"
                      aria-expanded="false"
                      data-bs-toggle="dropdown"
                      type="button"></button>
                    <div className="dropdown-menu results--dropdown-menu">
                      <Link
                        className="dropdown-item"
                        href={`/customers/${user.id}/receivers/${receiver.id}`}>
                        View Receiver
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* end row */}
          </div>
        </div>
        {/* end receivers tab */}
      </div>
      {/* end tab pane */}
    </div>
  ); // end return
} // end function
