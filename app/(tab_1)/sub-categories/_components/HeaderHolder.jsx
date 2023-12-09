'use client';

import { toggleNewSubCategoryModal } from '@/slices/FirstModalSlice';
import { useDispatch } from 'react-redux';
import Header from '../../../_essentials/Header';

// -------------------------------------------------------------------

import React from 'react';

export default function HeaderHolder() {
  const dispatch = useDispatch();

  return (
    <Header
      pageTitle={'Sub Categories'}
      leftTitle={'New Category'}
      leftLink="#"
      leftHandleClick={() => dispatch(toggleNewSubCategoryModal(true))}
    />
  );
} // end function
