'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editEmployeeModal: false,
  editEmployeeId: null,
  resetEmployeeModal: false,
  resetEmployeeId: null,
};

const FourthModalSlice = createSlice({
  name: 'FourthModalSlice',
  initialState,
  reducers: {
    toggleEditEmployeeModal: (state, action) => {
      state.editEmployeeModal = action.payload.status;
      state.editEmployeeId = action.payload.id;
    },
    toggleResetEmployeeModal: (state, action) => {
      state.resetEmployeeModal = action.payload.status;
      state.resetEmployeeId = action.payload.id;
    },
  },
});

export const { toggleEditEmployeeModal, toggleResetEmployeeModal } =
  FourthModalSlice.actions;
export default FourthModalSlice.reducer;
