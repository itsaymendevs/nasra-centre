'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  targetId: null,
};

const ConfirmModalSlice = createSlice({
  name: 'ConfirmModalSlice',
  initialState,
  reducers: {
    toggleConfirmModal: (state, action) => {
      state.status = action.payload.status;
      state.targetId = action.payload.targetId;
    },
  },
});

export const { toggleConfirmModal } = ConfirmModalSlice.actions;
export default ConfirmModalSlice.reducer;
