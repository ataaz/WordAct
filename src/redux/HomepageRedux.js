import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getHomepage = createAsyncThunk(
  "pressreleaselisting/getHomepage",
  async ({ id }) => {
    const response = await axios.get(
      "http://myoffice.local/wp-json/wp/v2/pages/5?_embed"
    );
    const data = await response.data;
    return data;
  }
);

const HomepageSlice = createSlice({
  name: "Homepage",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getHomepage.pending]: (state, action) => {
      state.status = "loading";
    },
    [getHomepage.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getHomepage.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default HomepageSlice.reducer;