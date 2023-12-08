import React from 'react';
import SideBar from './Sidebar';

// ----------------------------------------------------------------------------------------------------

export default function Wrapper({ children }) {
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
          backgroundImage: 'url("/assets/img/Covers/wave-haikei-1.svg")',
        }}>
        {/* sidebar / right column (children) */}
        <div className="row g-0 min-vh-100">
          <SideBar />
          {children}
        </div>
      </div>
    </section>
  ); // end return
} // end function