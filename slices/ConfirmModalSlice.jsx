'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  targetId: null,
  targetURL: '',
  targetName: '',
};

const ConfirmModalSlice = createSlice({
  name: 'ConfirmModalSlice',
  initialState,
  reducers: {
    toggleConfirmModal: (state, action) => {
      state.status = action.payload.status;
      state.targetId = action.payload.targetId;
      state.targetURL = action.payload.targetURL;
      state.targetName = action.payload.targetName;
    },
  },
});

export const { toggleConfirmModal } = ConfirmModalSlice.actions;
export default ConfirmModalSlice.reducer;
