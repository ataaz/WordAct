import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBlogDetail = createAsyncThunk(
    "BlogDetail/getBlogDetail",
    async () => {
      const response = await axios.get(
        `http://myoffice.local/wp-json/wp/v2/posts/?_embed`
      );
      const data = await response.data;
      return data;
    }
  );

  const BlogDetailSlice = createSlice({
    name: "BlogDetail",
    initialState: {
      page: [],
      status: null,
    },
    extraReducers: {
      [getBlogDetail.pending]: (state, action) => {
        state.status = "loading";
      },
      [getBlogDetail.fulfilled]: (state, { payload }) => {
        state.page = payload;
        state.status = "success";
      },
      [getBlogDetail.rejected]: (state, action) => {
        state.status = "failed";
      },
    },
  });
  export default BlogDetailSlice.reducer;