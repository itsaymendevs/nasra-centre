import Wrapper from '../../../../../_essentials/Wrapper';
import Header from '../../../../../_essentials/Header';
import Content from './_components/Content';

export default function CustomerOrder() {
  return (
    <Wrapper>
      {/* main content */}
      <div className="col-9 content--col px-0" id="content--col">
        {/* header */}
        <Header
          pageTitle={'Order Details'}
          leftTitle={'Back'}
          leftIcon={'bi bi-arrow-up-left'}
          leftLink="/customers/1"
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
