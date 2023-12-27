import Wrapper from '../../../_essentials/Wrapper';
import Header from '../../../_essentials/Header';
import Content from './_components/Content';

export default function SingleOrder({ params }) {
  return (
    <Wrapper>
      {/* main content */}
      <div className="col-9 content--col px-0" id="content--col">
        {/* header */}
        {/* use useRouter to get previous page link and check if current of previous */}
        <Header
          pageTitle={'Order Details'}
          leftTitle={'Orders'}
          leftIcon={'bi bi-arrow-up-left'}
          leftLink="/orders"
        />

        {/* page content */}
        <section id="content--main" className="d-block mt-5 content--main mx-4">
          {/* -------------------------------------- */}
          {/* -------------------------------------- */}
          {/* -------------------------------------- */}

          {/* filters / rows */}
          <Content orderId={params.orderId} />
        </section>
      </div>
      {/* end main content */}
    </Wrapper>
  );
} // end function
