'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  paymentFilters: { paymentType: null },
  editPaymentModal: false,
  editPaymentId: null,

  editConditionModal: false,
  editConditionId: null,
};

const SeventhModalSlice = createSlice({
  name: 'SeventhModalSlice',
  initialState,
  reducers: {
    toggleEditPaymentModal: (state, action) => {
      state.editPaymentModal = action.payload.status;
      state.editPaymentId = action.payload.id;
    },

    toggleEditConditionModal: (state, action) => {
      state.editConditionModal = action.payload.status;
      state.editConditionId = action.payload.id;
    },
  },
});

export const { toggleEditPaymentModal, toggleEditConditionModal } =
  SeventhModalSlice.actions;
export default SeventhModalSlice.reducer;
