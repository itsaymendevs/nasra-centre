'use client';

import { toggleNewUnitModal } from '@/slices/FirstModalSlice';
import { useDispatch } from 'react-redux';
import Header from '../../../_essentials/Header';

// -------------------------------------------------------------------

import React from 'react';

export default function HeaderHolder() {
  const dispatch = useDispatch();

  return (
    <Header
      pageTitle={'Units'}
      leftTitle={'New Unit'}
      leftLink="#"
      leftHandleClick={() => dispatch(toggleNewUnitModal(true))}
    />
  );
} // end function
