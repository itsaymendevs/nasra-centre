import Wrapper from '../../../_essentials/Wrapper';
import Header from '../../../_essentials/Header';
import Export from '../../../_essentials/Export';
import Content from './_components/Content';
import Link from 'next/link';

export default function Products() {
  return (
    <Wrapper>
      {/* main content */}
      <div className="col-9 content--col px-0" id="content--col">
        {/* header */}
        <Header
          pageTitle={'Edit Products'}
          leftTitle={'View Products'}
          leftIcon={'bi bi-arrow-up-left'}
          leftLink="/products"
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
