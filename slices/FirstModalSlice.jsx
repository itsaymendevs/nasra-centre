'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortProductModal: false,

  newCompanyModal: false,
  editCompanyModal: false,

  newMainCategoryModal: false,
  editMainCategoryModal: false,

  newSubCategoryModal: false,
  editSubCategoryModal: false,
  sortSubCategoryModal: false,

  newTypeModal: false,
  editTypeModal: false,
  sortTypeModal: false,

  newUnitModal: false,
  editUnitModal: false,
};

const FirstModalSlice = createSlice({
  name: 'FirstModalSlice',
  initialState,
  reducers: {
    toggleSortProductModal: (state, action) =>
      void (state.sortProductModal = action.payload),

    toggleNewCompanyModal: (state, action) =>
      void (state.newCompanyModal = action.payload),
    toggleEditCompanyModal: (state, action) =>
      void (state.editCompanyModal = action.payload),

    toggleNewMainCategoryModal: (state, action) =>
      void (state.newMainCategoryModal = action.payload),
    toggleEditMainCategoryModal: (state, action) =>
      void (state.editMainCategoryModal = action.payload),

    toggleNewSubCategoryModal: (state, action) =>
      void (state.newSubCategoryModal = action.payload),
    toggleEditSubCategoryModal: (state, action) =>
      void (state.editSubCategoryModal = action.payload),
    toggleSortSubCategoryModal: (state, action) =>
      void (state.sortSubCategoryModal = action.payload),

    toggleNewTypeModal: (state, action) =>
      void (state.newTypeModal = action.payload),
    toggleEditTypeModal: (state, action) =>
      void (state.editTypeModal = action.payload),
    toggleSortTypeModal: (state, action) =>
      void (state.sortTypeModal = action.payload),

    toggleNewUnitModal: (state, action) =>
      void (state.newUnitModal = action.payload),
    toggleEditUnitModal: (state, action) =>
      void (state.editUnitModal = action.payload),
  },
});

export const {
  toggleSortProductModal,
  toggleNewCompanyModal,
  toggleEditCompanyModal,
  toggleNewMainCategoryModal,
  toggleEditMainCategoryModal,
  toggleNewSubCategoryModal,
  toggleEditSubCategoryModal,
  toggleSortSubCategoryModal,
  toggleNewTypeModal,
  toggleEditTypeModal,
  toggleSortTypeModal,
  toggleNewUnitModal,
  toggleEditUnitModal,
} = FirstModalSlice.actions;
export default FirstModalSlice.reducer;
