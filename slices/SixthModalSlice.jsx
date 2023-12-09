'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editParagraphModal: false,
  editConditionSDModal: false,
  editConditionUKModal: false,
  editConditionIRLModal: false,
};

const SixthModalSlice = createSlice({
  name: 'SixthModalSlice',
  initialState,
  reducers: {
    toggleEditParagraphModal: (state, action) =>
      void (state.editParagraphModal = action.payload),

    toggleEditConditionSDModal: (state, action) =>
      void (state.editConditionSDModal = action.payload),

    toggleEditConditionUKModal: (state, action) =>
      void (state.editConditionUKModal = action.payload),

    toggleEditConditionIRLModal: (state, action) =>
      void (state.editConditionIRLModal = action.payload),
  },
});

export const {
  toggleEditParagraphModal,
  toggleEditConditionSDModal,
  toggleEditConditionUKModal,
  toggleEditConditionIRLModal,
} = SixthModalSlice.actions;
export default SixthModalSlice.reducer;
