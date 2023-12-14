'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sortProductModal: false,

  // !done
  companyFilters: { search: '' },
  newCompanyModal: false,
  editCompanyModal: false,
  editCompanyId: null,

  // !done
  mainCategoryFilters: { search: '' },
  newMainCategoryModal: false,
  editMainCategoryModal: false,
  editMainCategoryId: null,

  // !done
  subCategoryFilters: { search: '', mainCategoryId: null },
  newSubCategoryModal: false,
  editSubCategoryModal: false,
  editSubCategoryId: null,
  sortSubCategoryModal: false,

  // !done
  typeFilters: { search: '', mainCategoryId: null, subCategoryId: null },
  newTypeModal: false,
  editTypeModal: false,
  editTypeId: null,
  sortTypeModal: false,

  unitFilters: { search: '' },
  newUnitModal: false,
  editUnitModal: false,
  editUnitId: null,
};

const FirstModalSlice = createSlice({
  name: 'FirstModalSlice',
  initialState,
  reducers: {
    toggleSortProductModal: (state, action) =>
      void (state.sortProductModal = action.payload),

    // ! done
    updateCompanyFilters: (state, action) =>
      void (state.companyFilters.search = action.payload),
    toggleNewCompanyModal: (state, action) =>
      void (state.newCompanyModal = action.payload),
    toggleEditCompanyModal: (state, action) => {
      state.editCompanyModal = action.payload.status;
      state.editCompanyId = action.payload.id;
    },

    // ! done
    updateMainCategoryFilters: (state, action) =>
      void (state.mainCategoryFilters.search = action.payload),
    toggleNewMainCategoryModal: (state, action) =>
      void (state.newMainCategoryModal = action.payload),
    toggleEditMainCategoryModal: (state, action) => {
      state.editMainCategoryModal = action.payload.status;
      state.editMainCategoryId = action.payload.id;
    },

    // ! done
    updateSubCategoryFilters: (state, action) => {
      state.subCategoryFilters.search = action.payload.search;
      state.subCategoryFilters.mainCategoryId = action.payload.mainCategoryId;
    },
    toggleNewSubCategoryModal: (state, action) =>
      void (state.newSubCategoryModal = action.payload),
    toggleEditSubCategoryModal: (state, action) => {
      state.editSubCategoryModal = action.payload.status;
      state.editSubCategoryId = action.payload.id;
    },
    toggleSortSubCategoryModal: (state, action) =>
      void (state.sortSubCategoryModal = action.payload),

    // ! done
    updateTypeFilters: (state, action) => {
      state.typeFilters.search = action.payload.search;
      state.typeFilters.mainCategoryId = action.payload.mainCategoryId;
      state.typeFilters.subCategoryId = action.payload.subCategoryId;
    },
    toggleNewTypeModal: (state, action) =>
      void (state.newTypeModal = action.payload),
    toggleEditTypeModal: (state, action) => {
      state.editTypeModal = action.payload.status;
      state.editTypeId = action.payload.id;
    },
    toggleSortTypeModal: (state, action) =>
      void (state.sortTypeModal = action.payload),

    updateUnitFilters: (state, action) =>
      void (state.unitFilters.search = action.payload),
    toggleNewUnitModal: (state, action) =>
      void (state.newUnitModal = action.payload),
    toggleEditUnitModal: (state, action) => {
      state.editUnitModal = action.payload.status;
      state.editUnitId = action.payload.id;
    },
  },
});

export const {
  toggleSortProductModal,

  // !done
  updateCompanyFilters,
  toggleNewCompanyModal,
  toggleEditCompanyModal,

  // !done
  updateMainCategoryFilters,
  toggleNewMainCategoryModal,
  toggleEditMainCategoryModal,

  // !done
  updateSubCategoryFilters,
  toggleNewSubCategoryModal,
  toggleEditSubCategoryModal,
  toggleSortSubCategoryModal,

  // !done
  updateTypeFilters,
  toggleNewTypeModal,
  toggleEditTypeModal,
  toggleSortTypeModal,

  updateUnitFilters,
  toggleNewUnitModal,
  toggleEditUnitModal,
} = FirstModalSlice.actions;
export default FirstModalSlice.reducer;
