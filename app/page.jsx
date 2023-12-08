import React from 'react';
import LoginForm from './_components/LoginForm';
// ----------------------------------------------------------------------------------------------------

export default function Login() {
  return (
    <section
      data-aos="zoom-out"
      data-aos-duration="450"
      data-aos-delay="50"
      data-aos-once="true"
      id="section--body">
      <div
        className="container-fluid bg-cover bg--main px-0"
        style={{
          backgroundImage: 'url("assets/img/Covers/animated-bg-3.svg")',
        }}>
        <div className="row g-0 min-vh-100">
          <div
            className="col-12 align-self-center content--col px-0"
            id="content--col">
            <section id="content--main" className="d-block">
              {/* form */}
              <div>
                <LoginForm />
              </div>
              {/* end form */}
            </section>
          </div>
        </div>
      </div>
    </section>
  );
} // end function
