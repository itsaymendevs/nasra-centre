'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orderFilters: {
    search: '',
    receivingOption: 'BOTH',
    countryId: null,
    stateId: null,
    deliveryAreaId: null,
    storeId: null,
    orderStatus: null,
    paymentStatus: null,
    sortType: 'NewestToOldest',
  },

  previousOrderFilters: {
    search: '',
    receivingOption: 'BOTH',
    countryId: null,
    stateId: null,
    deliveryAreaId: null,
    storeId: null,
    orderStatus: null,
    sortType: 'NewestToOldest',
    fromDate: '',
    untilDate: '',
    employeeId: null,
  },
};

const OrderSlice = createSlice({
  name: 'OrderSlice',
  initialState,
  reducers: {
    updateOrderFilters: (state, action) => {
      state.orderFilters.search = action.payload.search;
      state.orderFilters.receivingOption = action.payload.receivingOption;
      state.orderFilters.countryId = action.payload.countryId;
      state.orderFilters.stateId = action.payload.stateId;
      state.orderFilters.deliveryAreaId = action.payload.deliveryAreaId;
      state.orderFilters.storeId = action.payload.storeId;
      state.orderFilters.orderStatus = action.payload.orderStatus;
      state.orderFilters.paymentStatus = action.payload.paymentStatus;
      state.orderFilters.sortType = action.payload.sortType;
    },
    updatePreviousOrderFilters: (state, action) => {
      state.previousOrderFilters.search = action.payload.search;
      state.previousOrderFilters.receivingOption =
        action.payload.receivingOption;
      state.previousOrderFilters.countryId = action.payload.countryId;
      state.previousOrderFilters.stateId = action.payload.stateId;
      state.previousOrderFilters.deliveryAreaId = action.payload.deliveryAreaId;
      state.previousOrderFilters.storeId = action.payload.storeId;
      state.previousOrderFilters.orderStatus = action.payload.orderStatus;
      state.previousOrderFilters.sortType = action.payload.sortType;
      state.previousOrderFilters.fromDate = action.payload.fromDate;
      state.previousOrderFilters.untilDate = action.payload.untilDate;
      state.previousOrderFilters.employeeId = action.payload.employeeId;
    },
  },
});

export const { updateOrderFilters, updatePreviousOrderFilters } =
  OrderSlice.actions;
export default OrderSlice.reducer;
