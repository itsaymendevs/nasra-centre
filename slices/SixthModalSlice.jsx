'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  editParagraphModal: false,
  editParagraphId: null,

  editConditionModal: false,
  editConditionId: null,
};

const SixthModalSlice = createSlice({
  name: 'SixthModalSlice',
  initialState,
  reducers: {
    toggleEditParagraphModal: (state, action) => {
      state.editParagraphModal = action.payload.status;
      state.editParagraphId = action.payload.id;
    },

    toggleEditConditionModal: (state, action) => {
      state.editConditionModal = action.payload.status;
      state.editConditionId = action.payload.id;
    },
  },
});

export const {
  toggleEditParagraphModal,

  toggleEditConditionModal,
} = SixthModalSlice.actions;
export default SixthModalSlice.reducer;
