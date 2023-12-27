import Image from 'next/image';
import React from 'react';

export default function loading() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 vw-100">
      <Image
        src="/assets/img/Logo/logo.png"
        width={180}
        height={180}
        className="of-contain"
      />
    </div>
  );
}
