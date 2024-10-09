import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/searchSlice";
import commentsSlice from "../features/commentsSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice,
    comments: commentsSlice,
  },
});
