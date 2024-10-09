import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const searchData = createAsyncThunk(
  "search/searchTerm",
  async (term) => {
    const query = term.split(" ").join("%20");
    try {
      const url = `https://www.reddit.com/search.json?q=${query}`;
      const response = await fetch(url);
      const json = await response.json();
      return json;
    } catch (err) {
      return err;
    }
  }
);

const initialState = {
  results: [],
  loading: false,
  error: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(searchData.fulfilled, (state, action) => {
      state.loading = false;
      state.results = [];
      console.log(action.payload);
      action.payload.data.children.map((post) => {
        state.results.push({
          title: post.data.title,
          text: post.data.selftext,
          author: post.data.author,
          numComments: post.data.num_comments,
          score: post.data.score,
          image: post.data.thumbnail !== "self" ? post.data.thumbnail : false,
          /*WE NEED THIS DATA IF WE WANNA REQUEST THE POST'S DATA (comments)*/
          subReddit: post.data.subreddit,
          postId: post.data.id,
        });
        return "";
      });
    });
    builder.addCase(searchData.rejected, (state) => {
      state.error = "Error al hacer la solicitud al servidor";
    });
  },
});

//selectors
export const resultsSelector = (state) => state.search.results;
//reducer
export default searchSlice.reducer;
//actions
