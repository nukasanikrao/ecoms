import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk("user/login", async () => {
  const response = await axios.post("http://localhost:3033/api");
  return response.data;
});

export const registerUser = createAsyncThunk("user/register", async () => {
  const response = await axios.post("http://localhost:3033/api");
  return response.data;
});

const userSlice = createSlice({
  name: "user",
  initialState: { usersList: [], user: {}, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "success";
        state.usersList = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(registerUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = "success";
        state.usersList = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectUserStatus = (state) => state.user.status;
export const selectUserList = (state) => state.user.user;
export const selectUserError = (state) => state.user.error;
export default userSlice.reducer;
