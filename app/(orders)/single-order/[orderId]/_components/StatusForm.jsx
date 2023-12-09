import Link from 'next/link';
import React from 'react';

export default function ToggleForm() {
  return (
    <div id="order--wrap">
      {/* hr - status changer + timing */}
      <div className="d-flex align-items-center justify-content-between mb-3 mt-4">
        <label className="form-label hr--label mb-0">Order Status</label>
        <hr className="w-100 my-0" />
        <label
          className="form-label text-center hr--label mb-0"
          style={{ minWidth: '160px' }}>
          <span className="d-block mb-1 fw-bold">Ahmed Omar</span>
          <span className="d-block mb-1">12 Sep 2023 - 10:00 PM</span>
        </label>
      </div>

      {/* ---------------------- */}

      <div className="row g-0 mb-5 pb-4">
        <div className="col-12">
          {/* tabs */}
          <div className="tab--wrap">
            {/* tabs link */}
            <ul className="nav nav-pills nav-justified" role="tablist">
              {/* 1: processing */}
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link active"
                  role="tab"
                  data-bs-toggle="pill"
                  href="#processing-tab">
                  Processing Order
                </a>
              </li>

              {/* cancelling order */}
              <li className="nav-item" role="presentation">
                <a
                  className="nav-link"
                  role="tab"
                  data-bs-toggle="pill"
                  href="#cancelling-tab">
                  Cancelling Order
                </a>
              </li>
            </ul>

            {/* -------------------- */}

            {/* tabs content */}
            <div className="tab-content">
              {/* 1: processing tab */}
              <div
                className="tab-pane fade show active"
                role="tabpanel"
                id="processing-tab">
                <div className="row g-0">
                  <div className="col" id="processing-extras">
                    {/* inner tabs (sms / note) */}
                    <div className="tab--wrap">
                      <ul
                        className="nav nav-tabs justify-content-center border-0 mb-4"
                        role="tablist">
                        {/* 1.1: sms */}
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link btn--theme btn--sm rounded-1 fs-13 text-capitalize me-2 border-0"
                            role="tab"
                            data-bs-toggle="tab"
                            href="#message-tab">
                            Message
                          </a>
                        </li>

                        {/* note */}
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link btn--theme btn--sm px-4 rounded-1 fs-13 text-capitalize border-0"
                            role="tab"
                            data-bs-toggle="tab"
                            href="#note-tab">
                            Order Note
                          </a>
                        </li>
                      </ul>

                      {/* inner tab content */}
                      <div className="tab-content py-0">
                        {/* 1.1: sms */}
                        <div
                          className="tab-pane fade"
                          role="tabpanel"
                          id="message-tab">
                          <div className="row g-0 px-4 py-4 bg-white rounded-1 shadow-sm">
                            <div className="col-4 text-center mb-4">
                              <label className="form-label form--label text-theme fs-12 mb-1">
                                @orderNum
                              </label>
                              <label className="form-label form--label profile--label">
                                Order Number
                              </label>
                            </div>
                            <div className="col-4 text-center mb-4">
                              <label className="form-label form--label text-theme fs-12 mb-1">
                                @userFN
                              </label>
                              <label className="form-label form--label profile--label">
                                User First-name
                              </label>
                            </div>
                            <div className="col-4 text-center mb-4">
                              <label className="form-label form--label text-theme fs-12 mb-1">
                                @userLN
                              </label>
                              <label className="form-label form--label profile--label">
                                User Last-name
                                <br />
                              </label>
                            </div>
                            <div className="col-4 text-center mb-4 d-none">
                              <label className="form-label form--label text-theme fs-12 mb-1">
                                @pickupCode
                              </label>
                              <label className="form-label form--label profile--label">
                                Pickup Code
                                <br />
                              </label>
                            </div>
                            <div className="col-8 text-center mb-4 d-none"></div>

                            {/* customer message form */}
                            <div className="col-6 mb-4">
                              <label className="form-label form--label with-counter">
                                Customer Message
                                <small className="tag--optional">0/140</small>
                              </label>
                              <textarea
                                className="form--input form--textarea"
                                defaultValue="Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Minus numquam dignissimos
                                saepe ducimus, accusantium velit ab
                                necessitatibus eius libero nisi"></textarea>
                              <div className="text-center me-4 mt-2">
                                <a
                                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                                  role="button"
                                  href="#">
                                  Send
                                </a>
                              </div>
                            </div>

                            {/* receiver message form */}
                            <div className="col-6 mb-4">
                              <label className="form-label form--label with-counter">
                                Receiver Message
                                <small className="tag--optional">0/140</small>
                              </label>
                              <textarea
                                className="form--input form--textarea"
                                defaultValue="Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Sapiente dicta commodi odit
                                voluptatibus enim, repellat aliquid illo!"></textarea>
                              <div className="text-center me-4 mt-2">
                                <a
                                  className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                                  role="button"
                                  href="#">
                                  Send
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* end 1.1 sms tab */}

                        {/* ---------------------- */}

                        {/* 1.2: note content + form */}
                        <div
                          className="tab-pane fade"
                          role="tabpanel"
                          id="note-tab">
                          <div className="row g-0 px-4 py-4 bg-white rounded-1 shadow-sm">
                            <div className="col-9">
                              <label className="form-label form--label">
                                Note Content
                              </label>
                              <textarea className="form--input form--textarea w-100"></textarea>
                            </div>
                            <div className="col-3 text-end align-self-end">
                              <button
                                className="btn btn btn--outline-theme rounded-1 px-4 mb-1"
                                type="button"
                                data-bs-target="#confirm-modal"
                                data-bs-toggle="modal">
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                        {/* end note tab */}
                      </div>
                    </div>
                    {/* end inner tabs wrap */}
                  </div>
                  {/* end col */}

                  {/* --------------------------------- */}

                  {/* continue tab 1 */}
                  <div className="col-12 text-end align-self-end">
                    <hr className="mb-4" />
                  </div>

                  {/* change status */}
                  <div
                    className="col-12 text-center mb-4"
                    id="processing-buttons">
                    {/* previous -> step back */}
                    <button
                      className="btn border-0 rounded-1 me-2"
                      type="button"
                      data-bs-dismiss="modal">
                      Previous
                    </button>

                    {/* next -> step forward */}
                    <button
                      className="btn btn--theme btn--sm px-4 rounded-1 fs-13 text-capitalize"
                      type="button">
                      Next Process
                    </button>
                  </div>
                  {/* end change status wrap */}

                  {/* -------------------------- */}

                  {/* steps display column */}
                  <div className="col-12" id="processing-steps">
                    <div className="processing-steps rounded-1">
                      {/* pending */}
                      <button
                        className="btn btn--sm px-4 rounded-1 fs-13 text-capitalize scale--3 active"
                        type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-info-circle me-2"
                          data-bs-toggle="tooltip"
                          data-bss-tooltip=""
                          data-bs-placement="bottom"
                          title="Order is in pending state">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                        Pending
                      </button>
                      <hr style={{ width: '10%' }} />

                      {/* processing */}
                      <button
                        className="btn btn--sm px-4 rounded-1 fs-13 text-capitalize scale--3"
                        type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-info-circle me-2"
                          data-bs-toggle="tooltip"
                          data-bss-tooltip=""
                          data-bs-placement="bottom"
                          title="Order is in processing state">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                        Processing
                      </button>
                      <hr style={{ width: '10%' }} />

                      {/* delivered */}
                      <button
                        className="btn btn--sm px-4 rounded-1 fs-13 text-capitalize scale--3"
                        type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-info-circle me-2"
                          data-bs-toggle="tooltip"
                          data-bss-tooltip=""
                          data-bs-placement="bottom"
                          title="Order has been delivered">
                          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
                        </svg>
                        Delivered
                      </button>
                    </div>
                  </div>
                  {/* end column */}
                </div>
              </div>
              {/* end tab */}

              {/* ------------------------------------- */}
              {/* ------------------------------------- */}
              {/* ------------------------------------- */}

              {/* 2: cancelling tab + form */}
              <div
                className="tab-pane fade"
                role="tabpanel"
                id="cancelling-tab">
                <div className="row g-0">
                  {/* refund bill input (only appear if payment is done) */}
                  <div className="col-4 mb-4">
                    <label className="form-label form--label">
                      Refund Bill No.
                    </label>
                    <input type="text" className="form--input" />
                  </div>

                  {/* cancellation note */}
                  <div className="col-9">
                    <label className="form-label form--label">
                      Note about cancellation
                    </label>
                    <textarea className="form--input form--textarea w-100"></textarea>
                  </div>

                  {/* submit button -> toggle modal for confirm */}
                  <div className="col-3 text-end align-self-end">
                    <button
                      className="btn btn btn--outline-theme btn--outline-danger rounded-1 px-4 mb-1"
                      type="button"
                      data-bs-target="#confirm-modal"
                      data-bs-toggle="modal">
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
              {/* end tab 2: cancellation */}
            </div>
            {/* end tabs content */}
          </div>
        </div>
      </div>
    </div>
  );
} // end function
