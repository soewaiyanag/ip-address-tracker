import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "idle",
  data: {},
};

export const fetchData = createAsyncThunk(
  "data/fetchDataByIPAddress",
  async (IPAddress) => {
    const response = await fetch(IPAddress);
    const data = await response.json();
    return data;
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
      });
  },
});

export default dataSlice.reducer;
