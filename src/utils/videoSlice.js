import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: [],
    searchVideoList: [],
    nextPage: "",
    pageToken: "",
  },
  reducers: {
    addVideo: (state, action) => {
      state.videoList = [...state.videoList, ...action.payload];
    },
    addSearchVideo: (state, action) => {
      const video = [...state.searchVideoList, ...action.payload] ;
      state.searchVideoList = [...new Map(video.map(item =>
        [item["etag"], item])).values()];
    },
    addPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
    addNextPage: (state, action) => {
      state.nextPage = action.payload;
    },
  },
});
export const { addVideo, addPageToken, addNextPage, addSearchVideo } =
  videoSlice.actions;
export default videoSlice.reducer;
