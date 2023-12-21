import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";
import scrollSlice from "./scrollSlice";
import videoSlice from "./videoSlice";

const store = configureStore({
  reducer: {
    App: appSlice,
    search: searchSlice,
    chat: chatSlice,
    scroll: scrollSlice,
    video: videoSlice,
  },
});

export default store;
