'use client';

import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import Sortable, { MultiDrag } from 'sortablejs';
import { useCookies } from 'next-client-cookies';
import { IsLoading, IsNotLoading } from '@/slices/LoadingSlice';
import { useDispatch } from 'react-redux';

export default function ContentItems({ types, mainCategoryId, subCategoryId }) {
  // ---------------------------------- global ----------------------------------

  // 1: use dispatch + url
  const dispatch = useDispatch();
  const url = 'http://127.0.0.1:8000';
  const cookies = useCookies();
  const token = `Bearer ${cookies.get('token')}`;

  // ---------------------------------- States ----------------------------------

  const initialState = types.map((type) => ({
    id: type.id,
    serial: type.serial,
    name: type.name,
    nameAr: type.nameAr,
  }));
  const [state, setState] = useState(initialState);

  // ---------------------------------- functions ----------------------------------

  // 1: handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 2: get ids into array
    const sortedItems = [];

    document.querySelectorAll('.sortedItem').forEach(function (item) {
      sortedItems.push(item.value);
    });

    // 3: update
    dispatch(IsLoading());
    const response = await fetch(
      `${url}/api/inner-types/${mainCategoryId}/${subCategoryId}/sort/update`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({ sortedItems: sortedItems }),
      }
    );
    dispatch(IsNotLoading());
    console.log(await response.json());
  };

  // ---------------------------------- page ----------------------------------

  return (
    <form className="d-block" onSubmit={handleSubmit}>
      {/* submit button */}
      <div className="text-center d-block mb-4">
        <button
          className="btn btn--theme btn--submit btn--sm rounded-1"
          type="submit">
          Save arrangement
        </button>
      </div>
      {/* end submit */}

      {/* result row */}
      <div id="results--row">
        <ReactSortable
          multiDrag
          animation={200}
          delayOnTouchStart={true}
          delay={2}
          list={state}
          setList={setState}>
          {state.map((item) => (
            <div
              className="row g-0 align-items-center results--item sort--item"
              key={item.id}>
              {/* hidden id */}
              <input type="hidden" className="sortedItem" value={item.id} />

              <div className="col-2">
                <label className="col-form-label form--label row--label">
                  {item.serial}
                </label>
              </div>
              <div className="col-4">
                <label className="col-form-label form--label row--label">
                  {item.name}
                </label>
              </div>
              <div className="col-5">
                <label className="col-form-label form--label row--label">
                  {item.nameAr}
                </label>
              </div>
              <div className="col-1">
                <button
                  className="btn btn--raw-icon edit scale--3 handle"
                  type="button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-arrows-move">
                    <path
                      fillRule="evenodd"
                      d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </ReactSortable>
      </div>
    </form>
  );
} // end function
