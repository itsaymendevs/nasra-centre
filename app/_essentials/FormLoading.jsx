'use client';

import React from 'react';
import { useSelector } from 'react-redux';

export default function FormLoading() {
  // 1: get slice + selector
  const { isLoading } = useSelector((state) => state.LoadingSlice);
  return (
    <>
      {isLoading && (
        <div
          className="d-flex align-items-center justify-content-center vh-100 vw-100"
          style={{
            position: 'fixed',
            top: '0px',
            letterSpacing: '2.5px',
            left: '0px',
            bottom: '0px',
            right: '0px',
            backgroundColor: '#8e8e8e82',
            zIndex: '1500',
          }}>
          <h3 className="fw-bold">Saving ...</h3>
        </div>
      )}
    </>
  );
}
