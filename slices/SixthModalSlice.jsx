'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editParagraphModal: false,
};

const SixthModalSlice = createSlice({
  name: 'SixthModalSlice',
  initialState,
  reducers: {
    toggleEditParagraphModal: (state, action) =>
      void (state.editParagraphModal = action.payload),
  },
});

export const { toggleEditParagraphModal } = SixthModalSlice.actions;
export default SixthModalSlice.reducer;
