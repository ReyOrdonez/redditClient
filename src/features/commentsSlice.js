import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
  "comments/loadComments",
  async (postId) => {
    try {
      const url = `https://www.reddit.com/comments/${postId}/.json?limit=20`;
      const response = await fetch(url);
      const json = await response.json();
      return {
        postId: postId,
        json: json,
      };
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
      state.isLoading = false;
      state.comments.push({
        postId: action.payload.postId,
        comments: action.payload.json[1].data.children.map((comment) => {
          return {
            author: comment.data.author,
            body: comment.data.body,
          };
        }),
      });
    });
    builder.addCase(loadComments.rejected, (state) => {
      state.error = loadComments.rejected;
    });
  },
});

//SELECTOR
export const selectAllComments = (state) => state.comments.comments;
export const selectCommentsByPost = createSelector(
  [selectAllComments, (state, postId) => postId],
  (allComments, postId) =>
    allComments.filter((commentList) => commentList.postId === postId)
);

//REDUCER
export default commentsSlice.reducer;
