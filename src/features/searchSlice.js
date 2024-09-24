import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const searchData = createAsyncThunk("search/searchTerm", async (term) => {
  try {
    const url = `https://www.reddit.com/search.json?q=${term}`;
    const response = await fetch(url);
    const json = await response.json();
  } catch (err) {
    console.log(err);
  }
});

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
      console.log("pendiente");
    });
    builder.addCase(searchData.fulfilled, (state, action) => {
      console.log("hecho!!");
    });
    builder.addCase(searchData.rejected, (state) => {
      console.log("falló :C");
    });
  },
});

//selectors
export const resultsSelector = (state) => state.search.results;
//reducer
export default searchSlice.reducer;
//actions
