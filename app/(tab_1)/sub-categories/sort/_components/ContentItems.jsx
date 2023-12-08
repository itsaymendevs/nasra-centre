import React from 'react';

export default function ContentItems() {
  return (
    <form className="d-block">
      {/* submit button */}
      <div className="text-center d-block mb-4">
        <button
          className="btn btn--theme btn--submit btn--sm rounded-1"
          type="button">
          Save arrangement
        </button>
      </div>
      {/* end submit */}

      {/* result row */}
      <div id="results--row">
        {/* item */}
        <div className="row g-0 align-items-center results--item sort--item">
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              SC-001
            </label>
          </div>
          <div className="col-4">
            <label className="col-form-label form--label row--label">
              Furits &amp; Vegetables
            </label>
          </div>
          <div className="col-5">
            <label className="col-form-label form--label row--label">
              الفواكه والخضروات
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

        {/* item */}
        <div className="row g-0 align-items-center results--item sort--item">
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              SC-002
            </label>
          </div>
          <div className="col-4">
            <label className="col-form-label form--label row--label">
              Milk &amp; Cheese
            </label>
          </div>
          <div className="col-5">
            <label className="col-form-label form--label row--label">
              الالبان والجبن
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

        {/* item */}
        <div className="row g-0 align-items-center results--item sort--item">
          <div className="col-2">
            <label className="col-form-label form--label row--label">
              SC-003
            </label>
          </div>
          <div className="col-4">
            <label className="col-form-label form--label row--label">
              Canned Foods
            </label>
          </div>
          <div className="col-5">
            <label className="col-form-label form--label row--label">
              الأطعمة المعلبة
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
      </div>
    </form>
  );
} // end function