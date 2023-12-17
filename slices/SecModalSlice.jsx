'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editConditionModal: false,
  editConditionId: null,
};

const SecModalSlice = createSlice({
  name: 'SecModalSlice',
  initialState,
  reducers: {
    toggleEditConditionModal: (state, action) => {
      state.editConditionModal = action.payload.status;
      state.editConditionId = action.payload.id;
    },
  },
});

export const { toggleEditConditionModal } = SecModalSlice.actions;
export default SecModalSlice.reducer;
