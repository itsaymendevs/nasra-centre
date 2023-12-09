'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  confirmModal: false,
};

const ConfirmModalSlice = createSlice({
  name: 'ConfirmModalSlice',
  initialState,
  reducers: {
    toggleConfirmModal: (state, action) =>
      void (state.confirmModal = action.payload),
  },
});

export const { toggleConfirmModal } = ConfirmModalSlice.actions;
export default ConfirmModalSlice.reducer;
