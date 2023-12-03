import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "App",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (store, action) => {
      store.isMenuOpen = !store.isMenuOpen;
    },
  },
});

export const {toggleMenu} = appSlice.actions;
export default appSlice.reducer ;
