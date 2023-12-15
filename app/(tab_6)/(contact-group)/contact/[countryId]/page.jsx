import Wrapper from '../../../../_essentials/Wrapper';
import Header from '../../../../_essentials/Header';
import Content from './_components/Content';
import Link from 'next/link';

export default function Contact({ params }) {
  // 1: determine country
  var countryName = 'Sudan';
  if (params.countryId == 2) countryName = 'United Kingdom';
  else if (params.countryId == 3) countryName = 'Ireland';

  return (
    <Wrapper>
      {/* main content */}
      <div className="col-9 content--col px-0" id="content--col">
        {/* header */}
        <Header
          pageTitle={`Contact - ${countryName}`}
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
          <Content countryId={params.countryId} />
        </section>
      </div>
      {/* end main content */}
    </Wrapper>
  );
} // end function
