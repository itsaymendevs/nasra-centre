'use client';

import { configureStore } from '@reduxjs/toolkit';
import FirstModalSlice from './FirstModalSlice';
import SecModalSlice from './SecModalSlice';
import ThirdModalSlice from './ThirdModalSlice';
import FourthModalSlice from './FourthModalSlice';
import FifthModalSlice from './FifthModalSlice';
import ConfirmModalSlice from './ConfirmModalSlice';
import SixthModalSlice from './SixthModalSlice';
import SeventhModalSlice from './SeventhModalSlice';
import LoadingSlice from './LoadingSlice';
import OrderSlice from './OrderSlice';

export const store = configureStore({
  reducer: {
    FirstModalSlice,
    SecModalSlice,
    ThirdModalSlice,
    FourthModalSlice,
    FifthModalSlice,
    SixthModalSlice,
    SeventhModalSlice,
    ConfirmModalSlice,
    LoadingSlice,
    OrderSlice,
  },
});
