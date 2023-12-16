'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const LoadingSlice = createSlice({
  name: 'LoadingSlice',
  initialState,
  reducers: {
    IsLoading: (state) => void (state.isLoading = true),
    IsNotLoading: (state) => void (state.isLoading = false),
  },
});

export const { IsLoading, IsNotLoading } = LoadingSlice.actions;
export default LoadingSlice.reducer;
