import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: "",
};

export const fetchData = createAsyncThunk("fetchData", async () => {
  const response = await axios("https://northwind.vercel.app/api/orderssfsdfs");
  console.log("hello");
  return response.data;
});

export const getDataSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = "Data not found";
    });
  },
});

export default getDataSlice.reducer;
