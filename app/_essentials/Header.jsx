import Link from 'next/link';
import React from 'react';
// --------------------------------------------------------------------------------

export default function Header({
  leftLink = '/',
  leftIcon = 'bi bi-plus-lg',
  leftTitle,
  leftHandleClick = '',
  pageTitle,
}) {
  // ------------------------- page --------------------------

  return (
    <section id="header--div" className="header--div w-100">
      {/* left button */}
      <Link
        className={`btn btn--outline-theme btn--header ${
          leftIcon == 'bi bi-plus-lg' ? 'scalemix--3' : 'scale--3'
        } px-4`}
        role="button"
        href={leftLink}
        onClick={leftHandleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
          className={`${leftIcon} me-2`}>
          {leftIcon == 'bi bi-plus-lg' ? (
            <path
              fillRule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"></path>
          ) : (
            <path
              fillRule="evenodd"
              d="M2 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1H3.707l10.147 10.146a.5.5 0 0 1-.708.708L3 3.707V8.5a.5.5 0 0 1-1 0v-6z"></path>
          )}
        </svg>
        {leftTitle}
      </Link>

      {/* page title */}
      <h2 className="mb-0">{pageTitle}</h2>

      {/* right button */}
      <Link className="btn btn--theme btn--header scale--3 px-4" href="/">
        Logout
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 16 16"
          className={'bi bi-arrow-up-right ms-2'}>
          <path
            fillRule="evenodd"
            d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
        </svg>
      </Link>
    </section>
  );
} // end function
