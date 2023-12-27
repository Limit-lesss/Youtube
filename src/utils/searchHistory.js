import { createSlice } from "@reduxjs/toolkit";

const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState: {
    history: [],
  },
  reducers: {
    addSearch: (state, action) => {
      state.history.push(action.payload);
    },
  },
});
export const { addSearch } = searchHistorySlice.actions;
export default searchHistorySlice.reducer;
