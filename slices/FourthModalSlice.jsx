'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editEmployeeModal: false,
  resetEmployeeModal: false,
};

const FourthModalSlice = createSlice({
  name: 'FourthModalSlice',
  initialState,
  reducers: {
    toggleEditEmployeeModal: (state, action) =>
      void (state.editEmployeeModal = action.payload),
    toggleResetEmployeeModal: (state, action) =>
      void (state.resetEmployeeModal = action.payload),
  },
});

export const { toggleEditEmployeeModal, toggleResetEmployeeModal } =
  FourthModalSlice.actions;
export default FourthModalSlice.reducer;
