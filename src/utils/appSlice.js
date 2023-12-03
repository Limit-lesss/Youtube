import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "App",
  initialState: {
    isMenuOpen: false,
    isShowSideBar: true,
  },
  reducers: {
    toggleMenu: (store) => {
      store.isMenuOpen = !store.isMenuOpen;
    },
    showSidebar: (store, action) => {
      store.isShowSideBar = action.payload;
    },
  },
});

export const { toggleMenu, showSidebar } = appSlice.actions;
export default appSlice.reducer;
