import React from 'react';
import Link from 'next/link';

// ----------------------------------------------------------------------------------------------------

export default function SideBar() {
  return (
    <div
      className="col-3 align-self-stretch navbar--col bg-cover px-0 position-relative"
      id="navbar--col">
      {/* cover */}
      <span className="cover dark"></span>
      <div className="navbar--content">
        {/* logo */}
        <img
          className="w-100 of-contain nav--logo mb-4"
          style={{ height: '160px' }}
          src="/assets/img/Logo/logo.png"
        />
        {/* end logo */}

        {/* navbar */}
        <div className="nav--menu">
          <div className="btn-group-vertical w-100" role="group">
            {/* 1: Orders */}
            <button
              className="btn fs-6 btn--navbar ps-3 scale--3"
              type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                className="bi bi-inboxes-fill"
                viewBox="0 0 16 16">
                <path d="M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z" />
              </svg>

              <Link className="stretched-link regulate--link" href="/orders">
                Orders
              </Link>
            </button>

            {/* 1: products */}
            <div className="btn-group dropend navbar--split-btn">
              <button
                className="btn fs-6 btn--navbar ps-3 scale--3 position-relative"
                type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-collection">
                  <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"></path>
                </svg>
                <Link
                  className="stretched-link regulate--link"
                  href="/products">
                  Products
                </Link>
              </button>

              {/* 1.5 dropdown */}
              <button
                className="btn dropdown-toggle dropdown-toggle-split btn--navbar btn--navbar-arrow scale--3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"></button>
              <div className="dropdown-menu dropdown-menu-dark results--dropdown-menu alternative">
                <Link className="dropdown-item" href="/main-categories">
                  Main Category
                </Link>
                <Link className="dropdown-item" href="/sub-categories">
                  Sub Category
                </Link>
                <Link className="dropdown-item" href="/inner-types">
                  Inner Types
                </Link>
                <Link className="dropdown-item" href="/companies">
                  Companies
                </Link>
                <Link className="dropdown-item" href="/units">
                  Measuring Units
                </Link>
              </div>
              {/* end dropdown */}
            </div>
            {/* end button */}

            {/* 2: delivery */}
            <div className="btn-group dropend navbar--split-btn">
              <button
                className="btn fs-6 btn--navbar ps-3 scale--3"
                type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-boxes">
                  <path
                    fillRule="evenodd"
                    d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434L7.752.066ZM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504ZM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933Zm1 3.134 2.75 1.571v-3.134L8.5 9.933v3.134Zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567Zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572ZM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21ZM5.258 2.643 8 4.21l2.742-1.567L8 1.076 5.258 2.643ZM15 9.933l-2.75 1.571v3.134L15 13.067V9.933ZM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571Z"></path>
                </svg>
                <Link className="stretched-link regulate--link" href="/areas">
                  Delivery
                </Link>
              </button>

              {/* 2.5: dropdown */}
              <button
                className="btn dropdown-toggle dropdown-toggle-split btn--navbar btn--navbar-arrow scale--3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"></button>
              <div className="dropdown-menu dropdown-menu-dark results--dropdown-menu">
                <Link className="dropdown-item" href="/areas/conditions">
                  Conditions
                </Link>
              </div>
            </div>

            {/* 3: pickups */}
            <div className="btn-group dropend navbar--split-btn">
              <button
                className="btn fs-6 btn--navbar ps-3 scale--3"
                type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-basket">
                  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"></path>
                </svg>
                <Link className="stretched-link regulate--link" href="/pickups">
                  Pickups
                </Link>
              </button>

              {/* 3.5: dropdown */}
              <button
                className="btn dropdown-toggle dropdown-toggle-split btn--navbar btn--navbar-arrow scale--3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"></button>
              <div className="dropdown-menu dropdown-menu-dark results--dropdown-menu">
                <Link className="dropdown-item" href="/pickups/conditions">
                  Conditions
                </Link>
              </div>
            </div>

            {/* 4: payment */}
            <button
              className="btn fs-6 btn--navbar ps-3 scale--3"
              type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-credit-card-2-front-fill">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2.5 1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-2zm0 3a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zm0 2a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1zm3 0a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1h-1z"></path>
              </svg>
              <Link className="stretched-link regulate--link" href="/payments">
                Payment
              </Link>
            </button>

            {/* 5: customers */}
            <button
              className="btn fs-6 btn--navbar ps-3 scale--3"
              type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-person-lines-fill">
                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"></path>
              </svg>
              <Link className="stretched-link regulate--link" href="/customers">
                Customers
              </Link>
            </button>

            {/* 6: general info */}
            <div className="btn-group dropend navbar--split-btn">
              <button
                className="btn fs-6 btn--navbar ps-3 scale--3"
                type="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="bi bi-gear-wide-connected">
                  <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434l.071-.286zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5zm0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78h4.723zM5.048 3.967c-.03.021-.058.043-.087.065l.087-.065zm-.431.355A4.984 4.984 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8 4.617 4.322zm.344 7.646.087.065-.087-.065z"></path>
                </svg>
                <Link className="stretched-link regulate--link" href="/help">
                  General Info
                </Link>
              </button>

              {/* 6.5: dropdown */}
              <button
                className="btn dropdown-toggle dropdown-toggle-split btn--navbar btn--navbar-arrow scale--3"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"></button>
              <div className="dropdown-menu dropdown-menu-dark results--dropdown-menu">
                <Link className="dropdown-item" href="/help">
                  Help Page
                </Link>
                <Link className="dropdown-item" href="/contact/1">
                  Contact - SD
                </Link>
                <Link className="dropdown-item" href="/contact/2">
                  Contact - UK
                </Link>
                <Link className="dropdown-item" href="/contact/3">
                  Contact - IRL
                </Link>
                <Link className="dropdown-item" href="/contact/4">
                  Contact - EG
                </Link>
                <Link className="dropdown-item" href="/sms">
                  SMS - Sudan
                </Link>
                <Link className="dropdown-item" href="/sms-global">
                  SMS - Global
                </Link>

                <Link className="dropdown-item" href="#">
                  Advertisements
                </Link>
              </div>
            </div>

            {/* 7: employees */}
            <button
              className="btn fs-6 btn--navbar ps-3 scale--3"
              type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="bi bi-person-workspace">
                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4Zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"></path>
                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.373 5.373 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2H2Z"></path>
              </svg>
              <Link className="stretched-link regulate--link" href="/employees">
                Employees
              </Link>
            </button>
          </div>
        </div>
        {/* end navbar */}
      </div>
    </div>
  ); // end return
} // end function
