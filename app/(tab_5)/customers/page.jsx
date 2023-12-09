import Wrapper from '../../_essentials/Wrapper';
import Header from '../../_essentials/Header';
import Export from '../../_essentials/Export';
import Content from './_components/Content';

export default function Customers() {
  return (
    <Wrapper>
      {/* main content */}
      <div className="col-9 content--col px-0" id="content--col">
        {/* header */}
        <Header
          pageTitle={'Customers'}
          leftTitle={'Orders'}
          leftIcon={'bi bi-arrow-up-left'}
          leftLink="/orders"
        />

        {/* page content */}
        <section id="content--main" className="d-block mt-5 content--main mx-4">
          {/* export wrap*/}
          <div id="export--wrap" className="mb-5">
            <div className="row g-0 align-items-end">
              {/* export */}
              <Export length={12} link="/customers" linkAr="/customers" />
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
