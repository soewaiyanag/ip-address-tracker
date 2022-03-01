import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

function apiURL(ipaddress) {
  const corsPrefix = "https://guarded-gorge-60452.herokuapp.com/";
  return `${corsPrefix}https://api.ip2location.com/v2/?ip=${ipaddress}&key=SW9NI7ZYHS&package=WS12`;
}

const initialState = {
  status: "idle",
  data: {},
};

export const fetchData = createAsyncThunk(
  "data/fetchDataByIPAddress",
  async (IPAddress) => {
    const response = await fetch(apiURL(IPAddress));
    const data = await response.json();
    console.log(data);
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
      })
      .addCase(fetchData.rejected, (state) => {
        state.status = "idle";
      });
  },
});

export default dataSlice.reducer;
