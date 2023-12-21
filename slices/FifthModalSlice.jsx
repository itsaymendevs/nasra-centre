'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userFilters: {
    search: '',
    countryId: null,
    stateId: null,
    deliveryAreaId: null,
  },
};

const FifthModalSlice = createSlice({
  name: 'FifthModalSlice',
  initialState,
  reducers: {
    updateUserFilters: (state, action) => {
      state.userFilters.search = action.payload.search;
      state.userFilters.countryId = action.payload.countryId;
      state.userFilters.stateId = action.payload.stateId;
      state.userFilters.deliveryAreaId = action.payload.deliveryAreaId;
    },
  },
});

export const { updateUserFilters } = FifthModalSlice.actions;
export default FifthModalSlice.reducer;
