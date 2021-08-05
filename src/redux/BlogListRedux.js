import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBloglisting = createAsyncThunk(
  "bloglisting/getBloglisting",
  async ({ id }) => {
    const response = await axios.get(
      "http://myoffice.local/wp-json/wp/v2/posts/?_embed"
    );
    const data = await response.data;
    return data;
  }
);

const BloglistingSlice = createSlice({
  name: "bloglisting",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getBloglisting.pending]: (state, action) => {
      state.status = "loading";
    },
    [getBloglisting.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getBloglisting.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default BloglistingSlice.reducer;