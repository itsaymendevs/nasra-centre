'use client';

import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'next-client-cookies';

export default function EditForm({ products }) {
  // ---------------------------------- dispatch ----------------------------
  const dispatch = useDispatch();
  const url = process.env.domainURL;
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  const { productFilters } = useSelector((state) => state.FirstModalSlice);

  // ---------------------------------- filters ----------------------------------

  // 1: filter products (mainCategory - subCategory - types - search)
  useEffect(() => {
    products = products.filter((item) =>
      productFilters.mainCategoryId
        ? item.mainCategoryId == productFilters.mainCategoryId
        : true
    );

    products = products.filter((item) =>
      productFilters.subCategoryId
        ? item.subCategoryId == productFilters.subCategoryId
        : true
    );

    products = products.filter((item) =>
      productFilters.typeId ? item.typeId == productFilters.typeId : true
    );

    // 1.2: search filter
    products = products.filter(
      (item) => item.name.toLowerCase().indexOf(productFilters.search) > -1
    );

    // :1.3: update state
    setState(products);
  }, [productFilters]);

  // ---------------------------------- States ----------------------------------

  const [state, setState] = useState(products);

  // ---------------------------------- functions ----------------------------------

  // 1: update replacing state
  function handleInputChange(event, id) {
    const replacingState = state.map((item) => {
      if (item.id == id) {
        return { ...item, [event.target.name]: event.target.value };
      }
      return item;
    });

    setState(replacingState, handleSubmit(replacingState, id));
  } // end function

  // 2: handle submit
  const handleSubmit = async (replacingState, id) => {
    // 2.1: get id item
    const selectedItem = replacingState.filter((item) => {
      if (item.id == id) {
        return item;
      }
    });

    // 2.2: update server
    dispatch(IsLoading());
    const response = await fetch(`${url}/api/products/shorthand/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(selectedItem),
    });

    console.log(await response.json());
    dispatch(IsNotLoading());
  };

  // ---------------------------------- page ----------------------------------

  return (
    <form id="results--row">
      {/* submit button */}
      <div className="row g-0 align-items-center d-none">
        <div className="col-12">
          <div className="text-center d-block mb-4">
            <button
              className="btn btn--theme btn--submit btn--sm rounded-1"
              type="button">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      {/* ---------------------------- */}

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
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Selling Price
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Offer Price
          </label>
        </div>
        <div className="col-2">
          <label className="col-form-label form--label row--label">
            Quantity
          </label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ---------------------------- */}

      {/* item */}
      {state?.map((item) => (
        <div className="row g-0 align-items-center results--item" key={item.id}>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {item.serial}
            </label>
          </div>
          <div className="col-3">
            <label className="col-form-label form--label row--label me-1">
              {item.name}
            </label>
          </div>

          {/* sell price */}
          <div className="col-2">
            <input
              name="sellPrice"
              type="text"
              className="form--input in-row"
              min="0"
              step="0.01"
              required
              value={item.sellPrice}
              onChange={(event) => handleInputChange(event, item.id)}
            />
          </div>

          {/* offer price */}
          <div className="col-2">
            <input
              name="offerPrice"
              type="number"
              className="form--input in-row"
              min="0"
              step="0.01"
              value={item.offerPrice}
              onChange={(event) => handleInputChange(event, item.id)}
            />
          </div>

          {/* quantity */}
          <div className="col-2">
            <input
              name="quantity"
              type="number"
              className="form--input in-row"
              min="0"
              step="0.01"
              required
              value={item.quantity}
              onChange={(event) => handleInputChange(event, item.id)}
            />
          </div>

          {/* edit product */}
          <div className="col-1">
            <div className="dropstart d-flex justify-content-center">
              <button
                className="btn dropdown-toggle results--dropdown"
                aria-expanded="false"
                data-bs-toggle="dropdown"
                type="button"></button>
              <div className="dropdown-menu results--dropdown-menu">
                <Link className="dropdown-item" href={`/products/${item.id}`}>
                  Edit Product
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </form>
  ); // end return
} // end function
