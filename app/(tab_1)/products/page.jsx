import Image from 'next/image';
import Wrapper from '../../_essentials/Wrapper';
import Header from '../../_essentials/Header';
import Export from '../../_essentials/Export';
import Content from './_components/Content';
import Link from 'next/link';

export default function Products() {
  return (
    <Wrapper>
      {/* main content */}
      <div className="col-9 content--col px-0" id="content--col">
        {/* header */}
        <Header
          pageTitle={'Products'}
          leftTitle={'New Product'}
          leftLink="/products/new"
        />

        {/* page content */}
        <section id="content--main" className="d-block mt-5 content--main mx-4">
          {/* export wrap / edit products*/}
          <div id="export--wrap" className="mb-5">
            <div className="row g-0 align-items-end">
              {/* export */}
              <Export length={6} link="/products" linkAr="/products" />

              {/* edit products */}
              <div className="col-6 text-end">
                <Link
                  className="btn btn--export active scale--3 px-4"
                  role="button"
                  href="/products/edit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-pencil-square me-2">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"></path>
                  </svg>
                  Edit Products
                </Link>
              </div>
              {/* end edit products */}
            </div>
          </div>
          {/* end export wrap */}

          {/* -------------------------------------- */}
          {/* -------------------------------------- */}
          {/* -------------------------------------- */}

          {/* filters / rows */}
          <Content />
        </section>
      </div>
      {/* end main content */}
    </Wrapper>
  );
} // end function
