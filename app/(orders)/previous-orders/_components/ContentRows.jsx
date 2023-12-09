import Link from 'next/link';
import React from 'react';

export default function ContentRows() {
  return (
    <div id="results--row">
      {/* row */}
      <div className="row g-0 align-items-center mb-2">
        <div className="col-12">
          {/* item */}
          <div className="accordion" role="tablist" id="results--orders">
            <div className="accordion-item results--order">
              {/* titles */}
              <h2 className="accordion-header" role="tab">
                <button
                  className="accordion-button collapsed results--order-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#results--orders .item-1"
                  aria-expanded="false"
                  aria-controls="results--orders .item-1">
                  <span>Ahmed Omer</span>
                  <span className="fw-bold">12,250</span>
                  <span>Khartoum / Ebaid Khatim</span>
                  <span className="text-theme">Completed</span>
                </button>
              </h2>

              {/* collapse */}
              <div
                className="accordion-collapse collapse item-1 pt-2"
                role="tabpanel"
                data-bs-parent="#results--orders">
                <div className="accordion-body">
                  <div className="row g-0">
                    {/* customer */}
                    <div className="col-4 mb-4">
                      <label className="form-label form--label text-theme fs-12 mb-1">
                        Customer
                      </label>
                      <label className="form-label form--label profile--label">
                        Ahmed Omar
                      </label>
                    </div>

                    {/* phone */}
                    <div className="col-4 mb-4">
                      <label className="form-label form--label text-theme fs-12 mb-1">
                        Phone
                      </label>
                      <label className="form-label form--label profile--label">
                        66 905575 / 66 505200
                      </label>
                    </div>

                    {/* payment */}
                    <div className="col-4 mb-4">
                      <label className="form-label form--label text-theme fs-12 mb-1">
                        Payment
                      </label>
                      <label className="form-label form--label profile--label">
                        CyberPay
                      </label>
                    </div>

                    {/* address */}
                    <div className="col-12 mb-4">
                      <label className="form-label form--label text-theme fs-12 mb-1">
                        Rough Address
                      </label>
                      <label className="form-label form--label profile--label">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quo, iusto ad. Ipsam voluptas ipsa tempora, odio
                        exercitationem excepturi minus earum commodi.
                        <br />
                      </label>
                    </div>

                    {/* status / employee changed status */}
                    <div className="col-6 mb-4">
                      <label className="col-form-label form--label profile--label">
                        Processing / Yasir Ahmed
                      </label>
                    </div>
                    <div className="col-6 text-end mb-4">
                      <label className="col-form-label form--label text-theme fs-12">
                        11 / 12 / 2023 - 06:20 PM
                      </label>
                    </div>

                    {/* notes */}
                    <div className="col-12 mb-3">
                      <label className="form-label form--label text-theme fs-12 mb-1">
                        Additional Notes
                      </label>
                      <label className="form-label form--label profile--label">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        <br />
                      </label>
                    </div>

                    {/* view order button */}
                    <div className="col-12 text-end mb-2">
                      <Link
                        className="btn btn--theme btn--sm fs-12 rounded-1 px-5"
                        role="button"
                        href="/single-order/1">
                        View Order
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* end collapse */}
            </div>
            {/* end item */}
          </div>
          {/* end wrapper according */}
        </div>
      </div>
    </div>
    // end outer wrapper
  ); // end return
} // end function
