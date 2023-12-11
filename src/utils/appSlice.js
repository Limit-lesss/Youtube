import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "App",
  initialState: {
    isMenuOpen: false,
    isShowSideBar: true,
    like: 0,
  },
  reducers: {
    toggleMenu: (store) => {
      store.isMenuOpen = !store.isMenuOpen;
    },
    showSidebar: (store, action) => {
      store.isShowSideBar = action.payload;
    },
    increaseLike: (store) => {
      store.like = store.like + 1;
    }
  },
});

export const { toggleMenu, showSidebar, increaseLike } = appSlice.actions;
export default appSlice.reducer;
