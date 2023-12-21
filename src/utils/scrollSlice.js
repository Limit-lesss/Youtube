import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    scrollData: {
      scrollTop: 0,
      scrollLeft: 0,
    },
  },
  reducers: {
    scrollTo: (state, action) => {
      state.scrollData.scrollTop = action.payload.scrollTop;
      state.scrollData.scrollLeft = action.payload.scrollLeft;
    },
  },
});
export const { scrollTo } = scrollSlice.actions;
export default scrollSlice.reducer;
