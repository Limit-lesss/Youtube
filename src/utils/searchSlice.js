import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cachesResults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});
export const { cachesResults } = searchSlice.actions;
export default searchSlice.reducer;
