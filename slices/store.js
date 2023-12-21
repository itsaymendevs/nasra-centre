'use client';

import { configureStore } from '@reduxjs/toolkit';
import FirstModalSlice from './FirstModalSlice';
import SecModalSlice from './SecModalSlice';
import ThirdModalSlice from './ThirdModalSlice';
import FourthModalSlice from './FourthModalSlice';
import FifthModalSlice from './FifthModalSlice';
import ConfirmModalSlice from './ConfirmModalSlice';
import SixthModalSlice from './SixthModalSlice';
import LoadingSlice from './LoadingSlice';

export const store = configureStore({
  reducer: {
    FirstModalSlice,
    SecModalSlice,
    ThirdModalSlice,
    FourthModalSlice,
    FifthModalSlice,
    SixthModalSlice,
    ConfirmModalSlice,
    LoadingSlice,
  },
});
