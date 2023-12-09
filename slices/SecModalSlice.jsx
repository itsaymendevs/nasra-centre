'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editConditionModal: false,
};

const SecModalSlice = createSlice({
  name: 'SecModalSlice',
  initialState,
  reducers: {
    toggleEditConditionModal: (state, action) =>
      void (state.editConditionModal = action.payload),
  },
});

export const { toggleEditConditionModal } = SecModalSlice.actions;
export default SecModalSlice.reducer;
