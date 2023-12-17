'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editConditionModal: false,
  editConditionId: null,
};

const ThirdModalSlice = createSlice({
  name: 'ThirdModalSlice',
  initialState,
  reducers: {
    toggleEditConditionModal: (state, action) => {
      state.editConditionModal = action.payload.status;
      state.editConditionId = action.payload.id;
    },
  },
});

export const { toggleEditConditionModal } = ThirdModalSlice.actions;
export default ThirdModalSlice.reducer;
