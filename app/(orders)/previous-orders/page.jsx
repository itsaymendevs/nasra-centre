import Wrapper from '../../_essentials/Wrapper';
import Header from '../../_essentials/Header';
import Export from '../../_essentials/Export';
import Content from './_components/Content';

export default function PreviousOrders() {
  return (
    <Wrapper>
      {/* main content */}
      <div className="col-9 content--col px-0" id="content--col">
        {/* header */}
        <Header
          pageTitle={'Previous Orders'}
          leftTitle={'Current Orders'}
          leftIcon={'bi bi-arrow-up-left'}
          leftLink="/orders"
        />

        {/* page content */}
        <section id="content--main" className="d-block mt-5 content--main mx-4">
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
