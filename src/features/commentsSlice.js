import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (postId) => {
    try {
      const url = `https://www.reddit.com/comments/${postId}/.json`;
      console.log(url);
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (err) {
      return err;
    }
  }
);

const initialState = {
  comments: [],
  isLoading: false,
  error: "",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadComments.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loadComments.fulfilled, (state, action) => {
      console.log(action.payload);
      state.comments.push();
    });
    builder.addCase(loadComments.rejected, (state) => {
      state.error = "Error al cargar los comentarios";
    });
  },
});

//SELECTOR
export const selectComments = (state) => state.comments.comments;

//REDUCER
export default commentsSlice.reducer;
