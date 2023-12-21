import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    videoList: [],
    pageToken: "",
  },
  reducers: {
    addVideo: (state, action) => {
      // console.log("one");
      let video = [...state.videoList, ...action.payload];
      state.videoList = [
        ...new Map(video.map((item) => [item["id"], item])).values(),
      ];
      // console.log(state.videoList);
    },
    addPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
  },
});
export const { addVideo, addPageToken } = videoSlice.actions;
export default videoSlice.reducer;
