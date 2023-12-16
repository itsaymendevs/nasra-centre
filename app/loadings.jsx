import React from 'react';

export default function loading() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
      <img
        src="/assets/img/Logo/logo.png"
        alt="Logo"
        className="of-contain"
        width={180}
        height={180}
      />
    </div>
  );
}
