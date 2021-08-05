import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAboutpage = createAsyncThunk(
  "Aboutpage/getAboutpage",
  async ({ id }) => {
    const response = await axios.get(
      "http://myoffice.local/wp-json/wp/v2/pages/8?_embed"
    );
    const data = await response.data;
    return data;
  }
);

const AboutpageSlice = createSlice({
  name: "Aboutpage",
  initialState: {
    page: [],
    status: null,
  },
  extraReducers: {
    [getAboutpage.pending]: (state, action) => {
      state.status = "loading";
    },
    [getAboutpage.fulfilled]: (state, { payload }) => {
      state.page = payload;
      state.status = "success";
    },
    [getAboutpage.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});
export default AboutpageSlice.reducer;