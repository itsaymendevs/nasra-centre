'use client';

import Link from 'next/link';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import React, { useEffect, useState } from 'react';
import { useCookies } from 'next-client-cookies';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

export default function ContentRows({ products }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const router = useRouter();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  const { productHomeFilters } = useSelector((state) => state.FirstModalSlice);

  // ---------------------------------- filters ----------------------------------

  // 1: filter products (mainCategory - subCategory - types - search / company)
  useEffect(() => {
    products = products.filter((item) =>
      productHomeFilters.mainCategoryId
        ? item.mainCategoryId == productHomeFilters.mainCategoryId
        : true
    );

    products = products.filter((item) =>
      productHomeFilters.subCategoryId
        ? item.subCategoryId == productHomeFilters.subCategoryId
        : true
    );

    products = products.filter((item) =>
      productHomeFilters.typeId
        ? item.typeId == productHomeFilters.typeId
        : true
    );

    products = products.filter((item) =>
      productHomeFilters.companyId
        ? item.companyId == productHomeFilters.companyId
        : true
    );

    // 1.2: search filter
    products = products.filter(
      (item) => item.name.toLowerCase().indexOf(productHomeFilters.search) > -1
    );

    // :1.3: update state
    setState(products);
  }, [productHomeFilters]);

  // ---------------------------------- States ----------------------------------

  const [state, setState] = useState(products);

  // ---------------------------------- function ---------------------------------

  function handleInputChange(event, id, name, currentValue) {
    const replacingState = state.map((item) => {
      if (item.id == id) {
        return { ...item, [name]: !currentValue };
      }
      return item;
    });

    setState(replacingState);
  } // end function

  const handleToggleHidden = async (event, id) => {
    event.preventDefault();

    // 4.1: insert new item
    dispatch(IsLoading());
    const response = await fetch(`${url}/api/products/${id}/toggle-hidden`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    router.refresh();
  }; // end handle

  const handleToggleHome = async (event, id) => {
    event.preventDefault();

    // 4.1: insert new item
    dispatch(IsLoading());
    const response = await fetch(`${url}/api/products/${id}/toggle-home`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    dispatch(IsNotLoading());

    // 4.2: hot reload + dispatch
    router.refresh();
  }; // end handle

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
          <label className="col-form-label form--label row--label">
            Size/ M. Weight
          </label>
        </div>
        <div className="col-2">
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
          <label className="col-form-label form--label row--label">Favs</label>
        </div>
        <div className="col-1">
          <label className="col-form-label form--label row--label"></label>
        </div>
      </div>

      {/* ------------------------ */}
      {/* ------------------------ */}

      {/* content rows */}
      {state.map((item) => (
        <div className="row g-0 align-items-center results--item" key={item.id}>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {item.serial}
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label me-1">
              {item.name}
            </label>
          </div>
          <div className="col-2">
            {/* unit is not added yet cause relation */}
            <label className="col-form-label form--label row--label">
              {item.weight ? item.weight : '-'}
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {item.sellPrice} / {item.offerPrice ? item.offerPrice : '-'}
            </label>
          </div>
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              {item.quantity}
            </label>
          </div>
          <div className="col-1">
            <label className="col-form-label form--label row--label">-</label>
          </div>
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
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={(event) => {
                    handleInputChange(
                      event,
                      item.id,
                      'isHidden',
                      item.isHidden
                    );
                    handleToggleHidden(event, item.id);
                  }}>
                  {item.isHidden ? 'Show' : 'Hide'} Product
                </Link>
                <Link
                  className="dropdown-item"
                  href="#"
                  onClick={(event) => {
                    handleInputChange(
                      event,
                      item.id,
                      'isMainPage',
                      item.isMainPage
                    );
                    handleToggleHome(event, item.id);
                  }}>
                  {item.isMainPage ? 'Remove From' : 'Display In'} Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  ); // end return
} // end function
