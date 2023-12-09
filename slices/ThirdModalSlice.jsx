'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editConditionModal: false,
};

const ThirdModalSlice = createSlice({
  name: 'ThirdModalSlice',
  initialState,
  reducers: {
    toggleEditConditionModal: (state, action) =>
      void (state.editConditionModal = action.payload),
  },
});

export const { toggleEditConditionModal } = ThirdModalSlice.actions;
export default ThirdModalSlice.reducer;
