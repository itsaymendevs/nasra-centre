'use client';

import { configureStore } from '@reduxjs/toolkit';
import FirstModalSlice from './FirstModalSlice';
import SecModalSlice from './SecModalSlice';
import ThirdModalSlice from './ThirdModalSlice';
import FourthModalSlice from './FourthModalSlice';

export const store = configureStore({
  reducer: {
    FirstModalSlice,
    SecModalSlice,
    ThirdModalSlice,
    FourthModalSlice,
  },
});
