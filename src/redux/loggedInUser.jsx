import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const loggedInUserSlice = createSlice({
  name: "loggedInUser",
  initialState: {
    loggedInUser: "",
  },
  reducers: {
    setloggedInUser: (state, { payload }) => {
      state.loggedInUser = payload.loggedInUser;
    },
  },
});

export const { setloggedInUser } = loggedInUserSlice.actions;

export default loggedInUserSlice.reducer;
