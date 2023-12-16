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
          className="d-flex align-items-center justify-content-center h-100 vw-100"
          style={{
            position: 'absolute',
            top: '0px',
            letterSpacing: '2.5px',
            left: '0px',
            backgroundColor: '#0000003b',
            zIndex: '200',
          }}>
          <h1>Loading ...</h1>
        </div>
      )}
    </>
  );
}
